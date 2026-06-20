"use client";

import { useState } from "react";
import {
    Smartphone,
    Tv,
    Monitor,
    Laptop,
    Box,
    Triangle,
    ShieldAlert,
    Terminal,
    Download,
    Check,
    ChevronDown,
    LucideIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type AppInfo = {
    name: string;
    icon: string;
    store: string;
    active?: boolean;
    code?: string;
    isApple?: boolean;
    isDownload?: boolean;
    url?: string;
    codeOnly?: boolean;
};

type Step = {
    text: string;
};

type DeviceInfo = {
    id: string;
    name: string;
    icon: LucideIcon;
    title: string;
    subtitle: string;
    steps: Step[];
    apps: AppInfo[];
    brands?: string[];
};

export default function SetupGuide({ dictionary }: { dictionary: any }) {
    const devices: DeviceInfo[] = [
        {
            id: "android",
            name: dictionary.android.name,
            icon: Smartphone,
            title: dictionary.android.name,
            subtitle: dictionary.step_by_step,
            steps: [
                { text: dictionary.android.step1 },
                { text: dictionary.android.step2 },
                { text: dictionary.android.step3 }
            ],
            apps: [
                { name: "IBO Player", icon: "📺", store: "Play Store", active: true },
                { name: "4K Player VIP", code: "991507", icon: "🎬", store: "Play Store", active: true, codeOnly: true },
                { name: "TiviMate 8K", code: "1969685", icon: "📡", store: "Play Store", active: true, codeOnly: true }
            ]
        },
        {
            id: "firestick",
            name: dictionary.firestick.name,
            icon: Tv,
            title: dictionary.firestick.name,
            subtitle: dictionary.step_by_step,
            steps: [
                { text: dictionary.firestick.step1 },
                { text: dictionary.firestick.step2 },
                { text: dictionary.firestick.step3 }
            ],
            apps: [
                { name: "IBO Pro Player", code: "6402995", icon: "▶️", store: "Downloader" },
                { name: "IBO XPlayer", code: "7947185", icon: "📦", store: "Downloader" },
                { name: "4K Player VIP", code: "991507", icon: "🎬", store: "Downloader" },
                { name: "TiviMate 8K", code: "1969685", icon: "📡", store: "Downloader" }
            ]
        },
        {
            id: "smart-tv",
            name: dictionary.smart_tv.name,
            icon: Monitor,
            title: dictionary.smart_tv.title,
            subtitle: dictionary.smart_tv.subtitle,
            steps: [
                { text: dictionary.smart_tv.step1 },
                { text: dictionary.smart_tv.step2 },
                { text: dictionary.smart_tv.step3 }
            ],
            apps: [
                { name: "IBO Player", icon: "▶️", store: dictionary.search_on_tv }
            ],
            brands: [
                "Samsung", "LG webOS", "Sony", "Hisense", "Philips", "TCL",
                "Vizio", "Sharp", "Toshiba", "Android TV", "Google TV", dictionary.all_others
            ]
        },
        {
            id: "apple",
            name: dictionary.apple.name,
            icon: Laptop,
            title: dictionary.apple.name,
            subtitle: dictionary.step_by_step,
            steps: [
                { text: dictionary.apple.step1 },
                { text: dictionary.apple.step2 }
            ],
            apps: [
                { name: "BOB Player", icon: "📺", store: "App Store", isApple: true },
                { name: "IBO Player", icon: "▶️", store: "App Store", isApple: true }
            ]
        },
        {
            id: "windows",
            name: dictionary.windows.name,
            icon: Monitor,
            title: dictionary.windows.name,
            subtitle: dictionary.step_by_step,
            steps: [
                { text: dictionary.windows.step1 },
                { text: dictionary.windows.step2 }
            ],
            apps: [
                { name: "IBO Classic", url: "https://ibodesk.com/iboplayerwindows.zip", icon: "▶️", store: dictionary.download, isDownload: true },
                { name: "IBO STB", url: "https://ibodesk.com/ibostbwindows.zip", icon: "📦", store: dictionary.download, isDownload: true }
            ]
        },
        {
            id: "macos",
            name: dictionary.macos.name,
            icon: Laptop,
            title: dictionary.macos.name,
            subtitle: dictionary.step_by_step,
            steps: [
                { text: dictionary.macos.step1 },
                { text: dictionary.macos.step2 }
            ],
            apps: [
                { name: "BOB Player", icon: "📺", store: "App Store", isApple: true },
                { name: "IBO Player", icon: "▶️", store: "App Store", isApple: true }
            ]
        },
        {
            id: "linux",
            name: dictionary.linux.name,
            icon: Terminal,
            title: dictionary.linux.name,
            subtitle: dictionary.step_by_step,
            steps: [
                { text: dictionary.linux.step1 }
            ],
            apps: [
                { name: "VLC Media Player", icon: "🟧", store: "Terminal" },
                { name: "Hypnotix", icon: "📺", store: "Terminal" }
            ]
        },
        {
            id: "mag",
            name: dictionary.mag.name,
            icon: Box,
            title: dictionary.mag.name,
            subtitle: dictionary.step_by_step,
            steps: [
                { text: dictionary.mag.step1 },
                { text: dictionary.mag.step2 }
            ],
            apps: []
        },
        {
            id: "formuler",
            name: dictionary.formuler.name,
            icon: Triangle,
            title: dictionary.formuler.name,
            subtitle: dictionary.step_by_step,
            steps: [
                { text: dictionary.formuler.step1 },
                { text: dictionary.formuler.step2 }
            ],
            apps: []
        }
    ];

    const [activeDevice, setActiveDevice] = useState(devices[0].id);
    const activeContent = devices.find(d => d.id === activeDevice);

    // Toggle for mobile accordion — tapping the same device closes it
    const handleDeviceClick = (deviceId: string) => {
        setActiveDevice(deviceId);
    };

    const handleMobileDeviceClick = (deviceId: string) => {
        setActiveDevice(prev => prev === deviceId ? "" : deviceId);
    };

    // Shared content renderer for both mobile accordion and desktop panel
    function DeviceContent({ device }: { device: DeviceInfo }) {
        const deviceId = device.id;

        return (
            <div className="p-6 md:p-8 lg:p-12">
                {/* Header — hidden on mobile accordion since the button already shows the name */}
                <div className="hidden lg:flex items-center gap-6 mb-12">
                    <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-primary to-accent-bronze flex items-center justify-center text-black shadow-xl shadow-primary/20">
                        <device.icon size={32} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-1 italic">
                            {device.title}
                        </h2>
                        <p className="text-primary text-[10px] font-black tracking-[0.2em] uppercase bg-primary/10 px-3 py-1 rounded border border-primary/20 inline-block">
                            {device.subtitle}
                        </p>
                    </div>
                </div>

                {/* Steps */}
                <div className="space-y-6 lg:space-y-8 mb-8 lg:mb-10">
                    {device.steps.map((step, index) => {
                        if (deviceId === 'windows' && index === 1) return null;
                        if (deviceId === 'smart-tv' && index === 2) return null;

                        return (
                            <div key={index} className="flex gap-4 lg:gap-6">
                                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-black shrink-0 mt-1 shadow-[0_0_20px_rgba(176,141,62,0.1)] text-xs lg:text-sm italic">
                                    {index + 1}
                                </div>
                                <div className="text-gray-200 font-medium leading-relaxed pt-1 lg:pt-2 text-[14px] lg:text-[15px]">
                                    {step.text}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Windows apps */}
                {deviceId === 'windows' && device.apps.length > 0 && (
                    <div className="mb-8 lg:mb-10 lg:pl-14">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                            {device.apps.map((app, index) => (
                                <div key={index} className="bg-[#121217] border border-white/5 rounded-2xl p-4 lg:p-6 flex flex-col items-center text-center hover:border-primary/20 transition-all group">
                                    <div className="text-[36px] lg:text-[50px] mb-3 lg:mb-4 drop-shadow-xl filter grayscale group-hover:grayscale-0 transition-all duration-300">{app.icon}</div>
                                    <h4 className="text-white font-black text-[10px] lg:text-xs mb-3 lg:mb-5 uppercase tracking-widest">{app.name}</h4>
                                    <a href={app.url} className="w-full bg-primary hover:bg-accent-bronze text-black font-black py-3 lg:py-4 px-3 lg:px-4 rounded-xl flex items-center justify-center gap-2 transition-all text-[9px] lg:text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20">
                                        <Download size={14} />
                                        {app.store}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Smart TV apps */}
                {deviceId === 'smart-tv' && device.apps.length > 0 && (
                    <div className="mb-8 lg:mb-10 lg:pl-14">
                        <div className="flex flex-wrap gap-3 lg:gap-4">
                            {device.apps.map((app, index) => (
                                <div key={index} className="w-[140px] lg:w-[180px] bg-[#121217] border border-white/5 rounded-2xl p-4 lg:p-6 flex flex-col items-center text-center hover:border-primary/20 transition-all">
                                    <div className="text-[36px] lg:text-[50px] mb-3 lg:mb-4">{app.icon}</div>
                                    <h4 className="text-white font-black text-xs lg:text-sm mb-3 lg:mb-4 uppercase">{app.name}</h4>
                                    <button className="w-full bg-[#2A2A35] text-gray-300 font-bold py-2 lg:py-2.5 px-3 lg:px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-[10px] lg:text-[11px] uppercase tracking-wider">
                                        {app.store}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Smart TV step 3 */}
                {deviceId === 'smart-tv' && device.steps[2] && (
                    <div className="flex gap-4 lg:gap-6 mb-8 lg:mb-10 font-medium">
                        <div className="w-8 h-8 rounded-full bg-[#2A2000] border border-[#B08D3E]/30 flex items-center justify-center text-[#B08D3E] font-bold shrink-0 mt-1 shadow-[0_0_15px_rgba(176,141,62,0.1)] text-sm">
                            3
                        </div>
                        <div className="text-gray-300 leading-relaxed pt-[6px] text-[14px] lg:text-[15px]">
                            {device.steps[2].text}
                        </div>
                    </div>
                )}

                {/* Windows step 2 */}
                {deviceId === 'windows' && device.steps[1] && (
                    <div className="flex gap-4 lg:gap-6 mb-8 lg:mb-10 font-medium">
                        <div className="w-8 h-8 rounded-full bg-[#2A2000] border border-[#B08D3E]/30 flex items-center justify-center text-[#B08D3E] font-bold shrink-0 mt-1 shadow-[0_0_15px_rgba(176,141,62,0.1)] text-sm">
                            2
                        </div>
                        <div className="text-gray-300 leading-relaxed pt-[6px] text-[14px] lg:text-[15px]">
                            {device.steps[1].text}
                        </div>
                    </div>
                )}

                {/* Other device apps */}
                {deviceId !== 'windows' && deviceId !== 'smart-tv' && device.apps.length > 0 && (
                    <div className="lg:pl-14 mb-8 lg:mb-10">
                        {deviceId === 'firestick' ? (
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                                {device.apps.map((app, index) => (
                                    <div key={index} className="bg-[#121217] border border-white/5 rounded-2xl flex flex-col hover:border-primary/20 transition-all overflow-hidden group">
                                        <div className="p-4 lg:p-6 flex flex-col items-center flex-1">
                                            <div className="text-[36px] lg:text-[50px] mb-3 lg:mb-4">{app.icon}</div>
                                            <h4 className="text-white font-black text-[10px] lg:text-sm uppercase">{app.name}</h4>
                                            <p className="text-[9px] lg:text-[10px] text-gray-300 font-bold uppercase tracking-widest mt-1 lg:mt-2 mb-3 lg:mb-4">{dictionary.downloader_code}</p>
                                        </div>
                                        <div className="bg-[#2A2000]/30 border-t border-[#B08D3E]/20 py-3 lg:py-4 px-3 lg:px-4 text-center">
                                            <span className="text-[#B08D3E] font-black text-base lg:text-xl tracking-widest drop-shadow-[0_0_8px_rgba(176,141,62,0.4)]">{app.code}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : deviceId === 'apple' || deviceId === 'macos' ? (
                            <div className="flex flex-wrap gap-3 lg:gap-4">
                                {device.apps.map((app, index) => (
                                    <div key={index} className="w-[140px] lg:w-[180px] bg-[#121217] border border-white/5 rounded-2xl p-4 lg:p-6 flex flex-col items-center text-center hover:border-primary/20 transition-all group">
                                        <div className="text-[36px] lg:text-[50px] mb-3 lg:mb-4">{app.icon}</div>
                                        <h4 className="text-white font-black text-xs lg:text-sm mb-3 lg:mb-5 uppercase">{app.name}</h4>
                                        <button className="w-full bg-[#8394A8] hover:bg-[#6b7b8d] text-white font-bold py-2 lg:py-2.5 px-3 lg:px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-[10px] lg:text-xs">
                                            🍎
                                            App Store
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                                {device.apps.map((app, index) => (
                                    <div key={index} className="bg-[#121217] border border-white/5 rounded-2xl p-4 lg:p-6 flex flex-col items-center text-center hover:border-primary/20 transition-colors group">
                                        <div className="text-3xl lg:text-4xl mb-3 lg:mb-4">{app.icon}</div>
                                        <h4 className="text-white font-bold text-sm mb-2 lg:mb-3">{app.name}</h4>
                                        {app.code && (
                                            <div className="bg-[#2A2000]/50 border border-[#B08D3E]/30 rounded-xl py-2 px-3 lg:px-4 mb-2 lg:mb-3 w-full text-center">
                                                <span className="text-[9px] lg:text-[10px] text-gray-300 font-bold uppercase tracking-widest block">{dictionary.downloader_code}</span>
                                                <span className="text-[#B08D3E] font-black text-base lg:text-xl tracking-widest drop-shadow-[0_0_8px_rgba(176,141,62,0.4)]">{app.code}</span>
                                            </div>
                                        )}
                                        {!app.codeOnly && (
                                        <button className={`w-full font-black py-3 lg:py-4 px-3 lg:px-4 rounded-xl flex items-center justify-center gap-2 transition-all text-[9px] lg:text-[10px] uppercase tracking-widest ${app.active
                                            ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                                            : "bg-primary text-black shadow-lg shadow-primary/20"
                                            }`}>
                                            {app.store}
                                        </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* MAC address banner */}
                <div className="bg-primary/5 border border-primary/20 rounded-2xl lg:rounded-[2rem] p-5 lg:p-8 flex items-start gap-4 lg:gap-6 mb-6 lg:mb-8 group hover:bg-primary/10 transition-colors">
                    <div className="mt-1 shrink-0 text-primary bg-primary/10 p-2 lg:p-3 rounded-xl lg:rounded-2xl border border-primary/20 shadow-lg shadow-primary/5">
                        <Smartphone size={20} className="lg:hidden" />
                        <Smartphone size={24} className="hidden lg:block" />
                    </div>
                    <p className="text-[13px] lg:text-[15px] text-gray-200 font-medium leading-relaxed">
                        {dictionary.mac_address_banner}
                    </p>
                </div>

                {/* Smart TV brands */}
                {deviceId === 'smart-tv' && (
                    <div className="flex flex-wrap gap-2 lg:gap-3 mt-6 lg:mt-8">
                        {device.brands?.map((brand, i) => (
                            <div key={i} className={`flex flex-col items-center justify-center border rounded-xl py-2 lg:py-3 px-2 w-[90px] lg:w-[120px] transition-all
                                ${brand === '& All Others'
                                    ? "bg-[#25181A] border-[#E11D48]/30"
                                    : "bg-[#121217] border-white/5 hover:border-white/10"
                                }`}
                            >
                                {brand === '& All Others' ? (
                                    <div className="text-[#E11D48] mb-1">⚡</div>
                                ) : (
                                    <Check size={14} className="text-[#10B981] mb-1 lg:hidden" />
                                )}
                                {brand !== '& All Others' && (
                                    <Check size={16} className="text-[#10B981] mb-1 hidden lg:block" />
                                )}
                                <span className={`text-[10px] lg:text-[11px] font-bold text-center ${brand === '& All Others' ? 'text-[#E11D48]' : 'text-gray-200'}`}>
                                    {brand}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <section className="min-h-screen pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-bronze/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10 w-full">
                <div className="text-center mb-12 lg:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px] mb-6 bg-primary/10 px-6 py-2 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(176,141,62,0.1)]"
                    >
                        <ShieldAlert size={14} />
                        {dictionary.assistance_badge}
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-4 text-white uppercase italic">
                        {dictionary.title_line1} <span className="text-gradient-premium">{dictionary.title_line2}</span>
                    </h1>
                    <p className="text-gray-200 text-base lg:text-lg font-medium">
                        {dictionary.subtext}
                    </p>
                </div>

                {/* ========== MOBILE: Accordion Layout ========== */}
                <div className="lg:hidden flex flex-col gap-3">
                    {devices.map((device) => {
                        const isActive = activeDevice === device.id;
                        const Icon = device.icon;

                        return (
                            <div key={device.id} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isActive
                                ? "bg-[#0A0A0F] border-primary/30 shadow-[0_0_30px_rgba(176,141,62,0.08)]"
                                : "bg-transparent border-white/5"
                            }`}>
                                <button
                                    onClick={() => handleMobileDeviceClick(device.id)}
                                    className="flex items-center gap-4 w-full px-5 py-4 text-left"
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isActive
                                        ? "bg-primary text-black shadow-lg shadow-primary/30"
                                        : "bg-[#111115] border border-white/5 text-gray-300"
                                    }`}>
                                        <Icon size={18} />
                                    </div>
                                    <span className={`font-black text-xs flex-1 ${isActive ? "text-white" : "text-gray-300"} uppercase tracking-widest`}>
                                        {device.name}
                                    </span>
                                    <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${isActive ? "rotate-180 text-primary" : ""}`} />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="border-t border-white/5">
                                                <DeviceContent device={device} />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* ========== DESKTOP: Sidebar + Panel Layout ========== */}
                <div className="hidden lg:flex flex-row gap-8">
                    <div className="w-[320px] shrink-0">
                        <h3 className="text-primary font-bold text-sm tracking-widest mb-6 px-2 flex items-center gap-2 uppercase">
                            <span className="text-primary">|</span>
                            {dictionary.select_device}
                        </h3>

                        <div className="flex flex-col gap-3">
                            {devices.map((device) => {
                                const isActive = activeDevice === device.id;
                                const Icon = device.icon;

                                return (
                                    <button
                                        key={device.id}
                                        onClick={() => handleDeviceClick(device.id)}
                                        className={`flex items-center gap-4 px-5 py-[18px] rounded-2xl transition-all duration-500 text-left w-full border ${isActive
                                            ? "bg-[#1A1A22] border-primary shadow-[0_0_25px_rgba(176,141,62,0.1)]"
                                            : "bg-transparent border-white/5 hover:border-white/10 hover:bg-[#0A0A0F]"
                                            }`}
                                    >
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${isActive
                                            ? "bg-primary text-black shadow-lg shadow-primary/30"
                                            : "bg-[#111115] border border-white/5 text-gray-300 group-hover:text-gray-300"
                                            }`}>
                                            <Icon size={20} />
                                        </div>
                                        <span className={`font-black text-xs ${isActive ? "text-white" : "text-gray-300"} uppercase tracking-widest`}>
                                            {device.name}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeDevice}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="bg-[#0A0A0F] border border-white/5 rounded-[2.5rem] overflow-hidden relative shadow-2xl"
                            >
                                {activeContent && <DeviceContent device={activeContent} />}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";

const regions = [
    { id: "europe", name: "Europe", icon: "🇪🇺" },
    { id: "middle-east", name: "Middle East", icon: "🕌" },
    { id: "asia", name: "Asia", icon: "🌏" },
    { id: "latin-america", name: "Latin America", icon: "🌎" },
    { id: "north-america", name: "North America", icon: "🇺🇸" },
    { id: "africa", name: "Africa", icon: "🌍" },
    { id: "oceania", name: "Oceania", icon: "🇦🇺" },
];

const countriesData = {
    "europe": [
        { name: "Albania", flag: "🇦🇱" }, { name: "Andorra", flag: "🇦🇩" }, { name: "Austria", flag: "🇦🇹" },
        { name: "Belarus", flag: "🇧🇾" }, { name: "Belgium", flag: "🇧🇪" }, { name: "Bosnia and Herzegovina", flag: "🇧🇦" },
        { name: "Bulgaria", flag: "🇧🇬" }, { name: "Croatia", flag: "🇭🇷" }, { name: "Cyprus", flag: "🇨🇾" },
        { name: "Czechia", flag: "🇨🇿" }, { name: "Denmark", flag: "🇩🇰" }, { name: "Estonia", flag: "🇪🇪" },
        { name: "Finland", flag: "🇫🇮" }, { name: "France", flag: "🇫🇷" }, { name: "Germany", flag: "🇩🇪" },
        { name: "Greece", flag: "🇬🇷" }, { name: "Vatican City", flag: "🇻🇦" }, { name: "Hungary", flag: "🇭🇺" },
        { name: "Iceland", flag: "🇮🇸" }, { name: "Ireland", flag: "🇮🇪" }, { name: "Italy", flag: "🇮🇹" },
        { name: "Latvia", flag: "🇱🇻" }, { name: "Liechtenstein", flag: "🇱🇮" }, { name: "Lithuania", flag: "🇱🇹" },
        { name: "Luxembourg", flag: "🇱🇺" }, { name: "Malta", flag: "🇲🇹" }, { name: "Moldova", flag: "🇲🇩" },
        { name: "Monaco", flag: "🇲🇨" }, { name: "Montenegro", flag: "🇲🇪" }, { name: "Netherlands", flag: "🇳🇱" },
        { name: "North Macedonia", flag: "🇲🇰" }, { name: "Norway", flag: "🇳🇴" }, { name: "Poland", flag: "🇵🇱" },
        { name: "Portugal", flag: "🇵🇹" }, { name: "Romania", flag: "🇷🇴" }, { name: "Russia", flag: "🇷🇺" },
        { name: "San Marino", flag: "🇸🇲" }, { name: "Serbia", flag: "🇷🇸" }, { name: "Slovakia", flag: "🇸🇰" },
        { name: "Slovenia", flag: "🇸🇮" }, { name: "Spain", flag: "🇪🇸" }, { name: "Sweden", flag: "🇸🇪" },
        { name: "Switzerland", flag: "🇨🇭" }, { name: "Ukraine", flag: "🇺🇦" }, { name: "United Kingdom", flag: "🇬🇧" }
    ],
    "middle-east": [
        { name: "Bahrain", flag: "🇧🇭" }, { name: "Iran", flag: "🇮🇷" }, { name: "Iraq", flag: "🇮🇶" },
        { name: "Jordan", flag: "🇯🇴" }, { name: "Kuwait", flag: "🇰🇼" }, { name: "Lebanon", flag: "🇱🇧" },
        { name: "Oman", flag: "🇴🇲" }, { name: "Qatar", flag: "🇶🇦" }, { name: "Saudi Arabia", flag: "🇸🇦" },
        { name: "Syria", flag: "🇸🇾" }, { name: "UAE", flag: "🇦🇪" }, { name: "Yemen", flag: "🇾🇪" }
    ],
    "asia": [
        { name: "Afghanistan", flag: "🇦🇫" }, { name: "Armenia", flag: "🇦🇲" }, { name: "Azerbaijan", flag: "🇦🇿" },
        { name: "Bangladesh", flag: "🇧🇩" }, { name: "Bhutan", flag: "🇧🇹" }, { name: "Brunei", flag: "🇧🇳" },
        { name: "Cambodia", flag: "🇰🇭" }, { name: "China", flag: "🇨🇳" }, { name: "Georgia", flag: "🇬🇪" },
        { name: "Hong Kong", flag: "🇭🇰" }, { name: "India", flag: "🇮🇳" }, { name: "Indonesia", flag: "🇮🇩" },
        { name: "Japan", flag: "🇯🇵" }, { name: "Kazakhstan", flag: "🇰🇿" }, { name: "Kyrgyzstan", flag: "🇰🇬" },
        { name: "Laos", flag: "🇱🇦" }, { name: "Macau", flag: "🇲🇴" }, { name: "Malaysia", flag: "🇲🇾" },
        { name: "Maldives", flag: "🇲🇻" }, { name: "Mongolia", flag: "🇲🇳" }, { name: "Myanmar", flag: "🇲🇲" },
        { name: "Nepal", flag: "🇳🇵" }, { name: "Pakistan", flag: "🇵🇰" }, { name: "Philippines", flag: "🇵🇭" },
        { name: "Singapore", flag: "🇸🇬" }, { name: "South Korea", flag: "🇰🇷" }, { name: "Sri Lanka", flag: "🇱🇰" },
        { name: "Tajikistan", flag: "🇹🇯" }, { name: "Thailand", flag: "🇹🇭" }, { name: "Turkey", flag: "🇹🇷" },
        { name: "Turkmenistan", flag: "🇹🇲" }, { name: "Uzbekistan", flag: "🇺🇿" }, { name: "Vietnam", flag: "🇻🇳" }
    ],
    "latin-america": [
        { name: "Argentina", flag: "🇦🇷" }, { name: "Bolivia", flag: "🇧🇴" }, { name: "Brazil", flag: "🇧🇷" },
        { name: "Chile", flag: "🇨🇱" }, { name: "Colombia", flag: "🇨🇴" }, { name: "Costa Rica", flag: "🇨🇷" },
        { name: "Cuba", flag: "🇨🇺" }, { name: "Dominican Republic", flag: "🇩🇴" }, { name: "Ecuador", flag: "🇪🇨" },
        { name: "El Salvador", flag: "🇸🇻" }, { name: "Guatemala", flag: "🇬🇹" }, { name: "Honduras", flag: "🇭🇳" },
        { name: "Mexico", flag: "🇲🇽" }, { name: "Nicaragua", flag: "🇳🇮" }, { name: "Panama", flag: "🇵🇦" },
        { name: "Paraguay", flag: "🇵🇾" }, { name: "Peru", flag: "🇵🇪" }, { name: "Puerto Rico", flag: "🇵🇷" },
        { name: "Uruguay", flag: "🇺🇾" }, { name: "Venezuela", flag: "🇻🇪" }
    ],
    "north-america": [
        { name: "Bahamas", flag: "🇧🇸" }, { name: "Canada", flag: "🇨🇦" }, { name: "Jamaica", flag: "🇯🇲" },
        { name: "Trinidad & Tobago", flag: "🇹🇹" }, { name: "United States", flag: "🇺🇸" }
    ],
    "africa": [
        { name: "Algeria", flag: "🇩🇿" }, { name: "Angola", flag: "🇦🇴" }, { name: "Benin", flag: "🇧🇯" },
        { name: "Botswana", flag: "🇧🇼" }, { name: "Burkina Faso", flag: "🇧🇫" }, { name: "Burundi", flag: "🇧🇮" },
        { name: "Cameroon", flag: "🇨🇲" }, { name: "Central African Republic", flag: "🇨🇫" }, { name: "Chad", flag: "🇹🇩" },
        { name: "Comoros", flag: "🇰🇲" }, { name: "Congo - Brazzaville", flag: "🇨🇬" }, { name: "Congo - Kinshasa", flag: "🇨🇩" },
        { name: "Djibouti", flag: "🇩🇯" }, { name: "Egypt", flag: "🇪🇬" }, { name: "Equatorial Guinea", flag: "🇬🇶" },
        { name: "Eritrea", flag: "🇪🇷" }, { name: "Eswatini", flag: "🇸🇿" }, { name: "Ethiopia", flag: "🇪🇹" },
        { name: "Gabon", flag: "🇬🇦" }, { name: "Gambia", flag: "🇬🇲" }, { name: "Ghana", flag: "🇬🇭" },
        { name: "Guinea", flag: "🇬🇳" }, { name: "Guinea-Bissau", flag: "🇬🇼" }, { name: "Kenya", flag: "🇰🇪" },
        { name: "Lesotho", flag: "🇱🇸" }, { name: "Liberia", flag: "🇱🇷" }, { name: "Libya", flag: "🇱🇾" },
        { name: "Madagascar", flag: "🇲🇬" }, { name: "Malawi", flag: "🇲🇼" }, { name: "Mali", flag: "🇲🇱" },
        { name: "Mauritania", flag: "🇲🇷" }, { name: "Mauritius", flag: "🇲🇺" }, { name: "Morocco", flag: "🇲🇦" },
        { name: "Mozambique", flag: "🇲🇿" }, { name: "Namibia", flag: "🇳🇦" }, { name: "Niger", flag: "🇳🇪" },
        { name: "Nigeria", flag: "🇳🇬" }, { name: "Rwanda", flag: "🇷🇼" }, { name: "Senegal", flag: "🇸🇳" },
        { name: "Seychelles", flag: "🇸🇨" }, { name: "Sierra Leone", flag: "🇸🇱" }, { name: "Somalia", flag: "🇸🇴" },
        { name: "South Africa", flag: "🇿🇦" }, { name: "South Sudan", flag: "🇸🇸" }, { name: "Sudan", flag: "🇸🇩" },
        { name: "Tanzania", flag: "🇹🇿" }, { name: "Togo", flag: "🇹🇬" }, { name: "Tunisia", flag: "🇹🇳" },
        { name: "Uganda", flag: "🇺🇬" }, { name: "Zambia", flag: "🇿🇲" }, { name: "Zimbabwe", flag: "🇿🇼" }
    ],
    "oceania": [
        { name: "Australia", flag: "🇦🇺" }, { name: "Fiji", flag: "🇫🇯" }, { name: "New Zealand", flag: "🇳🇿" },
        { name: "Papua New Guinea", flag: "🇵🇬" }, { name: "Samoa", flag: "🇼🇸" }, { name: "Tonga", flag: "🇹🇴" }
    ]
};

export default function ChannelsList({ lang, dictionary, pricingDict }: { 
    lang: string; 
    dictionary: any; 
    pricingDict: any;
}) {
    const [activeRegion, setActiveRegion] = useState("europe");

    const stats = [
        { label: dictionary.stat_live, value: "30,000+", color: "from-orange-400 to-primary" },
        { label: dictionary.stat_vod, value: "175,000+", color: "from-purple-400 to-fuchsia-500" },
        { label: dictionary.stat_countries, value: "100+", color: "from-blue-400 to-cyan-500" },
        { label: dictionary.stat_uptime, value: "99.9%", color: "from-green-400 to-emerald-500" },
    ];

    return (
        <div className="pt-24 min-h-screen bg-[#050505] pb-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 pt-12 pb-20 relative z-10">
                <div className="flex flex-col items-center mb-20 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                        <span className="text-gray-400 font-black text-[10px] md:text-xs tracking-[0.4em] uppercase">{dictionary.badge}</span>
                        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    </div>

                    <h1 className="text-4xl md:text-8xl font-black text-white leading-tight mb-6 uppercase italic">
                        {dictionary.title_part1} <span className="text-gradient-premium">{dictionary.title_part2}</span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-2xl max-w-3xl font-medium">
                        {dictionary.subtext}
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-12">
                    {regions.map((region) => (
                        <button
                            key={region.id}
                            onClick={() => setActiveRegion(region.id)}
                            className={`group relative flex items-center gap-3 px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-500 ${activeRegion === region.id
                                ? "bg-gradient-to-r from-orange-400 to-primary text-black shadow-[0_0_30px_rgba(176,141,62,0.3)] scale-105"
                                : "bg-[#111115] text-gray-400 border border-white/5 hover:border-white/20"
                                }`}
                        >
                            <span className="text-xl">{region.icon}</span>
                            <span>{region.name}</span>
                        </button>
                    ))}
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeRegion}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 blur-[2px] pointer-events-none select-none opacity-40"
                        >
                            {countriesData[activeRegion as keyof typeof countriesData].map((country, idx) => (
                                <div
                                    key={idx}
                                    className="group flex items-center gap-4 bg-[#111115] border border-white/5 p-5 rounded-2xl"
                                >
                                    <div className="text-3xl filter saturate-150 drop-shadow-md">
                                        {country.flag}
                                    </div>
                                    <span className="text-gray-300 font-bold tracking-wide">
                                        {country.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Premium Gateway Overlay */}
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center -mt-20">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="glass-premium p-8 md:p-12 rounded-[2.5rem] border border-primary/20 text-center shadow-2xl backdrop-blur-xl"
                        >
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase italic">
                                UNLOCK <span className="text-gradient-premium">FULL ACCESS</span>
                            </h3>
                            <p className="text-gray-400 font-medium mb-8 max-w-sm mx-auto">
                                Subscribe now to access over 60,000+ premium global channels in 8K resolution.
                            </p>
                            <a 
                                href={`/${lang}/pricing`}
                                className="inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-primary/20"
                            >
                                Get Started Now
                            </a>
                        </motion.div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-[#111115] border border-white/5 p-8 rounded-3xl text-center space-y-3 hover:bg-white/[0.02] hover:border-white/10 transition-all group"
                        >
                            <div className={`text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-transform duration-500`}>
                                {stat.value}
                            </div>
                            <div className="text-[10px] md:text-xs font-black text-gray-500 tracking-[0.3em] uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

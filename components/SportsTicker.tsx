"use client";

const logos = [
    {
        src: "/sports/70787d4bf30789ae4e802585cddb9708.jpg",
        alt: "NFL",
        nfl: true,
        whiteBg: true,
    },
    {
        src: "/sports/88bf83f3286d037740bceff3f5e09b15.jpg",
        alt: "NBA",
        nfl: false,
        whiteBg: true,
    },
    {
        src: "/sports/e86ce0f9d808dc6c5c56a26289f56d20.jpg",
        alt: "NHL",
        nfl: false,
        whiteBg: false,
    },
    {
        src: "/sports/52d5598a7c1b5ee04954924c6be828b2.jpg",
        alt: "F1",
        nfl: false,
        whiteBg: false,
    },
    {
        src: "/leagues/62fba455161cb081a3a7f74f11e2cc26.jpg",
        alt: "Premier League",
        nfl: false,
        whiteBg: false,
    },
    {
        src: "/leagues/37aa3c8ee1919e73bea2f1b4b100795d.jpg",
        alt: "Bundesliga",
        nfl: false,
        whiteBg: true,
    },
    {
        src: "/leagues/1e0492d9c6b3b0409a62a2d7babc380e.jpg",
        alt: "LaLiga",
        nfl: false,
        whiteBg: true,
    },
    {
        src: "/leagues/3064366928090fbaa2e3d8bd460f057c.jpg",
        alt: "Serie A",
        nfl: false,
        whiteBg: true,
    },
    {
        src: "/leagues/2e025d3d178ed4e39b093ab6576eb0fb.jpg",
        alt: "UEFA Europa League",
        nfl: false,
        whiteBg: false,
    },
    {
        src: "/sports/6e883bc5490abb1a2ca51850a928a656.jpg",
        alt: "FIFA World Cup 2026",
        nfl: false,
        whiteBg: false,
    },
];

export default function SportsTicker() {
    const items = [...logos, ...logos, ...logos];

    return (
        <div className="bg-[#080808] border-y border-white/5 py-4 overflow-hidden relative">
            {/* fade edges */}
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

            <div className="flex items-center gap-6 animate-marquee-right marquee-container" style={{ animationDuration: "8s" }}>
                {items.map((logo, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 flex flex-col items-center gap-1.5"
                    >
                        <div
                            className={`
                                relative flex items-center justify-center rounded-xl overflow-hidden
                                ${logo.nfl
                                    ? "w-24 h-24 border-2 border-[#D4AF37] shadow-[0_0_24px_rgba(212,175,55,0.6)]"
                                    : "w-12 h-12 border border-white/10"
                                }
                                ${logo.whiteBg ? "bg-white" : "bg-[#111]"}
                            `}
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="w-full h-full object-contain p-1"
                            />
                        </div>
                        <span
                            className={`text-[9px] font-black uppercase tracking-widest ${
                                logo.nfl ? "text-[#D4AF37]" : "text-gray-600"
                            }`}
                        >
                            {logo.alt}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

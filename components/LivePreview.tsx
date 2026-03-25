"use client";

export default function LivePreview({ lang, dictionary }: { lang: string; dictionary: any }) {
    const channels = [
        { name: "Premium Sports Network", category: "Sports", logo: "⚽" },
        { name: "Elite Movie Stream", category: "Movies", logo: "🎬" },
        { name: "Global News HD", category: "News", logo: "📰" },
        { name: "Animated Kids Hub", category: "Kids", logo: "🏰" },
        { name: "Nature & Discovery", category: "Documentary", logo: "🌍" },
        { name: "Racing TV Pro", category: "Sports", logo: "🏎️" },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">{dictionary.badge}</h2>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">{dictionary.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm max-w-xs md:text-right">
                        {dictionary.subtext}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {channels.map((channel, index) => (
                        <div
                            key={index}
                            className="bg-surface-light border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-all cursor-pointer group"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">
                                {channel.logo}
                            </div>
                            <div className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">{channel.category}</div>
                            <div className="text-sm font-bold text-white line-clamp-1">{channel.name}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-surface p-1 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
                    <div className="aspect-video relative rounded-[2rem] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1593359677771-482062143eee?q=80&w=2070&auto=format&fit=crop"
                            alt="Live TV Dashboard"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <button className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white scale-100 hover:scale-110 transition-transform shadow-2xl shadow-primary/50">
                                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                        </div>

                        <div className="absolute bottom-10 left-10 p-6 glass rounded-2xl max-w-xs hidden md:block border border-white/10">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">{dictionary.live_event_label}</span>
                            </div>
                            <p className="text-xs text-gray-300">{dictionary.live_event_subtext}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

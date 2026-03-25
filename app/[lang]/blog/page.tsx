import Link from "next/link";
import { getBlogs } from "@/lib/getBlogs";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";

export default async function BlogIndex(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    const lang = params.lang;
    const blogs = await getBlogs();

    return (
        <div className="min-h-screen bg-[#050505] pt-32 pb-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
                        KNOWLEDGE <span className="text-gradient-premium italic">HUB</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        Latest guides, troubleshooting tips, and IPTV industry insights to turbocharge your streaming experience.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <Link href={`/${lang}/blog/${blog.slug}`} key={blog.slug} className="group flex flex-col h-full">
                            <article className="bg-[#111115] border border-white/5 rounded-[2.5rem] p-8 hover:border-primary/30 transition-all duration-500 h-full flex flex-col hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] relative overflow-hidden">
                                {/* Decorative hover gradient */}
                                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                
                                <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 relative z-10">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} className="text-primary" />
                                        <span>{blog.date}</span>
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-white/20" />
                                    <div className="flex items-center gap-2">
                                        <BookOpen size={14} className="text-gray-400" />
                                        <span>Article</span>
                                    </div>
                                </div>
                                
                                <h2 className="text-2xl font-black text-white mb-4 line-clamp-3 leading-tight group-hover:text-primary transition-colors relative z-10">
                                    {blog.title}
                                </h2>
                                
                                <p className="text-gray-400 font-medium leading-relaxed mb-8 flex-grow line-clamp-3 relative z-10">
                                    {blog.excerpt}
                                </p>
                                
                                <div className="flex items-center gap-2 mt-auto text-white font-black text-sm uppercase tracking-widest relative z-10">
                                    Read Full Guide
                                    <ArrowRight size={16} className="text-primary group-hover:translate-x-2 transition-transform" />
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

import { getBlogBySlug, getBlogs } from "@/lib/getBlogs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export async function generateStaticParams() {
    const blogs = await getBlogs();
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPost(props: { params: Promise<{ lang: string; slug: string }> }) {
    const params = await props.params;
    const blog = await getBlogBySlug(params.slug);

    if (!blog) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#050505] pt-32 pb-24 relative selection:bg-primary/30">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/10 via-[#050505] to-[#050505] pointer-events-none" />

            <article className="container mx-auto px-6 relative z-10 max-w-4xl">
                <Link 
                    href={`/${params.lang}/blog`}
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest mb-12"
                >
                    <ArrowLeft size={16} />
                    Back to Knowledge Hub
                </Link>

                <header className="mb-16">
                    <div className="flex items-center gap-6 text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-primary" />
                            {blog.date}
                        </div>
                        <div className="flex items-center gap-2 hidden sm:flex">
                            <Clock size={16} className="text-primary" />
                            <span>15 Min Read</span>
                        </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black text-white leading-[1.1] tracking-tighter mb-8">
                        {blog.title}
                    </h1>
                </header>

                <div 
                    className="max-w-none [&>h2]:text-3xl [&>h2]:md:text-4xl [&>h2]:font-black [&>h2]:text-white [&>h2]:tracking-tighter [&>h2]:mt-16 [&>h2]:mb-8 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-10 [&>h3]:mb-4 [&>p]:text-gray-300 [&>p]:text-lg [&>p]:leading-relaxed [&>p]:mb-8 [&>a]:text-primary [&>a]:font-bold [&>a:hover]:underline [&>ul]:text-gray-300 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ol]:text-gray-300 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 [&>ul>li]:mb-3 [&>ol>li]:mb-3 [&>strong]:text-white [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-gray-400 [&>img]:rounded-3xl [&>img]:shadow-2xl [&>img]:shadow-black/50 [&>img]:my-10"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                <div className="mt-20 pt-10 border-t border-white/10 text-center">
                    <Link href={`/${params.lang}/pricing`} className="inline-flex items-center gap-3 bg-primary text-black px-10 py-5 rounded-[2rem] text-lg font-black uppercase tracking-widest button-shine hover:scale-105 transition-all shadow-xl shadow-primary/20">
                        Get Instant Access to 8KPrime
                    </Link>
                </div>
            </article>
        </div>
    );
}

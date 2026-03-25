import Link from "next/link";

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6 bg-[url('https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

            <div className="relative w-full max-w-md animate-slide-up">
                <div className="text-center mb-8">
                    <Link href="/" className="text-3xl font-bold tracking-tighter text-primary mb-2 block">
                        IPTV<span className="text-white">PRO</span>
                    </Link>
                    <h1 className="text-2xl font-bold text-white">Create your account</h1>
                    <p className="text-gray-400 text-sm">Start your 24-hour free trial today.</p>
                </div>

                <div className="bg-surface rounded-[2.5rem] border border-white/5 p-10 shadow-2xl">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-surface-light border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full bg-surface-light border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-surface-light border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-all"
                            />
                        </div>

                        <div className="flex items-center gap-2 px-1">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-zinc-800 text-primary focus:ring-primary" />
                            <span className="text-xs text-gray-400">I agree to the <Link href="/terms" className="text-white underline">Terms & Conditions</Link></span>
                        </div>

                        <button className="bg-primary hover:bg-primary-hover text-white w-full py-5 rounded-xl font-bold shadow-xl shadow-primary/20 transition-all">
                            Create Account
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/5 text-center">
                        <p className="text-sm text-gray-400">
                            Already have an account? <Link href="/login" className="text-white font-bold hover:text-primary transition-colors">Sign In</Link>
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-xs text-gray-500 hover:text-white transition-colors">← Back to Homepage</Link>
                </div>
            </div>
        </div>
    );
}

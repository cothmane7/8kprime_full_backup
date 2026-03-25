"use client";

import { motion } from "framer-motion";
import {
    User as UserIcon,
    Calendar,
    Monitor,
    CreditCard,
    History,
    Settings,
    LogOut,
    ShieldCheck,
    Zap
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    const user = {
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://i.pravatar.cc/150?u=john",
    };

    const subscription = {
        plan: "Premium Plan",
        status: "Active",
        expiryDate: "2027-03-12",
        devices: 2,
        orderHistory: [
            { id: "ORD-9921", date: "2026-03-12", amount: "$84.99", status: "Paid" },
            { id: "ORD-8812", date: "2025-03-12", amount: "$84.99", status: "Paid" },
        ]
    };

    return (
        <div className="pt-32 min-h-screen bg-[#0B0B0F] pb-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <motion.aside
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-1/4"
                    >
                        <div className="bg-[#15151E] rounded-[50px] p-10 border border-white/5">
                            <div className="text-center mb-10">
                                <div className="relative inline-block mb-4">
                                    <img src={user.avatar} className="w-24 h-24 rounded-3xl object-cover border-4 border-primary/20" alt={user.name} />
                                    <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1.5 rounded-xl">
                                        <ShieldCheck className="w-4 h-4" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-black text-white">{user.name}</h3>
                                <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mt-1">{user.email}</p>
                            </div>

                            <nav className="space-y-2">
                                {[
                                    { icon: <UserIcon className="w-5 h-5" />, label: "Overview", active: true },
                                    { icon: <History className="w-5 h-5" />, label: "Order History" },
                                    { icon: <Settings className="w-5 h-5" />, label: "Account Settings" },
                                    { icon: <LogOut className="w-5 h-5" />, label: "Sign Out", danger: true },
                                ].map((item, i) => (
                                    <button
                                        key={i}
                                        className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${item.active
                                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                                : item.danger ? "text-red-500 hover:bg-red-500/10" : "text-gray-500 hover:bg-white/5 hover:text-white"
                                            }`}
                                    >
                                        {item.icon}
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </motion.aside>

                    {/* Main Content */}
                    <motion.main
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:w-3/4 space-y-8"
                    >
                        {/* Subscription Card */}
                        <div className="bg-[#15151E] rounded-[50px] p-10 md:p-16 border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                                    <div>
                                        <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
                                            Current Status: {subscription.status}
                                        </span>
                                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-2">
                                            {subscription.plan}
                                        </h2>
                                        <p className="text-gray-500 font-bold">Renewal Date: {subscription.expiryDate}</p>
                                    </div>
                                    <button className="bg-white text-black px-10 py-5 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl">
                                        Extend Subscription
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white/5 rounded-3xl p-8 border border-white/5">
                                        <Calendar className="w-6 h-6 text-primary mb-4" />
                                        <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Duration</div>
                                        <div className="text-xl font-black text-white">12 Months</div>
                                    </div>
                                    <div className="bg-white/5 rounded-3xl p-8 border border-white/5">
                                        <Monitor className="w-6 h-6 text-primary mb-4" />
                                        <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Max Devices</div>
                                        <div className="text-xl font-black text-white">{subscription.devices} Simultaneous</div>
                                    </div>
                                    <div className="bg-white/5 rounded-3xl p-8 border border-white/5">
                                        <Zap className="w-6 h-6 text-primary mb-4" />
                                        <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Quality</div>
                                        <div className="text-xl font-black text-white">4K / 8K UHD</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Orders */}
                        <div className="bg-[#15151E] rounded-[50px] p-10 border border-white/5">
                            <h3 className="text-2xl font-black text-white mb-8 px-2 flex items-center gap-3">
                                <CreditCard className="w-6 h-6 text-primary" />
                                Recent Transactions
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/5">
                                            <th className="py-6 px-4 text-left text-gray-500 text-[10px] font-black uppercase tracking-widest">Order ID</th>
                                            <th className="py-6 px-4 text-left text-gray-500 text-[10px] font-black uppercase tracking-widest">Date</th>
                                            <th className="py-6 px-4 text-left text-gray-500 text-[10px] font-black uppercase tracking-widest">Amount</th>
                                            <th className="py-6 px-4 text-left text-gray-500 text-[10px] font-black uppercase tracking-widest">Status</th>
                                            <th className="py-6 px-4 text-right"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subscription.orderHistory.map((order) => (
                                            <tr key={order.id} className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors">
                                                <td className="py-6 px-4 text-white font-bold">{order.id}</td>
                                                <td className="py-6 px-4 text-gray-400 font-medium">{order.date}</td>
                                                <td className="py-6 px-4 text-white font-black">{order.amount}</td>
                                                <td className="py-6 px-4">
                                                    <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="py-6 px-4 text-right">
                                                    <button className="text-primary font-black uppercase text-[10px] tracking-widest hover:underline">Download Invoice</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.main>
                </div>
            </div>
        </div>
    );
}

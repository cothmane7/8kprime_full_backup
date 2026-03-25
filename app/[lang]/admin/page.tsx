"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Users,
    ShoppingCart,
    Monitor,
    TrendingUp,
    Search,
    Filter,
    MoreVertical,
    CheckCircle2,
    XCircle,
    Clock
} from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
    const stats = [
        { label: "Total Users", value: "1,284", icon: <Users className="w-6 h-6" />, color: "bg-blue-500" },
        { label: "Active Subs", value: "942", icon: <CheckCircle2 className="w-6 h-6" />, color: "bg-green-500" },
        { label: "Total Revenue", value: "$42.8k", icon: <TrendingUp className="w-6 h-6" />, color: "bg-primary" },
        { label: "Monthly Growth", value: "+12.4%", icon: <Monitor className="w-6 h-6" />, color: "bg-purple-500" },
    ];

    const recentOrders = [
        { id: "ORD-9921", user: "john@example.com", plan: "Platinum", status: "Active", date: "Mar 12, 13:45" },
        { id: "ORD-9918", user: "mike@gmail.com", plan: "Premium", status: "Pending", date: "Mar 12, 12:10" },
        { id: "ORD-9915", user: "sarah.s@outlook.com", plan: "Basic", status: "Active", date: "Mar 11, 22:30" },
        { id: "ORD-9912", user: "dev@company.com", plan: "Platinum", status: "Canceled", date: "Mar 11, 15:20" },
    ];

    return (
        <div className="pt-32 min-h-screen bg-[#0B0B0F] pb-24">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-2">
                            ADMIN <span className="text-primary italic">PANEL</span>
                        </h1>
                        <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest pl-1">Management Console</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all border border-white/5">
                            <Filter className="w-4 h-4" />
                            Filters
                        </button>
                        <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-2xl font-black flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
                            <ShoppingCart className="w-4 h-4" />
                            Manual Order
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#15151E] p-8 rounded-[40px] border border-white/5"
                        >
                            <div className={`${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl`}>
                                {stat.icon}
                            </div>
                            <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</div>
                            <div className="text-3xl font-black text-white">{stat.value}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Orders Table */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-2 bg-[#15151E] rounded-[50px] border border-white/5 p-10"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-black text-white tracking-tight">Recent Orders</h3>
                            <div className="relative max-w-xs w-full">
                                <input
                                    placeholder="Search orders..."
                                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-3 pl-12 text-sm text-white font-bold focus:outline-none focus:border-primary transition-all"
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/5">
                                        <th className="pb-6 text-left text-gray-500 text-[10px] font-black uppercase tracking-widest">Order ID</th>
                                        <th className="pb-6 text-left text-gray-500 text-[10px] font-black uppercase tracking-widest">Customer</th>
                                        <th className="pb-6 text-left text-gray-500 text-[10px] font-black uppercase tracking-widest">Plan</th>
                                        <th className="pb-6 text-left text-gray-500 text-[10px] font-black uppercase tracking-widest">Status</th>
                                        <th className="pb-6 text-right text-gray-500 text-[10px] font-black uppercase tracking-widest">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/[0.02]">
                                    {recentOrders.map((order) => (
                                        <tr key={order.id} className="group hover:bg-white/[0.01] transition-colors">
                                            <td className="py-6 text-white font-bold">{order.id}</td>
                                            <td className="py-6">
                                                <div className="text-white font-bold text-sm">{order.user.split('@')[0]}</div>
                                                <div className="text-gray-600 text-[10px]">{order.user}</div>
                                            </td>
                                            <td className="py-6">
                                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase">
                                                    {order.plan}
                                                </span>
                                            </td>
                                            <td className="py-6">
                                                <div className="flex items-center gap-2">
                                                    {order.status === "Active" ? <CheckCircle2 className="w-3 h-3 text-green-500" /> :
                                                        order.status === "Pending" ? <Clock className="w-3 h-3 text-yellow-500" /> :
                                                            <XCircle className="w-3 h-3 text-red-500" />}
                                                    <span className={`text-[10px] font-black uppercase tracking-widest ${order.status === "Active" ? "text-green-500" :
                                                            order.status === "Pending" ? "text-yellow-500" : "text-red-500"
                                                        }`}>
                                                        {order.status}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-6 text-right">
                                                <button className="text-gray-500 hover:text-white transition-colors p-2 bg-white/5 rounded-xl">
                                                    <MoreVertical className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Quick Actions / System Health */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <div className="bg-[#15151E] rounded-[40px] border border-white/5 p-10">
                            <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest text-xs">System Health</h3>
                            <div className="space-y-6">
                                {[
                                    { label: "IPTV Server", status: "Healthy", color: "text-green-500" },
                                    { label: "API Provider", status: "High Load", color: "text-yellow-500" },
                                    { label: "Stripe Webhook", status: "Healthy", color: "text-green-500" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                        <span className="text-gray-400 font-bold text-sm">{item.label}</span>
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${item.color}`}>{item.status}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-primary shadow-2xl shadow-primary/30 rounded-[40px] p-10 text-white">
                            <h3 className="text-xl font-black text-white mb-2 leading-none tracking-tighter">Plan Manager</h3>
                            <p className="text-white/60 text-xs font-bold mb-8 uppercase tracking-widest">Edit pricing & features</p>
                            <button className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-zinc-100 transition-colors">
                                Manage Plans
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Shield, FileText, ChevronRight } from "lucide-react";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);
    return { title: `Terms of Service - 8KPRIME` };
}

export default async function TermsPage(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dictionary = await getDictionary(lang);

    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: "By accessing and using the services provided by 8KPRIME (\"we,\" \"us,\" or \"our\") through our website at 8kprime.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
        },
        {
            title: "2. Description of Services",
            content: "8KPRIME provides digital streaming services, including live TV channels and on-demand content. We reserve the right to modify or discontinue any part of the service at any time without notice."
        },
        {
            title: "3. Eligibility",
            content: "To use our Services, you must be at least 18 years of age, have the legal capacity to enter into a binding contract, provide accurate registration information, and maintain a valid email address."
        },
        {
            title: "4. Account Registration and Security",
            content: "4.1 Account Creation: You must provide a valid email and payment information for activation. 4.2 Account Security: You are responsible for maintaining the confidentiality of your credentials. 4.3 Account Sharing: Accounts are for personal use only. Sharing is strictly prohibited."
        },
        {
            title: "5. Subscription Plans and Payment",
            content: "5.1 Subscription Options: We offer various plans (1, 3, 6, 12 months). 5.2 Pricing: Prices are displayed on our website and are subject to change. 5.3 Payment Methods: We accept major credit/debit cards and PayPal. 5.4 Failed Payments: Failed payments may result in service suspension."
        },
        {
            title: "6. Refund Policy",
            content: "6.1 Refund Eligibility: Refunds are offered for unresolved technical issues or billing errors. 6.2 Refund Process: Contact support at infos8kprime@gmail.com within 7 days of purchase. 6.3 Non-Refundable Situations: Change of mind or internet issues on the user's end are not refundable."
        },
        {
            title: "7. Acceptable Use Policy",
            content: "You must not resell, redistribute, or use the service for public viewing. Any violation will result in immediate termination without refund."
        },
        {
            title: "8. Device Limitations",
            content: "Our service is compatible with Smart TVs, Android, iOS, and Fire Stick. Concurrent connections are limited based on your subscription plan."
        },
        {
            title: "9. Service Availability",
            content: "While we strive for 99.9% uptime, we do not guarantee uninterrupted service due to maintenance or factors beyond our control."
        },
        {
            title: "10. Intellectual Property",
            content: "All content and software are the property of 8KPRIME or its licensors."
        },
        {
            title: "11. Governing Law",
            content: "These Terms shall be governed by and construed in accordance with the laws of Scotland, UK."
        },
        {
            title: "12. Contact Information",
            content: "For any questions regarding these Terms, please contact us at infos8kprime@gmail.com."
        },
        {
            title: "13. Privacy and Data Protection",
            content: "Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference."
        },
        {
            title: "14. Disclaimers",
            content: "Our services are provided \"As Is\" and \"As Available\" without warranties of any kind. We do not warrant that all channels will be available at all times, or that services will be uninterrupted or compatible with all devices."
        },
        {
            title: "15. Limitation of Liability",
            content: "To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages. Our total liability shall not exceed the amount you paid for the subscription in the past 12 months."
        },
        {
            title: "16. Indemnification",
            content: "You agree to indemnify, defend, and hold harmless THE STREAMING AUDIO COMPANY LIMITED, its officers, employees, and agents from any claims, damages, or costs arising from your violation of these Terms or your use of our Services."
        },
        {
            title: "17. Dispute Resolution",
            content: "17.1 Informal Resolution: Contact us at infos8kprime@gmail.com to attempt informal resolution first. 17.2 Governing Law: These Terms are governed by the laws of Scotland, UK. 17.3 Jurisdiction: Any formal disputes shall be subject to the exclusive jurisdiction of the courts of Scotland."
        },
        {
            title: "18. Changes to Terms",
            content: "We reserve the right to modify these Terms at any time. Changes will be effective upon posting on our website. Continued use of Services after changes constitutes acceptance of the modified Terms."
        },
        {
            title: "19. Severability",
            content: "If any provision of these Terms is found to be unenforceable, that provision shall be limited or eliminated, and the remaining provisions shall remain in full force and effect."
        },
        {
            title: "20. Entire Agreement",
            content: "These Terms and our Privacy Policy constitute the entire agreement between you and THE STREAMING AUDIO COMPANY LIMITED regarding our Services."
        },
        {
            title: "21. Waiver",
            content: "Our failure to enforce any provision of these Terms shall not constitute a waiver of that provision. No waiver shall be effective unless in writing."
        },
        {
            title: "22. Assignment",
            content: "You may not assign these Terms or your account without our prior written consent. We may assign our rights and obligations under these Terms without restriction."
        },
        {
            title: "23. Final Acceptance",
            content: "By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, you must immediately cease using our Services."
        }
    ];

    return (
        <div className="pt-32 min-h-screen bg-[#050505] pb-20 text-balance">
            <div className="container mx-auto px-6 relative z-10 text-gray-400">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1 rounded-full mb-6">
                        <Shield className="w-3.5 h-3.5 text-primary" />
                        <span className="text-white text-[10px] font-bold uppercase tracking-widest">Legal Document</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        {dictionary.legal.terms_title}
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
                        {dictionary.legal.terms_subtitle}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {sections.map((section, index) => (
                        <section key={index} className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5">
                            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide italic">
                                {section.title}
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-base font-medium opacity-90">
                                {section.content}
                            </p>
                        </section>
                    ))}
                    <div className="pt-12 text-center text-gray-600 font-bold uppercase tracking-[0.2em] text-[10px]">
                        {dictionary.legal.last_updated}
                    </div>
                </div>
            </div>
        </div>
    );
}

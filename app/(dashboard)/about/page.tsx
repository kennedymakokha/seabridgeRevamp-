'use client';

import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-100 text-[#002147] py-16 px-4">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Breadcrumb */}
                <nav className="text-sm text-[#4B5563] mb-4">
                    <ol className="list-reset flex">
                        <li>
                            <Link href="/" className="hover:underline text-[#00AEEF]">Home</Link>
                        </li>
                        <li><span className="mx-2">/</span></li>
                        <li className="text-[#002147] font-semibold">About</li>
                    </ol>
                </nav>

                {/* Page Header */}
                <section className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">AboutAt Seabridge Forwarders Ltd</h1>
                    <p className="text-[#4B5563] max-w-3xl mx-auto">
                       At Seabridge Forwarders Ltd is a leading freight forwarding company based in Kenya, offering reliable,
                        innovative, and customer-driven logistics solutions for global cargo movement.
                    </p>
                </section>

                {/* Mission / Vision / Values */}
                <section className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-[#F7F9FC] p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">🌍 Our Mission</h2>
                        <p className="text-[#4B5563]">
                            Deliver world-class logistics solutions that connect businesses globally with efficiency and trust.
                        </p>
                    </div>
                    <div className="bg-[#F7F9FC] p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">🚀 Our Vision</h2>
                        <p className="text-[#4B5563]">
                            To be Africa’s most reliable and innovative logistics partner.
                        </p>
                    </div>
                    <div className="bg-[#F7F9FC] p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">💼 Our Values</h2>
                        <ul className="text-[#4B5563] list-disc list-inside text-left">
                            <li>Integrity</li>
                            <li>Excellence</li>
                            <li>Customer Commitment</li>
                            <li>Innovation</li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center pt-8">
                    <Link
                        href="/contact"
                        className="inline-block bg-[#00AEEF] hover:bg-[#0096cc] text-white px-8 py-3 rounded-lg font-semibold transition"
                    >
                        Get in Touch
                    </Link>
                </section>
            </div>
        </main>
    );
}

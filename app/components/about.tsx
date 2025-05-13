import Image from 'next/image'
import React from 'react'

function About() {
    return (
        <main className="px-6 py-12 max-w-7xl mx-auto font-[Causten-Round]  text-gray-800 space-y-16">
            {/* Top Section */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">About Seabridge Forwarders Ltd.</h1>
                    <p className="mb-4">
                        Incorporated in 1996, Seabridge Forwarders Ltd. has grown to become a major player in  Kenya&apos;s  freight industry.
                        Our head office is located at Signature Mall, Mombasa Road, with branches across key logistic hubs:
                        Kilindini Mombasa, JKIA, ICD Embakasi, and border stations nationwide.
                    </p>
                    <p>
                        We are members of <strong>IFLN</strong> (a global freight network) and <strong>KIFWA</strong> (Kenya International Freight and Warehousing Association),
                        supported by a qualified workforce and a computerized operational system.
                    </p>
                </div>
                <div className="relative w-full h-80">
                    <Image
                        src="/about1.jpg"
                        alt="Seabridge operations"
                        fill
                        className="object-cover rounded-lg shadow"
                    />
                </div>
            </section>

            {/* Mission and Core Values */}
            <section className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                    <h2 className="text-3xl font-semibold text-blue-900 mb-4">Our Mission</h2>
                    <p>
                        To provide quick, efficient, and cost-effective freight solutions. We strive to be the first choice for importers and exporters
                        by delivering top-tier logistics, customs, and licensing support.
                    </p>
                </div>
                <div className="relative w-full h-64">
                    <Image
                        src="/about2.jpg"
                        alt="Freight team working"
                        fill
                        className="object-cover rounded-lg shadow"
                    />
                </div>
            </section>

            {/* Core Values */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <div className="relative w-full h-64">
                    <Image
                        src="/about3.jpg"
                        alt="Core values teamwork"
                        fill
                        className="object-cover rounded-lg shadow"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-semibold text-blue-900 mb-4">Our Core Values</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Loyalty</li>
                        <li>Honesty</li>
                        <li>Trust</li>
                        <li>Ingenuity</li>
                        <li>Accountability</li>
                        <li>Simplicity</li>
                        <li>Respect</li>
                        <li>Value-centricity</li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default About
import React from 'react'

function Whyus() {
    return (
        <section className="bg-blue-900 py-16 px-6 ">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 uppercase">Why Choose <span className="text-yellow-500">Seabridge</span></h2>
                <p className="text-lg text-slate-200 mb-12">What Makes Us Special</p>

                <div className="grid md:grid-cols-3 gap-10 text-left">
                    {/* Trusted Franchise */}
                    <div className="bg-white shadow-md rounded-lg p-6 transition hover:shadow-lg">
                        <div className="flex items-center justify-center text-blue-300 mb-4">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-center text-blue-900 mb-2">Trusted Franchise</h3>
                        <p className="text-gray-700">Seabridge guarantees the safety of your cargo through trusted handling and professional accountability.</p>
                    </div>

                    {/* Customer Support */}
                    <div className="bg-white shadow-md rounded-lg p-6 transition hover:shadow-lg">
                        <div className="flex items-center justify-center text-blue-300 mb-4">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 10c0-3.866-3.582-7-8-7S2 6.134 2 10c0 2.657 1.574 4.964 4 6.125V20l4-2h2c4.418 0 8-3.134 8-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-center text-blue-900 mb-2">Customer Support</h3>
                        <p className="text-gray-700">We offer 24-hour support to ensure your logistics concerns are always addressed—promptly and professionally.</p>
                    </div>

                    {/* Reliability & Punctuality */}
                    <div className="bg-white shadow-md rounded-lg p-6 transition hover:shadow-lg">
                        <div className="flex items-center justify-center text-blue-300 mb-4">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3M12 3v1m0 16v1m8-9h1M3 12H2m15.364 6.364l.707.707M6.343 6.343l-.707-.707m0 13.071l.707.707m13.071-13.071l-.707-.707" />
                                <circle cx="12" cy="12" r="9" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-center text-blue-900 mb-2">Reliability & Punctuality</h3>
                        <p className="text-gray-700">Seabridge is known for on-time delivery and dependable logistics services you can count on.</p>
                    </div>
                </div>
            </div>
            <div className="bg-blue-900 py-16 px-6 ">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-10">Additionally</h2>
                    <div className="grid md:grid-cols-3 gap-10 text-left">
                        {/* Item 1 */}
                        <div className="bg-[#F9FAFB] shadow-sm rounded-lg p-6 transition hover:shadow-lg border-t-4 border-yellow-400">
                            <h3 className="text-lg font-semibold text-blue-900 mb-2">Deliver Environmentally Responsible Client Services</h3>
                            <p className="text-gray-700 text-sm">We are committed to sustainability and responsible freight solutions.</p>
                        </div>
                        {/* Item 2 */}
                        <div className="bg-[#F9FAFB] shadow-sm rounded-lg p-6 transition hover:shadow-lg border-t-4 border-yellow-400">
                            <h3 className="text-lg font-semibold text-blue-900 mb-2">Be an Active Community Partner</h3>
                            <p className="text-gray-700 text-sm">Seabridge contributes to communities where we live and work.</p>
                        </div>
                        {/* Item 3 */}
                        <div className="bg-[#F9FAFB] shadow-sm rounded-lg p-6 transition hover:shadow-lg border-t-4 border-yellow-400">
                            <h3 className="text-lg font-semibold text-blue-900 mb-2">Drive Continuous Improvement</h3>
                            <p className="text-gray-700 text-sm">We embrace innovation and constantly seek better ways to serve you.</p>
                        </div>
                        {/* Item 4 */}
                        <div className="bg-[#F9FAFB] shadow-sm rounded-lg p-6 transition hover:shadow-lg border-t-4 border-yellow-400">
                            <h3 className="text-lg font-semibold text-blue-900 mb-2">Clearance and Compliance Service</h3>
                            <p className="text-gray-700 text-sm">Streamlined documentation and customs clearance solutions.</p>
                        </div>
                        {/* Item 5 */}
                        <div className="bg-[#F9FAFB] shadow-sm rounded-lg p-6 transition hover:shadow-lg border-t-4 border-yellow-400">
                            <h3 className="text-lg font-semibold text-blue-900 mb-2">Maintain High Ethical Standards</h3>
                            <p className="text-gray-700 text-sm">We operate with integrity, transparency, and accountability.</p>
                        </div>
                        {/* Item 6 */}
                        <div className="bg-[#F9FAFB] shadow-sm rounded-lg p-6 transition hover:shadow-lg border-t-4 border-yellow-400">
                            <h3 className="text-lg font-semibold text-blue-900 mb-2">Air & Ocean Cargo Insurance</h3>
                            <p className="text-gray-700 text-sm">Secure your shipments with our full-service cargo insurance options.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Whyus
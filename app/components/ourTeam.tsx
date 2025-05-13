import React from 'react'

function OurTeam() {
    return (
        <section className="bg-[#F9FAFB] py-16 px-6 font-[Causten-Round]">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 uppercase">Face Behind <span className="text-yellow-500">Seabridge</span></h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    Meet the dedicated professionals powering Seabridge Forwarders Ltd. With decades of experience in freight, logistics, customs, and compliance, our team ensures efficient, reliable, and timely delivery of services across Kenya and globally.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
                    {/* Team Member 1 */}
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 transition-all">
                        <img
                            src="/team1.jpeg"
                            alt="Director"
                            className="rounded-full w-24 h-24 object-cover mx-auto mb-4"
                        />
                        <h3 className="text-lg font-semibold text-blue-900 text-center">MS 
                        Francisca</h3>
                        <p className="text-sm text-gray-600 text-center">Managing Director</p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 transition-all">
                        <img
                            src="/team2.png"
                            alt="Operations Manager"
                            className="rounded-full w-24 h-24 object-cover mx-auto mb-4"
                        />
                        <h3 className="text-lg font-semibold text-blue-900 text-center">Mr Mutinda</h3>
                        <p className="text-sm text-gray-600 text-center">Operations Manager</p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 transition-all">
                        <img
                            src="/team3.png"
                            alt="Logistics Coordinator"
                            className="rounded-full w-24 h-24 object-cover mx-auto mb-4"
                        />
                        <h3 className="text-lg font-semibold text-blue-900 text-center">Mr</h3>
                        <p className="text-sm text-gray-600 text-center">Logistics & Compliance</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default OurTeam
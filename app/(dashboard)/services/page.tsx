'use client';

import Link from 'next/link';

export default function ServicesPage() {
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
            <li className="text-[#002147] font-semibold">Services</li>
          </ol>
        </nav>

        {/* Page Title */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="text-[#4B5563] max-w-2xl mx-auto">
            We offer tailored logistics and freight forwarding services designed to streamline your supply chain across borders.
          </p>
        </section>

        {/* Services Grid */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Air Freight',
              desc: 'Fast and reliable air cargo solutions for urgent shipments.',
              icon: '✈️',
            },
            {
              title: 'Ocean Freight',
              desc: 'Cost-effective full container and LCL shipping worldwide.',
              icon: '🚢',
            },
            {
              title: 'Road Transport',
              desc: 'Secure trucking and last-mile delivery across East Africa.',
              icon: '🚛',
            },
            {
              title: 'Customs Clearance',
              desc: 'Hassle-free border clearance with local expertise.',
              icon: '🛃',
            },
            {
              title: 'Warehousing',
              desc: 'Secure storage with real-time inventory management.',
              icon: '📦',
            },
            {
              title: 'Project Cargo',
              desc: 'Handling oversized, high-value, or specialized logistics projects.',
              icon: '🏗️',
            },
          ].map((service, index) => (
            <div key={index} className="bg-[#F7F9FC] p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-[#4B5563] text-sm">{service.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

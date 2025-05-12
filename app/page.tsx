'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const [headerBg, setHeaderBg] = useState(false);


  const ServiceCard: React.FC<{ img: string; title: string; desc: string }> = ({ img, title, desc }) => {
    return (
      <div className="relative bg-white rounded shadow text-center overflow-hidden h-80">
        {/* Background Image */}
        <Image
          src={img}
          alt="Ocean Freight"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        {/* Content */}
        <div className="relative z-20 p-6 text-white flex flex-col items-center justify-center h-full">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    )
  }
  useEffect(() => {
    const handleScroll = () => setHeaderBg(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="font-sans text-gray-800">
      {/* Header */}
      <header className={`fixed w-full z-50 top-0 transition-colors duration-300 ${headerBg ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#002147]">Seabridge</h1>
          <nav className="space-x-6">
            <Link href="#services" className={`font-medium ${headerBg ? 'text-[#002147]' : 'text-white'}`}>Services</Link>
            <Link href="#about" className={`font-medium ${headerBg ? 'text-[#002147]' : 'text-white'}`}>About</Link>
            <Link href="#contact" className={`font-medium ${headerBg ? 'text-[#002147]' : 'text-white'}`}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/slider3.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-80 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold">Reliable Freight Solutions in Kenya</h1>
            <p className="mt-4 text-lg">Connecting businesses with seamless logistics services across Kenya and beyond.</p>
            <Link href="/contact" className="mt-6 inline-block bg-[#00AEEF] text-white px-6 py-3 rounded hover:bg-blue-700">Request a Quote</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#002147] mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard title="Air Freight" img="/air.jpg" desc='Fast and reliable air cargo solutions tailored to your needs.' />
            <ServiceCard title="Ocean Freight" img="/sea.jpg" desc='Cost-effective ocean freight services for global shipping.' />
            <ServiceCard title="Road Freight" img="" desc='Efficient and secure ground transportation across Kenya.' />
            <ServiceCard title="Customs Clearance" img="/duty.webp" desc='Hassle-free border clearance with local expertise.' />
            <ServiceCard title="Warehousing" img="/sea.jpg" desc='Secure storage with real-time inventory management.' />
            <ServiceCard title="Project Cargo" img="" desc='Handling oversized, high-value, or specialized logistics projects.' />

          </div>
        </div>
      </section>

      {/* Kenya Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#002147] mb-6">Our Presence in Kenya</h2>
          <p className="text-lg mb-4">With offices in Nairobi and Mombasa, we provide comprehensive logistics solutions across Kenya, leveraging local expertise and global networks.</p>
          <Image src="/images/kenya-map.png" alt="Kenya Map" width={600} height={400} className="mx-auto" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}>
        <div className="bg-black bg-opacity-60 py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 text-white">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-3 rounded border border-gray-300" />
                <input type="email" placeholder="Email" className="w-full p-3 rounded border border-gray-300" />
                <textarea placeholder="Message" rows={5} className="w-full p-3 rounded border border-gray-300"></textarea>
                <button className="bg-[#00AEEF] text-white px-6 py-3 rounded hover:bg-blue-700">Send Message</button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Details</h2>
              <p className="mb-2">📍 Nairobi, Kenya</p>
              <p className="mb-2">📞 +254 700 123456</p>
              <p className="mb-2">✉️ info@seabridge.co.ke</p>
              <p className="mt-6">Available Monday – Friday, 9:00AM – 5:00PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002147] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-3">Seabridge Logistics</h2>
            <p className="text-sm text-[#cbd5e1]">Seamlessly moving your cargo across continents with speed and precision.</p>
          </div>
          {/* Additional footer sections here */}
        </div>
        <div className="border-t border-[#334155] mt-10 pt-6 text-center text-sm text-[#94a3b8]">
          &copy; {new Date().getFullYear()} Seabridge Logistics. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

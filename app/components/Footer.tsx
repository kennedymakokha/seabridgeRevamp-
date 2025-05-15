import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#002147]  text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Seabridge Forwarders Ltd</h2>
          <p className="text-sm text-[#cbd5e1]">
            Seamlessly moving your cargo across continents with speed and precision.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#00AEEF]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#00AEEF]">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#00AEEF]">Services</Link></li>
            <li><Link href="/contact" className="hover:text-[#00AEEF]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>Nairobi, Kenya</li>
            <li>Email: <a href="mailto:info@seabridge.co.ke" className="text-[#00AEEF] hover:underline">info@seabridge.co.ke</a></li>
            <li>Phone: <a href="tel:+254700000000" className="text-[#00AEEF] hover:underline">+254 700 000000</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <ul className="flex space-x-4 text-[#00AEEF] text-xl">
            <li><a href="#" aria-label="Facebook">🌐</a></li>
            <li><a href="#" aria-label="LinkedIn">💼</a></li>
            <li><a href="#" aria-label="Twitter">🐦</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#334155] mt-10 pt-6 text-center text-sm text-[#94a3b8]">
        &copy; {new Date().getFullYear()}At Seabridge Forwarders Ltd. All rights reserved.
      </div>
    </footer>
  );
}

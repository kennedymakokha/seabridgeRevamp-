'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-slate-100 text-[#002147] py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold font-causten">Get in Touch</h2>
          <p className="text-[#4B5563]">
            Reach out to Seabridge for freight inquiries, logistics support, or general questions.
          </p>
          <div className="space-y-4 text-[#002147]">
            <div>
              <h4 className="font-semibold">📍 Address</h4>
              <p>Seabridge Forwarders Ltd<br />Mombasa Road, Nairobi, Kenya</p>
            </div>
            <div>
              <h4 className="font-semibold">📞 Phone</h4>
              <p>+254 712 345 678</p>
            </div>
            <div>
              <h4 className="font-semibold">📧 Email</h4>
              <p>info@seabridge.co.ke</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-[#F7F9FC] p-8 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-2">Contact Form</h3>
          <div>
            <label htmlFor="name" className="block font-medium text-sm">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00AEEF] focus:border-[#00AEEF]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-sm">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00AEEF] focus:border-[#00AEEF]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00AEEF] focus:border-[#00AEEF]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#00AEEF] text-white px-6 py-3 rounded-lg hover:bg-[#0096cc] font-semibold"
          >
            Send Message
          </button>
          {status && <p className="text-green-600 mt-4">{status}</p>}
        </form>
      </div>
    </main>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import About from './components/about';
import Whyus from './components/whyus';
import OurTeam from './components/ourTeam';
import Header from './components/Header';
import TypewriterEffect from './components/typeWritter';
import { sliderPac } from './arrays';
import ServiceCard from './components/serviceCard';

export default function HomePage() {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: true,
  });

  // Autoplay logic
  useEffect(() => {
    if (!slider.current) return;

    const autoplay = () => {
      timer.current = setInterval(() => {
        slider.current?.next();
      }, 6000); // 3-second interval
    };

    autoplay();

    // Pause autoplay on hover (optional)
    // const sliderNode = sliderRef.current;
    // const stop = () => timer.current && clearInterval(timer.current);

    // if (sliderNode) {
    //   sliderNode.addEventListener('mouseover', stop);
    //   sliderNode.addEventListener('mouseout', autoplay);
    // }

    // return () => {
    //   stop();
    //   sliderNode?.removeEventListener('mouseover', stop);
    //   sliderNode?.removeEventListener('mouseout', autoplay);
    // };
  }, [slider]);


 
  return (
    <main className="font-sans  text-gray-800">
      {/* Header */}

      <Header />
      {/* Hero Slider */}
      <section className="h-screen overflow-hidden">
        <div ref={sliderRef} className="keen-slider h-full">
          {sliderPac.map((slide, index) => (
            <div key={index} className="keen-slider__slide relative h-full">
              <Image width={1080} height={1000} src={slide.img} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-70 flex items-center justify-center text-white text-center px-6">
                <div>
                  <TypewriterEffect title text={slide.title} speed={100} />
                  {/* <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2> */}
                  <p className="text-lg md:text-xl mb-6">{slide.desc}</p>
                  <a
                    href="#contact"
                    className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold"
                  >
                    Request a Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#002147] mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard title="Air Freight" img="/air.jpg" desc='Fast and reliable air cargo solutions tailored to your needs.' />
            <ServiceCard title="Ocean Freight" img="/sea.jpg" desc='Cost-effective ocean freight services for global shipping.' />
            <ServiceCard title="Road Freight" img="/slider3.jpg" desc='Efficient and secure ground transportation across Kenya.' />
            <ServiceCard title="Customs Clearance" img="/duty.webp" desc='Hassle-free border clearance with local expertise.' />
            <ServiceCard title="Warehousing" img="/sea.jpg" desc='Secure storage with real-time inventory management.' />
            <ServiceCard title="Project Cargo" img="/sea.jpg" desc='Handling oversized, high-value, or specialized logistics projects.' />

          </div>
        </div>
      </section>



      <section id="about" className="py-16 bg-slate-300">

        <About />
      </section>
      <section id="why-us" className="py-16 bg-blue-900">
        <Whyus />
      </section>
      <section id="our-team" className="py-16 bg-white">
        <OurTeam />
      </section>
      {/* Contact Section */}
      <section id="contact" className="relative  bg-cover bg-center" style={{ backgroundImage: "url('/slider3.jpg')" }}>
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
      <footer className="bg-[#002147]  text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-3">Seabridge Forwarders Ltd</h2>
            <p className="text-sm text-[#cbd5e1]">Seamlessly moving your cargo across continents with speed and precision.</p>
          </div>
          {/* Additional footer sections here */}
        </div>
        <div className=" border-[#334155] border-t mt-10 pt-6 text-center text-sm text-[#94a3b8]">
          &copy; {new Date().getFullYear()}At Seabridge Forwarders Ltd. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

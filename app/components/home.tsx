'use client';

import { useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

export default function HomePage() {

  // Keen slider setup
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: true,
  });

  return (
    <main className="font-sans text-gray-800">
      {/* Header */}
    

      {/* Hero Slider */}
      <section className="h-screen overflow-hidden">
        <div ref={sliderRef} className="keen-slider h-full">
          {['/slider3.jpg', '/slider2.jpg', '/slider1.jpeg'].map((img, index) => (
            <div key={index} className="keen-slider__slide relative h-full">
              <img src={img} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center text-white text-center px-6">
                <div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">Global Freight Solutions</h2>
                  <p className="text-lg md:text-xl mb-6">Efficient. Reliable. Trusted Logistics Partner.</p>
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
    </main>
  );
}

'use client';

import { useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [headerBg, setHeaderBg] = useState(false);

    // Scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setHeaderBg(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Keen Slider setup
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slideChanged() { },
    });

    return (
        <main>
            <Header />
            <div className="py-10 ">
                {children}
            </div>
            <Footer />
        </main>
    );
}

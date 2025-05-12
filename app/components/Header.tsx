'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
    const pathname = usePathname();
    const [headerBg, setHeaderBg] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setHeaderBg(window.scrollY > 50);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const linkClasses = (path: string) =>
        `font-medium transition-colors ${pathname === path
            ? 'text-[#00AEEF] border-b-2 border-[#00AEEF]'
            : headerBg
                ? 'text-blue-900'
                : 'text-white'
        }`;

    return (
        <header className={`fixed w-full z-50 top-0 transition-colors duration-300  bg-slate-900 shadow-md`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-900">Seabridge</h1>
                <nav className="space-x-6">
                    <Link href="/" className={linkClasses('/')}>Home</Link>
                    <Link href="/services" className={linkClasses('/services')}>Services</Link>
                    <Link href="/about" className={linkClasses('/about')}>About</Link>
                    <Link href="/contact" className={linkClasses('/contact')}>Contact</Link>
                </nav>
            </div>
        </header>
    );
}

'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiSearch, FiUser } from 'react-icons/fi';

export default function Header() {
    const [headerBg, setHeaderBg] = useState(false);

    const pathname = usePathname()
    useEffect(() => {
        const handleScroll = () => setHeaderBg(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/#services', label: 'Services' },
        { href: '/#about', label: 'About' },
        { href: '/#why-us', label: 'Why us' },
        { href: '/#our-team', label: 'Our Team' },
        { href: '/#contact', label: 'Contact' },
    ];


    return (
        <header className={`fixed w-full flex flex-col z-50 top-0 transition-colors duration-300 ${headerBg ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="flex items-center self-end px-10 float-right my-2 space-x-4">
                <Link
                    href="/track-trace"
                    className="bg-red-600 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded-md text-sm"
                >
                    Track & Trace
                </Link>
                <FiSearch className={`${headerBg ? 'text-[#002147]' : 'text-white'} w-5 h-5 cursor-pointer`} />
                <FiUser className={`${headerBg ? 'text-[#002147]' : 'text-white'} w-5 h-5 cursor-pointer`} />
                <span className={`text-sm font-medium ${headerBg ? 'text-[#002147]' : 'text-white'}`}>
                    +254 700 123456
                </span>
            </div>
            <div className="max-w-7xl  w-full mx-auto px-4 flex justify-between items-center">
                {/* Logo and name */}
                <div className="flex items-start gap-3">
                    <Image src="/logo.png" alt="Seabridge Logo" width={50} height={50} />
                    <h1 className={`text-xl md:text-2xl font-bold ${headerBg ? 'text-blue-900' : 'text-white'}`}>
                        Seabridge Forwarders Ltd
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-6 items-center">
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href || (href.includes('#') && pathname === '/');
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`font-medium transition duration-200 ${isActive ? ' font-bold tracking-widest text-blue-400' :
                                    headerBg ? 'text-[#002147]' : 'text-white'
                                    }`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right section (Track & Trace + icons) */}

            </div>
        </header>
    );
}

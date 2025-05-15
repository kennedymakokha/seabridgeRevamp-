'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiSearch, FiUser } from 'react-icons/fi';

export default function Header() {
    const [headerBg, setHeaderBg] = useState(false);

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
        <header className={`fixed w-full font-[Causten-Round] px-10  border-b border-slate-500 pb-2 flex flex-col z-50 top-0 transition-colors duration-300 ${headerBg ? 'bg-white shadow-md' : 'bg-transparent'}`}>

            <div className="flex flex-row justify-between w-full">
                <div className="flex items-center md:w-1/3 w-full justify-center  gap-3">
                    <Image src="/logo.png" alt="Seabridge Logo" width={100} height={100} />
                    <h1 className={`text-xl md:text-2xl font-[Causten-Round] font-bold ${headerBg ? 'text-blue-900' : 'text-white'}`}>
                        Seabridge Forwarders Ltd
                    </h1>
                </div>

                <div className="max-w-7xl  w-2/3 mx-auto flex flex-col items-end">
                    <div className="hidden md:flex items-center self-end float-right my-2 space-x-4">
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
                    {/* Navigation */}
                    <nav className="hidden md:flex  space-x-6 items-center">
                        {navLinks.map(({ href, label }) => {
                        
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`font-medium px-2 tracking-widest text-xl hover:bg-[#002147] hover:border-none   rounded-md  py-1 transition duration-200   ${headerBg ? 'text-[#002147]' : 'text-white'}`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right section (Track & Trace + icons) */}

                </div>
            </div>

        </header>
    );
}

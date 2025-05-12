'use client';


import 'keen-slider/keen-slider.min.css';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
   

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

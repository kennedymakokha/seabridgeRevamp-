import Image from 'next/image';
import React from 'react'

interface ServiceCardProps {
    img: string;
    title: string;
    desc: string;
}

const ServiceCard = ({ img, title, desc }: ServiceCardProps) => {
    return (
        <div className="relative bg-white rounded shadow text-center overflow-hidden h-80">
            {/* Background Image */}
            <Image
                src={img}
                alt="Ocean Freight"
                fill
                style={{ objectFit: 'cover' }}
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


export default ServiceCard
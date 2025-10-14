// src/components/CTASection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export const Founder = () => {
  return (
    <section id="founder" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* --- Heading (Outside the Container) --- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-[#184151]">
            Meet The <span className="text-[#df5128]">Author</span>
          </h2>
        </div>

        {/* --- Main Content Container with Background --- */}
        <div className="bg-[white/90] shadow-xl overflow-hidden flex flex-col md:flex-row max-w-6xl mx-auto">
          {/* --- Image Column (First) --- */}
          <div className="md:w-1/2 w-full">
            <div className="relative w-full h-72 md:h-full lg:h-full">
              <Image
                src="/prateek.jpg"
                alt="Akash Pasricha"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* --- Text Content Column (Second) --- */}
          <div className="lg:w-1/2 md:w-[60%] w-full flex flex-col justify-center p-8 md:p-12 lg:p-16 text-center lg:text-left">
            <h1 className="text-3xl font-semibold">Prateek Suri</h1>
           
            <p className="text-gray-600 lg:text-lg leading-relaxed mt-4 hidden sm:block">
              Prateek Suri is an entrepreneur, investor, and visionary who turned bold ideas into billion-dollar realities. A BITS Pilani graduate from Delhi, he founded Maser Group and grew it into a $5 billion enterprise that made technology accessible across Africa. Through MDR Investments, he continues to drive innovation in infrastructure, AI, and real estate while empowering communities across the continent. Gateway to Africa captures his journey, lessons, and vision for those who dare to build where others hesitate.
            </p>
            <p className="text-gray-600 lg:text-lg leading-relaxed mt-4 sm:hidden">
              Prateek Suri is an entrepreneur, investor, and visionary who turned bold ideas into billion-dollar realities. A BITS Pilani graduate from Delhi, he founded Maser Group and grew it into a $5 billion enterprise that made technology accessible across Africa. Gateway to Africa captures his journey, lessons, and vision for those who dare to build where others hesitate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

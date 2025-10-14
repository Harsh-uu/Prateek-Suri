// src/app/page.tsx (or your main file)
"use client";

import { Founder } from "./components/Founder";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutTheBook } from "./components/AboutTheBook";
import { BookTrailer } from "./components/BookTrailer";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <div className="relative text-gray-800 font-sans">
      {/* Background container with herobg.jpg */}
      <div 
        className="relative bg-contain bg-[#fff7e6] bg-left bg-no-repeat"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        {/* Background overlay for better content readability */}
        <div className="absolute inset-0" />
        
        {/* Header and Hero content positioned above background */}
        <div className="relative z-10 h-full flex flex-col overflow-hidden">
          <Header />
          <div className="flex-1 z-10 flex items-center md:mt-5 justify-center">
            <Hero />
          </div>
        </div>
      </div>
      
      <main className="mx-auto">
        <div className="relative isolate overflow-hidden">
          {/* Additional content can go here */}
        </div>
         <div className="px-4 relative overflow-hidden bg-[#fffffc]">
          <AboutTheBook/>
        </div>
        
        {/* Book Trailer Section */}
        <BookTrailer />
        
        <div className="px-4 relative isolate bg-[#fffffc] overflow-hidden ">
          <Founder />
        </div>
        
        <div className="px-4 relative overflow-hidden bg-[#fffaee]">
          <Testimonials/>
        </div>
      
      </main>
      <Footer />
    </div>
  );
}
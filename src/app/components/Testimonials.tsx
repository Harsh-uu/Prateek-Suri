// src/components/Testimonials.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { type CarouselApi } from "@/components/ui/carousel"; // Import the API type
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonialsData = [
  {
    id: 1,
    quote: "An inspiring and practical read on leadership and entrepreneurship, Gateway to Africa shares real lessons from building global businesses. With honesty and clarity, Prateek Suri shows how innovation, resilience, and smart decisions drive lasting success. Blending personal insights with universal lessons, it’s a valuable guide for anyone interested in entrepreneurship, growth, and creating meaningful impact.",
    authorName: "Kaushiki Goyal",
    rating: 5,
  },
  {
    id: 2,
    quote: "Gateway to Africa by Prateek Suri blends memoir and business strategy, tracing his journey from an engineer in Delhi to a leading entrepreneur in Africa. Through honest stories of setbacks and success, Suri shares lessons on resilience, cultural understanding, and spotting opportunities in complex markets. Both inspiring and practical, it’s a must-read for entrepreneurs, investors, and anyone interested in building meaningful ventures in emerging economies.",
    authorName: "Mahek b.",
    rating: 4,
  },
  {
    id: 3,
    quote: "Gateway to Africa by Prateek Suri blends honest storytelling with real business lessons, making it both inspiring and practical. Suri shares not just his successes but also the failures and challenges that shaped his journey from Delhi to Africa. Through his experiences, readers gain insights into resilience, cultural adaptability, and turning uncertainty into opportunity—a valuable read for entrepreneurs, leaders, and anyone chasing bold goals.",
    authorName: "Vyomika",
    rating: 5,
  },
  {
    id: 4,
    quote: "Gateway to Africa by Prateek Suri is an honest and inspiring journey through ambition, learning, and perseverance. Suri shares both successes and struggles, offering real lessons on courage, adaptability, and belief in possibility. Simple yet powerful, the book leaves readers motivated and reflective—a must-read for anyone striving to create something meaningful.",
    authorName: "Vivek Burile",
    rating: 5,
  },
  {
    id: 5,
    quote: "Gateway to Africa isn’t just a business book—it’s a powerful story of ambition, risk, and reinvention. Prateek Suri shares his journey with honesty, showing how perseverance and courage built real success across continents. Through lessons on innovation, culture, and timing, he reveals what true entrepreneurship looks like. Bold, insightful, and inspiring, it’s a must-read for anyone aiming to create global impact.",
    authorName: "Priyankshi",
    rating: 5,
  },
  {
    id: 6,
    quote: "Gateway to Africa by Prateek Suri offers a clear and inspiring look at Africa’s business and investment potential. Balancing opportunities with challenges, it provides practical insights for entrepreneurs, investors, and curious readers aiming to explore new markets and global growth.",
    authorName: "Rajashree Hatkar",
    rating: 4,
  },
];

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      api.off("select", () => {});
    };
  }, [api]);

  // Function to render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? "fill-[#FFCF30] text-[#FFCF30]" 
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-[#184151] mb-4">
            Reader <span className="text-[#df5128]">Reviews</span>
          </h2>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="relative w-full px-2 md:px-4"
        >
          <CarouselContent className="-ml-4 md:-ml-8">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id}
                className="basis-full sm:basis-4/5 lg:basis-3/5 xl:basis-1/2 pl-4 md:pl-8"
              >
                <div className="px-1 py-8 md:px-2">
                  <div
                    className={`transition-all duration-700 ease-in-out ${
                      index === current ? "scale-100 opacity-100" : "scale-95 opacity-70"
                    }`}
                  >
                    <div className="relative bg-white shadow-xl transition-all duration-300 border border-gray-200 min-h-[320px] flex flex-col">
                      {/* Quote Icon - Fixed positioning */}
                      <div className="absolute -top-6 left-8 z-10">
                        <div className="bg-[#df5128] p-4 shadow-lg">
                          <Quote className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Content Container with proper padding */}
                      <div className="flex-1 flex flex-col p-8 pt-12">
                        {/* Rating Stars */}
                        <div className="flex justify-center mb-6">
                          <div className="flex gap-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>

                        {/* Testimonial Quote */}
                        <blockquote className="text-gray-700 text-lg leading-relaxed text-center mb-8 font-medium italic flex-1 flex items-center">
                          <span className="line-clamp-6 md:line-clamp-none">"{testimonial.quote}"</span>
                        </blockquote>

                        {/* Author Information */}
                        <div className="text-center border-t border-gray-200 pt-6 mt-auto">
                          <h4 className="font-semibold text-gray-900 text-lg mb-1">
                            {testimonial.authorName}
                          </h4>
                          <p className="text-gray-400 font-semibold text-sm uppercase tracking-wide">
                            Verified Reader
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg border-2 border-gray-200 hover:border-gray-200 hover:bg-gray-200 transition-all duration-300 z-20" />
          <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg border-2 border-gray-200 hover:border-gray-200 hover:bg-gray-200 transition-all duration-300 z-20" />
        </Carousel>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-4 md:mt-12 gap-3">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current 
                  ? "bg-gray-500 scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
// src/components/Footer.tsx
"use client";

import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="text-gray-900 bg-[#fffffc]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
          {/* Website Name / Brand */}
          <div className="text-center">
            <a 
              href="/" 
              className="text-2xl md:text-3xl font-poppins font-semibold hover:text-[#df5128] transition-colors"
            >
              Prateek Suri
            </a>
            <p className="text-gray-400 mt-2 text-sm">
              Indian-born Entrepreneur and Investor
            </p>
          </div>

          {/* Social Media */}
          <div>
            <div className="flex justify-center mt-12 space-x-4">
              <a 
                href="https://x.com/iamprateek_suri" 
                target="_blank" 
                rel="noopener noreferrer"
                className=" text-white p-3 rounded-full hover:bg-orange-800 bg-[#df5128] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/prateeksurii?igsh=M2k3ZWh2YWkzcXZo" 
                target="_blank" 
                rel="noopener noreferrer"
                className=" text-white p-3 rounded-full hover:bg-orange-800 bg-[#df5128] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/akashpasricha" 
                target="_blank" 
                rel="noopener noreferrer"
                className=" text-white p-3 rounded-full hover:bg-orange-800 bg-[#df5128] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:contact@akashpasricha.com" 
                className=" text-white p-3 rounded-full hover:bg-orange-800 bg-[#df5128] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Prateek Suri. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};
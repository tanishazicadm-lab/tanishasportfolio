import React from 'react';
import { Facebook, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              LEADMORE
            </h3>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              Your trusted partner for digital marketing success. We help businesses grow through data-driven strategies and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-pink-600 hover:bg-pink-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-blue-800 hover:bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-400">Google Ads Management</span></li>
              <li><span className="text-gray-400">Meta Ads</span></li>
              <li><span className="text-gray-400">SEO Optimization</span></li>
              <li><span className="text-gray-400">Performance Marketing</span></li>
              <li><span className="text-gray-400">Growth Hacking</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 LEADMORE. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart size={16} className="text-red-500 mx-1" /> for business growth
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
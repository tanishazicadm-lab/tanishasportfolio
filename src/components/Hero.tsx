import React from 'react';
import { Phone, MessageCircle, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          LEADMORE
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
          Your Growth Partner
        </p>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
          "Maximize your business growth with expert Google Ads, Meta Ads, SEO & Performance Marketing"
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="tel:9826702242"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Phone size={20} />
            Call Now 📞 9826702242
          </a>
          
          <a 
            href="https://wa.me/919826702242"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={20} />
            WhatsApp Chat 💬
          </a>
          
          <button 
            onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Target size={20} />
            Book a Free Trial 🎯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
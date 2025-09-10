import React from 'react';
import { Gift, Target } from 'lucide-react';

const SpecialOffer = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center">
              <Gift size={40} className="text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            🔥 Special Offer
          </h2>
          
          <p className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
            "Book a FREE trial of our services today and see the difference before you invest!"
          </p>
          
          <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div>
                <div className="text-3xl font-bold mb-2">✅ Free</div>
                <div className="text-lg">Complete Audit</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">✅ Free</div>
                <div className="text-lg">Strategy Session</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">✅ Free</div>
                <div className="text-lg">Performance Report</div>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-orange-600 px-12 py-6 rounded-full text-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto"
          >
            <Target size={28} />
            Claim My Free Trial
          </button>
          
          <p className="text-white text-lg mt-6 opacity-90">
            No strings attached • No credit card required • Limited time offer
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
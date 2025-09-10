import React from 'react';
import { Users, Target as TargetIcon } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About LEADMORE
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <Users size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Our Team</h3>
                  <p className="text-gray-400">Digital Marketing Experts</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">TP</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Tanisha Parma</h4>
                    <p className="text-gray-300">Lead Marketing Strategist</p>
                    <p className="text-sm text-gray-400">Expert in Google Ads & Performance Marketing</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">LT</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Lead Team</h4>
                    <p className="text-gray-300">SEO & Social Media Specialists</p>
                    <p className="text-sm text-gray-400">Certified professionals with 5+ years experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 p-8 rounded-2xl border border-purple-700">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <TargetIcon size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              
              <blockquote className="text-xl text-gray-200 leading-relaxed italic border-l-4 border-purple-500 pl-6">
                "At LEADMORE, we help businesses scale smarter with cutting-edge digital marketing solutions. 
                Our data-driven approach ensures every campaign delivers measurable results and sustainable growth."
              </blockquote>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">300%</div>
                  <div className="text-gray-300">Avg. ROI Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
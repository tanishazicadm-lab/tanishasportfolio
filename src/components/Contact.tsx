import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300">
            Ready to accelerate your business growth? Contact us today!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-3xl font-bold mb-8 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">Phone</h4>
                    <a 
                      href="tel:9826702242" 
                      className="text-gray-300 hover:text-green-400 transition-colors text-lg"
                    >
                      9826702242
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">Email</h4>
                    <a 
                      href="mailto:tanishaparmaal@gmail.com" 
                      className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
                    >
                      tanishaparmaal@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/919826702242" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-green-400 transition-colors text-lg"
                    >
                      Chat with us instantly
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">Business Hours</h4>
                    <p className="text-gray-300 text-lg">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-cyan-900 to-blue-900 p-8 rounded-2xl border border-cyan-700">
              <h3 className="text-2xl font-bold mb-6 text-white">Quick Actions</h3>
              
              <div className="space-y-4">
                <a
                  href="tel:9826702242"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                
                <a
                  href="https://wa.me/919826702242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
                
                <a
                  href="mailto:tanishaparmaal@gmail.com"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail size={20} />
                  Email Us
                </a>
              </div>
              
              <div className="mt-8 p-6 bg-black bg-opacity-30 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300">Response Time</div>
                  <div className="text-sm text-gray-400 mt-2">We're always here to help!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
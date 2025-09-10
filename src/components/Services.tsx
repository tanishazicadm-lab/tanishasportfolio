import React from 'react';
import { Search, Target, TrendingUp, Zap, Rocket } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: "Google Ads Management",
    description: "Maximize ROI with expertly managed Google Ads campaigns that drive qualified leads and boost conversions."
  },
  {
    icon: TrendingUp,
    title: "Meta (Facebook & Instagram) Ads",
    description: "Reach your ideal audience with compelling social media ads that increase brand awareness and drive sales."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search results with comprehensive SEO strategies that improve visibility and organic traffic."
  },
  {
    icon: Zap,
    title: "Performance Marketing",
    description: "Data-driven campaigns focused on measurable results and continuous optimization for maximum impact."
  },
  {
    icon: Rocket,
    title: "Growth Hacking",
    description: "Innovative strategies and rapid experimentation to accelerate your business growth exponentially."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to accelerate your business growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { BarChart3, Target, Award, FileText } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: "Data-Driven Strategies",
    description: "Every decision backed by comprehensive analytics and market insights"
  },
  {
    icon: Target,
    title: "ROI-Focused Campaigns",
    description: "Maximizing returns on every marketing dollar invested"
  },
  {
    icon: Award,
    title: "Certified Experts",
    description: "Google & Meta certified professionals with proven track records"
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    description: "Clear, detailed reports showing exactly where your money goes"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-300">
            We deliver results that matter to your bottom line
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-green-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">
                ✅ {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
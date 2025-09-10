import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: "Rajesh Kumar",
    business: "E-commerce Store Owner",
    rating: 5,
    review: "LEADMORE transformed our online presence! Our Google Ads ROI increased by 400% in just 3 months. Highly recommended!",
    initial: "RK"
  },
  {
    name: "Priya Sharma",
    business: "Restaurant Chain",
    rating: 5,
    review: "Outstanding service! Their Meta ads strategy helped us increase foot traffic by 250%. The team is professional and results-driven.",
    initial: "PS"
  },
  {
    name: "Amit Patel",
    business: "SaaS Company",
    rating: 5,
    review: "The SEO optimization work was exceptional. We moved from page 3 to #1 rankings for our key terms. Revenue doubled!",
    initial: "AP"
  },
  {
    name: "Neha Gupta",
    business: "Fashion Brand",
    rating: 5,
    review: "LEADMORE's growth hacking strategies are innovative and effective. Our social media engagement increased by 500%!",
    initial: "NG"
  }
];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Client Reviews
          </h2>
          <p className="text-xl text-gray-300">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-2xl border border-gray-700 shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">{reviews[currentReview].initial}</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{reviews[currentReview].name}</h3>
                <p className="text-gray-400">{reviews[currentReview].business}</p>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-yellow-500 fill-yellow-500 mr-1"
                />
              ))}
            </div>
            
            <blockquote className="text-xl text-gray-200 leading-relaxed italic">
              "{reviews[currentReview].review}"
            </blockquote>
          </div>
          
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors border border-gray-600"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors border border-gray-600"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? 'bg-yellow-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
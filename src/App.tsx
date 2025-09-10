import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Reviews from './components/Reviews';
import SpecialOffer from './components/SpecialOffer';
import EnquiryForm from './components/EnquiryForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Reviews />
      <SpecialOffer />
      <EnquiryForm />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
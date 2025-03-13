import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Students from '../components/Students';
import Features from '../components/Features';
import Newsletter from '../components/Newsletter';
import NLFooter from '../common/NLFooter';
import NLHeader from '../common/NLHeader';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="bg-gray-800 text-white transition duration-500">
      <NLHeader/>
      <main className="custom-container mx-auto py-6 px-4">
      <Hero />
      <Services />
      <Students />
      <Features />
      <Newsletter />
      </main>
      <NLFooter />
    </div>
  );
}

export default Landing;

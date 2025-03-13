import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-around bg-blue-50 py-12 px-6 lg:px-12 custom-container">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold text-blue-500">Join Our Community</h1>
        <div
          className="mt-8 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-white hover:shadow-2xl"
        >
          <Link to="/services" className='hover:text-white'>Explore</Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img src="/public/home.jpg" alt="Community" className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
}

export default HeroSection;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() { 
  const navigate = useNavigate();

  return(
  <section className="bg-hero-pattern bg-cover bg-center py-20 text-center">
    <div className="custom-container mx-auto my-8 bg-transparent">
      <h1 className="text-5xl font-bold mb-4 text-white">Unlock Your True Potential</h1>
      <p className="text-lg mb-6 text-gray-300">
        Maximize your productivity with our tools, designed for student success.
      </p>
      <button
      onClick={() => navigate('/login')}
      className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-600"
    >
      Start Now for Free
    </button>
    </div>
  </section>
);
}

export default Hero;

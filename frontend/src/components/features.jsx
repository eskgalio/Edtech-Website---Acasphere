import { Link } from 'react-router-dom';
import React from 'react';

const features = [
  { title: 'User-Friendly Interface', description: 'Simple and easy to use.' },
  { title: 'Performance Tracking', description: 'Track your progress.' },
  { title: 'Cross-Platform Accessibility', description: 'Access from anywhere.' },
];

const Features = () => (
  <section className="py-8 bg-gray-800 text-center pb-12">
    <div className="custom-container">
      <h2 className="text-3xl font-semibold text-blue-500 mb-6">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition duration-300 hover-pop-up">
            <h3 className="text-xl font-semibold text-blue-500">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;


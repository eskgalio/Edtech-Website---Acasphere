import React from 'react';
import { Link } from 'react-router-dom';

function AboutSection() {
  return (
    <section className="about-section py-12 lg:px-12 flex flex-col lg:flex-row items-center justify-between bg-gray-800 custom-container">
      <div className="lg:w-1/2 space-y-6 mr-20">
        <h2 className="text-4xl font-bold mb-6 text-white">
          About Us
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          In today's fast-paced academic environment, students face the challenge of managing their time, resources, and tasks effectively. 
          With numerous online tools, it can be overwhelming to juggle multiple platforms for tracking assignments, scheduling study sessions, 
          and collaborating with peers. This fragmentation often results in decreased productivity, missed deadlines, and increased stress.
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          Our project was motivated by the need to streamline the student experience. By centralizing essential productivity tools into a 
          single Progressive Web Application (PWA), we empower students to access their critical resources from any device, ensuring 
          uninterrupted productivity whether they're on the go or at their desks.
        </p>
        <div className="flex space-x-6 mt-6">
          <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-110">
            <i className="ri-facebook-circle-line text-3xl"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-110">
            <i className="ri-twitter-line text-3xl"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-110">
            <i className="ri-instagram-line text-3xl"></i>
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <img src="/public/profile.jpg" alt="Profile" className="rounded-lg shadow-lg w-64 lg:w-auto ml-16" />
      </div>
    </section>
  );
}

export default AboutSection;

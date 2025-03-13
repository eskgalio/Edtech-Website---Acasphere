import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NLFooter() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-white hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
            AcaSphere
          </h2>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Empowering students to excel academically with resources, tools, and a supportive community.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg text-white">Why AcaSphere?</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-400">
            <li className="flex items-center">
              <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-3"></span>
              Access curated study materials and resources.
            </li>
            <li className="flex items-center">
              <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-3"></span>
              Collaborate with peers on projects and tasks.
            </li>
            <li className="flex items-center">
              <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-3"></span>
              Stay organized with personalized planning tools.
            </li>
            <li className="flex items-center">
              <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-3"></span>
              Join a community focused on academic success.
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg text-white">Connect with Us</h3>
          <p className="mt-4 text-gray-400 text-sm">
            Follow us on social media for updates, resources, and opportunities.
          </p>
          <div className="flex mt-6 space-x-6 justify-center md:justify-start">
            {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-110"
                aria-label={`Visit our ${Icon.displayName} page`}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 mt-10 pt-6 border-t border-gray-700">
        <p className="text-center md:text-left">© 2024 AcaSphere. All rights reserved.</p>
        <p className="mt-4 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-blue-400 transition duration-300 ease-in-out">
            Privacy Policy
          </Link>
          {' '}|{' '}
          <Link to="/terms" className="hover:text-blue-400 transition duration-300 ease-in-out">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default NLFooter;

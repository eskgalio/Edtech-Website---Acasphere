import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-4 border-t border-gray-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105">
            AcaSphere
          </h2>
          <p className="mt-2 text-sm text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out">
            Empowering students with knowledge and resources for a brighter future.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {[{name:'Courses',link:"/study-catalog"}, 
            {name:'Student Resources',link:"/notes-repository"},
            {name: 'Blog',link:"#"},
            ].map(({name,link}) => (
              <li key={name}>
                <Link to={link} >{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg text-white">Support</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {[{name:'FAQs',link:"/faq"}, 
            {name:'Contact Support',link:"/contact"},
            {name: 'Services',link:"/services"},
            {name:'Privacy Policy',link:"/privacy-policy"}
            ].map(({name,link}) => (
              <li key={name}>
                <Link to={link} >{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg text-white">Stay Updated</h3>
          <p className="mt-2 text-sm text-gray-400">Subscribe to our newsletter for the latest updates!</p>
          <div className="flex mt-3">
            <input 
              type="email" 
              placeholder="Your email" 
              className="text-white px-3 py-2 w-full rounded-l-md focus:outline-none text-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
            />
            <button className="bg-yellow-500 hover:bg-blue-600 text-gray-800 px-4 py-2 rounded-r-md font-semibold transition duration-300 ease-in-out transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-between text-sm text-gray-500 mt-8 pt-4 border-t border-gray-600">
        <div className="flex space-x-4 mb-4 md:mb-0">
          {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-110">
              <Icon size={20} />
            </a>
          ))}
        </div>
        <p className="text-center">© 2024 AcaSphere. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

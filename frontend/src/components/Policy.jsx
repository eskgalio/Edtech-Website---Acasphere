import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Policy = () => {
  const policies = [
    { 
      title: "Data Collection",
      content: "We collect information you provide directly to us when you create an account, fill out a form, request customer support, or otherwise communicate with us. This data includes your name, email address, and any other relevant details needed to provide our services."
    },
    { 
      title: "Data Usage",
      content: "We use your data to provide, maintain, and improve our services, to communicate with you about your account, and to send important notices. We may also use your data for analytics to enhance user experience." 
    },
    { 
      title: "Data Sharing",
      content: "We do not share your personal data with third parties except as required by law or with trusted service providers who assist us in operating our website. All third-party partners adhere to our privacy standards."
    },
    { 
      title: "Data Security",
      content: "We implement advanced security measures, such as data encryption and secure servers, to protect your personal information from unauthorized access. Our systems are updated regularly to defend against security threats."
    },
    { 
      title: "User Rights",
      content: "You have the right to access, correct, or delete your personal data. Please contact our support team if you wish to exercise these rights, and we will process your request in a timely manner."
    },
    { 
      title: "Cookie Policy",
      content: "Our website uses cookies to improve your browsing experience, understand user behavior, and personalize content. You can disable cookies in your browser settings, but this may affect your user experience."
    },
    { 
      title: "Changes to Policy",
      content: "We may update our security and privacy policy from time to time. Significant changes will be communicated to you via email or through a notification on our website."
    },
    { 
      title: "User Responsibility",
      content: "As a user, you are responsible for safeguarding your account information, including your password. Avoid sharing your credentials with others and ensure your device is secure. By adhering to these practices, you help protect your data and maintain a secure platform for all users."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const togglePolicy = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl text-center mb-8 text-white font-bold">Security & Privacy Policy</h2>
      <p className="text-center text-gray-400 mb-12">Your privacy and security are essential to us. Please read through our policies below to understand how we protect your data and what we expect from users to ensure a secure environment.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {policies.map((policy, index) => (
          <div 
            key={index} 
            className="bg-gray-700 text-white border border-gray-300 rounded-lg shadow-md transition-shadow hover:shadow-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 font-medium text-md text-white hover:text-blue-600 focus:outline-none transition-colors duration-300"
              onClick={() => togglePolicy(index)}
            >
              <span>{policy.title}</span>
              <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                ▼
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-2 bg-gray-500 text-white transition-all duration-500 ease-in-out">
                {policy.content}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-md text-white space-y-4 border">
        <h3 className="text-3xl font-semibold text-white">Legal Information</h3>
        
        <div className="space-y-2">
          <h4 className="text-xl font-medium">Disclaimer</h4>
          <p>This platform and its contents are provided for informational purposes only. While we strive to ensure accuracy, we make no guarantees regarding the completeness or reliability of the information provided. Users assume all responsibility for any actions taken based on the information or services offered.</p>
        </div>

        <div className="space-y-2">
          <h4 className="text-xl font-medium">Declaration</h4>
          <p>Our platform is committed to respecting user privacy and ensuring data security. We comply with applicable laws and best practices in data protection. By using this website, you acknowledge and accept the terms set forth in this policy.</p>
        </div>

        <div className="space-y-2">
          <h4 className="text-xl font-medium">Copyright Notice</h4>
          <p>© {new Date().getFullYear()} [Your Company Name]. All rights reserved. No part of this website, including its content, images, and design, may be reproduced, distributed, or transmitted in any form without our prior written permission.</p>
        </div>
      </div>
    </div>
  );
};

export default Policy;

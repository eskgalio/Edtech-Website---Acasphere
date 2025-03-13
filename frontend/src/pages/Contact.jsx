import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';import ContactSection from '../components/ContactSection';
import VisitUs from '../components/VisitUs';
import NLFooter from '../common/NLFooter';
import NLHeader from '../common/NLHeader';

function Contact() {
  return (
      <div className="bg-gray-800 text-white transition duration-500">
        <NLHeader/>
        <main className="custom-container mx-auto py-6 px-4">
          <ContactSection />
          <VisitUs />
        </main>
        <NLFooter />
      </div>
  );
}

export default Contact;

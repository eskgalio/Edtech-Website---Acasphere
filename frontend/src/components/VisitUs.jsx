import React from 'react';
import { Link } from 'react-router-dom';

const VisitUs = () => {
  return (
    <section className="bg-gray-800 p-6 mt-10 text-white">
      <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
      <p className="mb-6">Feel free to reach out with questions or comments.</p>
      <p className="mb-4">Address: 500 Terry Francine Street, San Francisco, CA 94158</p>
      <p className="mb-4">Opening Hours:</p>
      <ul className="mb-6">
        <li>Mon - Fri: 8:00 am – 8:00 pm</li>
        <li>Saturday: 9:00 am – 7:00 pm</li>
        <li>Sunday: 9:00 am – 9:00 pm</li>
      </ul>
      <div className="map rounded-lg overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.334129826256!2d88.36879581495806!3d22.49599078522273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276b8f0e5f3d7%3A0x5e0f1c1624f04c72!2sB.P.%20Poddar%20Institute%20of%20Management%20and%20Technology!5e0!3m2!1sen!2sin!4v1618354906163!5m2!1sen!2sin"
  width="100%"
  height="300"
  allowfullscreen=""
  loading="lazy"
  class="w-full h-[450px] border rounded-lg"
></iframe>

      </div>
    </section>
  );
};

export default VisitUs;

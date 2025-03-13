import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => (
  <div className="text-white text-center mt-12 custom-container">
    <section>
      <h2 className="text-3xl mb-6">Our Services</h2>
      <div className="flex justify-center mb-6">
        <img src="public/service1.jpg" alt="Main Image" className="w-full max-w-3xl rounded-lg border-4" />
      </div>
      <p className="text-lg max-w-2xl mx-auto text-gray-300">This is your Services Page. It's a great opportunity to provide information about the services you provide. Double click on the text box to start editing your content and make sure to add all the relevant details you want to share with site visitors.
        This is your Services Page. It's a great opportunity to provide information about the services you provide.
      </p>
    </section>

    <section className="bg-gray-1000 py-16 text-center">
      <h3 className="text-2xl text-blue-400 mb-8">What We Offer</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition transform hover:scale-105 border">
          <h4 className="text-xl mb-4"><Link to="/todo" className='hover:text-white'>01 Task Management</Link></h4>
          <p className="text-gray-400">A robust task management system allowing students to track assignments, deadlines, and to-dos.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition transform hover:scale-105 border">
          <h4 className="text-xl mb-4"><Link to="/note-taking" className='hover:text-white'>02 Note-Taking and Organization</Link></h4>
          <p className="text-gray-400">Organize notes by subject, tag, and date. Supports rich text formatting and exporting options.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition transform hover:scale-105 border">
          <h4 className="text-xl mb-4"><Link to="/notes-repository" className='hover:text-white'>03 Study Resource Platform</Link></h4>
          <p className="text-gray-400">A platform for study materials, allowing students to upload and download notes and resources.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition transform hover:scale-105 border">
          <h4 className="text-xl mb-4">04 Resource Management</h4>
          <p className="text-gray-400">Store, organize, and access academic materials like lecture notes, research papers, and textbooks.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition transform hover:scale-105 border">
          <h4 className="text-xl mb-4">05 Performance Tracking</h4>
          <p className="text-gray-400">Track grades, attendance, and participation. Monitor progress and identify areas for improvement.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition transform hover:scale-105 border">
          <h4 className="text-xl mb-4">06 Cross-Platform Accessibility</h4>
          <p className="text-gray-400">Access the platform across devices, syncing data between laptops, tablets, and smartphones.</p>
        </div>
      </div>
    </section>

    <section className="py-16 text-center">
      <blockquote className="text-xl italic text-gray-300 mb-4">
        "By leveraging modern web technologies and cloud services, the platform will enhance students' ability to manage their academic responsibilities more efficiently and effectively."
      </blockquote>
      <cite className="text-gray-500">— Author</cite>
    </section>
  </div>
);

export default ServicesSection;

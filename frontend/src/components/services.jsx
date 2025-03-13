import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { title: 'Task Management', img: 'public/service1.jpg',link:"/todo" },
  { title: 'Focus Sessions', img: 'public/service2.jpg',link:"/focus-tools"},
  { title: 'Group Productivity', img: 'public/service3.jpg',link:"/group/dashboard" },
];

const Services = () => (
  <section className="py-12 bg-gray-800 text-center pt-16">
    <div className="custom-container">
      <h2 className="text-3xl font-semibold text-blue-500 mb-2">Services</h2>
      <p className="text-sm text-gray-400 mb-12">
        Access tools that help you track tasks, focus, and collaborate effectively.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition duration-300 hover-pop-up">
            <img src={service.img} alt={service.title} className="h-56 w-80 rounded-lg mx-auto mb-4" />
            <Link to={service.link} className="text-xl font-semibold text-blue-500 ">{service.title}</Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

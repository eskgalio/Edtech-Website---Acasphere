import React from 'react';
import { Link } from 'react-router-dom';

const students = [
  { name: 'Ashley Jones', img: 'public/student1.jpg',details: 'Innovation Leader' },
  { name: 'Dan Francis', img: 'public/student2.jpg', details: 'Academic Excellence Ambassador'},
  { name: 'Alexa Young', img: 'public/student3.jpg', details: 'Community Impact Champion' },
  { name: 'Robert Soza', img: 'public/student4.jpg', details: 'Research Pioneer' },
];

const Students = () => (
  <section className="py-8 bg-gray-800 text-center">
    <div className="custom-container">
      <h2 className="text-3xl font-semibold text-blue-500 mb-2">Our Top Students</h2>
      <p className="text-sm text-gray-400 mb-12">Meet out top Achievers
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {students.map((student, index) => (
          <div key={index} className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition duration-300 hover-pop-up">
            <img src={student.img} alt={student.name} className="h-48 w-52 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-500">{student.name}</h3>
            <p className='text-sm text-gray-600'>{student.details}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Students;

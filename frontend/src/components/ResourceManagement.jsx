import React from 'react';
import { Link } from 'react-router-dom';

export default function ResourceManagement() {
  return (
    <section className="resource-management">
      <h2 className="text-xl font-bold mb-4">My Resources</h2>
      <ul className="space-y-2">
        <li className="bg-white text-black p-4 rounded-lg">Research Paper: AI in Education</li>
        <li className="bg-white text-black p-4 rounded-lg">Textbook: Algorithms and Data Structures</li>
      </ul>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"><Link to="/notes-upload" className='hover:text-white'>Upload Resource</Link></button>
    </section>
  );
}

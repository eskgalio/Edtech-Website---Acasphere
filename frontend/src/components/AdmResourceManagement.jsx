import React from 'react';
import { Link } from 'react-router-dom';

function ResourceManagement() {
  return (
    <section className="resource-management">
      <h2 className="text-2xl font-bold mb-4">Resource Management</h2>
      <ul className="space-y-4">
        <li className="bg-white text-black p-4 rounded-lg shadow-md flex justify-between items-center">
          <p>AI in Education (PDF)</p>
          <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded">Remove</button>
        </li>

        <li className="bg-white text-black p-4 rounded-lg shadow-md flex justify-between items-center">
          <p>Data Structures: Lecture Notes (PPT)</p>
          <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded">Remove</button>
        </li>

      </ul>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded">Upload New Resource</button>
    </section>
  );
}

export default ResourceManagement;

import React from 'react';
import { Link } from 'react-router-dom';

export default function NoteTaking() {
  return (
    <section className="note-taking">
      <h2 className="text-xl font-bold mb-4">Recent Notes</h2>
      <ul className="space-y-2">
        <li className="bg-white text-black p-4 rounded-lg">Data Structures: Linked List</li>
        <li className="bg-white text-black p-4 rounded-lg">Operating Systems: Memory Management</li>
      </ul>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"><Link to="/note-taking" className='hover:text-white'>Add Notes</Link></button>
    </section>
  );
}

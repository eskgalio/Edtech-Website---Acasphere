import React from 'react';
import { Link } from 'react-router-dom';

export default function ChatSection() {
  return (
    <section className="chat-section">
      <h2 className="text-xl font-bold mb-4">Active Chats</h2>
      <ul className="space-y-2">
        <li className="bg-white text-black p-4 rounded-lg">Group Study: Algorithms</li>
        <li className="bg-white text-black p-4 rounded-lg">Class Discussion: Operating Systems</li>
      </ul>
    </section>
  );
}

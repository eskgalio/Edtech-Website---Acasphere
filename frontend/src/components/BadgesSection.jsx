import React from 'react';
import { Link } from 'react-router-dom';

const badges = [
  { icon: '🏆', label: 'Top Achiever', gradient: 'bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500' },
  { icon: '🎖️', label: 'Participation', gradient: 'bg-gradient-to-r from-purple-400 via-blue-500 to-green-400' },
  { icon: '🏅', label: 'Learning Star', gradient: 'bg-gradient-to-r from-green-400 via-teal-500 to-blue-500' },
  { icon: '🛡️', label: 'Defender', gradient: 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500' }
];

const BadgesSection = () => (
  <div className="bg-gray-900 shadow-lg rounded-xl p-8 mt-12 border">
    <h2 className="text-3xl font-semibold mb-6 text-center text-white">Badges Earned</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 justify-items-center">
      {badges.map((badge, idx) => (
        <div
          key={idx}
          className={`badge relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-105 ${badge.gradient}`}
          style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
        >
          <span className="text-4xl sm:text-5xl">{badge.icon}</span>
          <div className="absolute -bottom-6 text-center w-full text-white font-semibold">
            {badge.label}
          </div>
        </div>
      ))}
      <br />
    </div>
  </div>
);

export default BadgesSection;

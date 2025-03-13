import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => (
  <div className="bg-gray-800 rounded-xl p-6 w-full md:w-2/3 profile-card">
    <div className="flex items-center">
      <img src="public/profile.jpg" alt="User Avatar" className="rounded-full w-24 h-24 mr-6" />
      <div>
        <h2 className="text-2xl sm:text-4xl font-bold mb-1">User123</h2>
        <p className="text-sm sm:text-lg text-gray-400"><strong>Level:</strong> 5</p>
        <div className="mt-2">
          <span className="inline-block bg-yellow-400 text-white rounded-full px-3 py-1 text-sm font-semibold">1200 Points</span>
        </div>
      </div>
    </div>
    <div className="mt-6">
      <h3 className="text-xl font-semibold">Current Balance: <span>100 Coins</span></h3>
    </div>
  </div>
);

export default UserProfile;

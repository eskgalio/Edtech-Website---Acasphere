import React from 'react';
import { Link } from 'react-router-dom';

const UserAuthentication = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl">
    <h3 className="text-xl font-semibold mb-4">User Authentication</h3>
    <div className="space-y-4">
      <div>
        <h4 className="font-medium">Single Sign-On (SSO)</h4>
        <p className="text-gray-400">Enable SSO for easier access to your accounts.</p>
        <button type="button" className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white rounded">Enable SSO</button>
      </div>
      <div>
        <h4 className="font-medium">Two-Factor Authentication (2FA)</h4>
        <p className="text-gray-400">Enable 2FA for added security.</p>
        <button type="button" className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white rounded">Enable 2FA</button>
      </div>
    </div>
  </div>
);

export default UserAuthentication;

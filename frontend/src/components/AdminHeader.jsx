import React from 'react';
import { Link } from 'react-router-dom';

function AdminHeader() {
  return (
    <section className="admin-header flex items-center p-6 space-x-4 bg-gray-700 rounded-lg border justify-between">
      <div className="admin-info flex">
      <div className="profile-pic w-24 h-24 mr-4">
        <img src="/student4.jpg" alt="Admin Profile" className="rounded-full object-cover w-full h-full" />
      </div>
      <div>
        <br />
        <h1 className="text-2xl font-bold">Admin Name</h1>
        <p className="text-sm">Administrator, XYZ Platform</p>
        </div>
      </div>
      <div className="flex space-x-4 ml-auto">
        <div className="text-center ml-auto">
          <h3 className="text-xl font-semibold">Total Users</h3>
          <p className="text-2xl">1,024</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Total Resources</h3>
          <p className="text-2xl">540</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Active Chats</h3>
          <p className="text-2xl">80</p>
        </div>
      </div>
    </section>
  );
}

export default AdminHeader;

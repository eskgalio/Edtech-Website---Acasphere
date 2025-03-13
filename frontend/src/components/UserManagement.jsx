import React from 'react';
import { Link } from 'react-router-dom';

function UserManagement() {
  return (
    <section className="user-management">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="space-y-4 mb-4">
        <div className="bg-white text-black p-4 rounded-lg shadow-md flex justify-between items-center">
          <div>
            <p>John Doe</p>
            <span>Email: john.doe@example.com</span>
          </div>
          <div>
            <button className="bg-green-500 hover:bg-green-700 text-white py-1 px-4 rounded">Edit</button>
            <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 ml-2 rounded">Delete</button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white text-black p-4 rounded-lg shadow-md flex justify-between items-center">
          <div>
            <p>Jane Smith</p>
            <span>Email: jane.smith@example.com</span>
          </div>
          <div>
            <button className="bg-green-500 hover:bg-green-700 text-white py-1 px-4 rounded">Edit</button>
            <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 ml-2 rounded">Delete</button>
          </div>
        </div>
      </div>

      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded">Add New User</button>
    </section>
  );
}

export default UserManagement;

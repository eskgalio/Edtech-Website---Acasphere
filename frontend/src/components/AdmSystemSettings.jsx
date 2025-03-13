import React from 'react';
import { Link } from 'react-router-dom';

function SystemSettings() {
  return (
    <section className="system-settings">
      <h2 className="text-2xl font-bold mb-4">System Settings</h2>
      <div className="space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded">Change Theme</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded">Manage Notifications</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded">Backup System</button>
      </div>
    </section>
  );
}

export default SystemSettings;

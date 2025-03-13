import React, { useState } from 'react';

function Settings() {
  const [isAdditionalSettingsOpen, setIsAdditionalSettingsOpen] = useState(false);

  const toggleAdditionalSettings = () => {
    setIsAdditionalSettingsOpen(!isAdditionalSettingsOpen);
  };

  return (
    <section className="flex justify-center items-start min-h-screen bg-cover bg-center p-6" style={{ backgroundImage: "url('public/settings.jpg')" }}>
      <div className="settings-container max-w-5xl w-full p-6 bg-gray-800 bg-opacity-85 rounded-xl shadow-lg border">
        
        <h1 className="text-4xl font-bold mb-6 text-white text-center">Settings</h1>

        <div className="settings-section border-b border-gray-700 mb-6 pb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Account Settings</h2>
          <div className="setting-item flex justify-between items-center mb-4">
            <label className="text-white">Username</label>
            <input type="text" value="student123" className="border border-gray-600 rounded p-2 w-2/3 bg-gray-700 text-white" />
          </div>
          <div className="setting-item flex justify-between items-center mb-4">
            <label className="text-white">Email</label>
            <input type="email" value="student@example.com" className="border border-gray-600 rounded p-2 w-2/3 bg-gray-700 text-white" />
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Change Password</button>
          </div>
        </div>

        <div className="settings-section border-b border-gray-700 mb-6 pb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Display & Notifications</h2>
          <div className="setting-item flex justify-between items-center mb-4">
            <label className="text-white">Theme</label>
            <select className="border border-gray-600 rounded p-2 w-2/3 bg-gray-700 text-white">
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
          <div className="setting-item flex justify-between items-center mb-4">
            <label className="text-white">Email Notifications</label>
            <input type="checkbox" className="ml-2 transform scale-125" defaultChecked />
          </div>
          <div className="setting-item flex justify-between items-center mb-4">
            <label className="text-white">Push Notifications</label>
            <input type="checkbox" className="ml-2 transform scale-125" />
          </div>
        </div>

        <div className="settings-section border-b border-gray-700 mb-6 pb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Progress Tracking</h2>
          <div className="setting-item flex justify-between items-center mb-4">
            <label className="text-white">Enable Progress Tracking</label>
            <input type="checkbox" className="ml-2 transform scale-125" defaultChecked />
          </div>
          <div className="setting-item flex justify-between items-center mb-4">
            <label className="text-white">Track Study Hours</label>
            <input type="checkbox" className="ml-2 transform scale-125" defaultChecked />
          </div>
          <div className="setting-item flex justify-between items-center mb-4">
            <label className="text-white">Track Completed Tasks</label>
            <input type="checkbox" className="ml-2 transform scale-125" defaultChecked />
          </div>
          <div className="setting-item flex justify-between items-center mb-4">
            <label className="text-white">Track Performance Improvement</label>
            <input type="checkbox" className="ml-2 transform scale-125" defaultChecked />
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Save Settings</button>
          </div>
        </div>

        <div className="additional-settings-section">
          <div className="flex justify-between items-center cursor-pointer" onClick={toggleAdditionalSettings}>
            <h2 className="text-2xl font-semibold text-white">Additional Settings</h2>
            <span className="text-xl text-white">{isAdditionalSettingsOpen ? "▲" : "▼"}</span>
          </div>
          {isAdditionalSettingsOpen && (
            <div className="mt-4">
              <div className="setting-item flex justify-between items-center mb-4">
                <label className="text-white">Enable Data Encryption</label>
                <input type="checkbox" className="ml-2 transform scale-125" />
              </div>
              <div className="setting-item flex justify-between items-center mb-4">
                <label className="text-white">Encryption Key</label>
                <input type="password" placeholder="Enter encryption key" className="border border-gray-600 rounded p-2 w-2/3 bg-gray-700 text-white" />
              </div>
              <div className="flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4">Encrypt Data</button>
              </div>
              <div className="setting-item flex justify-between items-center mb-4">
                <label className="text-white">Run Diagnostic Test</label>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Run Test</button>
              </div>
              <div className="setting-item flex justify-between items-center mb-4">
                <label className="text-white">Clear Cache</label>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Clear Cache</button>
              </div>
              <div className="setting-item flex justify-between items-center mb-4">
                <label className="text-white">Reset Application</label>
                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Reset</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Settings;

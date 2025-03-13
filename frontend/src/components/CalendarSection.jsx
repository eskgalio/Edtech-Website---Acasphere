import React from 'react';
import { Link } from 'react-router-dom';

const CalendarSection = () => (
  <section>
    <h2 className="text-3xl font-semibold section-title mb-6">Scheduling and Calendar</h2>
    <div className="bg-gray-700 card hover-effect border rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold">Shared Group Calendar</h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">Create Event</button>
      </div>
      <p className="mb-4">Manage your team's schedule seamlessly with our integrated calendar.</p>
      <div className="bg-gray-800 p-6 rounded-lg">
        <p className="text-center text-gray-400">Calendar Integration Coming Soon</p>
      </div>
    </div>
  </section>
);

export default CalendarSection;

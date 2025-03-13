import React from 'react';
import { Link } from 'react-router-dom';

function CalendarSection() {
  const createEvent = () => {
    alert('Event created.');
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-blue-400">Shared Calendar</h3>
      <p>Manage your team events and sync them with Google Calendar.</p>
      <div className="bg-gray-700 p-4 rounded-lg mt-4 h-64">
        <p className="text-center text-gray-400">Calendar will be displayed here.</p>
      </div>
      <button
        onClick={createEvent}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
      >
        Create Event
      </button>
    </div>
  );
}

export default CalendarSection;

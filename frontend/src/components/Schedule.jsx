import React from 'react';
import { Link } from 'react-router-dom';

const Schedule = () => (
  <section>
    <h1 className="text-3xl font-bold text-blue-500">Event Schedule</h1>
    <br />
    <p>My Event | 15 Sept, 6:00 pm - 16 Sept, 9:00 pm</p>
    <p>Wix Office, 500 Terry Francois Street, San Francisco, CA 94158</p>
    <br />

    <div className="day bg-gray-900 p-4 rounded-xl">
      <h2 className="text-2xl text-blue-500">Sunday, 15 Sept</h2>

      <div className="schedule-item bg-gray-800 border-l-4 border-blue-500 p-4 my-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
        <p>6:30 pm - 7:00 pm: Event 1</p>
      </div>

      <div className="schedule-item bg-gray-800 border-l-4 border-blue-500 p-4 my-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
        <p>7:00 pm - 7:35 pm: Event 2</p>
      </div>

      <div className="schedule-item bg-gray-800 border-l-4 border-blue-500 p-4 my-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
        <p>7:45 pm - 8:15 pm: Event 3</p>
      </div>
    </div>

    <br />

    <div className="day bg-gray-900 p-4 rounded-xl">
      <h2 className="text-2xl text-blue-500">Monday, 16 Sept</h2>

      <div className="schedule-item bg-gray-800 border-l-4 border-blue-500 p-4 my-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
        <p>6:30 pm - 7:00 pm: Event 4</p>
      </div>

      <div className="schedule-item bg-gray-800 border-l-4 border-blue-500 p-4 my-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
        <p>7:00 pm - 7:35 pm: Event 5</p>
      </div>

      <div className="schedule-item bg-gray-800 border-l-4 border-blue-500 p-4 my-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
        <p>7:45 pm - 8:15 pm: Event 6</p>
      </div>
    </div>
  </section>
);

export default Schedule;

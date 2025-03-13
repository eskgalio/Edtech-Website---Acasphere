import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Timetable = () => {
  const [entries, setEntries] = useState([
    { day: 'Monday', time: '09:00', subject: 'Math Homework' },
    { day: 'Monday', time: '11:00', subject: 'Science Lab' },
    { day: 'Tuesday', time: '10:00', subject: 'English Reading' },
    { day: 'Thursday', time: '13:00', subject: 'Physics Lab' },
    { day: 'Saturday', time: '14:00', subject: 'Group Study' },
  ]);
  const [form, setForm] = useState({ subject: '', time: '', day: 'Monday' });

  const addEntry = (e) => {
    e.preventDefault();
    setEntries([...entries, form]);
    setForm({ subject: '', time: '', day: 'Monday' });
  };

  return (
    <section className="timetable-container bg-gray-900 border p-6 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-8">Study Timetable</h2>
      <form onSubmit={addEntry} className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          placeholder="Subject"
          required
          className="form-input flex-1 border bg-gray-700 text-gray-200 p-2 rounded-lg"
        />
        <input
          type="time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          required
          className="form-input border bg-gray-700 text-gray-200 p-2 rounded-lg"
        />
        <select
          value={form.day}
          onChange={(e) => setForm({ ...form, day: e.target.value })}
          className="form-select border bg-gray-700 text-gray-200 p-2 rounded-lg"
        >
          {days.map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        <button type="submit" className="submit-btn bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-2 px-4">
          Add Entry
        </button>
      </form>
      <div className="timetable grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {days.map((day) => (
          <div key={day} className="timetable-day bg-gray-800 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-center text-blue-300">{day}</h4>
            {entries
              .filter((entry) => entry.day === day)
              .map((entry, index) => (
                <div key={index} className="timetable-entry bg-blue-500 p-3 mt-3 rounded-lg text-white">
                  {entry.time} - {entry.subject}
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timetable;

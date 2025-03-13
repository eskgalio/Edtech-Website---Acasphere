import React from 'react';
import { Link } from 'react-router-dom';

const Analytics = () => (
  <div className="mx-12 mt-12">
    <h3 className="text-2xl text-center font-semibold mb-4">Group Analytics</h3>
    <div className="card p-6 hover-pop-up bg-gray-700 rounded-lg shadow-lg border">
      <h4 className="text-lg font-semibold">Performance Overview</h4>
      <div className="mt-4">
        <p>Total Tasks: <strong className="text-blue-500">15</strong></p>
        <p>Completed Tasks: <strong className="text-blue-500">10</strong></p>
        <p>Pending Tasks: <strong className="text-blue-500">5</strong></p>
        <p>Active Members: <strong className="text-blue-500">3</strong></p>
      </div>
    </div>
  </div>
);

export default Analytics;

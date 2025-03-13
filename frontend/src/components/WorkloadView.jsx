import React from 'react';
import { Link } from 'react-router-dom';

const WorkloadView = () => (
  <div className="card p-6 hover-pop-up mx-12 mt-8 bg-gray-700 rounded-lg shadow-lg border">
    <h3 className="text-xl font-semibold mb-4">Workload View</h3>
    <table className="table-auto w-full mt-4">
      <thead>
        <tr>
          <th className="text-left p-2">Member</th>
          <th className="text-left p-2">Tasks Assigned</th>
          <th className="text-left p-2">Completed Tasks</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-700">
          <td className="p-2">John Doe</td>
          <td className="p-2">5</td>
          <td className="p-2">3</td>
        </tr>
        <tr className="bg-gray-700">
          <td className="p-2">Jane Smith</td>
          <td className="p-2">7</td>
          <td className="p-2">5</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default WorkloadView;

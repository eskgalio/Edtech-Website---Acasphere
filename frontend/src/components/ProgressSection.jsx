import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProgressSection = () => {
  const [filter, setFilter] = useState('all');
  const chartData = {
    all: [30, 45, 60, 75, 90, 100],
    tasks: [10, 25, 40, 55, 70, 85],
    files: [5, 15, 30, 40, 50, 65],
  };
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Sample labels for months
    datasets: [
      {
        label: 'Progress',
        data: chartData[filter], // Set data based on filter selection
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'top' },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <section className="py-8">
      <h2 className="text-3xl font-semibold text-center mb-8 section-title">Progress Over Time</h2>
      <div className="bg-gray-800 p-6 border rounded-lg">
        <div className="w-full h-64">
          <Line data={data} options={options} />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <label htmlFor="filter" className="text-white mr-4">Filter by:</label>
        <select
          id="filter"
          className="bg-gray-700 text-white p-2 rounded-lg"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="all">All Activities</option>
          <option value="tasks">Tasks Completed</option>
          <option value="files">Files Uploaded</option>
        </select>
      </div>
    </section>
  );
};

export default ProgressSection;

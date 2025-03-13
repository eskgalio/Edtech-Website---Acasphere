import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function InsightsSection() {
  const [filter, setFilter] = useState('all');

  const chartData = {
    all: [50, 60, 70, 80, 90, 100],
    quality: [30, 40, 55, 65, 75, 85],
    productivity: [20, 30, 45, 60, 70, 90],
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Performance',
        data: chartData[filter],
        backgroundColor: '#4CAF50',
        borderColor: '#388E3C',
        borderWidth: 1,
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

  const generateReport = () => {
    alert('Report generated.');
  };

  return (
    <div className="mt-8 bg-gray-700 p-4 rounded-lg border border-gray-600">
      <h3 className="text-2xl font-semibold">Project Insights</h3>
      <div className="w-full h-64 bg-gray-800 mt-4 p-4 rounded-lg">
        {/* Render Bar chart */}
        <Bar data={data} options={options} />
      </div>
      <div className="flex justify-end mt-4">
        <label htmlFor="filter" className="text-white mr-4">Filter by:</label>
        <select
          id="filter"
          className="bg-gray-700 text-white p-2 rounded-lg"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="all">All Metrics</option>
          <option value="quality">Quality</option>
          <option value="productivity">Productivity</option>
        </select>
      </div>
      <button
        onClick={generateReport}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mt-4"
      >
        Generate Report
      </button>
    </div>
  );
}

export default InsightsSection;

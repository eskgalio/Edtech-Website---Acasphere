import React from 'react';
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

function PerformanceAnalytics() {
  const data = {
    labels: ['CPU', 'Memory', 'Disk', 'Network'],
    datasets: [
      {
        label: 'Usage (%)',
        data: [65, 75, 55, 90], 
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <section className="performance-analytics">
      <h2 className="text-2xl font-bold mb-4">System Performance Analytics</h2>
      <div className="bg-gray-900 p-4 rounded-lg shadow-md h-64">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
}

export default PerformanceAnalytics;

import React from 'react';
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

const PerformanceSection = () => {
  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], 
    datasets: [
      {
        label: 'Performance',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
        tension: 0.3, 
      },
    ],
  };

  const performanceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'top' },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <section><br />
      <h2 className="text-3xl font-semibold section-title mb-6">Performance Tracking</h2>
      <div className="bg-gray-700 card border rounded-lg p-4">
        <h3 className="text-2xl font-bold mb-4">Analytics Dashboard</h3>
        <div className="bg-gray-800 p-6 rounded-lg w-full h-64">
          <Line data={performanceData} options={performanceOptions} />
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;

import React from 'react';
import { Link } from 'react-router-dom';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function PerformanceTracking() {
  const data = {
    labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'],
    datasets: [
      {
        label: 'GPA',
        data: [3.2, 3.4, 3.7, 3.8],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 4,
      },
    },
  };

  return (
    <section className="performance-tracking border p-4 rounded-xl">
      <h2 className="text-xl font-bold mb-4">Performance Tracking</h2>
      <Line data={data} options={options} />
    </section>
  );
}

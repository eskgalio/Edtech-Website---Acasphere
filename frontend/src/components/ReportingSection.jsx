import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ReportingSection = () => {
  const reportData = {
    labels: ['Completed', 'In Progress', 'Pending', 'Overdue'],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ['#4CAF50', '#FFCE56', '#36A2EB', '#FF6384'],
        borderWidth: 0,
      },
    ],
  };

  const reportOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'right' },
    },
  };

  return (
    <section><br />
      <h2 className="text-3xl font-semibold section-title mb-6">Visualization and Reporting</h2>
      <div className="bg-gray-700 card border rounded-lg p-4">
        <h3 className="text-2xl font-bold mb-4">Project Insights</h3>
        <div className="bg-gray-800 p-6 rounded-lg w-full h-64">
          <Pie data={reportData} options={reportOptions} />
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">Generate Report</button>
      </div>
    </section>
  );
};

export default ReportingSection;

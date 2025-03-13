import React from 'react';
import { Link } from 'react-router-dom';

function FeaturesSection() {
  const features = [
    { icon: 'ri-task-line', title: 'Task Management' ,link:"/todo"},
    { icon: 'ri-article-line', title: 'Note-Taking and Documentation', link: '/notes-taking' },
    { icon: 'ri-file-add-line', title: 'Study Resources',link:'/notes-repository' },
    { icon: 'ri-line-chart-line', title: 'Progress Tracking',link:'' },
    { icon: 'ri-team-line', title: 'Collaboration and Communication',link:'/group-dashboard' },
  ];

  return (
    <section className="features-section py-12 px-6 lg:px-12 text-center bg-blue-50 custom-container rounded-xl">
      <h2 className="text-3xl font-semibold mb-8 text-blue-600">Features</h2>
      <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <Feature key={idx} icon={feature.icon} title={feature.title} link={feature.link} />
        ))}
      </div>
    </section>
  );
}

function Feature({ icon, title, link }) {
  return (
    <div className="feature bg-gray-700 text-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500 hover:text-white hover:shadow-2xl">
      <i className={`${icon} text-4xl mb-4 transition duration-300 ease-in-out`}></i>
      <p className="text-lg font-semibold">
        {link ? (
          <a href={link} className="hover:text-blue-200 transition duration-300 ease-in-out">
            {title}
          </a>
        ) : (
          title
        )}
      </p>
    </div>
  );
}

export default FeaturesSection;

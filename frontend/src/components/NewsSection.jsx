import React from 'react';
import { Link } from 'react-router-dom';

function NewsSection() {
  const newsItems = [
    { imgSrc: '/public/news1.jpg', title: '5 Most Promising Fintech Startups', date: 'March 18, 2023', link: '#' },
    { imgSrc: '/public/news2.jpg', title: 'Another Fintech News', date: 'April 22, 2023', link: '#' },
  ];

  return (
    <section className="news-section py-12 px-6 lg:px-12 text-center bg-gray-800 text-white custom-container">
      <h2 className="text-3xl font-semibold mb-8">News</h2>
      <div className="news-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
        {newsItems.map((news, idx) => (
          <NewsItem key={idx} imgSrc={news.imgSrc} title={news.title} date={news.date} link={news.link} />
        ))}
      </div>
      <div className="mt-8">
        <Link to="#" className="text-blue-500 hover:text-blue-600">Read More on Such Topics</Link>
      </div>
    </section>
  );
}

function NewsItem({ imgSrc, title, date, link }) {
  return (
    <div className="news-item bg-blue-50 text-black p-6 rounded-lg shadow-lg hover-pop-up">
      <img src={imgSrc} alt={title} className="rounded-lg mb-4" />
      <h3 className="text-2xl font-semibold">
        <a href={link} className="hover:text-blue-600">{title}</a>
      </h3>
      <p className="text-gray-500">{date}</p>
    </div>
  );
}

export default NewsSection;

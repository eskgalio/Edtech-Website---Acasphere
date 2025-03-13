import React from 'react';
import { Link } from 'react-router-dom';

function NewsCard({ title, date, imgSrc, description ,link}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300">
      <h2 className="text-blue-500 text-xl"><Link to={link}> {title}</Link></h2>
      <p className="text-gray-500">{date}</p>
      <img src={imgSrc} alt="News Image" className="w-full h-auto mt-4" />
      <p className="text-gray-600 mt-4">{description}</p>
      <a href="/news_item" className="text-blue-500 mt-4 block"><Link to={link}> Read More</Link></a>
    </div>
  );
}

export default NewsCard;

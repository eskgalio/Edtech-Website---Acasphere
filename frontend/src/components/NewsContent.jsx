import React from 'react';
import { Link } from 'react-router-dom';

const NewsContent = () => (
  <main className="text-center mt-10">
    <section className="news-content">
      <img src='public/news1.jpg' alt="Fintech Image" className="mx-auto w-full md:w-3/4 lg:w-1/2 rounded-lg shadow-lg fade-in" />
      <p className="mt-5">This is placeholder text. To change this content, double-click on the element and click Change Content.</p>
      <p className="mt-3">The Fintech industry is growing rapidly with these five companies leading the charge...</p>
    </section>
  </main>
);

export default NewsContent;

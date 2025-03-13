import React from 'react';
import { Link } from 'react-router-dom';

function BlogSection() {
  const blogPosts = [
    { imgSrc: '/public/blog1.jpg', title: 'Boost Study Performance', summary: 'Streamline your study routine...', link: '#' },
    { imgSrc: '/public/blog2.jpg', title: 'Enhance Academic Efficiency', summary: 'Improve academic productivity...', link: '#' },
    { imgSrc: '/public/blog3.jpg', title: 'Maximize Student Productivity', summary: 'Stay organized and efficient...', link: '#' },
  ];

  return (
    <section className="blog-section py-12 px-6 lg:px-12 text-center bg-gray-800 text-white custom-container">
      <h2 className="text-3xl font-semibold mb-8">Blog Feed</h2>
      <div className="blog-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, idx) => (
          <BlogPost key={idx} imgSrc={post.imgSrc} title={post.title} summary={post.summary} link={post.link} />
        ))}
      </div>
      <div className="mt-8">
        <Link to="#" className="text-blue-500 hover:text-blue-600">Read More on Such Topics</Link>
      </div>
    </section>
  );
}

function BlogPost({ imgSrc, title, summary, link }) {
  return (
    <div className="blog-post bg-blue-50 text-black p-6 rounded-lg shadow-lg hover-pop-up">
      <img src={imgSrc} alt={title} className="rounded-lg mb-4" />
      <h3 className="text-2xl font-semibold">
        <a href={link} className="hover:text-blue-600">{title}</a>
      </h3>
      <p className="text-gray-500">{summary}</p>
    </div>
  );
}

export default BlogSection;

import { Link } from 'react-router-dom';

function BlogList() {
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <article className="bg-white text-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
          <img src="public/post1.jpg" alt="Post 1" className="rounded-lg mb-4 w-full" />
          <div className="blog-content">
            <h2 className="text-xl font-bold"><Link to="/blog-posts">Boost Study Performance</Link></h2>
            <p className="text-gray-500">1 hour ago &middot; 2 min read</p>
          </div>
        </article>
        <article className="bg-white text-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
          <img src="public/post2.jpg" alt="Post 1" className="rounded-lg mb-4 w-full" />
          <div className="blog-content">
            <h2 className="text-xl font-bold"><Link to="/blog-posts">Enhance Academic Excellence</Link></h2>
            <p className="text-gray-500">1 hour ago &middot; 2 min read</p>
          </div>
        </article>
        <article className="bg-white text-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
          <img src="public/post3.jpg" alt="Post 1" className="rounded-lg mb-4 w-full" />
          <div className="blog-content">
            <h2 className="text-xl font-bold"><Link to="/blog-posts">Recreate your Productive Self</Link></h2>
            <p className="text-gray-500">1 hour ago &middot; 2 min read</p>
          </div>
        </article>
      </section>
    );
  }
  
  export default BlogList;
  
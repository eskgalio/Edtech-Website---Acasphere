import { Link } from 'react-router-dom';

function FeaturedArticles() {
    return (
      <section className="mb-8">
        <h2 className="text-3xl text-white mb-4">Featured Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <article className="bg-white text-gray-900 p-4 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
            <img src="public/news2.jpg" alt="Featured Post 1" className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold"><Link to="/blog-posts">How to Study Efficiently</Link></h3>
            <p className="text-gray-500">5 hours ago &middot; 3 min read</p>
          </article>
        </div>
      </section>
    );
  }
  
  export default FeaturedArticles;
  
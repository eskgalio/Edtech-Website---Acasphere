import Comments from "./Coments";
import { Link } from 'react-router-dom';

function BlogPost() {
    return (
      <article className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-4">Boost Study Performance with AcaSphere's Comprehensive Student Platform</h1>
        <p className="text-gray-600 mb-4">By Jyotirmoy Dutta · 1 hour ago · 2 min read</p>
        <img src="public/post1.jpg" alt="Blog Post Image" className="w-full rounded-lg mb-6" />
        <div className="post-content">
          <p>Are you looking to boost your study performance and streamline your academic experience? Look no further...</p>
        </div>
        <Comments />
      </article>
    );
  }
  
  export default BlogPost;
  
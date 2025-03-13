import Header from '../common/Header';
import BlogPost from '../components/BlogPost';
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; 
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function BlogPosts() {
  const { sessionStatus } = useContext(SessionContext);
const navigate = useNavigate();

useEffect(() => {
  if (sessionStatus === 'inactive') {
    alert('No active session, please log in!');
    setTimeout(() => {
      navigate('/login');
    }, 2000); 
  }
}, [sessionStatus, navigate]); 
  return (
    <div className="bg-gray-800 text-white">
      <Header />
      <main className="p-8 max-w-screen-md mx-auto">
        <BlogPost />
      </main>
      <Footer />
    </div>
  );
}

export default BlogPosts;

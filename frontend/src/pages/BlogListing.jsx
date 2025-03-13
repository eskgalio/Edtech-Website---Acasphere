import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../common/Header";
import BlogList from "../components/BlogList";
import SearchBar from "../components/SearchBar";
import FeaturedArticles from "../components/FeaturedArticles";
import Footer from "../common/Footer";
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext';

const BlogListing = () => {
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
      <Header/>
      <main className="py-8 container mx-auto custom-container">
        <h1 className="text-4xl text-center mb-8">Empowering Students to Succeed Together</h1>
        <SearchBar />
        <FeaturedArticles />
        <BlogList />
      </main>
      <Footer />
    </div>
  );
};

export default BlogListing;

import React, { useState,useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import Footer from '../common/Footer';
import Header from '../common/Header';
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; 

function Newlisting() {
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
    <div className="bg-gray-800 text-gray-100">
        <Header/>
      <main className="max-w-5xl mx-auto p-6 custom-container">
        <h1 className="text-3xl mt-4">Latest News</h1><br />
        <div className="flex justify-between items-center mb-6">
          <input type="text" placeholder="Search News..." className="w-full p-2 rounded-md mr-4 bg-white" />
          <select className="p-2 rounded-md bg-white text-gray-400">
            <option>All Categories</option>
            <option>Fintech</option>
            <option>Technology</option>
            <option>Health</option>
          </select>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NewsCard title="5 most promising Fintech startups" date="March 18, 2023" imgSrc="public/news1.jpg" description="Discover the top Fintech startups..." link="/news-item"/>
          <NewsCard title="Another Fintech News" date="April 05, 2023" imgSrc="public/news2.jpg" description="Exploring innovative approaches in finance..." link="/news-item"/>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default Newlisting;

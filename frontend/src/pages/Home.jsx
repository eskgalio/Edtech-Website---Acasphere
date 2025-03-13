import React, { useContext, useEffect } from 'react';
import Header from '../common/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import NewsSection from '../components/NewsSection';
import BlogSection from '../components/BlogSection';
import Footer from '../common/Footer';
import { useNavigate } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; 

function Home() {
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
    <div className="bg-gray-800 text-white transition duration-500">
      <Header />
      <main className="custom-container mx-auto py-6 px-4">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <NewsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

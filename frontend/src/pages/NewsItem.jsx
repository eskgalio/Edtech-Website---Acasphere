import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import NewsContent from '../components/NewsContent';
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; 

function NewsItem() {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');
    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    faders.forEach(fader => appearOnScroll.observe(fader));
  }, []);
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
      <NewsContent />
      </main>
      <Footer />
    </div>
  );
}

export default NewsItem;

import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; 

const FAQPage = () => {
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
    <div className="bg-gray-800 text-blue-100 min-h-screen">
      <Header/>
      <main className="custom-container mx-auto p-4">
        <FAQ/>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;

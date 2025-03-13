import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContent from '../components/WrkMainContent';
import Footer from '../common/Footer';
import Header from '../common/Header';
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; 

export default function GroupWorkspace() {
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
    <div className='bg-gray-800 text-white transition duration-500'>
        <Header/>
      <div className="bg-gray-800 text-white min-h-screen custom-container">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

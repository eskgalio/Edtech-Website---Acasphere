import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../common/Footer';
import MainDashboard from '../components/MainDashboard';
import Header from '../common/Header';
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; 

function GroupDashboard() {
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
      <div className="flex flex-grow custom-container">
        <MainDashboard />
      </div>
      <Footer />
    </div>
  );
}

export default GroupDashboard;

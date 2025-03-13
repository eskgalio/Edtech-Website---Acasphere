import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SettingsPage from '../components/SettingsPage';
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext';

function GroupUser() {
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
      <Header />
      <div className="font-sans text-white bg-gray-900 min-h-screen custom-container">
        <SettingsPage />
      </div>
      <Footer />
    </div>
  );
}

export default GroupUser;

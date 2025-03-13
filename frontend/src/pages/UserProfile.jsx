import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import Footer from '../common/Footer';
import Header from '../common/Header';
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; 

export default function UserProfile() {
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
    <div className="bg-gray-800 text-white min-h-screen">
        <Header/>
      <div className="custom-container">
        <main className="p-5 space-y-10">
        <ProfileHeader />
        <br />
        </main>
        <Footer />
      </div>
    </div>
  );
}

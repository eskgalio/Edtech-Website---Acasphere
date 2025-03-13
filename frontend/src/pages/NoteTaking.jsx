import Footer from '../common/Footer';
import Header from '../common/Header';
import NotesSection from '../components/NotesSection';
import SessionContext from '../context/SessionContext';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function NoteTaking() {
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
      <Header/>
      <main className="custom-container mx-auto py-6 px-4">
      <NotesSection/>
      </main>
      <Footer />
    </div>
  );
}

export default NoteTaking;

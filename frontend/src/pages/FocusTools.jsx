import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../common/Header";
import Focus from "../components/Focus";
import Footer from "../common/Footer";
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext';

function FocusTools() {
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
      <main className="custom-container">
        <Focus/>
      </main>
      <Footer />
    </div>
  );
}

export default FocusTools;

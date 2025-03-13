import RegisForm from "../components/RegisForm";
import Footer from "../common/Footer";
import Header from "../common/Header";
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; 

function EventRegistration() {
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
      <main className="custom-container mx-auto pb-6 px-4">
      <RegisForm />
      </main>
      <Footer />
    </div>
  );
}

export default EventRegistration;

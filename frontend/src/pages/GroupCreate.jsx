import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../common/Header";
import GroupForm from "../components/GroupForm";
import Footer from "../common/Footer";
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; 

const GroupCreate = () => {
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

  return(
  <div className="bg-gray-800 text-white transition duration-500">
    <Header />
    <main className="py-12">
      <div className="elevated-card p-6 bg-gray-700 sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto rounded-xl">
        <GroupForm />
      </div>
    </main>
    <Footer />
  </div>
  );
};

export default GroupCreate;

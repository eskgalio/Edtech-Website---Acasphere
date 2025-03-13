import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';import Header from '../common/Header';
import Editor from '../components/Editor';
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; 

function App() {
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
        <Editor />
      </main>
      <Footer />
    </div>
  );
}

export default App;

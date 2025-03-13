import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import TaskManager from '../components/TaskManager';
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; 

const Todo = () => {
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
    <div>
      <Header/>
      <main className="flex-grow custom-container p-6">
        <TaskManager />
      </main>
      <Footer />
    </div>
  );
};

export default Todo;

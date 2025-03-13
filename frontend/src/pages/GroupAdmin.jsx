import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import GroupSettings from '../components/GroupSettings';
import ModerationTools from '../components/ModerationTools';
import WorkloadView from '../components/WorkloadView';
import BehaviorTracking from '../components/BehaviorTracking';
import Analytics from '../components/Analytics';
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext';

const GroupAdmin = () => {
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

      <main className="py-12 custom-container">
        <h2 className="text-3xl font-semibold text-center mb-10">Manage Group Settings</h2>
        <GroupSettings />
        <ModerationTools />
        <WorkloadView />
        <BehaviorTracking />
        <Analytics />
      </main>

      <Footer/>
    </div>
  );
};

export default GroupAdmin;

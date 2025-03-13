import React, { useState,useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarSection from '../components/CalendarSection';
import TaskManagementSection from '../components/TaskManagementSection';
import PerformanceSection from '../components/PerformanceSection';
import ReportingSection from '../components/ReportingSection';
import FeedbackSection from '../components/FeedbackSection';
import ProgressSection from '../components/ProgressSection';
import Footer from '../common/Footer';
import Header from '../common/Header';
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; 

const GroupPerformance = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
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
      <main className="custom-container py-12">
        <CalendarSection />
        <TaskManagementSection />
        <PerformanceSection />
        <ReportingSection />
        <FeedbackSection />
        <ProgressSection />
      </main>
      <Footer/>
    </div>
  );
};

export default GroupPerformance;

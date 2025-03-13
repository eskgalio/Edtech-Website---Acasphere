import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import AdminHeader from '../components/AdminHeader';
import UserManagement from '../components/UserManagement';
import ResourceManagement from '../Components/AdmResourceManagement';
import PerformanceAnalytics from '../components/AdmPerformanceAnalytics';
import SystemSettings from '../components/AdmSystemSettings';
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; // Correct path

function AdminSettings() {
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
      <Header />
      <div className="flex">
        <main className="p-6 flex-1 space-y-8">
          <AdminHeader />
          <UserManagement />
          <ResourceManagement />
          <PerformanceAnalytics />
          <SystemSettings />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AdminSettings;

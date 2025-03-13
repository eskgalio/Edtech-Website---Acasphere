import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GroupSearch from "../components/GroupSearch";
import SuggestedGroups from "../components/SuggestedGroups";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; 

function GroupJoin() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
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
      <div className={`custom-container`}>
        <main className="py-12">
          <GroupSearch />
          <SuggestedGroups />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default GroupJoin;

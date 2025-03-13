import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import HeroGame from '../components/HeroGame';
import UserProfile from '../components/UserProfile';
import TaskSections from '../components/TaskSections';
import BadgesSection from '../components/BadgesSection';
import Footer from '../common/Footer';
import Header from '../common/Header';
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; 

ChartJS.register(ArcElement, Tooltip, Legend);

function Gamification() {
  const progressData = {
    labels: ['Progress', 'Remaining'],
    datasets: [
      {
        data: [70, 30], 
        backgroundColor: ['#4CAF50', '#CCCCCC'],
        borderWidth: 0,
      },
    ],
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

  const progressOptions = {
    responsive: true,
    maintainAspectRatio: false, 
    cutout: '75%',
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <Header />
      <div className="custom-container mx-auto p-6">
        <HeroGame />
        <div className="flex flex-wrap md:flex-nowrap rounded-lg bg-gray-800 mb-10 p-4">
          <UserProfile />
          <div className="flex items-center justify-center w-full md:w-1/3 p-6 bg-gray-900 rounded-xl border">
            <h2 className="text-lg sm:text-2xl font-semibold text-center mb-4 mr-4">Progress to Next Level</h2>
            <div className="w-48 h-48"> {/* Fixed container size */}
              <Doughnut data={progressData} options={progressOptions} />
            </div>
          </div>
        </div>
        <TaskSections />
        <BadgesSection />
      </div>
      <Footer />
    </div>
  );
}

export default Gamification;

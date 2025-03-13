import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  RiCloseFill, RiCalculatorFill, RiEdit2Fill, RiCodeSSlashFill, 
  RiTeamFill, RiBook3Fill, RiFocus3Fill, RiMedal2Fill, RiSettings5Fill, 
  RiLogoutBoxRLine, RiHomeFill, RiTodoLine
} from 'react-icons/ri';
import SessionContext from '../context/SessionContext'; 

function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { setSessionStatus } = useContext(SessionContext); 

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/logout', {
        method: 'POST',
        credentials: 'include', // Ensure cookies are sent
      });

      const data = await response.json();
      if (response.status === 200) {
        alert(data.message); // Show logout success message

        // Clear session state in the context
        setSessionStatus('inactive'); // Update session context

        // Redirect to login page
        navigate('/login');
      } else {
        alert(data.message || 'Logout failed. Please try again.'); // Handle errors
      }
    } catch (error) {
      console.error('Logout Error:', error);
      alert('An error occurred during logout.');
    }
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-96 bg-gradient-to-b from-gray-900 to-gray-800 z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-500 ease-out rounded-r-3xl shadow-2xl flex flex-col overflow-hidden`}
      >
        <button
          className="absolute top-4 right-4 text-white text-3xl hover:text-gray-400 transition-colors outline-none"
          onClick={onClose}
        >
          <RiCloseFill className="transform transition-all duration-200 hover:rotate-90" />
        </button>

        <div className="px-6 mt-12 flex items-center space-x-3">
          <div className="text-xl font-semibold">
              <div className="transition-all duration-300 ease-in-out">
                <h1 className="text-white">AcaSphere</h1>
                <p className="text-sm text-gray-400">
                  Empowering Students to Succeed Together
                </p>
              </div>
          </div>
        </div>
        <div className="mt-10 px-6 flex-grow">
          <p className="text-white text-sm font-semibold mb-4">Navigation</p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { name: 'To-do', icon: <RiTodoLine />, link: "/todo" },
              { name: 'Repository', icon: <RiBook3Fill />, link: "/notes-repository" },
              { name: 'Focus', icon: <RiFocus3Fill />, link: "/focus-tools" },
              { name: 'Smart Notes', icon: <RiEdit2Fill />, link: "/note-taking" },
              { name: 'Aptitude', icon: <RiCalculatorFill />, link: "/aptitude" },
              { name: 'Teamwork Space', icon: <RiTeamFill />, link: "/group-dashboard" },
              { name: 'Return Home', icon: <RiHomeFill />, link: "/home" },
            ].map(({ name, icon, link }) => (
              <div
                key={name}
                className="flex items-center space-x-2 text-white cursor-pointer hover:bg-blue-600 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate(link)} // Use navigate for navigation
              >
                <span className="text-2xl">{icon}</span>
                <span className="text-sm hover:text-white">{name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 px-6 flex-grow">
          <p className="text-white text-sm font-semibold mb-4">User Actions</p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { name: "Profile", icon: <RiSettings5Fill />, link: "/user-profile" },
              { name: "Log-Out", icon: <RiLogoutBoxRLine />, action: handleLogout },
            ].map(({ name, icon, link, action }) => (
              <div
                key={name}
                className="flex items-center space-x-2 text-white cursor-pointer hover:bg-blue-600 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={action || (() => navigate(link))}
              >
                <span className="text-2xl">{icon}</span>
                <span className="text-sm hover:text-white">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

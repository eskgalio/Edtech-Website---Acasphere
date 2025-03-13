import React, { useState, useEffect, useContext } from 'react';
import SidebarToggleIcon from './SidebarToggleIcon';
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import SessionContext from '../context/SessionContext'; 

function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [userName, setUserName] = useState(''); 
  const { setSessionStatus } = useContext(SessionContext); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users/profile', {
          method: 'GET',
          credentials: 'include', // Ensure cookies are sent
        });
        const data = await response.json();
        if (response.status === 200) {
          setUserName(data.username); // Set the user's name
        } else {
          console.error('Failed to fetch user details:', data.message);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-gray-800 border-b border-gray-400 custom-container">
        <div className="flex items-center justify-between py-4">
          <SidebarToggleIcon onToggle={toggleSidebar} />
          <div className="text-2xl font-bold">
            <div className="cursor-pointer transition-all duration-300 ease-in-out transform hover:opacity-90">
              <div className="transition-all duration-300 ease-in-out">
                <h1 className="text-white">AcaSphere</h1>
                <p className="text-sm text-gray-400">
                  Empowering Students to Succeed Together
                </p>
              </div>
            </div>
          </div>
          <nav className="space-x-6 ml-auto flex">
            {[
              { name: 'Blog', link: '#' },
              { name: 'News', link: '#' },
              { name: 'Events', link: '#' },
              { name: 'Courses', link: '/study-catalog' },
              { name: 'Help', link: '/contact' },
            ].map(({ name, link }) => (
              <a
                key={name}
                href="#"
                className="text-white hover:text-blue-500 relative"
              >
                <Link to={link}>{name}</Link>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </a>
            ))}
            <a
              href="#"
              className="text-white hover:text-blue-500 relative"
            >
              <Link to="/user-profile">{userName || 'Profile'}</Link>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </a>
          </nav>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
}

export default Header;

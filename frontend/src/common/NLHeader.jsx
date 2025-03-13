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
          credentials: 'include', 
        });
        const data = await response.json();
        if (response.status === 200) {
          setUserName(data.username); 
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

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/logout', {
        method: 'POST',
        credentials: 'include', 
      });
      const data = await response.json();
      if (response.status === 200) {
        alert(data.message); 
        setSessionStatus('inactive'); 
        navigate('/login');
      } else {
        alert(data.message || 'Logout failed. Please try again.'); 
      }
    } catch (error) {
      console.error('Logout Error:', error);
      alert('An error occurred during logout.');
    }
  };

  return (
    <div>
      <header className="sticky top-0 z-50 bg-gray-800 border-b border-gray-400 custom-container">
        <div className="flex items-center justify-between py-2">
        <div className="p-2  mr-4">
<i class="ri-ancient-gate-line text-4xl transition-transform transform hover:scale-110"></i>
</div>          
<div className="text-2xl font-bold">
            <div className="cursor-pointer transition-all duration-300 ease-in-out transform hover:opacity-90">
              <div className="transition-all duration-300 ease-in-out">
                <h1 className="text-white"><Link to="/" className="text-2xl font-bold hover:text-white">AcaSphere</Link></h1>
                <p className="text-sm text-gray-400">
                  Empowering Students to Succeed Together
                </p>
              </div>
            </div>
          </div>
          <nav className="space-x-6 ml-auto flex">
            {[
              { name: 'Home', link: '/home' },
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
          </nav>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
}

export default Header;

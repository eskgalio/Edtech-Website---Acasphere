import React, { createContext, useState, useEffect, useContext } from 'react';
const SessionContext = createContext();

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};

export const SessionProvider = ({ children }) => {
  const [sessionStatus, setSessionStatus] = useState('loading'); 
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const apiEndpoint = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    fetch(`${apiEndpoint}/api/users/check-session`, {
      method: 'GET',
      credentials: 'include', 
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 401) {
          throw new Error('Unauthorized');
        } else {
          throw new Error('Unexpected response');
        }
      })
      .then((data) => {
        if (data && data.message === 'Session is active') {
          setSessionStatus('active');
          setUser(data.user);
          try {
            localStorage.setItem('user', JSON.stringify(data.user));
          } catch (error) {
            console.error('Error storing user data in localStorage:', error);
          }
        } else {
          setSessionStatus('inactive');
          setUser(null);
          localStorage.removeItem('user');
        }
      })
      .catch((error) => {
        console.error('Error checking session:', error);
        setSessionStatus('inactive'); 
        setUser(null);
      });
  }, []);

  return (
    <SessionContext.Provider value={{ sessionStatus, setSessionStatus, user }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;

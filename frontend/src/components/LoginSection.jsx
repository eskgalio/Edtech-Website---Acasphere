import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

const LoginSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); 
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
      const userData = response.data.user;
      localStorage.setItem('user', JSON.stringify(userData));

      alert('Login Successful');
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Invalid Login Credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="flex items-center justify-center h-screen bg-cover bg-center custom-container"
      style={{ backgroundImage: `url('/login.jpg')` }}
    >
      <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full text-center animate-fadeIn">
        <h2 className="text-4xl mb-6">Welcome Back!</h2>
        <p className="text-lg mb-6">Please sign in to continue.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full p-3 mb-4 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full p-3 mb-4 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 text-white rounded-lg ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 transition-transform transform hover:scale-105'
            }`}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        <div className="mt-6">
          <Link to="/privacy-policy" className="text-xs text-gray-400 hover:underline">
            Privacy Policy | Terms of Service
          </Link>
        </div>
        <div className="mt-4">
          <Link to="/contact" className="text-xs text-blue-500 hover:underline">Need Help?</Link>
        </div>
        <p className="mt-4 text-sm">
          Don't have an account? <Link to="/signup" className="text-blue-400 hover:underline">Register</Link>.
        </p>
      </div>
    </section>
  );
};

export default LoginSection;

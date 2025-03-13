import LoginSection from '../components/LoginSection';
import NLFooter from '../common/NLFooter';
import NLHeader from '../common/NLHeader';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="bg-gray-800 text-white">
        <NLHeader/>
      <LoginSection />
      <br />
      <NLFooter />
    </div>
  );
}

export default Login;

import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NLFooter from '../common/NLFooter';
import NLHeader from '../common/NLHeader';
import SignupSection from '../components/SignupSection';

function Signup() {
  return (
    <div className="bg-gray-800 text-white">
        <NLHeader/>
      <SignupSection />
      <br />
      <NLFooter />
    </div>
  );
}

export default Signup;

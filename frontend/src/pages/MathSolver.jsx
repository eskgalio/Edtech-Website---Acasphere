import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadSection from "../components/UploadSection";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { Link } from 'react-router-dom';
import SessionContext from '../context/SessionContext';

function MathSolver() {
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
      <main className="custom-container mx-auto py-6 px-4">
        <div className="text-center mb-8 mt-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500">
            Upload Your Math Formula
          </h1>
          <p className="text-gray-400 mt-2">
            Upload a clear image of your math equation, and we'll help solve it for you!
          </p>
        </div>
        <UploadSection />
        <div className="mt-8 text-center mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-500">Result</h2>
          <div className="bg-gray-700 p-4 mt-4 rounded-lg shadow-lg border">
            <p id="resultText" className="text-gray-400">[Your formula result will appear here]</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MathSolver;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Newsletter(){
  const navigate = useNavigate();
   return(
  <section className="py-16 bg-contact-form text-center w-full">
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl outline-dotted ">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">I want to start my productivity !</h2>
      <form class="contact-form">
      <button
      onClick={() => navigate('/signup')}
      className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg w-full hover:bg-blue-600"
    >
      Start Now
    </button>
      </form>
    </div>
  </section>
);
}

export default Newsletter;

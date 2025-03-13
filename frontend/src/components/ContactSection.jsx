import React, { useState, useRef } from 'react';
import axios from 'axios';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const firstNameRef = useRef('');
  const lastNameRef = useRef('');
  const emailRef = useRef('');
  const messageRef = useRef('');

  const sendContactMessage = async (contactData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/contact', contactData);
      
      if (response.status === 200 || response.status === 201) {
        console.log('Message stored successfully:', response.data.message);
        return response.data;
      } else {
        console.error('Unexpected status code:', response.status);
        throw new Error('Failed to store message');
      }
    } catch (error) {
      console.error('Error sending contact message:', error);
      throw new Error('Failed to store message');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    };

    try {
      setFormData(contactData);
      await sendContactMessage(contactData);
      alert('Message stored successfully!');
    } catch (error) {
      console.error('Error storing message:', error);
      alert('Failed to store message.');
    }
  };

  return (
    <section className="contact-section flex bg-contact-us bg-cover bg-center p-6 rounded-lg mt-8">
      <div className="contact-form w-full md:w-1/2 p-8">
        <h1 className="text-4xl text-black font-bold mb-4">Say Hello</h1>
        <p className="text-black mb-6">Feel free to reach out with questions or comments.</p>
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-4 mb-4">
            <input
              ref={firstNameRef}
              type="text"
              placeholder="First Name"
              required
              className="w-full p-3 bg-gray-100 text-black rounded-xl border-xl focus:border-blue-500"
            />
            <input
              ref={lastNameRef}
              type="text"
              placeholder="Last Name"
              required
              className="w-full p-3 bg-gray-100 text-black rounded-xl border-xl focus:border-blue-500"
            />
          </div>
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            required
            className="w-full mb-4 p-3 bg-gray-100 text-black rounded-xl border-xl focus:border-blue-500"
          />
          <textarea
            ref={messageRef}
            placeholder="Message"
            rows="5"
            required
            className="w-full p-3 bg-gray-100 text-black rounded-xl mb-4 border-xl focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

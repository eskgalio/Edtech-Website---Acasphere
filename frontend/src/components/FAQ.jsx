import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqs = [
    { question: "What is the purpose of this website?", answer: "This website is designed to help students manage their tasks, take notes, track performance, and collaborate effectively." },
    { question: "How can I track my performance?", answer: "The platform includes tools to help you track your progress on assignments, tasks, and exams, giving you insights into areas of improvement." },
    { question: "Is there a collaborative workspace?", answer: "Yes, the website provides a group workspace where students can collaborate on projects and communicate in real-time." },
    { question: "How do I reset my password?", answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions sent to your email." },
    { question: "Can I integrate third-party tools?", answer: "Yes, our platform supports integrations with various third-party tools like Google Drive, Dropbox, and others for file sharing." },
    { question: "Are there any mobile apps available?", answer: "Currently, the platform is optimized for mobile browsers, but we're working on a dedicated mobile app that will be available soon." },
    { question: "How do I contact support?", answer: "You can contact our support team through the 'Help' section, where you'll find options to chat or email us directly." },
    { question: "What happens if I delete my account?", answer: "Deleting your account will remove all your data from the platform permanently. This action cannot be undone." },
    { question: "Is my data secure?", answer: "We prioritize security and use encryption to protect your data. We comply with industry standards for data protection." },
    { question: "How can I add a team member to my project?", answer: "You can invite team members by entering their email address in the 'Team' section of your project settings." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [question, setQuestion] = useState('');

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    alert("Your question has been submitted!");
    setQuestion('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl text-center mb-8 font-bold text-white">Frequently Asked Questions</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-gray-700 text-white border border-gray-200 rounded-lg shadow-md transition-shadow hover:shadow-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 font-medium text-md text-white hover:text-blue-400 focus:outline-none transition-colors duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                ▼
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-2 bg-gray-500 text-white transition-all duration-500 ease-in-out">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
        <div className="mt-12 p-6 bg-gray-900 rounded-lg shadow-md border">
        <h3 className="text-2xl font-semibold text-gray-100 text-center mb-4">Have a Question?</h3>
        <p className="text-center text-gray-100 mb-6">Can't find the answer you're looking for? Submit your question below, and we'll get back to you as soon as possible.</p>
        <form onSubmit={handleQuestionSubmit} className="space-y-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-4 text-black text-lg bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            rows="4"
            placeholder="Type your question here..."
            required
          />
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors duration-300"
          >
            Submit Question
          </button>
        </form>
      </div>
    </div>
  );
};

export default FAQ;

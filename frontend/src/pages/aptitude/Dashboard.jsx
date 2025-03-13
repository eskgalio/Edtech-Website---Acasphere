import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const sections = [
    {
      title: "General Aptitude",
      links: [
        { name: "Arithmetic Aptitude", path: "/aptitude/arithmetic" },
        { name: "Data Interpretation", path: "/aptitude/interpretation" },
        { name: "Online Aptitude Test", path: "/aptitude/general" },
      ],
      icon: "📊",
    },
    {
      title: "Verbal and Reasoning",
      links: [
        { name: "Logical Reasoning", path: "/aptitude/logical" },
        { name: "Verbal Reasoning", path: "/aptitude/verbal" },
        { name: "Non Verbal Reasoning", path: "/aptitude/non-verbal" },
      ],
      icon: "✔️",
    },
    {
      title: "Current Affairs & GK",
      links: [
        { name: "Current Affairs", path: "/aptitude/current-affairs" },
        { name: "Basic General Knowledge", path: "/aptitude/general-knowledge" },
        { name: "General Science", path: "/aptitude/general-science" },
      ],
      icon: "📰",
    },
    {
      title: "Technical MCQs",
      links: [
        { name: "Networking Questions", path: "/aptitude/networking" },
        { name: "Database Questions", path: "/aptitude/database" },
        { name: "Computer Architecture", path: "/aptitude/computer-architecture" },
        { name: "Digital Electronics", path: "/aptitude/digital-electronics" },
      ],
      icon: "🔌",
    },
    {
      title: "Technical Short Answers",
      links: [
        { name: "Software Testing", path: "/aptitude/software-testing" },
        { name: "Web Development", path: "/aptitude/web-dev" },
        { name: "Cloud Computing", path: "/aptitude/cloud" },
        { name: "Cyber Security", path: "/aptitude/cyber-security" },
      ],
      icon: "❓",
    },
    {
      title: "Programming",
      links: [
        { name: "C Programming", path: "/aptitude/c" },
        { name: "Python Programming", path: "/aptitude/python" },
        { name: "Unix Programming", path: "/aptitude/unix" },
        { name: "Java Programming", path: "/aptitude/java" },
      ],
      icon: "💻",
    },
  ];

const Dashboard = () => {
  return (
    <div className="bg-gray-800 text-white transition duration-500">
        <Header/>
        <h1 className="text-green-500 mt-6 px-4 font-bold text-3xl">Welcome to Aptitude Dashboard</h1>
        <p className="px-4">Aptitude questions and answers for your placement inteviews and competitive exams !</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 custom-container mx-auto py-6 px-4">

      {sections.map((section, index) => (
        <div
          key={index}
          className="bg-gray-900  rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-4xl">{section.icon}</span>
            <h3 className="text-green-500 text-xl font-semibold text-gray-800">{section.title}</h3>
          </div>
          <hr />
          <ul className="space-y-2 mt-4">
            {section.links.map((link, idx) => (
              <li key={idx}>
              <Link
                to={link.path}
                className="text-gray-400 hover:text-green-500 cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default Dashboard;

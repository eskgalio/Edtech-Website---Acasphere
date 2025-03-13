import NLHeader from "../common/NLHeader";
import CourseCard from "../components/CourseCard";
import NLFooter from "../common/NLFooter";
import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function StudyCatalog() {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <NLHeader />
      <div className="custom-container mt-8 p-6">
        <input
          type="text"
          placeholder="Search courses..."
          className="border rounded-md p-3 w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 mb-6"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard title="Introduction to Python" description="Learn Python basics, syntax, variables, and functions." />
          <CourseCard title="Web Development" description="Explore HTML, CSS, and JavaScript fundamentals." />
          <CourseCard title="Data Analysis with R" description="Data analysis techniques using R programming." />
          <CourseCard title="Cloud Computing" description="Learn cloud services and deployment models." />
          <CourseCard title="Introduction to Data Science" description="Core principles of statistics, data mining, and ML." />
          <CourseCard title="UI/UX Design Principles" description="Fundamentals of UI/UX design for web and mobile." />
        </div>
        <br /><br />
        <NLFooter/>
      </div>
    </div>
  );
}

export default StudyCatalog;

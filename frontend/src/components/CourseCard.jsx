import { Link } from 'react-router-dom';

function CourseCard({ title, description }) {
    return (
      <div className="course-card bg-gray-700 rounded-lg overflow-hidden transform transition-transform duration-300 shadow-lg hover:scale-105 hover:shadow-2xl">
        <div className="p-6">
          <h2 className="text-blue-400 text-xl font-semibold">{title}</h2>
          <p className="text-gray-400 mt-2">{description}</p>
        </div>
        <div className="bg-blue-600 p-4 text-white text-center rounded-b-lg">
          <span>View Details</span>
        </div>
      </div>
    );
  }
  
  export default CourseCard;
  
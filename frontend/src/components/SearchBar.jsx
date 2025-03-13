import { Link } from 'react-router-dom';

function SearchBar() {
    return (
      <div className="mb-6 flex justify-between items-center">
        <input type="text" placeholder="Search Articles..." className="w-full p-2 text-gray-800 rounded-md mr-4 bg-white" />
        <select className="p-2 rounded-md text-gray-800 bg-white">
          <option>All Categories</option>
          <option>Study Tips</option>
          <option>Technology</option>
          <option>Career</option>
        </select>
        <div className="ml-4 space-x-2">
          <span className="bg-blue-500 text-white p-2 rounded-full cursor-pointer">#Efficiency</span>
          <span className="bg-green-500 text-white p-2 rounded-full cursor-pointer">#Productivity</span>
          <span className="bg-yellow-500 text-white p-2 rounded-full cursor-pointer">#Career</span>
        </div>
      </div>
    );
  }
  
  export default SearchBar;
  
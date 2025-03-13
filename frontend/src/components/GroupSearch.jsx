import React from "react";
import { Link } from 'react-router-dom';

function GroupSearch() {
  const searchGroups = (event) => {
    event.preventDefault();
  };

  return (
    <div className="elevated-card p-6 bg-gray-800">
      <form onSubmit={searchGroups}>
        <div className="mb-4">
          <label htmlFor="groupTag" className="block text-gray-300 font-semibold">Search for a Group</label>
          <input type="text" id="groupTag" className="w-full mt-2 p-2 bg-gray-700 rounded text-white" placeholder="Enter Group Tag" />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
        >
          Search and Join Group
        </button>
      </form>
    </div>
  );
}

export default GroupSearch;

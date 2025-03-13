import React from "react";
import { Link } from 'react-router-dom';

function SuggestedGroups() {
  const joinGroup = (groupName) => {
    alert(`You have joined ${groupName}!`);
  };

  const groups = [
    { name: "Project Alpha", tag: "alpha", members: 5, privacy: "Public" },
    { name: "Marketing Beta", tag: "beta", members: 7, privacy: "Private" },
    { name: "Research Gamma", tag: "gamma", members: 4, privacy: "Public" },
    { name: "Study Group Delta", tag: "delta", members: 10, privacy: "Public" },
  ];

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-blue-400 mb-4">Suggested Groups</h3>
      {groups.map((group) => (
        <div
          key={group.name}
          className="group-card mb-4 p-3 bg-gray-700 rounded-lg border transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
        >
          <h4 className="font-bold">{group.name}</h4>
          <p className="text-sm text-gray-400">Category: {group.privacy}</p>
          <p className="text-sm text-gray-400">Members: {group.members}</p>
          <button
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-lg focus:outline-none"
            onClick={() => joinGroup(group.name)}
          >
            <Link to="/group-workspace" className="hover:text-white">Join</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default SuggestedGroups;

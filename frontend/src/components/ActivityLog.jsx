import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ActivityLog = () => {
  const [filter, setFilter] = useState("all");

  const activities = [
    { text: "Project document updated by Alice", time: "2 hours ago", type: "update" },
    { text: "New file 'Meeting Minutes' uploaded by Bob", time: "4 hours ago", type: "upload" },
    { text: "Deadline for Task 2 extended by Charlie", time: "1 day ago", type: "deadline" },
    { text: 'Jane commented: "Need to review the recent changes."', time: "1 day ago", type: "comment" },
    { text: "Group discussion held at 4 PM yesterday", time: "1 day ago", type: "discussion" },
  ];

  const filteredActivities = activities.filter(activity =>
    filter === "all" || activity.type === filter
  );

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <main className="pb-12">
      <div className="flex justify-between mt-8 mb-4">
        <Link to="/group-workspace" className='p-2 rounded-lg border bg-gray-700 hover:text-white hover:scale-105'>Go Back</Link>
        <select
          value={filter}
          onChange={handleFilterChange}
          className="bg-gray-700 text-white p-2 rounded-md border border-gray-600"
        >
          <option value="all">All Activities</option>
          <option value="upload">File Uploads</option>
          <option value="comment">Comments</option>
          <option value="deadline">Deadline Changes</option>
          <option value="discussion">Discussions</option>
          <option value="update">Updates</option>
        </select>
      </div>
      <h2 className="text-3xl font-semibold text-center mb-8 section-title">Activity Log</h2>
      <div className="activity-log border border-gray-600 rounded-lg bg-gray-900">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((item, index) => (
            <div key={index} className="activity-item flex justify-between p-4 border-b border-gray-700 hover:bg-gray-800 transition-colors">
              <span>{item.text}</span>
              <span className="text-sm text-gray-400">{item.time}</span>
            </div>
          ))
        ) : (
          <div className="p-4 text-gray-400">No activities to display for this filter.</div>
        )}
      </div>
    </main>
  );
};

export default ActivityLog;

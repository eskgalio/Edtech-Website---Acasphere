import React from 'react';
import { Link } from 'react-router-dom';

const ModerationTools = () => (
  <div className="card p-6 hover-pop-up mx-12 mt-8 bg-gray-700 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold mb-4">Moderation Tools</h3>
    <div className="space-y-4">
      <h4 className="text-lg font-semibold">Flagged Content</h4>
      <p>Review and manage flagged content from group members:</p>
      <ul className="space-y-2">
        <li className="p-3 bg-gray-800 rounded-lg border">Post by John Doe: "Inappropriate content here."</li>
        <li className="p-3 bg-gray-800 rounded-lg border">Comment by Jane Smith: "This violates our rules."</li>
      </ul>

      <h4 className="text-lg font-semibold mt-4">Manage Conversations</h4>
      <p>Oversee discussions and manage any inappropriate content:</p>
      <ul className="space-y-2">
        <li className="p-3 bg-gray-800 rounded-lg border">Thread: "Project Updates" - 3 flagged comments.</li>
        <li className="p-3 bg-gray-800 rounded-lg border">Thread: "Feedback Session" - 1 flagged comment.</li>
      </ul>
    </div>
  </div>
);

export default ModerationTools;

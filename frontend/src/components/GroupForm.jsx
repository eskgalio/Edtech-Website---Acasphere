import React, { useState } from "react";
import { Link } from 'react-router-dom';

const GroupForm = () => {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [privacy, setPrivacy] = useState("public");
  const [groupTags, setGroupTags] = useState("project");
  const [inviteTag, setInviteTag] = useState("");
  const [inviteEmail, setInviteEmail] = useState("");
  const [groupLimit, setGroupLimit] = useState(10);
  const [groupLogo, setGroupLogo] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (groupName.trim() && groupDescription.trim()) {
      alert("Group successfully created!");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-4">
        <label htmlFor="groupName" className="block text-gray-300 font-semibold">
          Group Name
        </label>
        <input
          type="text"
          id="groupName"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="w-full mt-2 p-2 bg-gray-900 rounded text-white border"
          placeholder="Enter Group Name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="groupDescription" className="block text-gray-300 font-semibold">
          Group Description
        </label>
        <textarea
          id="groupDescription"
          value={groupDescription}
          onChange={(e) => setGroupDescription(e.target.value)}
          className="w-full mt-2 p-2 bg-gray-900 rounded text-white border"
          rows="3"
          placeholder="Enter Group Description"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 font-semibold">Privacy</label>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="privacy"
              value="public"
              checked={privacy === "public"}
              onChange={() => setPrivacy("public")}
              className="form-radio text-blue-600"
            />
            <span className="ml-2">Public</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              name="privacy"
              value="private"
              checked={privacy === "private"}
              onChange={() => setPrivacy("private")}
              className="form-radio text-blue-600"
            />
            <span className="ml-2">Private</span>
          </label>
        </div>
        <p className="mt-1 text-sm text-gray-400">
          Public groups are visible to everyone, private groups require invites to join.
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="groupTags" className="block text-gray-300 font-semibold">
          Group Tags
        </label>
        <select
          id="groupTags"
          value={groupTags}
          onChange={(e) => setGroupTags(e.target.value)}
          className="w-full mt-2 p-2 bg-gray-900 rounded text-white border"
        >
          <option value="project">Project</option>
          <option value="research">Research</option>
          <option value="study">Study Group</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="inviteTag" className="block text-gray-300 font-semibold">
          Invite Members
        </label>
        <input
          type="text"
          id="inviteTag"
          value={inviteTag}
          onChange={(e) => setInviteTag(e.target.value)}
          className="w-full mt-2 p-2 bg-gray-900 rounded text-white border"
          placeholder="Enter Profile Tag"
        />
        <input
          type="email"
          id="inviteEmail"
          value={inviteEmail}
          onChange={(e) => setInviteEmail(e.target.value)}
          className="w-full mt-2 p-2 bg-gray-900 rounded text-white border"
          placeholder="Enter Email (optional)"
        />
        <p className="mt-1 text-sm text-gray-400">
          Invite members by profile tag or email address.
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="groupLimit" className="block text-gray-300 font-semibold">
          Member Limit
        </label>
        <input
          type="number"
          id="groupLimit"
          value={groupLimit}
          onChange={(e) => setGroupLimit(e.target.value)}
          className="w-full mt-2 p-2 bg-gray-900 rounded text-white border"
          min="1"
          max="100"
        />
        <p className="mt-1 text-sm text-gray-400">
          Set the maximum number of members for this group (1-100).
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="groupLogo" className="block text-gray-300 font-semibold">
          Group Logo (Optional)
        </label>
        <input
          type="file"
          id="groupLogo"
          onChange={(e) => setGroupLogo(e.target.files[0])}
          className="w-full mt-2 p-2 bg-gray-900 rounded text-white border"
        />
      </div>
      <button
        type="submit"
        className="submit-btn w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        <Link to="/group-workspace" className="hover:text-white">Create Group</Link>
      </button>
    </form>
  );
};

export default GroupForm;

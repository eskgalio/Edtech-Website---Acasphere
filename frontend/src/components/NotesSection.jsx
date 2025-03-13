import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';
import { createNote } from '../api/notesAPI'; 

function NotesSection() {
  const [notes, setNotes] = useState('');
  const [priority, setPriority] = useState('low');
  const [deadline, setDeadline] = useState('');
  const [tags, setTags] = useState('');
  const [dependencies, setDependencies] = useState('');
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const sessionResponse = await fetch('/api/users/check-session');
        const sessionData = await sessionResponse.json();

        if (sessionResponse.status === 200 && sessionData.message === 'Session is active') {
          const profileResponse = await fetch('/api/users/profile');
          const profileData = await profileResponse.json();
          setUserData(profileData);
          setEmail(profileData.email); 
        } else {
          console.error('User not authenticated. Session is inactive.');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleNotesChange = (value) => setNotes(value);
  const handlePriorityChange = (e) => setPriority(e.target.value);
  const handleDeadlineChange = (e) => setDeadline(e.target.value);
  const handleTagsChange = (e) => setTags(e.target.value);
  const handleDependenciesChange = (e) => setDependencies(e.target.value);
  const handleStatusChange = (e) => setStatus(e.target.checked ? e.target.name : '');

  const handleDownload = async () => {
    const noteData = `
      Notes: ${notes}
      Priority: ${priority}
      Deadline: ${deadline}
      Tags: ${tags}
      Dependencies: ${dependencies}
      Status: ${status}
      Email: ${email}
    `;

    const blob = new Blob([noteData], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'notes.txt';
    link.click();
    URL.revokeObjectURL(link.href);

    try {
      const response = await fetch('/api/notes/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          notes: notes,
          priority: priority,
          deadline: deadline,
          tags: tags,
          dependencies: dependencies,
          status: status,
          timestamp: new Date().toISOString(),
          useremail: email, // Send user email here
        }),
      });

      if (response.ok) {
        console.log('Notes logged successfully');
      } else {
        console.error('Failed to log notes');
      }
    } catch (error) {
      console.error('Error logging notes:', error);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };

  return (
    <div className="bg-gray-900 shadow-lg rounded-lg p-8 mb-8 border mt-8">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">Notes & Documentation</h2>
      <ReactQuill
        value={notes}
        onChange={handleNotesChange}
        theme="snow"
        modules={modules}
        className="mb-4 p-2 bg-gray-400 text-black"
      />
      <h3 className="text-xl font-semibold text-white mb-4">Priority & Deadlines</h3>
      <select
        className="w-full p-3 border rounded-lg bg-gray-700 text-white mb-8"
        value={priority}
        onChange={handlePriorityChange}
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <input
        type="date"
        className="w-full p-3 border rounded-lg bg-gray-700 text-white mb-8"
        value={deadline}
        onChange={handleDeadlineChange}
      />
      <h3 className="text-xl font-semibold text-white mb-4">Tags & Categories</h3>
      <input
        type="text"
        placeholder="Add tags..."
        className="w-full p-3 border rounded-lg bg-gray-700 text-white mb-8"
        value={tags}
        onChange={handleTagsChange}
      />
      <div className="flex items-center mb-4">
        <label className="mr-6">
          <input type="checkbox" name="In Progress" onChange={handleStatusChange} />
          <span className="ml-2 text-gray-600">In Progress</span>
        </label>
        <label>
          <input type="checkbox" name="Completed" onChange={handleStatusChange} />
          <span className="ml-2 text-gray-600">Completed</span>
        </label>
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">Attach Files</h3>
      <input
        type="file"
        className="w-full p-3 border rounded-lg bg-gray-700 text-white mb-8"
      />
      <button
        onClick={handleDownload}
        className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Save as Text File
      </button>
    </div>
  );
}

export default NotesSection;

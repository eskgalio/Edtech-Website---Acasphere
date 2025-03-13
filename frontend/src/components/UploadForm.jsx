import React, { useState, useEffect } from 'react';

const UploadForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
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
          setEmail(profileData.email); // Set email directly from user profile
        } else {
          console.error('User not authenticated. Session is inactive.');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !file) {
      setError('Title and file are required!');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);
    formData.append('useremail', email);
    console.log(formData);
    try {
      const response = await fetch('http://localhost:5000/api/repositories', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const newRepository = await response.json();
        alert('Repository uploaded successfully!');
        // Reset form
        setTitle('');
        setDescription('');
        setFile(null);
        setError('');
      } else {
        throw new Error('Failed to upload the repository');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-grey-900 border shadow-md rounded-lg p-6 mb-6 max-w-3xl mx-auto">
      <h3 className="text-2xl font-semibold text-white mb-4">Upload a Repository</h3>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-white">Title</label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-white">Description</label>
          <textarea
            id="description"
            rows="3"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block text-sm font-medium text-white">File</label>
          <input
            type="file"
            id="file"
            className="mt-1 block w-full text-sm text-white file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:bg-gray-50 file:text-gray-700 file:hover:bg-gray-100"
            onChange={handleFileChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Upload Repository
        </button>
      </form>
    </div>
  );
};

export default UploadForm;

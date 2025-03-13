import React, { useEffect, useState } from 'react';
import NoteCard from './NoteCard'; 
import { getRepositories } from '../api/repositoryApi'; 
import { Link } from 'react-router-dom';

const NotesList = () => {
  const [repositories, setRepositories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const data = await getRepositories();
        setRepositories(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredRepositories = repositories.filter((repository) =>
    repository.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    repository.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <h1 className='font-bold text-4xl py-2 mb-6'><i class="ri-git-repository-fill"></i>    Notes Repository</h1>
      <div className="mb-6 flex">
        <input
          type="text"
          placeholder="Search by title or description"
          className="w-full p-2 border border-gray-300 rounded-lg"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="modern-button bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg w-64 flex items-center justify-center ml-2">
        <i className="fas fa-upload mr-2"></i><Link to="/notes-upload" className='hover:text-white'>Upload</Link>
      </button>
      </div>

      <div className="flex-row">
        {filteredRepositories.length > 0 ? (
          filteredRepositories.map((repository) => (
            <NoteCard key={repository._id} repository={repository} />
          ))
        ) : (
          <p>No repositories found</p>
        )}
      </div>
    </div>
  );
};

export default NotesList;

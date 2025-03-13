import React, { useState } from 'react';

const NoteCard = ({ repository }) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(repository.comments || []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `http://localhost:5000/${repository.filePath}`;
    link.download = repository.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleComment = async () => {
    if (!newComment.trim()) {
      alert('Comment cannot be empty!');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/repositories/${repository._id}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: 'Anonymous', text: newComment }),
      });
      if (response.ok) {
        const updatedRepository = await response.json();
        setComments(updatedRepository.comments);
        setNewComment('');
        alert('Comment added!');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div className="bg-gray-900 border shadow-md rounded-lg p-6 mb-4 flex justify-between">
        <div className='flex'>
        <button
        className="bg-green-500 hover:bg-blue-600 text-white text-xl font-bold py-2 px-4 rounded-3xl mr-4"
        onClick={handleDownload}
      >
        <i class="ri-download-2-fill"></i>
      </button>
      <div>
        <h3 className="text-xl font-semibold text-white">{repository.title}</h3>
        <p className="text-gray-400">{repository.description}</p>
        <p className="text-gray-400">Created by : {repository.useremail}</p>
      </div>
        </div>
        <div className="items-center max-w-3xl w-96 flex ml-4">
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mr-4"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button
            className="bg-green-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-md"
            onClick={handleComment}
          >
            <i class="ri-send-plane-2-fill"></i>
          </button>
        </div>
      </div> 
  );
};

export default NoteCard;

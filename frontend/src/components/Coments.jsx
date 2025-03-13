// src/components/Comments.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Comments() {
  const [comments, setComments] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const comment = event.target.comment.value;
    setComments([...comments, { username, comment }]);
    event.target.reset();
  };

  return (
    <section id="comments" className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <div className="space-y-6">
        {comments.map((c, i) => (
          <div key={i} className="border-b border-gray-200 py-4">
            <p className="font-bold">{c.username} says:</p>
            <p className="mt-2">{c.comment}</p>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-semibold mt-6">Leave a Comment</h3>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input type="text" name="username" placeholder="Your name" className="w-full p-2 border border-gray-300 rounded-lg" required />
        <textarea name="comment" placeholder="Your comment" className="w-full p-2 border border-gray-300 rounded-lg" required></textarea>
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Post Comment</button>
      </form>
    </section>
  );
}

export default Comments;

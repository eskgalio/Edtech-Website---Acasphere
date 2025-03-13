import React from 'react';
import { Link } from 'react-router-dom';

function FeedbackSection() {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold text-blue-400">Feedback</h3>
      <form>
        <textarea
          placeholder="Provide your feedback"
          className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mt-4"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackSection;

import React from 'react';
import { Link } from 'react-router-dom';

const FeedbackSection = () => (
  <section><br />
    <h2 className="text-3xl font-semibold section-title mb-6">Feedback</h2>
    <div className="bg-gray-700 card hover-effect border  rounded-lg p-4">
      <h3 className="text-2xl font-bold mb-4">Provide Feedback</h3>
      <form>
        <textarea className="w-full p-4 bg-gray-800 rounded-lg text-white mb-4 border" rows="5" placeholder="Share your thoughts..."></textarea>
        <div className="flex justify-between items-center">
          <div>
            <label className="mr-2">Rate your experience:</label>
            <select className="bg-gray-800 text-white p-2 rounded-lg">
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Good</option>
              <option value="3">3 - Average</option>
              <option value="2">2 - Poor</option>
              <option value="1">1 - Very Poor</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">Submit Feedback</button>
        </div>
      </form>
    </div>
  </section>
);

export default FeedbackSection;

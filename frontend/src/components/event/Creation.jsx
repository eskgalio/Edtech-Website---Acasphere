import React, { useState } from 'react';
import { createEvent } from '../../api/CreationAPI'; 
import { FiPlus, FiMinus, FiArrowUp, FiArrowDown } from 'react-icons/fi'; 

const Creation = () => {
  // Form field states
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventCategory, setEventCategory] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { questionText: '', option1: '', option2: '', option3: '', option4: '', correctAnswer: '' }]);
  };

  const handleRemoveQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleChangeQuestion = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleMoveUp = (index) => {
    if (index === 0) return;
    const updatedQuestions = [...questions];
    const [removed] = updatedQuestions.splice(index, 1);
    updatedQuestions.splice(index - 1, 0, removed);
    setQuestions(updatedQuestions);
  };

  const handleMoveDown = (index) => {
    if (index === questions.length - 1) return; 
    const updatedQuestions = [...questions];
    const [removed] = updatedQuestions.splice(index, 1);
    updatedQuestions.splice(index + 1, 0, removed); 
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!eventName || !eventDate || !eventDescription || !eventCategory || !eventLocation || !maxParticipants) {
      alert('All fields are required.');
      return;
    }
  
    const eventData = {
      name: eventName,
      date: eventDate,
      description: eventDescription,
      category: eventCategory,
      location: eventLocation,
      maxParticipants: maxParticipants,
      questions: questions,
    };
  
    try {
      await createEvent(eventData);
      alert('Event created successfully!');
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Error creating event');
    }
  };

  return (
    <div className="container mx-auto p-8 bg-gray-900 rounded-xl shadow-lg max-w-5xl my-12 border">
      <h1 className="text-3xl font-bold text-center text-indigo-400 mb-6">Create New Event</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Event Form Fields */}
        <div className="space-y-4">
          <label className="block text-lg font-medium text-indigo-400">Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
            className="w-full p-3 bg-white text-black border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
          />
        </div>
        <div className="space-y-4">
  <label className="block text-lg font-medium text-gray-700">Event Date & Time</label>
  <input
    type="datetime-local"
    value={eventDate}
    onChange={(e) => setEventDate(e.target.value)}
    required
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
  />
</div>
        <div className="space-y-4">
          <label className="block text-lg font-medium text-indigo-400">Event Description</label>
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
            className="w-full p-3 bg-white text-black border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
          />
        </div>
        <div className="space-y-4">
          <label className="block text-lg font-medium text-indigo-400">Event Category</label>
          <input
            type="text"
            value={eventCategory}
            onChange={(e) => setEventCategory(e.target.value)}
            required
            className="w-full p-3 bg-white text-black border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
          />
        </div>
        <div className="space-y-4">
          <label className="block text-lg font-medium text-indigo-400">Event Location</label>
          <input
            type="text"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
            className="w-full p-3 bg-white text-black border border-gray-900rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
          />
        </div>
        <div className="space-y-4">
          <label className="block text-lg font-medium text-indigo-400">Max Participants</label>
          <input
            type="number"
            value={maxParticipants}
            onChange={(e) => setMaxParticipants(e.target.value)}
            required
            className="w-full p-3 bg-white text-black border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-400 mb-4">Questions</h3>
          {questions.map((question, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md mb-4 ">
              <div className="space-y-4">
                <label className="block text-lg font-medium text-gray-700">Question Text</label>
                <input
                  type="text"
                  value={question.questionText}
                  onChange={(e) => handleChangeQuestion(index, 'questionText', e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {['option1', 'option2', 'option3', 'option4'].map((option, i) => (
                  <div key={i} className="space-y-2">
                    <label className="block text-lg font-medium text-gray-700">Option {i + 1}</label>
                    <input
                      type="text"
                      value={question[option]}
                      onChange={(e) => handleChangeQuestion(index, option, e.target.value)}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-4 mt-4">
                <label className="block text-lg font-medium text-gray-700">Correct Answer</label>
                <input
                  type="text"
                  value={question.correctAnswer}
                  onChange={(e) => handleChangeQuestion(index, 'correctAnswer', e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => handleRemoveQuestion(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition flex items-center space-x-2 transition transform hover:scale-105 hover:shadow-xl"
                >
                  <FiMinus />
                  <span>Remove Question</span>
                </button>
                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center space-x-2 transition transform hover:scale-105 hover:shadow-xl"
                  >
                    <FiArrowUp />
                    <span>Move Up</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveDown(index)}
                    disabled={index === questions.length - 1}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center space-x-2 transition transform hover:scale-105 hover:shadow-xl"
                  >
                    <FiArrowDown />
                    <span>Move Down</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddQuestion}
            className="bg-green-500 text-white px-6 py-3 rounded-lg w-full mt-4 hover:bg-green-600 transition flex items-center justify-center space-x-2"
          >
            <FiPlus />
            <span>Add Question</span>
          </button>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 transition w-full mt-6"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default Creation;

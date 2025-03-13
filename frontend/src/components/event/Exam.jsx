import React, { useState } from 'react';

const Exam = () => {
  const questions = [
    { id: 1, question: 'What is 2 + 2?', options: ['3', '4', '5'], answer: '4' },
    { id: 2, question: 'What is 3 x 3?', options: ['6', '9', '12'], answer: '9' },
    { id: 3, question: 'What is the capital of France?', options: ['Paris', 'Rome', 'Berlin'], answer: 'Paris' },
  ];

  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (questionId, selectedOption) => {
    setAnswers({ ...answers, [questionId]: selectedOption });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert('Please answer all the questions before submitting.');
    } else {
      setSubmitted(true);
      alert('Exam Submitted! Your answers have been recorded.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-400">Online Exam</h1>
        <p className="text-lg text-purple-400 mt-2">
          Answer all questions and submit when you are ready. Good luck!
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-gray-900 p-4 rounded-lg shadow-lg mb-6 flex justify-between items-center border">
        <p className="text-gray-300 font-medium">
          Question {currentQuestion + 1} of {questions.length}
        </p>
        <p className="text-red-500 font-semibold">Time Remaining: 10:00</p>
      </div>
      <div className="max-w-4xl mx-auto bg-gray-900 border p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-300 mb-4">
          {currentQuestion + 1}. {questions[currentQuestion].question}
        </h2>
        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, i) => (
            <label
              key={i}
              className={`block p-3 text-black border rounded cursor-pointer ${
                answers[questions[currentQuestion].id] === option
                  ? 'bg-blue-100 border-blue-500'
                  : 'bg-gray-50 border-gray-500'
              } hover:bg-blue-50`}
            >
              <input
                type="radio"
                name={`question-${questions[currentQuestion].id}`}
                value={option}
                checked={answers[questions[currentQuestion].id] === option}
                onChange={() => handleChange(questions[currentQuestion].id, option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`px-4 py-2 rounded ${
              currentQuestion === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gray-500 text-white hover:bg-gray-600'
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestion === questions.length - 1}
            className={`px-4 py-2 rounded ${
              currentQuestion === questions.length - 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300"
        >
          Submit Exam
        </button>
      </div>
    </div>
  );
};

export default Exam;

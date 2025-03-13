import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const QuizPage = () => {
  // Mock dataset for questions
  const questionsData = [
    { id: 1, question: "What is the square root of 144?", options: ["10", "12", "14", "16"], correctAnswer: "12" },
    { id: 2, question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], correctAnswer: "Mars" },
    { id: 3, question: "What is the largest mammal in the world?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], correctAnswer: "Blue Whale" },
    { id: 4, question: "If a train travels 60 miles in 1 hour, how far will it travel in 3 hours?", options: ["120 miles", "180 miles", "200 miles", "240 miles"], correctAnswer: "180 miles" },
    { id: 5, question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "HO"], correctAnswer: "H2O" },
    { id: 6, question: "Which number is a prime number?", options: ["4", "9", "17", "20"], correctAnswer: "17" },
    { id: 7, question: "What is 25% of 200?", options: ["25", "50", "75", "100"], correctAnswer: "50" },
    { id: 8, question: "How many continents are there on Earth?", options: ["5", "6", "7", "8"], correctAnswer: "7" },
    { id: 9, question: "Who wrote 'Romeo and Juliet'?", options: ["Mark Twain", "William Shakespeare", "Charles Dickens", "Jane Austen"], correctAnswer: "William Shakespeare" },
    { id: 10, question: "Which is the smallest prime number?", options: ["1", "2", "3", "5"], correctAnswer: "2" },
    { id: 11, question: "What is the boiling point of water at sea level?", options: ["90°C", "100°C", "110°C", "120°C"], correctAnswer: "100°C" },
    { id: 12, question: "If a book costs $15 and you buy 3 books, what is the total cost?", options: ["$30", "$35", "$45", "$50"], correctAnswer: "$45" },
    { id: 13, question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Lettuce", "Pepper"], correctAnswer: "Avocado" },
    { id: 14, question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"], correctAnswer: "Nitrogen" },
    { id: 15, question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], correctAnswer: "6" },
    { id: 16, question: "What is the currency of Japan?", options: ["Dollar", "Yuan", "Yen", "Won"], correctAnswer: "Yen" },
    { id: 17, question: "Which shape has all sides of equal length?", options: ["Rectangle", "Triangle", "Square", "Pentagon"], correctAnswer: "Square" },
    { id: 18, question: "If you roll a standard six-sided die, what is the probability of rolling a 3?", options: ["1/6", "1/3", "1/2", "1"], correctAnswer: "1/6" },
    { id: 19, question: "What is 15 multiplied by 8?", options: ["100", "110", "120", "130"], correctAnswer: "120" },
    { id: 20, question: "Which is the fastest land animal?", options: ["Lion", "Cheetah", "Leopard", "Tiger"], correctAnswer: "Cheetah" },
  ];

  // Helper function to shuffle and select 10 questions
  const getRandomQuestions = (data) => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 20);
  };

  // Initialize state
  const [questions, setQuestions] = useState(getRandomQuestions(questionsData));
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  // Timer functionality
  useEffect(() => {
    if (timeLeft > 0 && !submitted) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !submitted) {
      handleSubmit();
    }
  }, [timeLeft, submitted]);

  // Handle answer selection
  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  // Handle quiz submission
  const handleSubmit = () => {
    setSubmitted(true);
  };

  // Format time for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

    // Calculate score
    const calculateScore = () => {
      return questions.reduce((score, question) => {
        return score + (answers[question.id] === question.correctAnswer ? 1 : 0);
      }, 0);
    };

  return (
    <div className="bg-gray-800 text-white transition duration-500">
      <Header />
      <div className="flex mt-8">
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/arithmetic' className="font-bold text-sm">Arithmetic Aptitude</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">Aptitude Test 1</h1>
          <div className="text-lg text-red-500 font-semibold">
            Time Left: {formatTime(timeLeft)}
          </div>
        </div>
        <form>
          {questions.map((question, index) => (
            <div
              key={question.id}
              className={`mb-6 p-4 border bg-gray-700 ${
                submitted &&
                (answers[question.id] === question.correctAnswer
                  ? "border-green-500"
                  : "border-red-500")
              } rounded-lg`}
            >
              <h2 className="font-semibold text-white mb-2">
                {index + 1}. {question.question}
              </h2>
              <div className="space-y-2">
                {question.options.map((option, idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-3"
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      disabled={submitted}
                      onChange={() =>
                        handleAnswerChange(question.id, option)
                      }
                      className="h-4 w-4 text-green-500 cursor-pointer"
                    />
                    <span
                      className={`${
                        submitted &&
                        option === question.correctAnswer &&
                        "text-green-600 font-bold"
                      } ${
                        submitted &&
                        answers[question.id] === option &&
                        answers[question.id] !== question.correctAnswer &&
                        "text-red-500"
                      }`}
                    >
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              {submitted && (
                <div className="mt-2 text-sm text-gray-500">
                  Correct Answer:{" "}
                  <span className="text-green-600 font-medium">
                    {question.correctAnswer}
                  </span>
                </div>
              )}
            </div>
          ))}
        </form>
        {!submitted && (
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4"
          >
            Submit Quiz
          </button>
        )}
        {submitted && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold text-green-600">Quiz Submitted!</h2>
            <p className="text-gray-400">
              You scored{" "}
              <span className="text-yellow-400 text-xl font-semibold">
                {calculateScore()}
              </span>{" "}
              out of 20.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default QuizPage;

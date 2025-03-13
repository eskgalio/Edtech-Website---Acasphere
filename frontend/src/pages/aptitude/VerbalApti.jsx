import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const VerbalApti = () => {
  // Mock dataset for questions
  const questionsData = [
    {
        "id": 1,
        "question": "Find the odd one out: Happiness, Joy, Excitement, Anger",
        "options": ["Happiness", "Joy", "Excitement", "Anger"],
        "correctAnswer": "Anger"
    },
    {
        "id": 2,
        "question": "Choose the word that is most opposite in meaning to 'Expand'.",
        "options": ["Increase", "Enlarge", "Contract", "Extend"],
        "correctAnswer": "Contract"
    },
    {
        "id": 3,
        "question": "What comes next in the series: Sun, Moon, Earth, ?",
        "options": ["Mars", "Star", "Galaxy", "Planet"],
        "correctAnswer": "Mars"
    },
    {
        "id": 4,
        "question": "Find the synonym of 'Admire'.",
        "options": ["Respect", "Criticize", "Ignore", "Blame"],
        "correctAnswer": "Respect"
    },
    {
        "id": 5,
        "question": "Which word does not belong: Chair, Table, Bed, Water?",
        "options": ["Chair", "Table", "Bed", "Water"],
        "correctAnswer": "Water"
    },
    {
        "id": 6,
        "question": "Choose the word that is most opposite in meaning to 'Generous'.",
        "options": ["Kind", "Stingy", "Liberal", "Friendly"],
        "correctAnswer": "Stingy"
    },
    {
        "id": 7,
        "question": "What is the odd one out: Pen, Book, Marker, Keyboard?",
        "options": ["Pen", "Book", "Marker", "Keyboard"],
        "correctAnswer": "Keyboard"
    },
    {
        "id": 8,
        "question": "Find the synonym of 'Difficult'.",
        "options": ["Easy", "Tough", "Simple", "Plain"],
        "correctAnswer": "Tough"
    },
    {
        "id": 9,
        "question": "Which word is different: Apple, Banana, Potato, Mango?",
        "options": ["Apple", "Banana", "Potato", "Mango"],
        "correctAnswer": "Potato"
    },
    {
        "id": 10,
        "question": "Choose the word that is most opposite in meaning to 'Happy'.",
        "options": ["Joyful", "Cheerful", "Sad", "Excited"],
        "correctAnswer": "Sad"
    },
    {
        "id": 11,
        "question": "Find the word that does not belong: Doctor, Teacher, Engineer, Laptop.",
        "options": ["Doctor", "Teacher", "Engineer", "Laptop"],
        "correctAnswer": "Laptop"
    },
    {
        "id": 12,
        "question": "Find the synonym of 'Quick'.",
        "options": ["Slow", "Fast", "Lazy", "Still"],
        "correctAnswer": "Fast"
    },
    {
        "id": 13,
        "question": "Which word does not belong: School, Hospital, Airplane, College?",
        "options": ["School", "Hospital", "Airplane", "College"],
        "correctAnswer": "Airplane"
    },
    {
        "id": 14,
        "question": "Choose the word that is most opposite in meaning to 'Cold'.",
        "options": ["Hot", "Warm", "Chilly", "Freezing"],
        "correctAnswer": "Hot"
    },
    {
        "id": 15,
        "question": "Which word is different: Circle, Square, Triangle, Ball?",
        "options": ["Circle", "Square", "Triangle", "Ball"],
        "correctAnswer": "Ball"
    },
    {
        "id": 16,
        "question": "Find the synonym of 'Beautiful'.",
        "options": ["Ugly", "Pretty", "Boring", "Plain"],
        "correctAnswer": "Pretty"
    },
    {
        "id": 17,
        "question": "What comes next in the series: Day, Night, Week, ?",
        "options": ["Hour", "Month", "Year", "Minute"],
        "correctAnswer": "Month"
    },
    {
        "id": 18,
        "question": "Choose the word that is most opposite in meaning to 'Increase'.",
        "options": ["Rise", "Boost", "Decrease", "Improve"],
        "correctAnswer": "Decrease"
    },
    {
        "id": 19,
        "question": "Find the odd one out: Dog, Cat, Horse, Spoon.",
        "options": ["Dog", "Cat", "Horse", "Spoon"],
        "correctAnswer": "Spoon"
    },
    {
        "id": 20,
        "question": "Find the synonym of 'Bright'.",
        "options": ["Dull", "Shiny", "Dark", "Plain"],
        "correctAnswer": "Shiny"
    },
    {
        "id": 21,
        "question": "What comes next in the series: Red, Blue, Green, ?",
        "options": ["Orange", "Black", "Yellow", "Pink"],
        "correctAnswer": "Yellow"
    },
    {
        "id": 22,
        "question": "Choose the word that is most opposite in meaning to 'Small'.",
        "options": ["Tiny", "Little", "Large", "Petite"],
        "correctAnswer": "Large"
    },
    {
        "id": 23,
        "question": "Which word does not belong: Car, Bus, Bicycle, Tree?",
        "options": ["Car", "Bus", "Bicycle", "Tree"],
        "correctAnswer": "Tree"
    },
    {
        "id": 24,
        "question": "Find the synonym of 'Happy'.",
        "options": ["Sad", "Joyful", "Angry", "Bored"],
        "correctAnswer": "Joyful"
    },
    {
        "id": 25,
        "question": "Find the odd one out: Pen, Book, Bottle, Marker.",
        "options": ["Pen", "Book", "Bottle", "Marker"],
        "correctAnswer": "Bottle"
    },
      {
          "id": 26,
          "question": "Choose the word that is most opposite in meaning to 'Old'.",
          "options": ["New", "Ancient", "Modern", "Fresh"],
          "correctAnswer": "New"
      },
      {
          "id": 27,
          "question": "What comes next in the series: One, Two, Three, ?",
          "options": ["Four", "Five", "Six", "Seven"],
          "correctAnswer": "Four"
      },
      {
          "id": 28,
          "question": "Find the synonym of 'Angry'.",
          "options": ["Happy", "Mad", "Excited", "Calm"],
          "correctAnswer": "Mad"
      },
      {
          "id": 29,
          "question": "Which word does not belong: Sun, Moon, Planet, Chair?",
          "options": ["Sun", "Moon", "Planet", "Chair"],
          "correctAnswer": "Chair"
      },
      {
          "id": 30,
          "question": "Choose the word that is most opposite in meaning to 'Heavy'.",
          "options": ["Light", "Bright", "Loud", "Weightless"],
          "correctAnswer": "Light"
      },
      {
          "id": 31,
          "question": "Find the synonym of 'Quickly'.",
          "options": ["Slowly", "Rapidly", "Calmly", "Quietly"],
          "correctAnswer": "Rapidly"
      },
      {
          "id": 32,
          "question": "Which word does not belong: Banana, Apple, Carrot, Orange?",
          "options": ["Banana", "Apple", "Carrot", "Orange"],
          "correctAnswer": "Carrot"
      },
      {
          "id": 33,
          "question": "Choose the word that is most opposite in meaning to 'Brave'.",
          "options": ["Courageous", "Fearful", "Strong", "Confident"],
          "correctAnswer": "Fearful"
      },
      {
          "id": 34,
          "question": "Find the synonym of 'Beautiful'.",
          "options": ["Pretty", "Ugly", "Plain", "Simple"],
          "correctAnswer": "Pretty"
      },
      {
          "id": 35,
          "question": "What comes next in the series: Chair, Table, Sofa, ?",
          "options": ["Desk", "Bed", "Couch", "Lamp"],
          "correctAnswer": "Couch"
      },
      {
          "id": 36,
          "question": "Choose the word that is most opposite in meaning to 'Clean'.",
          "options": ["Dirty", "Tidy", "Neat", "Polished"],
          "correctAnswer": "Dirty"
      },
      {
          "id": 37,
          "question": "Find the word that does not belong: Cat, Dog, Fish, Balloon.",
          "options": ["Cat", "Dog", "Fish", "Balloon"],
          "correctAnswer": "Balloon"
      },
      {
          "id": 38,
          "question": "Find the synonym of 'Tiny'.",
          "options": ["Huge", "Small", "Big", "Tall"],
          "correctAnswer": "Small"
      },
      {
          "id": 39,
          "question": "Which word is different: Chair, Desk, Fan, Apple?",
          "options": ["Chair", "Desk", "Fan", "Apple"],
          "correctAnswer": "Apple"
      },
      {
          "id": 40,
          "question": "Choose the word that is most opposite in meaning to 'Dry'.",
          "options": ["Wet", "Moist", "Humid", "Cold"],
          "correctAnswer": "Wet"
      },
      {
          "id": 41,
          "question": "What comes next in the series: Dog, Cat, Bird, ?",
          "options": ["Fish", "Snake", "Horse", "Cow"],
          "correctAnswer": "Fish"
      },
      {
          "id": 42,
          "question": "Find the synonym of 'Cold'.",
          "options": ["Chilly", "Hot", "Warm", "Cool"],
          "correctAnswer": "Chilly"
      },
      {
          "id": 43,
          "question": "Which word does not belong: Window, Door, Roof, Spoon?",
          "options": ["Window", "Door", "Roof", "Spoon"],
          "correctAnswer": "Spoon"
      },
      {
          "id": 44,
          "question": "Choose the word that is most opposite in meaning to 'Fast'.",
          "options": ["Quick", "Slow", "Rapid", "Swift"],
          "correctAnswer": "Slow"
      },
      {
          "id": 45,
          "question": "Find the synonym of 'Happy'.",
          "options": ["Sad", "Joyful", "Upset", "Angry"],
          "correctAnswer": "Joyful"
      },
      {
          "id": 46,
          "question": "Which word does not belong: Car, Truck, Plane, Table?",
          "options": ["Car", "Truck", "Plane", "Table"],
          "correctAnswer": "Table"
      },
      {
          "id": 47,
          "question": "Choose the word that is most opposite in meaning to 'Tall'.",
          "options": ["High", "Short", "Large", "Big"],
          "correctAnswer": "Short"
      },
      {
          "id": 48,
          "question": "Find the synonym of 'Bright'.",
          "options": ["Dull", "Shiny", "Plain", "Dark"],
          "correctAnswer": "Shiny"
      },
      {
          "id": 49,
          "question": "What comes next in the series: Square, Circle, Triangle, ?",
          "options": ["Hexagon", "Rectangle", "Oval", "Star"],
          "correctAnswer": "Rectangle"
      },
      {
          "id": 50,
          "question": "Find the odd one out: Milk, Water, Juice, Chair.",
          "options": ["Milk", "Water", "Juice", "Chair"],
          "correctAnswer": "Chair"
      },  
        {
            "id": 51,
            "question": "Choose the word that is most opposite in meaning to 'Strong'.",
            "options": ["Powerful", "Weak", "Sturdy", "Tough"],
            "correctAnswer": "Weak"
        },
        {
            "id": 52,
            "question": "Find the odd one out: Chair, Table, Fan, Sky.",
            "options": ["Chair", "Table", "Fan", "Sky"],
            "correctAnswer": "Sky"
        },
        {
            "id": 53,
            "question": "Find the synonym of 'Smart'.",
            "options": ["Intelligent", "Dull", "Lazy", "Foolish"],
            "correctAnswer": "Intelligent"
        },
        {
            "id": 54,
            "question": "What comes next in the series: Apple, Banana, Mango, ?",
            "options": ["Orange", "Papaya", "Grapes", "Pineapple"],
            "correctAnswer": "Orange"
        },
        {
            "id": 55,
            "question": "Choose the word that is most opposite in meaning to 'Bright'.",
            "options": ["Shiny", "Dark", "Clear", "Vivid"],
            "correctAnswer": "Dark"
        },
        {
            "id": 56,
            "question": "Find the synonym of 'Big'.",
            "options": ["Small", "Large", "Tiny", "Little"],
            "correctAnswer": "Large"
        },
        {
            "id": 57,
            "question": "Which word does not belong: Dog, Horse, Computer, Cat?",
            "options": ["Dog", "Horse", "Computer", "Cat"],
            "correctAnswer": "Computer"
        },
        {
            "id": 58,
            "question": "What comes next in the series: Sun, Star, Galaxy, ?",
            "options": ["Planet", "Universe", "Asteroid", "Comet"],
            "correctAnswer": "Universe"
        },
        {
            "id": 59,
            "question": "Choose the word that is most opposite in meaning to 'Hot'.",
            "options": ["Cold", "Warm", "Humid", "Dry"],
            "correctAnswer": "Cold"
        },
        {
            "id": 60,
            "question": "Find the synonym of 'Lazy'.",
            "options": ["Diligent", "Industrious", "Idle", "Active"],
            "correctAnswer": "Idle"
        },
        {
            "id": 61,
            "question": "Which word does not belong: Mango, Pineapple, Car, Orange?",
            "options": ["Mango", "Pineapple", "Car", "Orange"],
            "correctAnswer": "Car"
        },
        {
            "id": 62,
            "question": "Choose the word that is most opposite in meaning to 'Soft'.",
            "options": ["Hard", "Gentle", "Smooth", "Light"],
            "correctAnswer": "Hard"
        },
        {
            "id": 63,
            "question": "Find the synonym of 'Happy'.",
            "options": ["Sad", "Excited", "Joyful", "Angry"],
            "correctAnswer": "Joyful"
        },
        {
            "id": 64,
            "question": "What comes next in the series: Winter, Spring, Summer, ?",
            "options": ["Fall", "Rainy", "Dry", "Autumn"],
            "correctAnswer": "Autumn"
        },
        {
            "id": 65,
            "question": "Choose the word that is most opposite in meaning to 'Fast'.",
            "options": ["Quick", "Rapid", "Slow", "Swift"],
            "correctAnswer": "Slow"
        },
        {
            "id": 66,
            "question": "Find the word that does not belong: Paper, Pen, Book, Chair.",
            "options": ["Paper", "Pen", "Book", "Chair"],
            "correctAnswer": "Chair"
        },
        {
            "id": 67,
            "question": "Find the synonym of 'Small'.",
            "options": ["Tiny", "Large", "Big", "Huge"],
            "correctAnswer": "Tiny"
        },
        {
            "id": 68,
            "question": "Which word is different: River, Ocean, Lake, Table?",
            "options": ["River", "Ocean", "Lake", "Table"],
            "correctAnswer": "Table"
        },
        {
            "id": 69,
            "question": "Choose the word that is most opposite in meaning to 'Bright'.",
            "options": ["Shiny", "Dark", "Clear", "Vivid"],
            "correctAnswer": "Dark"
        },
        {
            "id": 70,
            "question": "What comes next in the series: January, February, March, ?",
            "options": ["April", "June", "May", "July"],
            "correctAnswer": "April"
        },
        {
            "id": 71,
            "question": "Find the synonym of 'Old'.",
            "options": ["Modern", "New", "Ancient", "Recent"],
            "correctAnswer": "Ancient"
        },
        {
            "id": 72,
            "question": "Which word does not belong: School, College, Hospital, Tree?",
            "options": ["School", "College", "Hospital", "Tree"],
            "correctAnswer": "Tree"
        },
        {
            "id": 73,
            "question": "Choose the word that is most opposite in meaning to 'Clean'.",
            "options": ["Tidy", "Dirty", "Neat", "Orderly"],
            "correctAnswer": "Dirty"
        },
        {
            "id": 74,
            "question": "Find the synonym of 'Quick'.",
            "options": ["Rapid", "Slow", "Still", "Lethargic"],
            "correctAnswer": "Rapid"
        },
        {
            "id": 75,
            "question": "Which word does not belong: Red, Green, Yellow, Laptop?",
            "options": ["Red", "Green", "Yellow", "Laptop"],
            "correctAnswer": "Laptop"
        },   
          {
              "id": 76,
              "question": "Choose the word that is most opposite in meaning to 'Early'.",
              "options": ["Late", "Soon", "Quick", "Fast"],
              "correctAnswer": "Late"
          },
          {
              "id": 77,
              "question": "What comes next in the series: Monday, Tuesday, Wednesday, ?",
              "options": ["Friday", "Sunday", "Thursday", "Saturday"],
              "correctAnswer": "Thursday"
          },
          {
              "id": 78,
              "question": "Find the synonym of 'Hard'.",
              "options": ["Soft", "Firm", "Smooth", "Gentle"],
              "correctAnswer": "Firm"
          },
          {
              "id": 79,
              "question": "Which word does not belong: Apple, Banana, Orange, Stone?",
              "options": ["Apple", "Banana", "Orange", "Stone"],
              "correctAnswer": "Stone"
          },
          {
              "id": 80,
              "question": "Choose the word that is most opposite in meaning to 'High'.",
              "options": ["Tall", "Short", "Small", "Low"],
              "correctAnswer": "Low"
          },
          {
              "id": 81,
              "question": "Find the synonym of 'Pretty'.",
              "options": ["Beautiful", "Ugly", "Plain", "Homely"],
              "correctAnswer": "Beautiful"
          },
          {
              "id": 82,
              "question": "Which word does not belong: Rain, Snow, Fog, Table?",
              "options": ["Rain", "Snow", "Fog", "Table"],
              "correctAnswer": "Table"
          },
          {
              "id": 83,
              "question": "What comes next in the series: Car, Bus, Train, ?",
              "options": ["Airplane", "Ship", "Cycle", "Truck"],
              "correctAnswer": "Airplane"
          },
          {
              "id": 84,
              "question": "Choose the word that is most opposite in meaning to 'Cold'.",
              "options": ["Warm", "Chilly", "Cool", "Icy"],
              "correctAnswer": "Warm"
          },
          {
              "id": 85,
              "question": "Find the synonym of 'Fast'.",
              "options": ["Quick", "Slow", "Lethargic", "Still"],
              "correctAnswer": "Quick"
          },
          {
              "id": 86,
              "question": "Which word does not belong: Dog, Cat, Fish, Book?",
              "options": ["Dog", "Cat", "Fish", "Book"],
              "correctAnswer": "Book"
          },
          {
              "id": 87,
              "question": "What comes next in the series: North, South, East, ?",
              "options": ["Up", "Down", "West", "Left"],
              "correctAnswer": "West"
          },
          {
              "id": 88,
              "question": "Choose the word that is most opposite in meaning to 'Bright'.",
              "options": ["Clear", "Vivid", "Dark", "Shiny"],
              "correctAnswer": "Dark"
          },
          {
              "id": 89,
              "question": "Find the synonym of 'Easy'.",
              "options": ["Difficult", "Simple", "Hard", "Challenging"],
              "correctAnswer": "Simple"
          },
          {
              "id": 90,
              "question": "Which word does not belong: Square, Circle, Triangle, Tree?",
              "options": ["Square", "Circle", "Triangle", "Tree"],
              "correctAnswer": "Tree"
          },
          {
              "id": 91,
              "question": "Choose the word that is most opposite in meaning to 'Young'.",
              "options": ["Old", "Youthful", "Elderly", "Juvenile"],
              "correctAnswer": "Old"
          },
          {
              "id": 92,
              "question": "What comes next in the series: Pen, Paper, Book, ?",
              "options": ["Notebook", "Eraser", "Chair", "Bag"],
              "correctAnswer": "Notebook"
          },
          {
              "id": 93,
              "question": "Find the synonym of 'Strong'.",
              "options": ["Weak", "Powerful", "Small", "Light"],
              "correctAnswer": "Powerful"
          },
          {
              "id": 94,
              "question": "Which word does not belong: Dog, Horse, Elephant, Laptop?",
              "options": ["Dog", "Horse", "Elephant", "Laptop"],
              "correctAnswer": "Laptop"
          },
          {
              "id": 95,
              "question": "Choose the word that is most opposite in meaning to 'Soft'.",
              "options": ["Hard", "Gentle", "Light", "Smooth"],
              "correctAnswer": "Hard"
          },
          {
              "id": 96,
              "question": "Find the synonym of 'Bright'.",
              "options": ["Dark", "Shiny", "Dull", "Plain"],
              "correctAnswer": "Shiny"
          },
          {
              "id": 97,
              "question": "What comes next in the series: Chair, Desk, Lamp, ?",
              "options": ["Fan", "Table", "Bed", "Window"],
              "correctAnswer": "Table"
          },
          {
              "id": 98,
              "question": "Choose the word that is most opposite in meaning to 'Clean'.",
              "options": ["Neat", "Tidy", "Dirty", "Polished"],
              "correctAnswer": "Dirty"
          },
          {
              "id": 99,
              "question": "Find the synonym of 'Quickly'.",
              "options": ["Slowly", "Rapidly", "Calmly", "Quietly"],
              "correctAnswer": "Rapidly"
          },
          {
              "id": 100,
              "question": "Which word does not belong: Milk, Juice, Water, Spoon?",
              "options": ["Milk", "Juice", "Water", "Spoon"],
              "correctAnswer": "Spoon"
          } 
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
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/verbal' className="font-bold text-sm">Verbal Reasoning</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">Verbal Reasoning</h1>
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

export default VerbalApti;

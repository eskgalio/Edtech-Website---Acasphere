import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const GeneralKnowledge = () => {
  // Mock dataset for questions
  const questionsData = [
    {
        "id": 1,
        "question": "Who is the current President of the United States?",
        "options": ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"],
        "correctAnswer": "Joe Biden"
    },
    {
        "id": 2,
        "question": "Which planet is known as the Red Planet?",
        "options": ["Earth", "Mars", "Venus", "Jupiter"],
        "correctAnswer": "Mars"
    },
    {
        "id": 3,
        "question": "Who painted the Mona Lisa?",
        "options": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        "correctAnswer": "Leonardo da Vinci"
    },
    {
        "id": 4,
        "question": "What is the capital of Japan?",
        "options": ["Beijing", "Seoul", "Tokyo", "Kyoto"],
        "correctAnswer": "Tokyo"
    },
    {
        "id": 5,
        "question": "Who is known as the Father of the Nation in India?",
        "options": ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
        "correctAnswer": "Mahatma Gandhi"
    },
    {
        "id": 6,
        "question": "Which is the longest river in the world?",
        "options": ["Nile", "Amazon", "Yangtze", "Ganges"],
        "correctAnswer": "Nile"
    },
    {
        "id": 7,
        "question": "What is the largest continent in the world by area?",
        "options": ["Africa", "Asia", "North America", "Europe"],
        "correctAnswer": "Asia"
    },
    {
        "id": 8,
        "question": "In which year did the Titanic sink?",
        "options": ["1905", "1912", "1920", "1930"],
        "correctAnswer": "1912"
    },
    {
        "id": 9,
        "question": "Which country is known as the Land of the Rising Sun?",
        "options": ["China", "South Korea", "Japan", "India"],
        "correctAnswer": "Japan"
    },
    {
        "id": 10,
        "question": "What is the chemical symbol for gold?",
        "options": ["Au", "Ag", "Pb", "Fe"],
        "correctAnswer": "Au"
    },
    {
        "id": 11,
        "question": "Who discovered gravity?",
        "options": ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
        "correctAnswer": "Isaac Newton"
    },
    {
        "id": 12,
        "question": "Which country is the largest producer of coffee?",
        "options": ["Brazil", "Vietnam", "Colombia", "India"],
        "correctAnswer": "Brazil"
    },
    {
        "id": 13,
        "question": "What is the largest animal on Earth?",
        "options": ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        "correctAnswer": "Blue Whale"
    },
    {
        "id": 14,
        "question": "What is the currency of the United Kingdom?",
        "options": ["Euro", "Pound", "Dollar", "Yen"],
        "correctAnswer": "Pound"
    },
    {
        "id": 15,
        "question": "Who wrote the play 'Romeo and Juliet'?",
        "options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "George Orwell"],
        "correctAnswer": "William Shakespeare"
    },
    {
        "id": 16,
        "question": "Which is the smallest country in the world by area?",
        "options": ["Monaco", "Nauru", "Vatican City", "Malta"],
        "correctAnswer": "Vatican City"
    },
    {
        "id": 17,
        "question": "What is the square root of 144?",
        "options": ["12", "14", "16", "18"],
        "correctAnswer": "12"
    },
    {
        "id": 18,
        "question": "Which ocean is the largest in the world?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        "correctAnswer": "Pacific Ocean"
    },
    {
        "id": 19,
        "question": "What is the name of the longest mountain range in the world?",
        "options": ["Himalayas", "Andes", "Alps", "Rockies"],
        "correctAnswer": "Andes"
    },
    {
        "id": 20,
        "question": "Who invented the telephone?",
        "options": ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "James Watt"],
        "correctAnswer": "Alexander Graham Bell"
    },
    {
        "id": 21,
        "question": "Which famous scientist developed the theory of relativity?",
        "options": ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Stephen Hawking"],
        "correctAnswer": "Albert Einstein"
    },
    {
        "id": 22,
        "question": "Which country is home to the Great Barrier Reef?",
        "options": ["United States", "Australia", "South Africa", "Indonesia"],
        "correctAnswer": "Australia"
    },
    {
        "id": 23,
        "question": "What is the main ingredient in guacamole?",
        "options": ["Tomato", "Lime", "Avocado", "Onion"],
        "correctAnswer": "Avocado"
    },
    {
        "id": 24,
        "question": "What is the capital of France?",
        "options": ["Berlin", "Madrid", "Paris", "Rome"],
        "correctAnswer": "Paris"
    },
    {
        "id": 25,
        "question": "Which element has the atomic number 1?",
        "options": ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
        "correctAnswer": "Hydrogen"
    },
    {
            "id": 26,
            "question": "Which city is known as the 'Big Apple'?",
            "options": ["Los Angeles", "Chicago", "New York", "Miami"],
            "correctAnswer": "New York"
        },
        {
            "id": 27,
            "question": "Who is the founder of Microsoft?",
            "options": ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
            "correctAnswer": "Bill Gates"
        },
        {
            "id": 28,
            "question": "Which country is known as the Land of the Midnight Sun?",
            "options": ["Finland", "Norway", "Sweden", "Denmark"],
            "correctAnswer": "Norway"
        },
        {
            "id": 29,
            "question": "What is the capital of Canada?",
            "options": ["Ottawa", "Toronto", "Vancouver", "Montreal"],
            "correctAnswer": "Ottawa"
        },
        {
            "id": 30,
            "question": "Who wrote the novel '1984'?",
            "options": ["Aldous Huxley", "George Orwell", "Ray Bradbury", "J.K. Rowling"],
            "correctAnswer": "George Orwell"
        },
        {
            "id": 31,
            "question": "Which is the tallest mountain in the world?",
            "options": ["K2", "Mount Kilimanjaro", "Mount Everest", "Makalu"],
            "correctAnswer": "Mount Everest"
        },
        {
            "id": 32,
            "question": "In which year did the United States declare its independence?",
            "options": ["1776", "1800", "1865", "1914"],
            "correctAnswer": "1776"
        },
        {
            "id": 33,
            "question": "Which of the following is the largest organ in the human body?",
            "options": ["Heart", "Liver", "Skin", "Lungs"],
            "correctAnswer": "Skin"
        },
        {
            "id": 34,
            "question": "Which country is the largest producer of chocolate?",
            "options": ["Belgium", "Switzerland", "United States", "Ivory Coast"],
            "correctAnswer": "United States"
        },
        {
            "id": 35,
            "question": "Who invented the light bulb?",
            "options": ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Benjamin Franklin"],
            "correctAnswer": "Thomas Edison"
        },
        {
            "id": 36,
            "question": "Which is the longest river in Asia?",
            "options": ["Yangtze", "Ganges", "Mekong", "Yellow River"],
            "correctAnswer": "Yangtze"
        },
        {
            "id": 37,
            "question": "Which is the smallest planet in our solar system?",
            "options": ["Earth", "Mercury", "Mars", "Venus"],
            "correctAnswer": "Mercury"
        },
        {
            "id": 38,
            "question": "Who was the first man to walk on the moon?",
            "options": ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
            "correctAnswer": "Neil Armstrong"
        },
        {
            "id": 39,
            "question": "Which element is the most abundant in the Earth's atmosphere?",
            "options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
            "correctAnswer": "Nitrogen"
        },
        {
            "id": 40,
            "question": "Which famous scientist developed the laws of motion?",
            "options": ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
            "correctAnswer": "Isaac Newton"
        },
        {
            "id": 41,
            "question": "Who was the first woman to win a Nobel Prize?",
            "options": ["Marie Curie", "Rosalind Franklin", "Dorothy Crowfoot Hodgkin", "Ada Lovelace"],
            "correctAnswer": "Marie Curie"
        },
        {
            "id": 42,
            "question": "Which country has the largest population in the world?",
            "options": ["India", "United States", "China", "Brazil"],
            "correctAnswer": "China"
        },
        {
            "id": 43,
            "question": "What is the currency of Japan?",
            "options": ["Yuan", "Yen", "Won", "Ringgit"],
            "correctAnswer": "Yen"
        },
        {
            "id": 44,
            "question": "In which year did World War I begin?",
            "options": ["1910", "1912", "1914", "1918"],
            "correctAnswer": "1914"
        },
        {
            "id": 45,
            "question": "What is the capital of Italy?",
            "options": ["Milan", "Rome", "Venice", "Florence"],
            "correctAnswer": "Rome"
        },
        {
            "id": 46,
            "question": "Which animal is known as the 'King of the Jungle'?",
            "options": ["Tiger", "Elephant", "Lion", "Bear"],
            "correctAnswer": "Lion"
        },
        {
            "id": 47,
            "question": "Which company developed the first personal computer?",
            "options": ["IBM", "Apple", "Microsoft", "HP"],
            "correctAnswer": "IBM"
        },
        {
            "id": 48,
            "question": "Which gas do plants absorb from the air for photosynthesis?",
            "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
            "correctAnswer": "Carbon Dioxide"
        },
        {
            "id": 49,
            "question": "Which country invented the first successful airplane?",
            "options": ["United States", "Germany", "France", "Italy"],
            "correctAnswer": "United States"
        },
        {
            "id": 50,
            "question": "What is the largest desert in the world?",
            "options": ["Kalahari", "Gobi", "Sahara", "Antarctic Desert"],
            "correctAnswer": "Antarctic Desert"
        },   
        {
                "id": 51,
                "question": "What is the name of the largest island in the world?",
                "options": ["Greenland", "New Guinea", "Borneo", "Madagascar"],
                "correctAnswer": "Greenland"
            },
            {
                "id": 52,
                "question": "Which country is famous for the Eiffel Tower?",
                "options": ["Germany", "France", "Italy", "Spain"],
                "correctAnswer": "France"
            },
            {
                "id": 53,
                "question": "Who was the first president of the United States?",
                "options": ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
                "correctAnswer": "George Washington"
            },
            {
                "id": 54,
                "question": "Which is the largest continent by population?",
                "options": ["Asia", "Africa", "North America", "Europe"],
                "correctAnswer": "Asia"
            },
            {
                "id": 55,
                "question": "What is the smallest country in the world by population?",
                "options": ["Nauru", "Vatican City", "San Marino", "Monaco"],
                "correctAnswer": "Vatican City"
            },
            {
                "id": 56,
                "question": "What is the main ingredient in sushi?",
                "options": ["Rice", "Seaweed", "Fish", "Vegetables"],
                "correctAnswer": "Rice"
            },
            {
                "id": 57,
                "question": "Which famous scientist is known for his theory of evolution?",
                "options": ["Charles Darwin", "Galileo Galilei", "Isaac Newton", "Albert Einstein"],
                "correctAnswer": "Charles Darwin"
            },
            {
                "id": 58,
                "question": "What is the capital of Australia?",
                "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                "correctAnswer": "Canberra"
            },
            {
                "id": 59,
                "question": "Which planet is closest to the Sun?",
                "options": ["Earth", "Mercury", "Venus", "Mars"],
                "correctAnswer": "Mercury"
            },
            {
                "id": 60,
                "question": "Which element is a noble gas?",
                "options": ["Neon", "Oxygen", "Nitrogen", "Carbon"],
                "correctAnswer": "Neon"
            },
            {
                "id": 61,
                "question": "Which country is known as the 'Land of the Pharaohs'?",
                "options": ["Sudan", "Egypt", "Greece", "Turkey"],
                "correctAnswer": "Egypt"
            },
            {
                "id": 62,
                "question": "What is the capital of Brazil?",
                "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                "correctAnswer": "Brasília"
            },
            {
                "id": 63,
                "question": "Which language has the most native speakers in the world?",
                "options": ["Spanish", "English", "Mandarin", "Hindi"],
                "correctAnswer": "Mandarin"
            },
            {
                "id": 64,
                "question": "Which is the largest country by area?",
                "options": ["Canada", "United States", "China", "Russia"],
                "correctAnswer": "Russia"
            },
            {
                "id": 65,
                "question": "Which vitamin is known as the 'sunshine vitamin'?",
                "options": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
                "correctAnswer": "Vitamin D"
            },
            {
                "id": 66,
                "question": "Which country is famous for its pyramids?",
                "options": ["Greece", "Egypt", "Mexico", "Peru"],
                "correctAnswer": "Egypt"
            },
            {
                "id": 67,
                "question": "What is the name of the longest-running TV show?",
                "options": ["Friends", "The Simpsons", "The Office", "Grey's Anatomy"],
                "correctAnswer": "The Simpsons"
            },
            {
                "id": 68,
                "question": "Which instrument is used to measure temperature?",
                "options": ["Barometer", "Thermometer", "Altimeter", "Anemometer"],
                "correctAnswer": "Thermometer"
            },
            {
                "id": 69,
                "question": "Which ocean is the smallest in the world?",
                "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                "correctAnswer": "Arctic Ocean"
            },
            {
                "id": 70,
                "question": "Who was the first woman to fly solo across the Atlantic Ocean?",
                "options": ["Amelia Earhart", "Harriet Quimby", "Bessie Coleman", "Jacqueline Cochran"],
                "correctAnswer": "Amelia Earhart"
            },
            {
                "id": 71,
                "question": "Which is the tallest building in the world?",
                "options": ["Eiffel Tower", "Empire State Building", "Burj Khalifa", "Shanghai Tower"],
                "correctAnswer": "Burj Khalifa"
            },
            {
                "id": 72,
                "question": "Which company is the world's largest producer of smartphones?",
                "options": ["Apple", "Samsung", "Huawei", "Google"],
                "correctAnswer": "Samsung"
            },
            {
                "id": 73,
                "question": "What is the largest island in the Caribbean?",
                "options": ["Hispaniola", "Cuba", "Puerto Rico", "Jamaica"],
                "correctAnswer": "Cuba"
            },
            {
                "id": 74,
                "question": "Which country is known for the Great Wall?",
                "options": ["Japan", "China", "India", "Vietnam"],
                "correctAnswer": "China"
            },
            {
                "id": 75,
                "question": "What is the highest-grossing film of all time?",
                "options": ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"],
                "correctAnswer": "Avatar"
            },   
            {
                    "id": 76,
                    "question": "Which is the longest river in the world?",
                    "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
                    "correctAnswer": "Nile River"
                },
                {
                    "id": 77,
                    "question": "Which is the largest country in Africa by area?",
                    "options": ["Nigeria", "South Africa", "Algeria", "Egypt"],
                    "correctAnswer": "Algeria"
                },
                {
                    "id": 78,
                    "question": "What is the capital of Japan?",
                    "options": ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
                    "correctAnswer": "Tokyo"
                },
                {
                    "id": 79,
                    "question": "Which natural disaster is measured by the Richter scale?",
                    "options": ["Tornado", "Flood", "Earthquake", "Hurricane"],
                    "correctAnswer": "Earthquake"
                },
                {
                    "id": 80,
                    "question": "Which element has the chemical symbol 'O'?",
                    "options": ["Oxygen", "Osmium", "Ozone", "Opium"],
                    "correctAnswer": "Oxygen"
                },
                {
                    "id": 81,
                    "question": "Which country is known for its tulips and windmills?",
                    "options": ["Denmark", "Germany", "Netherlands", "Belgium"],
                    "correctAnswer": "Netherlands"
                },
                {
                    "id": 82,
                    "question": "Who painted the Mona Lisa?",
                    "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
                    "correctAnswer": "Leonardo da Vinci"
                },
                {
                    "id": 83,
                    "question": "Which city is home to the famous landmark, the Colosseum?",
                    "options": ["Paris", "Rome", "Athens", "Cairo"],
                    "correctAnswer": "Rome"
                },
                {
                    "id": 84,
                    "question": "Which country is the birthplace of the Olympic Games?",
                    "options": ["Italy", "Greece", "Germany", "France"],
                    "correctAnswer": "Greece"
                },
                {
                    "id": 85,
                    "question": "Who invented the telephone?",
                    "options": ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Samuel Morse"],
                    "correctAnswer": "Alexander Graham Bell"
                },
                {
                    "id": 86,
                    "question": "Which country is the largest producer of coffee?",
                    "options": ["Vietnam", "Brazil", "Colombia", "Ethiopia"],
                    "correctAnswer": "Brazil"
                },
                {
                    "id": 87,
                    "question": "Which planet is known as the 'Red Planet'?",
                    "options": ["Venus", "Mars", "Jupiter", "Saturn"],
                    "correctAnswer": "Mars"
                },
                {
                    "id": 88,
                    "question": "What is the capital of South Korea?",
                    "options": ["Seoul", "Tokyo", "Beijing", "Hanoi"],
                    "correctAnswer": "Seoul"
                },
                {
                    "id": 89,
                    "question": "Which company is famous for its 'iPhone'?",
                    "options": ["Samsung", "Apple", "Sony", "LG"],
                    "correctAnswer": "Apple"
                },
                {
                    "id": 90,
                    "question": "What is the smallest country by area in the world?",
                    "options": ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                    "correctAnswer": "Vatican City"
                },
                {
                    "id": 91,
                    "question": "Which animal is the symbol of the WWF (World Wildlife Fund)?",
                    "options": ["Panda", "Lion", "Tiger", "Elephant"],
                    "correctAnswer": "Panda"
                },
                {
                    "id": 92,
                    "question": "Which country is known for its maple syrup?",
                    "options": ["United States", "Canada", "Sweden", "Finland"],
                    "correctAnswer": "Canada"
                },
                {
                    "id": 93,
                    "question": "Who is known as the Father of India?",
                    "options": ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh"],
                    "correctAnswer": "Mahatma Gandhi"
                },
                {
                    "id": 94,
                    "question": "What is the largest species of shark?",
                    "options": ["Great White Shark", "Whale Shark", "Hammerhead Shark", "Tiger Shark"],
                    "correctAnswer": "Whale Shark"
                },
                {
                    "id": 95,
                    "question": "What is the capital of Spain?",
                    "options": ["Barcelona", "Madrid", "Valencia", "Seville"],
                    "correctAnswer": "Madrid"
                },
                {
                    "id": 96,
                    "question": "Which popular video game franchise is centered around 'Super Mario'?",
                    "options": ["Sega", "Nintendo", "PlayStation", "Xbox"],
                    "correctAnswer": "Nintendo"
                },
                {
                    "id": 97,
                    "question": "What is the currency of the United Kingdom?",
                    "options": ["Pound Sterling", "Euro", "Dollar", "Yen"],
                    "correctAnswer": "Pound Sterling"
                },
                {
                    "id": 98,
                    "question": "Who was the first man to climb Mount Everest?",
                    "options": ["Edmund Hillary", "Tenzing Norgay", "George Mallory", "Reinhold Messner"],
                    "correctAnswer": "Edmund Hillary"
                },
                {
                    "id": 99,
                    "question": "Which continent is known as the 'Dark Continent'?",
                    "options": ["Asia", "Africa", "Europe", "Australia"],
                    "correctAnswer": "Africa"
                },
                {
                    "id": 100,
                    "question": "Which planet is the hottest in our solar system?",
                    "options": ["Venus", "Mars", "Mercury", "Jupiter"],
                    "correctAnswer": "Venus"
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
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/general-knowledge' className="font-bold text-sm">General Knowledge</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">General Knowledge</h1>
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

export default GeneralKnowledge;

import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const QuizPage = () => {
  // Mock dataset for questions
  const questionsData = [
    {
        "id": 1,
        "question": "Which of the following does not belong to the group?",
        "options": ["Dog", "Cat", "Car", "Elephant"],
        "correctAnswer": "Car"
    },
    {
        "id": 2,
        "question": "If all roses are flowers and some flowers fade quickly, which statement is true?",
        "options": ["All flowers are roses", "Some roses fade quickly", "All roses fade quickly", "None of the above"],
        "correctAnswer": "Some roses fade quickly"
    },
    {
        "id": 3,
        "question": "Find the next number in the sequence: 2, 4, 8, 16, ...",
        "options": ["24", "32", "20", "40"],
        "correctAnswer": "32"
    },
    {
        "id": 4,
        "question": "Which number is missing? 3, 6, __, 24, 48",
        "options": ["8", "9", "12", "18"],
        "correctAnswer": "12"
    },
    {
        "id": 5,
        "question": "If A is B's brother, B is C's sister, and C is D's father, what is the relation of A to D?",
        "options": ["Uncle", "Nephew", "Brother", "Father"],
        "correctAnswer": "Uncle"
    },
    {
        "id": 6,
        "question": "In a certain language, 'TABLE' is written as 'GZOVI'. How is 'CHAIR' written?",
        "options": ["XVSZG", "SXZGZ", "GZXSZ", "ZSGXV"],
        "correctAnswer": "XVSZG"
    },
    {
        "id": 7,
        "question": "If today is Monday, what will be the day 45 days from today?",
        "options": ["Wednesday", "Thursday", "Friday", "Saturday"],
        "correctAnswer": "Friday"
    },
    {
        "id": 8,
        "question": "Arrange the following words in alphabetical order: Apple, Ant, Ape, Apricot",
        "options": ["Ant, Ape, Apple, Apricot", "Ape, Ant, Apple, Apricot", "Apple, Ant, Ape, Apricot", "Apricot, Ant, Apple, Ape"],
        "correctAnswer": "Ant, Ape, Apple, Apricot"
    },
    {
        "id": 9,
        "question": "A man starts walking 3 km north, 4 km east, and then 5 km south. How far is he from the starting point?",
        "options": ["5 km", "3 km", "4 km", "7 km"],
        "correctAnswer": "5 km"
    },
    {
        "id": 10,
        "question": "If 5 cats can catch 5 rats in 5 minutes, how many cats are required to catch 100 rats in 100 minutes?",
        "options": ["5", "10", "20", "25"],
        "correctAnswer": "5"
    },
    {
        "id": 11,
        "question": "In a certain code, 'SUN' is written as 'TVQ'. How is 'MOON' written in the same code?",
        "options": ["NPPQ", "NPQQ", "NQPP", "NQRP"],
        "correctAnswer": "NPQQ"
    },
    {
        "id": 12,
        "question": "Which one is different from the rest?",
        "options": ["Square", "Triangle", "Rectangle", "Circle"],
        "correctAnswer": "Circle"
    },
    {
        "id": 13,
        "question": "If a train travels at 60 km/h and covers a distance in 3 hours, what is the distance?",
        "options": ["120 km", "150 km", "180 km", "200 km"],
        "correctAnswer": "180 km"
    },
      {
          "id": 26,
          "question": "Which of the following is the odd one out?",
          "options": ["Iron", "Silver", "Gold", "Plastic"],
          "correctAnswer": "Plastic"
      },
      {
          "id": 27,
          "question": "What comes next in the series: Z, X, V, T, ?",
          "options": ["Q", "R", "S", "P"],
          "correctAnswer": "R"
      },
      {
          "id": 28,
          "question": "If a car runs at a speed of 60 km/h for 2 hours and then at 80 km/h for 1 hour, what is the total distance covered?",
          "options": ["140 km", "200 km", "180 km", "220 km"],
          "correctAnswer": "200 km"
      },
      {
          "id": 29,
          "question": "If 8 workers can complete a job in 6 days, how many days will it take for 4 workers to complete the same job?",
          "options": ["12", "10", "8", "15"],
          "correctAnswer": "12"
      },
      {
          "id": 30,
          "question": "What comes next in the sequence: 1, 4, 9, 16, ?",
          "options": ["20", "25", "24", "30"],
          "correctAnswer": "25"
      },
      {
          "id": 31,
          "question": "If 'A' = 1, 'B' = 2, and so on, what is the sum of the positions of the letters in 'DOG'?",
          "options": ["26", "28", "30", "32"],
          "correctAnswer": "26"
      },
      {
          "id": 32,
          "question": "What is the next term in the series: 2, 6, 12, 20, ?",
          "options": ["30", "28", "26", "32"],
          "correctAnswer": "30"
      },
      {
          "id": 33,
          "question": "A man is 5 times as old as his son. In 20 years, he will be twice as old as his son. How old is the son now?",
          "options": ["5 years", "10 years", "15 years", "20 years"],
          "correctAnswer": "10 years"
      },
      {
          "id": 34,
          "question": "Which one of the following is not a prime number?",
          "options": ["29", "31", "33", "37"],
          "correctAnswer": "33"
      },
      {
          "id": 35,
          "question": "What will come next in the series: AB, CD, EF, ?",
          "options": ["GH", "IJ", "KL", "MN"],
          "correctAnswer": "GH"
      },
      {
          "id": 36,
          "question": "If a boat travels downstream at 12 km/h and upstream at 6 km/h, what is the speed of the current?",
          "options": ["3 km/h", "6 km/h", "9 km/h", "12 km/h"],
          "correctAnswer": "3 km/h"
      },
      {
          "id": 37,
          "question": "If you rearrange the letters in 'TABLE' to form another word, which one can you create?",
          "options": ["BLEAT", "BLAET", "BATEL", "TABEL"],
          "correctAnswer": "BLEAT"
      },
      {
          "id": 38,
          "question": "What comes next in the pattern: 3, 9, 27, ?",
          "options": ["54", "81", "64", "36"],
          "correctAnswer": "81"
      },
      {
          "id": 39,
          "question": "Which of the following does not belong to the group?",
          "options": ["Circle", "Ellipse", "Triangle", "Sphere"],
          "correctAnswer": "Sphere"
      },
      {
          "id": 40,
          "question": "A man invests $1000 at a simple interest rate of 5% per year. How much will he have after 2 years?",
          "options": ["$1000", "$1100", "$1200", "$1300"],
          "correctAnswer": "$1100"
      },
      {
          "id": 41,
          "question": "If the day before yesterday was Thursday, what is the day after tomorrow?",
          "options": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "correctAnswer": "Monday"
      },
      {
          "id": 42,
          "question": "If 3 people can paint 3 walls in 3 days, how many walls can 6 people paint in 6 days?",
          "options": ["12", "9", "18", "6"],
          "correctAnswer": "12"
      },
      {
          "id": 43,
          "question": "What comes next in the sequence: 11, 13, 17, 19, ?",
          "options": ["21", "23", "25", "27"],
          "correctAnswer": "23"
      },
      {
          "id": 44,
          "question": "In a group of 50 students, 30 like football, 25 like cricket, and 10 like both. How many students like only cricket?",
          "options": ["15", "10", "20", "25"],
          "correctAnswer": "15"
      },
      {
          "id": 45,
          "question": "Which number is missing in the series: 5, 15, __, 35, 45?",
          "options": ["20", "25", "30", "40"],
          "correctAnswer": "25"
      },
      {
          "id": 46,
          "question": "If all dogs are mammals and some mammals are not cats, what can be concluded?",
          "options": ["All dogs are cats", "Some mammals are dogs", "All mammals are dogs", "No cats are dogs"],
          "correctAnswer": "Some mammals are dogs"
      },
      {
          "id": 47,
          "question": "Find the odd one out: 2, 4, 6, 9, 10",
          "options": ["2", "4", "9", "10"],
          "correctAnswer": "9"
      },
      {
          "id": 48,
          "question": "If in a certain code 'HELLO' is written as 'IFMMP', what is 'WORLD' written as?",
          "options": ["XPSME", "VNQKC", "XPTNF", "WRMPC"],
          "correctAnswer": "XPSME"
      },
      {
          "id": 49,
          "question": "Which shape is different from the rest?",
          "options": ["Cube", "Square", "Rectangle", "Triangle"],
          "correctAnswer": "Cube"
      },
      {
          "id": 50,
          "question": "If a man earns $400 in 4 days, how much will he earn in 7 days?",
          "options": ["$600", "$700", "$800", "$1000"],
          "correctAnswer": "$700"
      },
        {
            "id": 51,
            "question": "Which of the following is the odd one out?",
            "options": ["Pen", "Pencil", "Book", "Brush"],
            "correctAnswer": "Book"
        },
        {
            "id": 52,
            "question": "If 2 apples cost $4, how much will 5 apples cost?",
            "options": ["$8", "$10", "$12", "$15"],
            "correctAnswer": "$10"
        },
        {
            "id": 53,
            "question": "What comes next in the series: 1, 3, 6, 10, ?",
            "options": ["12", "15", "20", "18"],
            "correctAnswer": "15"
        },
        {
            "id": 54,
            "question": "Which of the following numbers is not divisible by 3?",
            "options": ["9", "15", "21", "22"],
            "correctAnswer": "22"
        },
        {
            "id": 55,
            "question": "If in a certain code, 'TREE' is written as 'UQFF', what is 'LEAF' written as?",
            "options": ["MFBG", "MFGB", "MFCB", "LDBF"],
            "correctAnswer": "MFBG"
        },
        {
            "id": 56,
            "question": "What comes next in the sequence: 5, 10, 20, 40, ?",
            "options": ["60", "80", "70", "100"],
            "correctAnswer": "80"
        },
        {
            "id": 57,
            "question": "Which number is missing? 2, 4, 8, __, 32",
            "options": ["10", "16", "20", "24"],
            "correctAnswer": "16"
        },
        {
            "id": 58,
            "question": "If a train travels at 50 km/h for 4 hours, what distance does it cover?",
            "options": ["100 km", "150 km", "200 km", "250 km"],
            "correctAnswer": "200 km"
        },
        {
            "id": 59,
            "question": "What comes next in the series: A, D, G, J, ?",
            "options": ["K", "M", "N", "O"],
            "correctAnswer": "M"
        },
        {
            "id": 60,
            "question": "A clock shows 6:00. What is the angle between the hour and minute hands?",
            "options": ["90°", "180°", "120°", "150°"],
            "correctAnswer": "180°"
        },
        {
            "id": 61,
            "question": "Which word is different from the rest?",
            "options": ["Red", "Blue", "Circle", "Green"],
            "correctAnswer": "Circle"
        },
        {
            "id": 62,
            "question": "What comes next in the series: 2, 3, 5, 7, 11, ?",
            "options": ["12", "13", "14", "15"],
            "correctAnswer": "13"
        },
        {
            "id": 63,
            "question": "If 8 cows produce 64 liters of milk, how much milk will 4 cows produce?",
            "options": ["32 liters", "16 liters", "48 liters", "24 liters"],
            "correctAnswer": "32 liters"
        },
        {
            "id": 64,
            "question": "Find the odd one out: Lion, Tiger, Wolf, Eagle",
            "options": ["Lion", "Tiger", "Wolf", "Eagle"],
            "correctAnswer": "Eagle"
        },
        {
            "id": 65,
            "question": "If '123' is coded as 'BCD', how is '456' coded?",
            "options": ["EFG", "FGH", "HIJ", "IJK"],
            "correctAnswer": "EFG"
        },
        {
            "id": 66,
            "question": "A man walks 10 km south, then 5 km west, and finally 10 km north. How far is he from the starting point?",
            "options": ["10 km", "5 km", "15 km", "20 km"],
            "correctAnswer": "5 km"
        },
        {
            "id": 67,
            "question": "What comes next in the series: B, E, H, K, ?",
            "options": ["L", "M", "N", "O"],
            "correctAnswer": "N"
        },
        {
            "id": 68,
            "question": "If a shopkeeper sells 3 items for $15, how much does 7 items cost?",
            "options": ["$25", "$30", "$35", "$40"],
            "correctAnswer": "$35"
        },
        {
            "id": 69,
            "question": "Which number is different from the rest?",
            "options": ["15", "25", "35", "50"],
            "correctAnswer": "50"
        },
        {
            "id": 70,
            "question": "What is the next term in the series: 10, 20, 40, 80, ?",
            "options": ["100", "120", "140", "160"],
            "correctAnswer": "160"
        },
        {
            "id": 71,
            "question": "If today is Sunday, what day will it be 9 days later?",
            "options": ["Monday", "Tuesday", "Wednesday", "Thursday"],
            "correctAnswer": "Tuesday"
        },
        {
            "id": 72,
            "question": "A man has 4 sons and 4 daughters. If each child has 3 siblings, how many children are in the family?",
            "options": ["6", "7", "8", "9"],
            "correctAnswer": "8"
        },
        {
            "id": 73,
            "question": "Which shape does not belong to the group?",
            "options": ["Circle", "Triangle", "Rectangle", "Cube"],
            "correctAnswer": "Cube"
        },
        {
            "id": 74,
            "question": "Find the odd one out: Apple, Orange, Mango, Tomato",
            "options": ["Apple", "Orange", "Mango", "Tomato"],
            "correctAnswer": "Tomato"
        },
        {
            "id": 75,
            "question": "If 3 pencils cost $9, how much do 5 pencils cost?",
            "options": ["$12", "$15", "$18", "$21"],
            "correctAnswer": "$15"
        },
          {
              "id": 76,
              "question": "What is the next term in the series: 100, 90, 80, 70, ?",
              "options": ["50", "60", "40", "30"],
              "correctAnswer": "60"
          },
          {
              "id": 77,
              "question": "If a person saves $20 per week, how much will they save in 15 weeks?",
              "options": ["$300", "$200", "$250", "$400"],
              "correctAnswer": "$300"
          },
          {
              "id": 78,
              "question": "Which word is the odd one out?",
              "options": ["Run", "Walk", "Jump", "Sit"],
              "correctAnswer": "Sit"
          },
          {
              "id": 79,
              "question": "What is the next number in the sequence: 3, 6, 12, 24, ?",
              "options": ["36", "48", "72", "60"],
              "correctAnswer": "48"
          },
          {
              "id": 80,
              "question": "If a shirt costs $25, how much will 8 shirts cost?",
              "options": ["$100", "$150", "$200", "$250"],
              "correctAnswer": "$200"
          },
          {
              "id": 81,
              "question": "Which shape is different from the rest?",
              "options": ["Square", "Rectangle", "Circle", "Cylinder"],
              "correctAnswer": "Cylinder"
          },
          {
              "id": 82,
              "question": "Find the odd one out: Monday, Tuesday, January, Friday",
              "options": ["Monday", "Tuesday", "January", "Friday"],
              "correctAnswer": "January"
          },
          {
              "id": 83,
              "question": "If 'CAT' is coded as 'DBU', how is 'DOG' coded?",
              "options": ["EPI", "EPH", "EPJ", "FQI"],
              "correctAnswer": "EPH"
          },
          {
              "id": 84,
              "question": "What comes next in the series: 4, 16, 64, 256, ?",
              "options": ["1024", "512", "2048", "4096"],
              "correctAnswer": "1024"
          },
          {
              "id": 85,
              "question": "If a vehicle travels 80 km in 2 hours, what is its speed?",
              "options": ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
              "correctAnswer": "40 km/h"
          },
          {
              "id": 86,
              "question": "Which of the following is the odd one out?",
              "options": ["Dog", "Cat", "Rabbit", "Parrot"],
              "correctAnswer": "Parrot"
          },
          {
              "id": 87,
              "question": "What is the missing term in the series: 7, 14, __, 56?",
              "options": ["21", "28", "35", "42"],
              "correctAnswer": "28"
          },
          {
              "id": 88,
              "question": "What is the sum of the angles of a triangle?",
              "options": ["90°", "180°", "270°", "360°"],
              "correctAnswer": "180°"
          },
          {
              "id": 89,
              "question": "Which number is missing in the sequence: 2, 5, 10, 17, ?",
              "options": ["24", "26", "27", "30"],
              "correctAnswer": "26"
          },
          {
              "id": 90,
              "question": "If a train covers 120 km in 3 hours, what is its speed?",
              "options": ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
              "correctAnswer": "40 km/h"
          },
          {
              "id": 91,
              "question": "What comes next in the sequence: A, C, E, G, ?",
              "options": ["H", "I", "J", "K"],
              "correctAnswer": "I"
          },
          {
              "id": 92,
              "question": "Find the odd one out: Banana, Mango, Carrot, Orange",
              "options": ["Banana", "Mango", "Carrot", "Orange"],
              "correctAnswer": "Carrot"
          },
          {
              "id": 93,
              "question": "If 15 workers can complete a task in 8 days, how many workers are needed to complete the same task in 4 days?",
              "options": ["30", "20", "15", "25"],
              "correctAnswer": "30"
          },
          {
              "id": 94,
              "question": "Which word is different from the others?",
              "options": ["Sweet", "Sour", "Bitter", "Hard"],
              "correctAnswer": "Hard"
          },
          {
              "id": 95,
              "question": "What is the next term in the series: 6, 18, 54, 162, ?",
              "options": ["216", "324", "486", "243"],
              "correctAnswer": "486"
          },
          {
              "id": 96,
              "question": "If a book costs $12, how much do 5 books cost?",
              "options": ["$50", "$60", "$65", "$75"],
              "correctAnswer": "$60"
          },
          {
              "id": 97,
              "question": "Find the missing term in the series: 3, 9, 27, ?, 243",
              "options": ["54", "81", "72", "90"],
              "correctAnswer": "81"
          },
          {
              "id": 98,
              "question": "Which of the following is not a prime number?",
              "options": ["2", "5", "9", "11"],
              "correctAnswer": "9"
          },
          {
              "id": 99,
              "question": "If 'ACE' is written as 'BDF', what is 'GHI' written as?",
              "options": ["HJK", "HJF", "JHF", "HIJ"],
              "correctAnswer": "HJK"
          },
          {
              "id": 100,
              "question": "What comes next in the sequence: 5, 15, 45, 135, ?",
              "options": ["405", "315", "255", "475"],
              "correctAnswer": "405"
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
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/general' className="font-bold text-sm">Online Aptitude Test</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">Online Aptitude Test</h1>
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

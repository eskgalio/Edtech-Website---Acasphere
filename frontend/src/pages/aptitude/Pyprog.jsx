import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const Pyprog = () => {
  // Mock dataset for questions
  const questionsData = [
    { "id": 1, "question": "What is the output of the following code: 'print(2 + 3 * 4)'?", "options": ["14", "20", "10", "23"], "correctAnswer": "14" },
    { "id": 2, "question": "Which function is used to get the length of a list in Python?", "options": ["len()", "length()", "size()", "count()"], "correctAnswer": "len()" },
    { "id": 3, "question": "Which of the following is used to define a function in Python?", "options": ["def function_name():", "function function_name():", "func function_name()", "define function_name:"], "correctAnswer": "def function_name():" },
    { "id": 4, "question": "How do you start a comment in Python?", "options": ["// comment", "/* comment */", "# comment", "comment"], "correctAnswer": "# comment" },
    { "id": 5, "question": "What is the output of 'print(5 / 2)' in Python?", "options": ["2.5", "2", "3", "2.0"], "correctAnswer": "2.5" },
    { "id": 6, "question": "Which of the following is the correct way to declare a string in Python?", "options": ["string = 'Hello'", "string = \"Hello\"", "Both A and B", "string = Hello"], "correctAnswer": "Both A and B" },
    { "id": 7, "question": "What does the 'break' statement do in Python?", "options": ["Exits the loop", "Continues to the next iteration", "Exits the function", "None of the above"], "correctAnswer": "Exits the loop" },
    { "id": 8, "question": "How do you create a list in Python?", "options": ["list = ()", "list = {}", "list = []", "list = <>"], "correctAnswer": "list = []" },
    { "id": 9, "question": "What is the output of 'print(type(3))' in Python?", "options": ["<class 'int'>", "<type 'int'>", "<class 'float'>", "<type 'float'>"], "correctAnswer": "<class 'int'>" },
    { "id": 10, "question": "Which of the following is used to handle exceptions in Python?", "options": ["try...except", "catch...finally", "try...catch", "exception...handle"], "correctAnswer": "try...except" },
    { "id": 11, "question": "Which of the following is used to create a dictionary in Python?", "options": ["dict = {}", "dict = []", "dict = ()", "dict = <>"], "correctAnswer": "dict = {}" },
    { "id": 12, "question": "Which method is used to remove an item from a list in Python?", "options": ["remove()", "delete()", "pop()", "erase()"], "correctAnswer": "remove()" },
    { "id": 13, "question": "Which operator is used to find the remainder in Python?", "options": ["%", "/>", "^", "*"], "correctAnswer": "%" },
    { "id": 14, "question": "How do you start a loop in Python?", "options": ["for x in range(5):", "for x range 5:", "loop x in 5:", "for (x in 5)"], "correctAnswer": "for x in range(5):" },
    { "id": 15, "question": "What will 'print(bool(0))' output?", "options": ["True", "False", "None", "Error"], "correctAnswer": "False" },
    { "id": 16, "question": "Which of the following is not a valid data type in Python?", "options": ["int", "str", "float", "integer"], "correctAnswer": "integer" },
    { "id": 17, "question": "What does the 'pass' statement do in Python?", "options": ["Does nothing", "Stops the program", "Prints a message", "None of the above"], "correctAnswer": "Does nothing" },
    { "id": 18, "question": "What is the correct syntax for importing a module in Python?", "options": ["import module_name", "include module_name", "using module_name", "module import"], "correctAnswer": "import module_name" },
    { "id": 19, "question": "How do you create a function that doesn't return a value in Python?", "options": ["def function_name():", "def function_name: return", "def function_name(None):", "def function_name(): return None"], "correctAnswer": "def function_name():" },
    { "id": 20, "question": "What is the output of 'print(2 == 3)'?", "options": ["True", "False", "None", "Error"], "correctAnswer": "False" },
    { "id": 21, "question": "What is the correct syntax for a tuple in Python?", "options": ["tuple = []", "tuple = {}", "tuple = ()", "tuple = <>"], "correctAnswer": "tuple = ()" },
    { "id": 22, "question": "Which method is used to convert a string to lowercase in Python?", "options": ["lower()", "convert_lower()", "to_lower()", "downcase()"], "correctAnswer": "lower()" },
    { "id": 23, "question": "What will 'print(10 // 3)' output?", "options": ["3", "3.33", "4", "None"], "correctAnswer": "3" },
    { "id": 24, "question": "Which of the following functions is used to convert a string to an integer in Python?", "options": ["int()", "str()", "float()", "convert()"], "correctAnswer": "int()" },
    { "id": 25, "question": "What is the correct syntax for a while loop in Python?", "options": ["while x < 5:", "while (x < 5):", "while [x < 5]:", "while x: < 5"], "correctAnswer": "while x < 5:" },
    { "id": 26, "question": "Which of the following is the correct way to concatenate two strings in Python?", "options": ["string1 + string2", "concat(string1, string2)", "string1.append(string2)", "string1.extend(string2)"], "correctAnswer": "string1 + string2" },
    { "id": 27, "question": "What does the 'strip()' method do in Python?", "options": ["Removes whitespace from the beginning and end", "Removes all characters from the string", "Converts the string to lowercase", "None of the above"], "correctAnswer": "Removes whitespace from the beginning and end" },
    { "id": 28, "question": "Which of the following is a valid way to create a set in Python?", "options": ["set = {}", "set = []", "set = ()", "set = <>"], "correctAnswer": "set = {}" },
    { "id": 29, "question": "What will 'print(range(3))' output?", "options": ["(0, 1, 2)", "range(0, 3)", "[0, 1, 2]", "Error"], "correctAnswer": "range(0, 3)" },
    { "id": 30, "question": "Which of the following is the correct syntax to define a class in Python?", "options": ["class ClassName:", "def ClassName:", "class ClassName[]:", "class ClassName{}"], "correctAnswer": "class ClassName:" },
    { "id": 31, "question": "What is the output of 'print(isinstance(5, int))'?", "options": ["True", "False", "Error", "None"], "correctAnswer": "True" },
    { "id": 32, "question": "Which method is used to add an element to a list in Python?", "options": ["append()", "insert()", "add()", "extend()"], "correctAnswer": "append()" },
    { "id": 33, "question": "Which function is used to read input from the user in Python?", "options": ["input()", "getinput()", "read()", "scan()"], "correctAnswer": "input()" },
    { "id": 34, "question": "How do you handle multiple exceptions in Python?", "options": ["try...except...except", "try...except...else", "try...catch", "except...else"], "correctAnswer": "try...except...else" },
    { "id": 35, "question": "Which of the following will return the absolute value of a number in Python?", "options": ["abs()", "absolute()", "mod()", "value()"], "correctAnswer": "abs()" },
    { "id": 36, "question": "What is the output of 'print(10 ** 2)'?", "options": ["100", "20", "102", "1000"], "correctAnswer": "100" },
    { "id": 37, "question": "Which function is used to convert a number to a string in Python?", "options": ["str()", "string()", "convert()", "to_string()"], "correctAnswer": "str()" },
    { "id": 38, "question": "How do you define a constant in Python?", "options": ["CONSTANT = value", "constant = value", "const value", "constant: value"], "correctAnswer": "CONSTANT = value" },
    { "id": 39, "question": "Which of the following is not a valid Python keyword?", "options": ["True", "None", "False", "Value"], "correctAnswer": "Value" },
    { "id": 40, "question": "What is the result of 'print(3 * 2 ** 3)'?", "options": ["24", "48", "16", "8"], "correctAnswer": "24" },
    { "id": 41, "question": "Which method is used to get the index of an element in a list?", "options": ["index()", "find()", "get()", "position()"], "correctAnswer": "index()" },
    { "id": 42, "question": "What is the output of 'print([1, 2, 3] == [1, 2, 3])'?", "options": ["True", "False", "None", "Error"], "correctAnswer": "True" },
    { "id": 43, "question": "Which of the following data types is immutable in Python?", "options": ["tuple", "list", "set", "dict"], "correctAnswer": "tuple" },
    { "id": 44, "question": "Which operator is used to concatenate two strings?", "options": ["+", "&", "=", "concat()"], "correctAnswer": "+" },
    { "id": 45, "question": "What is the output of 'print([1, 2, 3] * 2)'?", "options": ["[1, 2, 3, 1, 2, 3]", "[1, 2, 3]2", "[2, 3, 4]", "None of the above"], "correctAnswer": "[1, 2, 3, 1, 2, 3]" },
    { "id": 46, "question": "What is the correct way to access the first element in a list in Python?", "options": ["list[1]", "list[0]", "list.first()", "list.get(1)"], "correctAnswer": "list[0]" },
    { "id": 47, "question": "What does 'None' represent in Python?", "options": ["Null value", "Empty string", "False", "None of the above"], "correctAnswer": "Null value" },
    { "id": 48, "question": "Which of the following is used to raise an exception in Python?", "options": ["raise", "throw", "except", "error"], "correctAnswer": "raise" },
    { "id": 49, "question": "What is the output of 'print(3 == 3.0)'?", "options": ["True", "False", "Error", "None"], "correctAnswer": "True" },
    { "id": 50, "question": "What is the output of 'print(int('123'))'?", "options": ["123", "error", "None", "123.0"], "correctAnswer": "123" },
    { "id": 51, "question": "What is the result of 'print(4 % 2)'?", "options": ["0", "1", "2", "Error"], "correctAnswer": "0" },
    { "id": 52, "question": "What method is used to sort a list in Python?", "options": ["sort()", "order()", "arrange()", "set()"], "correctAnswer": "sort()" },
    { "id": 53, "question": "What will 'print(1 < 2 < 3)' output?", "options": ["True", "False", "None", "Error"], "correctAnswer": "True" },
    { "id": 54, "question": "How do you define a lambda function in Python?", "options": ["lambda x: x + 1", "def lambda(x): return x + 1", "lambda function(x): x + 1", "None of the above"], "correctAnswer": "lambda x: x + 1" },
    { "id": 55, "question": "Which of the following is used to break a loop in Python?", "options": ["break", "exit", "stop", "terminate"], "correctAnswer": "break" },
    { "id": 56, "question": "What does the 'del' statement do in Python?", "options": ["Deletes an element from a list", "Deletes a variable", "Deletes a file", "None of the above"], "correctAnswer": "Deletes a variable" },
    { "id": 57, "question": "Which function is used to get the maximum value from a list?", "options": ["max()", "maximum()", "largest()", "get_max()"], "correctAnswer": "max()" },
    { "id": 58, "question": "Which of the following functions is used to get the current date and time in Python?", "options": ["datetime.now()", "get_date()", "current_datetime()", "date_time()"], "correctAnswer": "datetime.now()" },
    { "id": 59, "question": "Which of the following functions is used to get the sum of all elements in a list?", "options": ["sum()", "total()", "add()", "calculate()"], "correctAnswer": "sum()" },
    { "id": 60, "question": "How do you define a set in Python?", "options": ["set = {}", "set = []", "set = ()", "set = <>"], "correctAnswer": "set = {}" },
    { "id": 61, "question": "What is the result of 'print([1, 2, 3] == [1, 2, 3])'?", "options": ["True", "False", "None", "Error"], "correctAnswer": "True" },
    { "id": 62, "question": "How do you check if a string starts with a specific prefix in Python?", "options": ["startswith()", "startswith_prefix()", "startwith()", "None of the above"], "correctAnswer": "startswith()" },
    { "id": 63, "question": "Which of the following will generate an error in Python?", "options": ["1 + 'a'", "3 * 2", "str + str", "None of the above"], "correctAnswer": "1 + 'a'" },
    { "id": 64, "question": "Which of the following methods is used to join elements of a list into a string in Python?", "options": ["join()", "combine()", "merge()", "concat()"], "correctAnswer": "join()" },
    { "id": 65, "question": "Which of the following is not a valid Python operator?", "options": ["&", "$", "%", "+"], "correctAnswer": "$" },
    { "id": 66, "question": "How do you access a dictionary value by key?", "options": ["dict[key]", "dict.key", "dict.get(key)", "Both A and C"], "correctAnswer": "Both A and C" },
    { "id": 67, "question": "Which of the following is used to remove a key-value pair from a dictionary?", "options": ["del", "remove()", "pop()", "None of the above"], "correctAnswer": "del" },
    { "id": 68, "question": "What is the output of 'print(list(range(5)))'?", "options": ["[0, 1, 2, 3, 4]", "range(5)", "5", "Error"], "correctAnswer": "[0, 1, 2, 3, 4]" },
    { "id": 69, "question": "Which of the following methods is used to remove whitespace from a string in Python?", "options": ["strip()", "trim()", "cut()", "none of the above"], "correctAnswer": "strip()" },
    { "id": 70, "question": "What is the result of 'print(abs(-5))'?", "options": ["5", "None", "error", "5.0"], "correctAnswer": "5" },
    { "id": 71, "question": "What does 'else' do in a try-except block?", "options": ["Executes if no exception is raised", "Executes if an exception is raised", "Stops the program", "None of the above"], "correctAnswer": "Executes if no exception is raised" },
    { "id": 72, "question": "How do you define a default parameter in Python?", "options": ["def function_name(param=default_value):", "def function_name(param: default_value):", "def function_name(param=default_value:)", "def function_name(param:default_value)"], "correctAnswer": "def function_name(param=default_value):" },
    { "id": 73, "question": "Which of the following is used to create a shallow copy of a list?", "options": ["copy()", "clone()", "duplicate()", "None of the above"], "correctAnswer": "copy()" },
    { "id": 74, "question": "What will 'print(3 < 2 or 5 > 4)' output?", "options": ["True", "False", "None", "Error"], "correctAnswer": "True" },
    { "id": 75, "question": "Which method is used to add an item at a specific index in a list?", "options": ["insert()", "add()", "append()", "extend()"], "correctAnswer": "insert()" },
    { "id": 76, "question": "What is the result of 'print(2 ** 3)'?", "options": ["8", "6", "2", "3"], "correctAnswer": "8" },
    { "id": 77, "question": "How do you handle multiple exceptions in Python?", "options": ["try-except", "try-except-finally", "try-except-else", "all of the above"], "correctAnswer": "all of the above" },
    { "id": 78, "question": "What does 'finally' do in a try-except block?", "options": ["Always executes", "Only executes if no exception is raised", "Only executes if an exception is raised", "None of the above"], "correctAnswer": "Always executes" },
    { "id": 79, "question": "What method is used to find the index of an item in a list?", "options": ["index()", "find()", "search()", "lookup()"], "correctAnswer": "index()" },
    { "id": 80, "question": "What is the output of 'print([2, 4, 6] * 2)'?", "options": ["[2, 4, 6, 2, 4, 6]", "[2, 4, 6, 4, 8, 12]", "[4, 8, 12]", "[2, 4]"], "correctAnswer": "[2, 4, 6, 2, 4, 6]" },
    { "id": 81, "question": "What does the 'yield' keyword do in Python?", "options": ["Pauses the function and returns a value", "Raises an exception", "Stops the program", "None of the above"], "correctAnswer": "Pauses the function and returns a value" },
    { "id": 82, "question": "Which of the following is used to handle time and dates in Python?", "options": ["time", "datetime", "date", "calendar"], "correctAnswer": "datetime" },
    { "id": 83, "question": "How do you define a global variable in Python?", "options": ["global variable_name", "variable_name = value", "def global variable_name", "global variable_name = value"], "correctAnswer": "global variable_name = value" },
    { "id": 84, "question": "What is the result of 'print(10 // 4)'?", "options": ["2", "2.5", "4", "3"], "correctAnswer": "2" },
    { "id": 85, "question": "Which method is used to remove all items from a list?", "options": ["clear()", "remove()", "delete()", "pop()"], "correctAnswer": "clear()" },
    { "id": 86, "question": "Which of the following methods can be used to convert an integer to a string?", "options": ["str()", "int()", "float()", "string()"], "correctAnswer": "str()" },
    { "id": 87, "question": "How can you get the length of a string in Python?", "options": ["len()", "length()", "size()", "count()"], "correctAnswer": "len()" },
    { "id": 88, "question": "What does 'set' do in Python?", "options": ["Creates a unique collection of elements", "Sets the value of a variable", "None of the above", "Sets a variable to 0"], "correctAnswer": "Creates a unique collection of elements" },
    { "id": 89, "question": "What is the output of 'print([1, 2] + [3, 4])'?", "options": ["[1, 2, 3, 4]", "[1, 2, 2, 3]", "[3, 4, 1, 2]", "[None]"], "correctAnswer": "[1, 2, 3, 4]" },
    { "id": 90, "question": "How do you reverse a list in Python?", "options": ["reverse()", "reversed()", "reverse()", "None of the above"], "correctAnswer": "reverse()" },
    { "id": 91, "question": "Which of the following is the correct syntax for a Python class method?", "options": ["def method_name(self):", "def method_name(self, args):", "method_name(args):", "None of the above"], "correctAnswer": "def method_name(self):" },
    { "id": 92, "question": "How do you import a specific function from a module in Python?", "options": ["from module import function", "import module.function", "module import function", "None of the above"], "correctAnswer": "from module import function" },
    { "id": 93, "question": "Which of the following is used to check if a number is even?", "options": ["% 2 == 0", "== 0", "even( )", "None of the above"], "correctAnswer": "% 2 == 0" },
    { "id": 94, "question": "What is the output of 'print([5, 4, 3][::-1])'?", "options": ["[3, 4, 5]", "[5, 4, 3]", "[None]", "Error"], "correctAnswer": "[3, 4, 5]" },
    { "id": 95, "question": "Which of the following is a Python data type?", "options": ["int", "string", "tuple", "All of the above"], "correctAnswer": "All of the above" },
    { "id": 96, "question": "Which of the following is the correct syntax for an if statement in Python?", "options": ["if condition:", "if condition then:", "if condition {}:", "if condition: end"], "correctAnswer": "if condition:" },
    { "id": 97, "question": "Which Python statement is used to exit a loop or function?", "options": ["exit", "break", "stop", "end"], "correctAnswer": "break" },
    { "id": 98, "question": "Which of the following is used to find the minimum value from a list in Python?", "options": ["min()", "minimum()", "smallest()", "least()"], "correctAnswer": "min()" },
    { "id": 99, "question": "What will 'print(1 == True)' output?", "options": ["True", "False", "None", "Error"], "correctAnswer": "True" },
    { "id": 100, "question": "Which of the following is used to compare two values in Python?", "options": ["==", "=", "===", "compare()"], "correctAnswer": "==" }
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
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/python' className="font-bold text-sm">Python Programming</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">Python Programming</h1>
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

export default Pyprog;

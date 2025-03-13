import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const Cprog = () => {
  // Mock dataset for questions
  const questionsData = [
    { "id": 1, "question": "What is the correct syntax for printing \"Hello, World!\" in C?", "options": ["printf('Hello, World!');", "printf(\"Hello, World!\");", "print('Hello, World!');", "print(\"Hello, World!\");"], "correctAnswer": "printf(\"Hello, World!\");" },
    { "id": 2, "question": "Which of the following is a valid C variable declaration?", "options": ["int 1number;", "int number;", "int number[];", "number int;"], "correctAnswer": "int number;" },
    { "id": 3, "question": "Which operator is used for division in C?", "options": ["*", "/", "%", "+"], "correctAnswer": "/" },
    { "id": 4, "question": "What is the default value of an uninitialized local variable in C?", "options": ["0", "undefined", "garbage value", "NULL"], "correctAnswer": "garbage value" },
    { "id": 5, "question": "Which header file is required for using the printf function?", "options": ["stdio.h", "stdlib.h", "math.h", "conio.h"], "correctAnswer": "stdio.h" },
    { "id": 6, "question": "Which of the following is a correct way to declare a constant in C?", "options": ["const int x = 10;", "int x = 10;", "constant int x = 10;", "int const x = 10;"], "correctAnswer": "const int x = 10;" },
    { "id": 7, "question": "What does the 'break' statement do in C?", "options": ["Exits the loop", "Pauses the program", "Exits the function", "Skips the current iteration"], "correctAnswer": "Exits the loop" },
    { "id": 8, "question": "Which of the following functions is used to get the length of a string?", "options": ["strlen()", "length()", "strlength()", "getlength()"], "correctAnswer": "strlen()" },
    { "id": 9, "question": "What is the correct way to define a pointer in C?", "options": ["int *ptr;", "pointer int ptr;", "ptr int *;", "int ptr;"], "correctAnswer": "int *ptr;" },
    { "id": 10, "question": "Which loop will always execute at least once in C?", "options": ["for loop", "while loop", "do-while loop", "none of the above"], "correctAnswer": "do-while loop" },
    { "id": 11, "question": "Which of the following is a valid pointer assignment in C?", "options": ["int *ptr = 10;", "int *ptr = &10;", "int ptr = *10;", "int *ptr = &x;"], "correctAnswer": "int *ptr = &x;" },
    { "id": 12, "question": "How can you prevent a C program from compiling?", "options": ["By removing semicolons", "By using undeclared variables", "By including invalid header files", "All of the above"], "correctAnswer": "All of the above" },
    { "id": 13, "question": "What does the 'continue' statement do in a loop?", "options": ["Exits the loop", "Skips the current iteration", "Starts a new loop", "None of the above"], "correctAnswer": "Skips the current iteration" },
    { "id": 14, "question": "Which keyword is used to define a function in C?", "options": ["function", "define", "void", "return"], "correctAnswer": "void" },
    { "id": 15, "question": "What is the output of the following code: 'printf(\"%d\", 7 / 3);'?", "options": ["2", "2.33", "3", "1"], "correctAnswer": "2" },
    { "id": 16, "question": "What is the purpose of the 'sizeof' operator in C?", "options": ["To find the size of a variable", "To return the size of an array", "To find the size of a data type", "All of the above"], "correctAnswer": "All of the above" },
    { "id": 17, "question": "What is the result of '5 % 2' in C?", "options": ["2", "1", "0", "3"], "correctAnswer": "1" },
    { "id": 18, "question": "What is the correct syntax for an 'if' statement in C?", "options": ["if (condition) {}", "if condition {}", "if {condition} {}", "if: condition { }"], "correctAnswer": "if (condition) {}" },
    { "id": 19, "question": "What is a 'null' pointer in C?", "options": ["A pointer that points to an invalid address", "A pointer with no value assigned", "A pointer to a variable", "A pointer that points to 0"], "correctAnswer": "A pointer that points to an invalid address" },
    { "id": 20, "question": "Which of the following data types is used to represent a single character in C?", "options": ["char", "string", "int", "float"], "correctAnswer": "char" },
    { "id": 21, "question": "What is the correct way to allocate memory dynamically in C?", "options": ["malloc()", "calloc()", "new()", "both malloc() and calloc()"], "correctAnswer": "both malloc() and calloc()" },
    { "id": 22, "question": "Which of the following is an invalid identifier in C?", "options": ["int 1var;", "int var1;", "int _var;", "int $var;"], "correctAnswer": "int 1var;" },
    { "id": 23, "question": "Which C keyword is used to declare a variable as a constant?", "options": ["const", "final", "static", "immutable"], "correctAnswer": "const" },
    { "id": 24, "question": "What is the size of an integer variable in C?", "options": ["2 bytes", "4 bytes", "8 bytes", "Depends on the system"], "correctAnswer": "Depends on the system" },
    { "id": 25, "question": "Which function is used to dynamically allocate memory for an array in C?", "options": ["malloc()", "alloc()", "mallocarray()", "calloc()"], "correctAnswer": "malloc()" },
    { "id": 26, "question": "What is the purpose of the 'return' statement in a function?", "options": ["To terminate the function", "To return a value from the function", "To continue executing the function", "Both A and B"], "correctAnswer": "Both A and B" },
    { "id": 27, "question": "What is the output of the following C code snippet: 'printf(\"%d\", 7 + 3);'?", "options": ["10", "7", "3", "error"], "correctAnswer": "10" },
    { "id": 28, "question": "Which of the following is a valid C array declaration?", "options": ["int arr[5];", "int arr(5);", "int arr[];", "int arr[5,6];"], "correctAnswer": "int arr[5];" },
    { "id": 29, "question": "Which C function is used to compare two strings?", "options": ["strcmp()", "compare()", "stringcmp()", "strcompare()"], "correctAnswer": "strcmp()" },
    { "id": 30, "question": "Which of the following is the correct way to access a member of a structure?", "options": ["struct.member", "structure.member", "member.structure", "structure->member"], "correctAnswer": "struct.member" },
    { "id": 31, "question": "Which of the following is an example of a syntax error in C?", "options": ["Missing semicolon", "Uninitialized variable", "Array out of bounds", "Wrong logic in program"], "correctAnswer": "Missing semicolon" },
    { "id": 32, "question": "Which of the following is a C keyword?", "options": ["goto", "loop", "execute", "start"], "correctAnswer": "goto" },
    { "id": 33, "question": "What does the '==' operator do in C?", "options": ["Assigns a value", "Compares two values", "Adds two values", "None of the above"], "correctAnswer": "Compares two values" },
    { "id": 34, "question": "What will be the output of the following C code: 'int x = 5; printf(\"%d\", ++x);'?", "options": ["5", "6", "4", "error"], "correctAnswer": "6" },
    { "id": 35, "question": "Which of the following operators is used to get the address of a variable?", "options": ["&", "*", "@", "#"], "correctAnswer": "&" },
    { "id": 36, "question": "What is the correct syntax to define a function in C?", "options": ["return type functionName();", "void functionName();", "functionName return;", "functionName() : return;"], "correctAnswer": "return type functionName();" },
    { "id": 37, "question": "What is the maximum number of dimensions a C array can have?", "options": ["2", "3", "4", "No limit"], "correctAnswer": "No limit" },
    { "id": 38, "question": "Which of the following functions is used to copy a string in C?", "options": ["strcpy()", "copy()", "strcopy()", "stringcopy()"], "correctAnswer": "strcpy()" },
    { "id": 39, "question": "What will the following C code output: 'printf(\"%d\", 2 == 3);'?", "options": ["1", "0", "2", "error"], "correctAnswer": "0" },
    { "id": 40, "question": "Which of the following is a valid comment in C?", "options": ["// This is a comment", "/* This is a comment", "# This is a comment", "comment This is a comment"], "correctAnswer": "// This is a comment" },
    { "id": 41, "question": "What is the result of the expression '3 > 2 && 4 > 3' in C?", "options": ["True", "False", "Error", "None of the above"], "correctAnswer": "True" },
    { "id": 42, "question": "What will the following code print? 'printf(\"%d\", 5 / 2);'", "options": ["2", "2.5", "3", "1"], "correctAnswer": "2" },
    { "id": 43, "question": "What will the following code output: 'printf(\"%c\", 65);'?", "options": ["A", "65", "Error", "None of the above"], "correctAnswer": "A" },
    { "id": 44, "question": "Which of the following is not a valid loop type in C?", "options": ["for", "while", "until", "do-while"], "correctAnswer": "until" },
    { "id": 45, "question": "Which of the following is used to include a library in C?", "options": ["#include", "#import", "#define", "#library"], "correctAnswer": "#include" },
    { "id": 46, "question": "Which of the following is used for conditional statements in C?", "options": ["if", "switch", "both if and switch", "else"], "correctAnswer": "both if and switch" },
    { "id": 47, "question": "How do you declare a string in C?", "options": ["char str[];", "char str();", "string str;", "str[] char;"], "correctAnswer": "char str[];" },
    { "id": 48, "question": "Which function is used to find the square root of a number in C?", "options": ["sqrt()", "pow()", "square()", "root()"], "correctAnswer": "sqrt()" },
    { "id": 49, "question": "What is the size of a char data type in C?", "options": ["1 byte", "2 bytes", "4 bytes", "8 bytes"], "correctAnswer": "1 byte" },
    { "id": 50, "question": "What is the purpose of the 'void' data type in C?", "options": ["To declare a function that doesn't return a value", "To declare a function with no parameters", "To declare a pointer", "None of the above"], "correctAnswer": "To declare a function that doesn't return a value" },
    { "id": 51, "question": "Which of the following functions is used to free dynamically allocated memory?", "options": ["free()", "dealloc()", "delete()", "clear()"], "correctAnswer": "free()" },
    { "id": 52, "question": "Which C function is used to find the length of an array?", "options": ["sizeof()", "length()", "strlen()", "count()"], "correctAnswer": "sizeof()" },
    { "id": 53, "question": "Which of the following can be a function argument in C?", "options": ["int", "float", "char", "All of the above"], "correctAnswer": "All of the above" },
    { "id": 54, "question": "Which statement is used to exit a program in C?", "options": ["exit()", "return", "stop()", "end()"], "correctAnswer": "exit()" },
    { "id": 55, "question": "Which operator is used to dereference a pointer in C?", "options": ["*", "&", "#", "$"], "correctAnswer": "*" },
    { "id": 56, "question": "Which of the following is the correct way to initialize an array in C?", "options": ["int arr[3] = {1, 2, 3};", "int arr[] = {1, 2, 3};", "Both A and B", "int arr[3] = 1, 2, 3;"], "correctAnswer": "Both A and B" },
    { "id": 57, "question": "Which function is used to reverse a string in C?", "options": ["strrev()", "reverse()", "revstr()", "None of the above"], "correctAnswer": "None of the above" },
    { "id": 58, "question": "Which of the following is used for multi-line comments in C?", "options": ["/* comment */", "// comment", "# comment", "comment /* */"], "correctAnswer": "/* comment */" },
    { "id": 59, "question": "Which of the following is the correct syntax to open a file in C?", "options": ["fopen(\"filename\", \"r\");", "open(\"filename\");", "file_open(\"filename\");", "openfile(\"filename\", \"r\");"], "correctAnswer": "fopen(\"filename\", \"r\");" },
    { "id": 60, "question": "Which of the following functions is used to read from a file in C?", "options": ["fread()", "fscanf()", "fget()", "read()"], "correctAnswer": "fscanf()" },
    { "id": 61, "question": "Which of the following is a valid structure in C?", "options": ["struct person { int age; }", "struct { int age; } person;", "struct person: int age;", "struct { int age; };"], "correctAnswer": "struct person { int age; }" },
    { "id": 62, "question": "Which keyword is used to declare a static variable in C?", "options": ["static", "extern", "final", "public"], "correctAnswer": "static" },
    { "id": 63, "question": "What does the 'exit(0)' function do in C?", "options": ["Exits the program successfully", "Exits the program with an error", "Pauses the program", "None of the above"], "correctAnswer": "Exits the program successfully" },
    { "id": 64, "question": "Which of the following will result in a segmentation fault in C?", "options": ["Accessing an array out of bounds", "Dereferencing a null pointer", "Both A and B", "None of the above"], "correctAnswer": "Both A and B" },
    { "id": 65, "question": "What is the output of 'printf(\"%d\", 3 == 3);'?", "options": ["1", "0", "True", "False"], "correctAnswer": "1" },
    { "id": 66, "question": "What is the size of a float in C?", "options": ["2 bytes", "4 bytes", "8 bytes", "10 bytes"], "correctAnswer": "4 bytes" },
    { "id": 67, "question": "What is a function pointer in C?", "options": ["A pointer to a function", "A function that returns a pointer", "A function that points to a variable", "None of the above"], "correctAnswer": "A pointer to a function" },
    { "id": 68, "question": "Which of the following data types is used for storing real numbers?", "options": ["int", "char", "float", "double"], "correctAnswer": "float" },
    { "id": 69, "question": "What is the purpose of the 'break' statement?", "options": ["To stop the loop", "To pause the loop", "To skip an iteration", "None of the above"], "correctAnswer": "To stop the loop" },
    { "id": 70, "question": "Which of the following is used to initialize a function pointer?", "options": ["FunctionName()", "PointerName = FunctionName;", "PointerName = &FunctionName;", "FunctionName = &PointerName;"], "correctAnswer": "PointerName = FunctionName;" },
    { "id": 71, "question": "Which statement is used to declare a function prototype?", "options": ["void function();", "function() void;", "function();", "void function;"], "correctAnswer": "void function();" },
    { "id": 72, "question": "What is the function of the 'exit()' function?", "options": ["Exits the current loop", "Exits the current function", "Terminates the program", "None of the above"], "correctAnswer": "Terminates the program" },
    { "id": 73, "question": "Which of the following will cause a segmentation fault in C?", "options": ["Dereferencing a null pointer", "Accessing an out-of-bounds array", "Both A and B", "None of the above"], "correctAnswer": "Both A and B" },
    { "id": 74, "question": "What is the purpose of the 'return' statement in C?", "options": ["To terminate a function", "To return a value from a function", "To skip to the next iteration of a loop", "Both A and B"], "correctAnswer": "Both A and B" },
    { "id": 75, "question": "What is the output of the following code: 'printf(\"%d\", 2 + 3 * 4);'?", "options": ["14", "20", "18", "23"], "correctAnswer": "14" },
    { "id": 76, "question": "Which of the following is a valid array declaration?", "options": ["int arr[10];", "int arr(10);", "int arr[];", "int arr[] = {1, 2, 3};"], "correctAnswer": "int arr[10];" },
    { "id": 77, "question": "What does the function 'strcat()' do in C?", "options": ["Concatenates two strings", "Finds the length of a string", "Compares two strings", "Copies a string"], "correctAnswer": "Concatenates two strings" },
    { "id": 78, "question": "Which of the following is a correct syntax for declaring a function in C?", "options": ["void function();", "void function { }", "function();", "function(); void"], "correctAnswer": "void function();" },
    { "id": 79, "question": "What is the value of x after this code executes: 'int x = 5; x *= 2;'", "options": ["5", "10", "15", "2"], "correctAnswer": "10" },
    { "id": 80, "question": "What does the 'sizeof()' operator return?", "options": ["The size of a variable in bytes", "The address of a variable", "The value of a variable", "None of the above"], "correctAnswer": "The size of a variable in bytes" },
    { "id": 81, "question": "Which of the following is a correct way to declare a pointer to a function?", "options": ["int (*ptr)();", "int *ptr();", "void *ptr();", "int ptr*();"], "correctAnswer": "int (*ptr)();" },
    { "id": 82, "question": "What is a function prototype in C?", "options": ["A declaration of a function", "A definition of a function", "A call to a function", "None of the above"], "correctAnswer": "A declaration of a function" },
    { "id": 83, "question": "Which of the following will be printed by the following code: 'int x = 5; printf(\"%d\", x++);'?", "options": ["5", "6", "error", "none of the above"], "correctAnswer": "5" },
    { "id": 84, "question": "Which of the following is the correct way to declare an array of strings?", "options": ["char arr[10][20];", "char arr[10];", "char *arr[10];", "string arr[10];"], "correctAnswer": "char arr[10][20];" },
    { "id": 85, "question": "What is the output of 'printf(\"%d\", 7 * 3 + 2);'?", "options": ["23", "21", "26", "31"], "correctAnswer": "23" },
    { "id": 86, "question": "What will be the value of the following C code snippet: 'int x = 7; printf(\"%d\", x % 4);'?", "options": ["1", "3", "7", "4"], "correctAnswer": "3" },
    { "id": 87, "question": "Which of the following C functions is used to find the first occurrence of a character in a string?", "options": ["strchr()", "strstr()", "strcomp()", "strfind()"], "correctAnswer": "strchr()" },
    { "id": 88, "question": "What does the expression 'x && y' do in C?", "options": ["Logical AND", "Logical OR", "Bitwise AND", "Bitwise OR"], "correctAnswer": "Logical AND" },
    { "id": 89, "question": "What is the output of the following code snippet: 'printf(\"%d\", 2 != 3);'?", "options": ["True", "False", "1", "0"], "correctAnswer": "1" },
    { "id": 90, "question": "Which operator is used to check equality in C?", "options": ["==", "=", "!", "==="], "correctAnswer": "==" },
    { "id": 91, "question": "Which function is used to get the square root of a number in C?", "options": ["sqrt()", "sqrtf()", "pow()", "abs()"], "correctAnswer": "sqrt()" },
    { "id": 92, "question": "What will the following code print: 'printf(\"%d\", 5 * 5);'?", "options": ["25", "10", "5", "50"], "correctAnswer": "25" },
    { "id": 93, "question": "Which of the following is the correct way to declare a two-dimensional array?", "options": ["int arr[2][3];", "int arr[3,2];", "int arr[];", "int arr[][];"], "correctAnswer": "int arr[2][3];" },
    { "id": 94, "question": "What is the purpose of the 'continue' statement?", "options": ["To skip to the next iteration of a loop", "To stop the loop", "To exit a loop", "None of the above"], "correctAnswer": "To skip to the next iteration of a loop" },
    { "id": 95, "question": "Which of the following is a correct way to define a function that doesn't return anything?", "options": ["void functionName();", "functionName();", "functionName void;", "function voidName;"], "correctAnswer": "void functionName();" },
    { "id": 96, "question": "Which of the following is the result of the expression '10 / 3'?", "options": ["3", "3.33", "3.0", "4"], "correctAnswer": "3" },
    { "id": 97, "question": "Which function is used to compare two strings in C?", "options": ["strcmp()", "strcmpi()", "compare()", "stringcompare()"], "correctAnswer": "strcmp()" },
    { "id": 98, "question": "What is the correct syntax for a pointer declaration?", "options": ["int *ptr;", "int ptr;", "pointer int ptr;", "int ptr*;"], "correctAnswer": "int *ptr;" },
    { "id": 99, "question": "What will the code 'int x = 5; printf(\"%d\", x++);' print?", "options": ["5", "6", "4", "Error"], "correctAnswer": "5" },
    { "id": 100, "question": "Which of the following is used to include a library in C?", "options": ["#include", "#import", "#define", "#library"], "correctAnswer": "#include" }
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
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/c' className="font-bold text-sm">C Programming</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">C Programming</h1>
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

export default Cprog;

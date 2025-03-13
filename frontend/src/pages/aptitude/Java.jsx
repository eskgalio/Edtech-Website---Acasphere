import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const Java = () => {
  // Mock dataset for questions
  const questionsData = [
    { "id": 1, "question": "What is the default value of a boolean variable in Java?", "options": ["true", "false", "0", "null"], "correctAnswer": "false" },
    { "id": 2, "question": "Which method is used to start a thread in Java?", "options": ["start()", "run()", "execute()", "init()"], "correctAnswer": "start()" },
    { "id": 3, "question": "What does the 'final' keyword do in Java?", "options": ["Makes a variable constant", "Marks a class as final", "Prevents inheritance", "All of the above"], "correctAnswer": "All of the above" },
    { "id": 4, "question": "Which of the following is used to create an instance of a class in Java?", "options": ["new", "create", "instanceof", "class"], "correctAnswer": "new" },
    { "id": 5, "question": "What does the 'this' keyword refer to in Java?", "options": ["Current object", "Parent class", "Method argument", "Class variable"], "correctAnswer": "Current object" },
    { "id": 6, "question": "Which of the following data types is used to represent a single character in Java?", "options": ["char", "String", "boolean", "int"], "correctAnswer": "char" },
    { "id": 7, "question": "Which of the following is not a primitive data type in Java?", "options": ["int", "double", "char", "String"], "correctAnswer": "String" },
    { "id": 8, "question": "What is the default value of an integer variable in Java?", "options": ["0", "1", "null", "undefined"], "correctAnswer": "0" },
    { "id": 9, "question": "Which exception is thrown when dividing by zero in Java?", "options": ["ArithmeticException", "NullPointerException", "IndexOutOfBoundsException", "ClassCastException"], "correctAnswer": "ArithmeticException" },
    { "id": 10, "question": "Which of the following is a correct syntax to declare an array in Java?", "options": ["int arr[];", "int[] arr;", "int arr[] = new int[10];", "All of the above"], "correctAnswer": "All of the above" },
    { "id": 11, "question": "What is the output of the following code: System.out.println(10 / 4);", "options": ["2", "2.5", "2.0", "ArithmeticException"], "correctAnswer": "2" },
    { "id": 12, "question": "Which method is used to compare two strings in Java?", "options": ["compare()", "equals()", "equalsIgnoreCase()", "compareTo()"], "correctAnswer": "equals()" },
    { "id": 13, "question": "What is the default value of a reference variable in Java?", "options": ["null", "undefined", "0", "false"], "correctAnswer": "null" },
    { "id": 14, "question": "Which of the following statements is correct for Java?", "options": ["Java is a platform-independent language", "Java is a platform-dependent language", "Java does not support object-oriented concepts", "Java is used only for desktop applications"], "correctAnswer": "Java is a platform-independent language" },
    { "id": 15, "question": "Which access modifier allows a class member to be accessed within the same package in Java?", "options": ["public", "private", "protected", "default"], "correctAnswer": "default" },
    { "id": 16, "question": "Which of the following methods is used to get the length of a string in Java?", "options": ["length()", "getLength()", "size()", "count()"], "correctAnswer": "length()" },
    { "id": 17, "question": "Which class is used to read input from the console in Java?", "options": ["Scanner", "BufferedReader", "Console", "InputStream"], "correctAnswer": "Scanner" },
    { "id": 18, "question": "Which method is used to terminate the execution of a thread in Java?", "options": ["stop()", "terminate()", "exit()", "destroy()"], "correctAnswer": "stop()" },
    { "id": 19, "question": "What is the purpose of the 'super' keyword in Java?", "options": ["Refers to the parent class", "Accesses the constructor of the parent class", "Accesses parent class methods", "All of the above"], "correctAnswer": "All of the above" },
    { "id": 20, "question": "Which of the following is used to handle exceptions in Java?", "options": ["try-catch", "throw-catch", "try-throw", "catch-throw"], "correctAnswer": "try-catch" },
    { "id": 21, "question": "Which of the following is a valid Java identifier?", "options": ["$abc", "_abc", "1abc", "abc1$"], "correctAnswer": "_abc" },
    { "id": 22, "question": "Which of the following keywords is used to define a constant in Java?", "options": ["final", "const", "static", "constant"], "correctAnswer": "final" },
    { "id": 23, "question": "Which operator is used to concatenate strings in Java?", "options": ["+", "-", "*", "/"], "correctAnswer": "+" },
    { "id": 24, "question": "What is the purpose of the 'void' keyword in Java?", "options": ["Indicates a method does not return a value", "Indicates a method returns an integer", "Indicates a method can return multiple values", "Indicates a variable is empty"], "correctAnswer": "Indicates a method does not return a value" },
    { "id": 25, "question": "Which of the following is true about constructors in Java?", "options": ["A constructor is called when an object is created", "A constructor must have a return type", "A constructor can be called explicitly", "A constructor is optional"], "correctAnswer": "A constructor is called when an object is created" },
    { "id": 26, "question": "What is the output of the following code: System.out.println('A' + 'B');", "options": ["'A' + 'B'", "131", "AB", "Error"], "correctAnswer": "131" },
    { "id": 27, "question": "Which of the following is an example of a checked exception in Java?", "options": ["IOException", "ArithmeticException", "NullPointerException", "ClassCastException"], "correctAnswer": "IOException" },
    { "id": 28, "question": "Which method is used to remove a character from a string in Java?", "options": ["remove()", "delete()", "replace()", "substring()"], "correctAnswer": "replace()" },
    { "id": 29, "question": "Which class is the root class for all objects in Java?", "options": ["Object", "Class", "String", "Integer"], "correctAnswer": "Object" },
    { "id": 30, "question": "Which of the following methods is used to sort an array in Java?", "options": ["sort()", "arr.sort()", "Arrays.sort()", "array.sort()"], "correctAnswer": "Arrays.sort()" },
    { "id": 31, "question": "Which operator is used to compare two values in Java?", "options": ["==", "equals()", "compare()", "==="], "correctAnswer": "==" },
    { "id": 32, "question": "What is the default value of a double variable in Java?", "options": ["0.0", "null", "0", "undefined"], "correctAnswer": "0.0" },
    { "id": 33, "question": "What is the purpose of the 'instanceof' keyword in Java?", "options": ["To check if an object is an instance of a specific class", "To compare two objects", "To create an instance of a class", "To cast objects to a specific class"], "correctAnswer": "To check if an object is an instance of a specific class" },
    { "id": 34, "question": "Which of the following is true about the 'public' access modifier?", "options": ["It allows access from any other class", "It restricts access to the current class", "It allows access only from the same package", "It prevents access outside the class"], "correctAnswer": "It allows access from any other class" },
    { "id": 35, "question": "What is the output of the following code: System.out.println(10 % 3);", "options": ["1", "3", "10", "0"], "correctAnswer": "1" },
    { "id": 36, "question": "Which of the following is the correct syntax for declaring a multi-dimensional array in Java?", "options": ["int[][] arr;", "int[] arr[];", "int arr[];", "All of the above"], "correctAnswer": "All of the above" },
    { "id": 37, "question": "Which of the following is used to exit a loop prematurely in Java?", "options": ["break", "continue", "return", "exit"], "correctAnswer": "break" },
    { "id": 38, "question": "What is the output of the following code: System.out.println(2 + 3 * 5);", "options": ["17", "25", "35", "7"], "correctAnswer": "17" },
    { "id": 39, "question": "Which of the following keywords is used to define a class in Java?", "options": ["class", "def", "function", "method"], "correctAnswer": "class" },
    { "id": 40, "question": "Which of the following is true about interfaces in Java?", "options": ["An interface cannot have any method implementations", "An interface can have method implementations", "An interface can only contain constants", "An interface is not allowed to have variables"], "correctAnswer": "An interface cannot have any method implementations" },
    { "id": 41, "question": "Which of the following is the correct way to declare a method in Java?", "options": ["void methodName()", "methodName void()", "methodName()", "void methodName"], "correctAnswer": "void methodName()" },
    { "id": 42, "question": "Which of the following is used to check whether an object is null in Java?", "options": ["object == null", "object.equals(null)", "object.isNull()", "object.null()"], "correctAnswer": "object == null" },
    { "id": 43, "question": "What is the output of the following code: System.out.println('A' + 1);", "options": ["66", "65", "66", "Error"], "correctAnswer": "66" },
    { "id": 44, "question": "What does the 'continue' statement do in Java?", "options": ["Skips the current iteration of a loop", "Exits the loop", "Pauses the loop", "None of the above"], "correctAnswer": "Skips the current iteration of a loop" },
    { "id": 45, "question": "Which of the following is used to create a new thread in Java?", "options": ["Thread.start()", "Thread.create()", "Thread.run()", "Thread.new()"], "correctAnswer": "Thread.start()" },
    { "id": 46, "question": "Which method is used to find the absolute value of a number in Java?", "options": ["Math.abs()", "Math.valueOf()", "Math.absolute()", "abs()"], "correctAnswer": "Math.abs()" },
        { "id": 47, "question": "Which of the following is not a valid data type in Java?", "options": ["int", "float", "boolean", "real"], "correctAnswer": "real" },
        { "id": 48, "question": "Which of the following is used to convert a string to an integer in Java?", "options": ["Integer.parseInt()", "String.toInteger()", "Integer.convert()", "parseInt()"], "correctAnswer": "Integer.parseInt()" },
        { "id": 49, "question": "What is the output of the following code: System.out.println(10 > 5);", "options": ["true", "false", "error", "0"], "correctAnswer": "true" },
        { "id": 50, "question": "What does the 'throw' keyword do in Java?", "options": ["Throws an exception", "Creates a new thread", "Defines a method", "Marks a method as deprecated"], "correctAnswer": "Throws an exception" },
        { "id": 51, "question": "Which of the following is the correct way to instantiate a String object in Java?", "options": ["String str = 'hello';", "String str = new String('hello');", "String str = new String('hello');", "String str = 'hello';"], "correctAnswer": "String str = 'hello';" },
        { "id": 52, "question": "Which of the following methods is used to remove the last character of a string in Java?", "options": ["substring()", "remove()", "deleteCharAt()", "cut()"], "correctAnswer": "substring()" },
        { "id": 53, "question": "Which of the following is used to terminate a method in Java?", "options": ["return", "exit", "stop", "end"], "correctAnswer": "return" },
        { "id": 54, "question": "What is the default value of an instance variable of type Object in Java?", "options": ["null", "undefined", "0", "false"], "correctAnswer": "null" },
        { "id": 55, "question": "Which of the following is used to convert an integer to a string in Java?", "options": ["Integer.toString()", "String.valueOf()", "String.toString()", "toString()"], "correctAnswer": "String.valueOf()" },
        { "id": 56, "question": "Which of the following methods is used to find the length of an array in Java?", "options": ["length", "size()", "getLength()", "length()"], "correctAnswer": "length" },
        { "id": 57, "question": "What is the output of the following code: System.out.println(5 + 3 + 'A');", "options": ["56", "58", "65", "73"], "correctAnswer": "73" },
        { "id": 58, "question": "Which of the following is a valid loop structure in Java?", "options": ["for", "while", "do-while", "All of the above"], "correctAnswer": "All of the above" },
        { "id": 59, "question": "Which of the following is not an access modifier in Java?", "options": ["public", "private", "protected", "internal"], "correctAnswer": "internal" },
        { "id": 60, "question": "Which of the following is the correct syntax for a switch statement in Java?", "options": ["switch (expression) { case value: statement; break; }", "switch (value) { statement; }", "switch { case value: statement; break; }", "switch(value): case statement; break;"], "correctAnswer": "switch (expression) { case value: statement; break; }" },
        { "id": 61, "question": "Which of the following is not a valid Java loop?", "options": ["for", "while", "foreach", "repeat"], "correctAnswer": "repeat" },
        { "id": 62, "question": "What is the return type of the 'toString()' method in Java?", "options": ["String", "Object", "char", "void"], "correctAnswer": "String" },
        { "id": 63, "question": "Which of the following methods is used to convert a string to lowercase in Java?", "options": ["toLowerCase()", "lowercase()", "convertLower()", "lower()"], "correctAnswer": "toLowerCase()" },
        { "id": 64, "question": "Which of the following statements is used to print output in Java?", "options": ["System.out.println()", "System.print()", "System.out.print()", "print()"], "correctAnswer": "System.out.println()" },
        { "id": 65, "question": "Which of the following is used to terminate a loop in Java?", "options": ["break", "continue", "exit", "return"], "correctAnswer": "break" },
        { "id": 66, "question": "Which of the following is the correct way to declare a method that returns an integer in Java?", "options": ["int methodName()", "int methodName{}", "void methodName(int x)", "void int methodName()"], "correctAnswer": "int methodName()" },
        { "id": 67, "question": "What is the default value of a long variable in Java?", "options": ["0L", "0", "null", "undefined"], "correctAnswer": "0L" },
        { "id": 68, "question": "Which of the following is used to handle multiple exceptions in a single block in Java?", "options": ["Multi-catch", "Multiple-catch", "catch-all", "catch multiple"], "correctAnswer": "Multi-catch" },
        { "id": 69, "question": "Which of the following is not a valid loop in Java?", "options": ["while", "for", "do-while", "repeat"], "correctAnswer": "repeat" },
        { "id": 70, "question": "Which of the following is used to throw an exception manually in Java?", "options": ["throw", "throws", "exception", "catch"], "correctAnswer": "throw" },
        { "id": 71, "question": "Which of the following methods is used to check if an array contains a specific element?", "options": ["contains()", "find()", "indexOf()", "Arrays.asList().contains()"], "correctAnswer": "Arrays.asList().contains()" },
        { "id": 72, "question": "Which keyword is used to create an instance of an interface in Java?", "options": ["new", "implements", "extends", "interface"], "correctAnswer": "implements" },
        { "id": 73, "question": "Which of the following is used to ensure that only one instance of a class is created?", "options": ["Singleton", "Factory", "Prototype", "Abstract"], "correctAnswer": "Singleton" },
        { "id": 74, "question": "Which method is used to compare two objects in Java?", "options": ["equals()", "compare()", "compareTo()", "=="], "correctAnswer": "equals()" },
        { "id": 75, "question": "What is the output of the following code: System.out.println(10 == 10);", "options": ["true", "false", "error", "0"], "correctAnswer": "true" },
        { "id": 76, "question": "Which of the following is not a primitive data type in Java?", "options": ["char", "boolean", "float", "String"], "correctAnswer": "String" },
        { "id": 77, "question": "Which of the following methods is used to find the square root of a number in Java?", "options": ["Math.sqrt()", "Math.pow()", "sqrt()", "power()"], "correctAnswer": "Math.sqrt()" },
        { "id": 78, "question": "Which of the following is the correct syntax for defining a constructor in Java?", "options": ["public MyClass()", "public MyClass {}", "MyClass()", "MyClass() {}"], "correctAnswer": "public MyClass()" },
        { "id": 79, "question": "What is the default value of a float variable in Java?", "options": ["0.0f", "0.0", "null", "undefined"], "correctAnswer": "0.0f" },
        { "id": 80, "question": "Which of the following is used to find the maximum of two numbers in Java?", "options": ["Math.max()", "max()", "compare()", "maximum()"], "correctAnswer": "Math.max()" },
        { "id": 81, "question": "Which of the following is true about method overloading in Java?", "options": ["Methods can have the same name but different parameters", "Methods can have the same name and same parameters", "Overloading is not allowed in Java", "Methods can have the same name but different return types"], "correctAnswer": "Methods can have the same name but different parameters" },
        { "id": 82, "question": "Which of the following methods is used to close a file in Java?", "options": ["close()", "end()", "closeFile()", "file.close()"], "correctAnswer": "close()" },
        { "id": 83, "question": "Which keyword is used to define an abstract class in Java?", "options": ["abstract", "interface", "class", "none"], "correctAnswer": "abstract" },
        { "id": 84, "question": "What is the return type of the 'hashCode()' method in Java?", "options": ["int", "long", "String", "Object"], "correctAnswer": "int" },
        { "id": 85, "question": "Which of the following is used to create a thread in Java?", "options": ["Thread.run()", "Thread.start()", "Thread.create()", "Thread.new()"], "correctAnswer": "Thread.start()" },
        { "id": 86, "question": "Which of the following is used to perform a division in Java?", "options": ["/", "//", "divide()", "mod()"], "correctAnswer": "/" },
        { "id": 87, "question": "Which of the following is not a valid method to handle exceptions in Java?", "options": ["try-catch", "throw-throws", "throw-catch", "try-finally"], "correctAnswer": "throw-catch" },
        { "id": 88, "question": "Which of the following operators is used to check equality in Java?", "options": ["==", "equals()", "isEqual()", "==="], "correctAnswer": "==" },
        { "id": 89, "question": "Which of the following is used to find the absolute value of a number in Java?", "options": ["Math.abs()", "Math.absolute()", "abs()", "valueOf()"], "correctAnswer": "Math.abs()" },
        { "id": 90, "question": "Which of the following is used to initialize an array in Java?", "options": ["new int[10]", "int[10] new", "new int = 10", "int[] arr = new int[10];"], "correctAnswer": "int[] arr = new int[10];" },
        { "id": 91, "question": "Which of the following is true about arrays in Java?", "options": ["Arrays are fixed in size", "Arrays are dynamic in size", "Arrays are only used for integers", "None of the above"], "correctAnswer": "Arrays are fixed in size" },
        { "id": 92, "question": "Which of the following is used to check whether a string is empty in Java?", "options": ["string.length() == 0", "string.isEmpty()", "string.isBlank()", "string.equals('')"], "correctAnswer": "string.isEmpty()" },
        { "id": 93, "question": "Which of the following is a valid constructor call in Java?", "options": ["new MyClass()", "MyClass.new()", "MyClass()", "new MyClass[]()"], "correctAnswer": "new MyClass()" },
        { "id": 94, "question": "Which of the following is used to cast one type to another in Java?", "options": ["(type)value", "type(value)", "cast(value)", "convert(value)"], "correctAnswer": "(type)value" },
        { "id": 95, "question": "Which of the following methods is used to join two strings in Java?", "options": ["concat()", "join()", "merge()", "combine()"], "correctAnswer": "concat()" },
        { "id": 96, "question": "Which of the following is the correct syntax to create an object of a class in Java?", "options": ["new ClassName()", "ClassName object = new ClassName();", "ClassName = new object();", "object = new ClassName()"], "correctAnswer": "ClassName object = new ClassName();" },
        { "id": 97, "question": "Which of the following is used to convert an object to a string in Java?", "options": ["toString()", "convert()", "toStr()", "stringify()"], "correctAnswer": "toString()" },
        { "id": 98, "question": "Which of the following keywords is used to declare an interface in Java?", "options": ["interface", "implements", "abstract", "class"], "correctAnswer": "interface" },
        { "id": 99, "question": "Which of the following is used to check if a string contains a specific character?", "options": ["contains()", "has()", "includes()", "indexOf()"], "correctAnswer": "contains()" },
        { "id": 100, "question": "Which of the following is true about method overriding in Java?", "options": ["Method overriding is done in the subclass", "Method overriding is done in the superclass", "Method overriding is not allowed in Java", "Method overriding happens when the method signature is the same"], "correctAnswer": "Method overriding is done in the subclass" }    
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
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/java' className="font-bold text-sm">Java Programming</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">Java Programming</h1>
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

export default Java;

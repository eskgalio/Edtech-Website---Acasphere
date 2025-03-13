import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const DigiElec = () => {
  // Mock dataset for questions
  const questionsData = [
    {
        "id": 1,
        "question": "What does a logic gate do?",
        "options": ["Performs arithmetic operations", "Performs logical operations", "Stores data", "Controls the flow of electricity"],
        "correctAnswer": "Performs logical operations"
    },
    {
        "id": 2,
        "question": "Which of the following is a universal gate?",
        "options": ["AND gate", "OR gate", "NAND gate", "XOR gate"],
        "correctAnswer": "NAND gate"
    },
    {
        "id": 3,
        "question": "What is the output of an AND gate when both inputs are 1?",
        "options": ["1", "0", "Undefined", "Depends on the inputs"],
        "correctAnswer": "1"
    },
    {
        "id": 4,
        "question": "What is the output of an OR gate when both inputs are 0?",
        "options": ["1", "0", "Depends on the inputs", "Undefined"],
        "correctAnswer": "0"
    },
    {
        "id": 5,
        "question": "What does a NOT gate do?",
        "options": ["Inverts the input", "Adds the input", "Multiplies the input", "Divides the input"],
        "correctAnswer": "Inverts the input"
    },
    {
        "id": 6,
        "question": "What is the purpose of a flip-flop?",
        "options": ["Stores a single bit of data", "Performs arithmetic operations", "Regulates input flow", "Converts digital signals to analog"],
        "correctAnswer": "Stores a single bit of data"
    },
    {
        "id": 7,
        "question": "Which of the following is a type of flip-flop?",
        "options": ["RS flip-flop", "AND gate", "OR gate", "Inverter"],
        "correctAnswer": "RS flip-flop"
    },
    {
        "id": 8,
        "question": "What is the main purpose of a decoder?",
        "options": ["Converts binary data into decimal", "Converts encoded data into a specific output", "Performs logical operations", "Stores data for future use"],
        "correctAnswer": "Converts encoded data into a specific output"
    },
    {
        "id": 9,
        "question": "Which logic gate has only one input?",
        "options": ["AND gate", "OR gate", "NOT gate", "XOR gate"],
        "correctAnswer": "NOT gate"
    },
    {
        "id": 10,
        "question": "What is the result of XOR operation when both inputs are the same?",
        "options": ["1", "0", "Undefined", "Depends on the inputs"],
        "correctAnswer": "0"
    },
    {
        "id": 11,
        "question": "What does a multiplexer do?",
        "options": ["Selects one of many inputs", "Performs logical operations", "Stores data", "Converts analog signals to digital"],
        "correctAnswer": "Selects one of many inputs"
    },
    {
        "id": 12,
        "question": "What is the minimum number of flip-flops required to create a 4-bit binary counter?",
        "options": ["2", "3", "4", "5"],
        "correctAnswer": "4"
    },
    {
        "id": 13,
        "question": "What is a common use of a D flip-flop?",
        "options": ["Data storage", "Logical AND operations", "Data multiplication", "Arithmetic addition"],
        "correctAnswer": "Data storage"
    },
    {
        "id": 14,
        "question": "Which of the following is used to convert binary data to decimal?",
        "options": ["Binary decoder", "Encoder", "Multiplexer", "Inverter"],
        "correctAnswer": "Binary decoder"
    },
    {
        "id": 15,
        "question": "Which logic gate has the output 1 when at least one input is 1?",
        "options": ["AND gate", "OR gate", "XOR gate", "NOT gate"],
        "correctAnswer": "OR gate"
    },
    {
        "id": 16,
        "question": "What is the output of a NAND gate when both inputs are 0?",
        "options": ["1", "0", "Depends on the inputs", "Undefined"],
        "correctAnswer": "1"
    },
    {
        "id": 17,
        "question": "What is the purpose of a shift register?",
        "options": ["Store and shift data", "Perform logical operations", "Store input signals", "Perform arithmetic operations"],
        "correctAnswer": "Store and shift data"
    },
    {
        "id": 18,
        "question": "Which of the following is a type of memory used in digital electronics?",
        "options": ["RAM", "ROM", "EPROM", "All of the above"],
        "correctAnswer": "All of the above"
    },
    {
        "id": 19,
        "question": "Which of the following is an example of a combinational circuit?",
        "options": ["Adder", "Flip-flop", "Shift register", "Memory"],
        "correctAnswer": "Adder"
    },
    {
        "id": 20,
        "question": "Which component is used to store the data temporarily in a digital system?",
        "options": ["Register", "Shift register", "Counter", "Decoder"],
        "correctAnswer": "Register"
    },
    {
        "id": 21,
        "question": "What is the output of a NOR gate when both inputs are 0?",
        "options": ["1", "0", "Depends on the inputs", "Undefined"],
        "correctAnswer": "1"
    },
    {
        "id": 22,
        "question": "Which logic gate has an output of 0 when both inputs are different?",
        "options": ["AND gate", "OR gate", "XOR gate", "NOR gate"],
        "correctAnswer": "XOR gate"
    },
    {
        "id": 23,
        "question": "What is a characteristic of a static RAM (SRAM) compared to dynamic RAM (DRAM)?",
        "options": ["SRAM is faster and more reliable", "SRAM requires periodic refreshing", "SRAM stores more data than DRAM", "DRAM is faster"],
        "correctAnswer": "SRAM is faster and more reliable"
    },
    {
        "id": 24,
        "question": "What is the basic function of a logic gate?",
        "options": ["To perform arithmetic operations", "To perform logical operations", "To store data", "To display output"],
        "correctAnswer": "To perform logical operations"
    },
    {
        "id": 25,
        "question": "What does a buffer gate do?",
        "options": ["Amplifies signals", "Inverts input", "Isolates input from output", "Performs logical operations"],
        "correctAnswer": "Isolates input from output"
    },
    {
        "id": 26,
        "question": "Which gate is used to perform logical addition?",
        "options": ["AND gate", "OR gate", "XOR gate", "NAND gate"],
        "correctAnswer": "OR gate"
    },
    {
        "id": 27,
        "question": "What is a characteristic of a clock pulse in a sequential circuit?",
        "options": ["It determines the timing of the circuit", "It stores data", "It performs logical operations", "It controls the power supply"],
        "correctAnswer": "It determines the timing of the circuit"
    },
    {
        "id": 28,
        "question": "What is the purpose of a Karnaugh map?",
        "options": ["Simplify Boolean expressions", "Calculate arithmetic operations", "Design shift registers", "Test logic circuits"],
        "correctAnswer": "Simplify Boolean expressions"
    },
    {
        "id": 29,
        "question": "What is the output of a NOR gate when both inputs are 1?",
        "options": ["1", "0", "Depends on the inputs", "Undefined"],
        "correctAnswer": "0"
    },
    {
        "id": 30,
        "question": "Which of the following is used to store data for long-term use?",
        "options": ["ROM", "RAM", "Shift register", "Register"],
        "correctAnswer": "ROM"
    },
    {
        "id": 31,
        "question": "Which of the following circuits can perform arithmetic operations?",
        "options": ["Adder", "Flip-flop", "Register", "Shift register"],
        "correctAnswer": "Adder"
    },
    {
        "id": 32,
        "question": "What is the primary function of a counter circuit?",
        "options": ["Count pulses", "Perform logical operations", "Store data", "Shift data"],
        "correctAnswer": "Count pulses"
    },
    {
        "id": 33,
        "question": "What is the purpose of an encoder in digital electronics?",
        "options": ["Convert decimal numbers into binary", "Convert binary numbers into decimal", "Convert analog signals to digital", "Perform arithmetic operations"],
        "correctAnswer": "Convert decimal numbers into binary"
    },
    {
        "id": 34,
        "question": "Which logic gate performs the logical ‘exclusive OR’ operation?",
        "options": ["AND gate", "OR gate", "XOR gate", "NOR gate"],
        "correctAnswer": "XOR gate"
    },
    {
        "id": 35,
        "question": "Which circuit is used for data storage in computers?",
        "options": ["Register", "Counter", "Memory", "Shift register"],
        "correctAnswer": "Memory"
    },
    {
        "id": 36,
        "question": "Which of the following is a basic component of a digital system?",
        "options": ["Logic gate", "Diode", "Transistor", "Inductor"],
        "correctAnswer": "Logic gate"
    },
    {
        "id": 37,
        "question": "What is the output of a NAND gate when both inputs are 1?",
        "options": ["0", "1", "Depends on the inputs", "Undefined"],
        "correctAnswer": "0"
    },
    {
        "id": 38,
        "question": "Which of the following is the simplest form of memory?",
        "options": ["RAM", "ROM", "Register", "Shift register"],
        "correctAnswer": "Register"
    },
    {
        "id": 39,
        "question": "Which gate produces a high output only when both inputs are different?",
        "options": ["AND gate", "OR gate", "XOR gate", "NAND gate"],
        "correctAnswer": "XOR gate"
    },
    {
        "id": 40,
        "question": "What is the purpose of an adder in digital electronics?",
        "options": ["Perform addition of binary numbers", "Perform subtraction of binary numbers", "Store data", "Multiply binary numbers"],
        "correctAnswer": "Perform addition of binary numbers"
    },
    {
        "id": 41,
        "question": "What is the maximum output for an AND gate with two inputs?",
        "options": ["1", "0", "Depends on the inputs", "Undefined"],
        "correctAnswer": "1"
    },
    {
        "id": 42,
        "question": "Which of the following is the most efficient way to store a binary number?",
        "options": ["Binary encoder", "Register", "Memory", "Shift register"],
        "correctAnswer": "Register"
    },
    {
        "id": 43,
        "question": "Which logic gate is used to invert the output of an AND gate?",
        "options": ["NAND gate", "OR gate", "XOR gate", "NOR gate"],
        "correctAnswer": "NAND gate"
    },
    {
        "id": 44,
        "question": "What does a demultiplexer do?",
        "options": ["Selects one output from many inputs", "Performs logical operations", "Converts digital signals to analog", "Converts analog signals to digital"],
        "correctAnswer": "Selects one output from many inputs"
    },
    {
        "id": 45,
        "question": "What is the purpose of a flip-flop in a digital circuit?",
        "options": ["Store one bit of data", "Perform arithmetic operations", "Store data temporarily", "Shift data"],
        "correctAnswer": "Store one bit of data"
    },
    {
        "id": 46,
        "question": "Which gate produces a low output when both inputs are high?",
        "options": ["AND gate", "OR gate", "XOR gate", "NAND gate"],
        "correctAnswer": "NAND gate"
    },
    {
        "id": 47,
        "question": "Which logic gate produces a high output only when both inputs are high?",
        "options": ["AND gate", "OR gate", "XOR gate", "NAND gate"],
        "correctAnswer": "AND gate"
    },
    {
        "id": 48,
        "question": "Which type of memory is non-volatile?",
        "options": ["ROM", "RAM", "EPROM", "Both ROM and EPROM"],
        "correctAnswer": "Both ROM and EPROM"
    },
    {
        "id": 49,
        "question": "Which of the following can be used to design a half adder?",
        "options": ["XOR gate and AND gate", "AND gate and OR gate", "NAND gate", "NOR gate"],
        "correctAnswer": "XOR gate and AND gate"
    },
    {
        "id": 50,
        "question": "What is the main difference between a counter and a register?",
        "options": ["A counter increments data, a register stores data", "A counter stores data, a register performs operations", "Counters are faster", "Registers are slower"],
        "correctAnswer": "A counter increments data, a register stores data"
    },
    {
            "id": 51,
            "question": "What is the primary function of a decoder in digital circuits?",
            "options": ["Converts binary input to a decimal output", "Converts decimal input to binary", "Selects one of many outputs", "Converts a code into a more specific output"],
            "correctAnswer": "Converts a code into a more specific output"
        },
        {
            "id": 52,
            "question": "What is the output of a NOR gate when both inputs are 1?",
            "options": ["1", "0", "Depends on the inputs", "Undefined"],
            "correctAnswer": "0"
        },
        {
            "id": 53,
            "question": "Which of the following is NOT a characteristic of a flip-flop?",
            "options": ["Stores data", "Works based on clock pulses", "Performs arithmetic operations", "Has two stable states"],
            "correctAnswer": "Performs arithmetic operations"
        },
        {
            "id": 54,
            "question": "What is the result of the AND operation for inputs A = 1 and B = 0?",
            "options": ["1", "0", "Undefined", "Depends on the operation"],
            "correctAnswer": "0"
        },
        {
            "id": 55,
            "question": "What is the purpose of a buffer gate?",
            "options": ["Inverts the signal", "Amplifies the signal", "Performs logical operations", "Stores data"],
            "correctAnswer": "Amplifies the signal"
        },
        {
            "id": 56,
            "question": "What is the output of an AND gate if both inputs are 0?",
            "options": ["1", "0", "Undefined", "Depends on the inputs"],
            "correctAnswer": "0"
        },
        {
            "id": 57,
            "question": "What is the primary function of an arithmetic logic unit (ALU)?",
            "options": ["Performs logical and arithmetic operations", "Stores data", "Controls input/output devices", "Stores programs"],
            "correctAnswer": "Performs logical and arithmetic operations"
        },
        {
            "id": 58,
            "question": "Which type of logic gate has an output of 1 when the inputs are different?",
            "options": ["AND gate", "OR gate", "XOR gate", "NOR gate"],
            "correctAnswer": "XOR gate"
        },
        {
            "id": 59,
            "question": "What does the term 'flip-flop' refer to in digital electronics?",
            "options": ["A simple circuit that stores data", "A circuit that performs mathematical operations", "A logic gate", "A device that converts binary to decimal"],
            "correctAnswer": "A simple circuit that stores data"
        },
        {
            "id": 60,
            "question": "Which logic gate performs a logical NOR operation?",
            "options": ["AND gate", "OR gate", "NOR gate", "XOR gate"],
            "correctAnswer": "NOR gate"
        },
        {
            "id": 61,
            "question": "What does an encoder do in digital systems?",
            "options": ["Converts binary numbers to a smaller output", "Converts decimal numbers to binary", "Converts analog signals to digital", "Performs arithmetic operations"],
            "correctAnswer": "Converts decimal numbers to binary"
        },
        {
            "id": 62,
            "question": "Which of the following is a sequential logic circuit?",
            "options": ["AND gate", "OR gate", "Flip-flop", "NAND gate"],
            "correctAnswer": "Flip-flop"
        },
        {
            "id": 63,
            "question": "In a JK flip-flop, what happens when both inputs are 1?",
            "options": ["It resets", "It toggles", "It sets", "It performs no action"],
            "correctAnswer": "It toggles"
        },
        {
            "id": 64,
            "question": "What is the main advantage of using a NAND gate?",
            "options": ["It performs all other logic operations", "It is faster than AND gates", "It is cheaper to produce", "It uses less power"],
            "correctAnswer": "It performs all other logic operations"
        },
        {
            "id": 65,
            "question": "What is the output of an XOR gate if both inputs are 1?",
            "options": ["1", "0", "Depends on the inputs", "Undefined"],
            "correctAnswer": "0"
        },
        {
            "id": 66,
            "question": "What is the result of the OR operation for inputs A = 0 and B = 0?",
            "options": ["1", "0", "Depends on the inputs", "Undefined"],
            "correctAnswer": "0"
        },
        {
            "id": 67,
            "question": "What is a major use of a shift register?",
            "options": ["To store and move data", "To perform arithmetic operations", "To convert binary to decimal", "To perform logical operations"],
            "correctAnswer": "To store and move data"
        },
        {
            "id": 68,
            "question": "What is a universal gate in digital electronics?",
            "options": ["AND gate", "OR gate", "NAND gate", "NOT gate"],
            "correctAnswer": "NAND gate"
        },
        {
            "id": 69,
            "question": "Which of the following is a characteristic of a flip-flop?",
            "options": ["It is a combinational circuit", "It can store one bit of data", "It performs arithmetic operations", "It needs no clock pulse"],
            "correctAnswer": "It can store one bit of data"
        },
        {
            "id": 70,
            "question": "What is the output of a NOT gate when the input is 1?",
            "options": ["0", "1", "Depends on the inputs", "Undefined"],
            "correctAnswer": "0"
        },
        {
            "id": 71,
            "question": "Which logic gate produces an output of 0 only when both inputs are 1?",
            "options": ["AND gate", "OR gate", "XOR gate", "NAND gate"],
            "correctAnswer": "NAND gate"
        },
        {
            "id": 72,
            "question": "What does a counter circuit do?",
            "options": ["Counts clock pulses", "Stores data", "Performs arithmetic operations", "Inverts signals"],
            "correctAnswer": "Counts clock pulses"
        },
        {
            "id": 73,
            "question": "Which gate performs the logical addition operation?",
            "options": ["AND gate", "OR gate", "XOR gate", "NAND gate"],
            "correctAnswer": "OR gate"
        },
        {
            "id": 74,
            "question": "What is the function of a multiplexer?",
            "options": ["Select one of many inputs", "Store data", "Perform logical operations", "Convert digital signals to analog"],
            "correctAnswer": "Select one of many inputs"
        },
        {
            "id": 75,
            "question": "Which component in digital electronics stores multiple bits of data?",
            "options": ["Register", "Shift register", "Counter", "Multiplexer"],
            "correctAnswer": "Register"
        },
        {
            "id": 76,
            "question": "What is the output of a NOR gate when both inputs are 0?",
            "options": ["1", "0", "Depends on the inputs", "Undefined"],
            "correctAnswer": "1"
        },
        {
            "id": 77,
            "question": "What is the output of a NAND gate when both inputs are 1?",
            "options": ["0", "1", "Depends on the inputs", "Undefined"],
            "correctAnswer": "0"
        },
        {
            "id": 78,
            "question": "What does a flip-flop circuit store?",
            "options": ["Multiple bits of data", "One bit of data", "A clock pulse", "An analog signal"],
            "correctAnswer": "One bit of data"
        },
        {
            "id": 79,
            "question": "What type of logic gate can be used to perform all other logic operations?",
            "options": ["AND gate", "OR gate", "XOR gate", "NAND gate"],
            "correctAnswer": "NAND gate"
        },
        {
            "id": 80,
            "question": "What is the main function of a digital clock in a sequential circuit?",
            "options": ["To control data flow", "To store data", "To determine timing of operations", "To perform logical operations"],
            "correctAnswer": "To determine timing of operations"
        },
        {
            "id": 81,
            "question": "Which of the following circuits is used to convert binary numbers into decimal?",
            "options": ["Encoder", "Decoder", "Multiplexer", "Shift register"],
            "correctAnswer": "Decoder"
        },
        {
            "id": 82,
            "question": "Which logic gate outputs 1 only when both inputs are different?",
            "options": ["AND gate", "OR gate", "XOR gate", "NAND gate"],
            "correctAnswer": "XOR gate"
        },
        {
            "id": 83,
            "question": "Which type of gate is known as a universal gate?",
            "options": ["OR gate", "NAND gate", "XOR gate", "AND gate"],
            "correctAnswer": "NAND gate"
        },
        {
            "id": 84,
            "question": "What is the function of a half adder?",
            "options": ["Adds two binary digits", "Subtracts two binary digits", "Performs logical operations", "Stores data"],
            "correctAnswer": "Adds two binary digits"
        },
        {
            "id": 85,
            "question": "What is the output of a NOR gate when both inputs are 1?",
            "options": ["1", "0", "Depends on the inputs", "Undefined"],
            "correctAnswer": "0"
        },
        {
            "id": 86,
            "question": "What logic gate is used to invert the output of an AND gate?",
            "options": ["NAND gate", "XOR gate", "OR gate", "NOR gate"],
            "correctAnswer": "NAND gate"
        },
        {
            "id": 87,
            "question": "What does a shift register do?",
            "options": ["Stores data", "Performs logical operations", "Moves data", "Converts signals"],
            "correctAnswer": "Moves data"
        },
        {
            "id": 88,
            "question": "Which type of circuit is used for data storage and retrieval?",
            "options": ["Shift register", "Memory", "Counter", "ALU"],
            "correctAnswer": "Memory"
        },
        {
            "id": 89,
            "question": "Which gate produces a high output only when both inputs are 1?",
            "options": ["AND gate", "OR gate", "NAND gate", "XOR gate"],
            "correctAnswer": "AND gate"
        },
        {
            "id": 90,
            "question": "What is the primary use of an AND gate?",
            "options": ["To output 1 when both inputs are 1", "To output 0 when both inputs are 0", "To output 1 when one input is 1", "To output 1 when one input is 0"],
            "correctAnswer": "To output 1 when both inputs are 1"
        },
        {
            "id": 91,
            "question": "Which gate performs a logical NOT operation?",
            "options": ["NOT gate", "AND gate", "OR gate", "XOR gate"],
            "correctAnswer": "NOT gate"
        },
        {
            "id": 92,
            "question": "Which type of circuit changes its output in response to changes in inputs?",
            "options": ["Combinational circuit", "Sequential circuit", "Memory", "Shift register"],
            "correctAnswer": "Combinational circuit"
        },
        {
            "id": 93,
            "question": "What is a basic unit of digital logic?",
            "options": ["Flip-flop", "Logic gate", "Counter", "Register"],
            "correctAnswer": "Logic gate"
        },
        {
            "id": 94,
            "question": "Which logic gate is used to perform addition?",
            "options": ["AND gate", "OR gate", "XOR gate", "NOT gate"],
            "correctAnswer": "XOR gate"
        },
        {
            "id": 95,
            "question": "Which gate outputs 1 when either of the inputs is 1?",
            "options": ["AND gate", "OR gate", "NAND gate", "XOR gate"],
            "correctAnswer": "OR gate"
        },
        {
            "id": 96,
            "question": "Which circuit is used to store one bit of data?",
            "options": ["Flip-flop", "Shift register", "ALU", "Counter"],
            "correctAnswer": "Flip-flop"
        },
        {
            "id": 97,
            "question": "What does the XOR gate do?",
            "options": ["Outputs 1 when both inputs are the same", "Outputs 0 when inputs are different", "Outputs 1 when inputs are different", "Performs addition of binary numbers"],
            "correctAnswer": "Outputs 1 when inputs are different"
        },
        {
            "id": 98,
            "question": "What is the function of a decoder?",
            "options": ["Converts data from one format to another", "Performs logical operations", "Converts binary data to decimal", "Converts decimal to binary"],
            "correctAnswer": "Converts binary data to decimal"
        },
        {
            "id": 99,
            "question": "Which logic gate outputs 0 when both inputs are 1?",
            "options": ["AND gate", "OR gate", "NAND gate", "XOR gate"],
            "correctAnswer": "NAND gate"
        },
        {
            "id": 100,
            "question": "Which of the following is a primary use of a register in digital electronics?",
            "options": ["Perform logical operations", "Store data temporarily", "Perform arithmetic operations", "Convert data"],
            "correctAnswer": "Store data temporarily"
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
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/digital-electronics' className="font-bold text-sm">Digital Electronics</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">Digital Electronics</h1>
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

export default DigiElec;

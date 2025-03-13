import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const WebDev = () => {
  // Mock dataset for questions
  const questionsData = [
    {
        "id": 1,
        "question": "What is HTML?",
        "options": ["HyperText Markup Language", "HyperText Management Language", "Home Tool Markup Language", "HighText Markup Language"],
        "correctAnswer": "HyperText Markup Language"
    },
    {
        "id": 2,
        "question": "What is the correct HTML tag for inserting a line break?",
        "options": ["<break>", "<br>", "<lb>", "<line>"],
        "correctAnswer": "<br>"
    },
    {
        "id": 3,
        "question": "Which HTML tag is used to define an unordered list?",
        "options": ["<ol>", "<ul>", "<li>", "<list>"],
        "correctAnswer": "<ul>"
    },
    {
        "id": 4,
        "question": "What does CSS stand for?",
        "options": ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        "correctAnswer": "Cascading Style Sheets"
    },
    {
        "id": 5,
        "question": "Which CSS property controls the text color?",
        "options": ["color", "text-color", "font-color", "background-color"],
        "correctAnswer": "color"
    },
    {
        "id": 6,
        "question": "How do you add a background color in CSS?",
        "options": ["background-color: #FFFFFF;", "color: #FFFFFF;", "bgcolor: #FFFFFF;", "background: #FFFFFF;"],
        "correctAnswer": "background-color: #FFFFFF;"
    },
    {
        "id": 7,
        "question": "Which HTML tag is used to define a table?",
        "options": ["<table>", "<tbl>", "<tr>", "<td>"],
        "correctAnswer": "<table>"
    },
    {
        "id": 8,
        "question": "What is JavaScript?",
        "options": ["A programming language for creating interactive web pages", "A style sheet language", "A markup language for structuring web content", "A database query language"],
        "correctAnswer": "A programming language for creating interactive web pages"
    },
    {
        "id": 9,
        "question": "Which JavaScript method is used to write text to the browser console?",
        "options": ["console.write()", "console.log()", "console.text()", "console.output()"],
        "correctAnswer": "console.log()"
    },
    {
        "id": 10,
        "question": "What does the 'id' attribute in HTML represent?",
        "options": ["A unique identifier for an element", "A type of CSS class", "A function in JavaScript", "An image source in HTML"],
        "correctAnswer": "A unique identifier for an element"
    },
    {
        "id": 11,
        "question": "Which attribute is used to provide an alternative text for an image in HTML?",
        "options": ["alt", "title", "src", "img-text"],
        "correctAnswer": "alt"
    },
    {
        "id": 12,
        "question": "What does the 'href' attribute in an anchor tag specify?",
        "options": ["The link destination", "The text color", "The background color", "The image source"],
        "correctAnswer": "The link destination"
    },
    {
        "id": 13,
        "question": "Which of the following is used to create a dropdown list in HTML?",
        "options": ["<select>", "<dropdown>", "<input>", "<option>"],
        "correctAnswer": "<select>"
    },
    {
        "id": 14,
        "question": "Which of the following is a valid JavaScript variable declaration?",
        "options": ["var x = 10;", "declare x = 10;", "let x : 10;", "variable x = 10;"],
        "correctAnswer": "var x = 10;"
    },
    {
        "id": 15,
        "question": "Which property is used to change the font size in CSS?",
        "options": ["font-size", "font-style", "text-size", "size"],
        "correctAnswer": "font-size"
    },
    {
        "id": 16,
        "question": "Which of the following is used to add comments in JavaScript?",
        "options": ["// comment", "/* comment */", "# comment", "comment()"],
        "correctAnswer": "// comment"
    },
    {
        "id": 17,
        "question": "What is the use of the 'display' property in CSS?",
        "options": ["To specify how an element should be displayed", "To add images to a page", "To adjust the size of text", "To define a background color"],
        "correctAnswer": "To specify how an element should be displayed"
    },
    {
        "id": 18,
        "question": "What is Bootstrap?",
        "options": ["A front-end framework for building responsive websites", "A backend development language", "A web server", "A JavaScript library"],
        "correctAnswer": "A front-end framework for building responsive websites"
    },
    {
        "id": 19,
        "question": "Which HTML element is used to define a hyperlink?",
        "options": ["<link>", "<a>", "<href>", "<url>"],
        "correctAnswer": "<a>"
    },
    {
        "id": 20,
        "question": "What does the 'z-index' property in CSS control?",
        "options": ["The stack order of elements", "The font size of text", "The color of the background", "The width of a border"],
        "correctAnswer": "The stack order of elements"
    },
    {
        "id": 21,
        "question": "Which tag is used to create an ordered list in HTML?",
        "options": ["<ul>", "<ol>", "<li>", "<list>"],
        "correctAnswer": "<ol>"
    },
    {
        "id": 22,
        "question": "What is the purpose of the <form> tag in HTML?",
        "options": ["To collect user input", "To define the webpage structure", "To create a hyperlink", "To display images"],
        "correctAnswer": "To collect user input"
    },
    {
        "id": 23,
        "question": "Which HTML element is used to display an image?",
        "options": ["<image>", "<img>", "<src>", "<photo>"],
        "correctAnswer": "<img>"
    },
    {
        "id": 24,
        "question": "Which method is used to add a new element to the DOM in JavaScript?",
        "options": ["appendChild()", "addChild()", "insertChild()", "newElement()"],
        "correctAnswer": "appendChild()"
    },
    {
        "id": 25,
        "question": "What is the correct HTML element for playing video?",
        "options": ["<movie>", "<video>", "<film>", "<media>"],
        "correctAnswer": "<video>"
    },
    {
        "id": 26,
        "question": "Which of the following is used to apply styles in CSS?",
        "options": ["class", "id", "style", "id and class"],
        "correctAnswer": "id and class"
    },
    {
        "id": 27,
        "question": "Which CSS property controls the layout of a webpage?",
        "options": ["position", "layout", "display", "style"],
        "correctAnswer": "display"
    },
    {
        "id": 28,
        "question": "Which of the following is a type of web server?",
        "options": ["Apache", "Windows", "Excel", "MySQL"],
        "correctAnswer": "Apache"
    },
    {
        "id": 29,
        "question": "What is a CDN (Content Delivery Network)?",
        "options": ["A network of distributed servers to deliver content to users", "A type of database server", "A network used to store files", "A web browser"],
        "correctAnswer": "A network of distributed servers to deliver content to users"
    },
    {
        "id": 30,
        "question": "What is responsive web design?",
        "options": ["Designing a website to work on multiple devices and screen sizes", "Designing a website for desktop use only", "Designing static websites", "Designing websites for mobile only"],
        "correctAnswer": "Designing a website to work on multiple devices and screen sizes"
    },
    {
        "id": 31,
        "question": "Which tag is used to define a container for a table in HTML?",
        "options": ["<table>", "<container>", "<div>", "<tr>"],
        "correctAnswer": "<table>"
    },
    {
        "id": 32,
        "question": "Which JavaScript function is used to convert a string into a number?",
        "options": ["parseInt()", "toNumber()", "convertToInt()", "parseFloat()"],
        "correctAnswer": "parseInt()"
    },
    {
        "id": 33,
        "question": "What is the 'box-model' in CSS?",
        "options": ["A model for defining the dimensions of an element", "A layout model", "A background color model", "A color model for text"],
        "correctAnswer": "A model for defining the dimensions of an element"
    },
    {
        "id": 34,
        "question": "What is the difference between 'id' and 'class' in HTML?",
        "options": ["id is unique, while class can be used multiple times", "id can be reused, while class cannot", "id is used for background color, while class is used for text color", "They are the same"],
        "correctAnswer": "id is unique, while class can be used multiple times"
    },
    {
        "id": 35,
        "question": "What is the correct way to comment in CSS?",
        "options": ["// comment", "/* comment */", "# comment", "comment()"],
        "correctAnswer": "/* comment */"
    },
    {
        "id": 36,
        "question": "What does the 'position' property in CSS control?",
        "options": ["The placement of an element", "The size of text", "The color of the background", "The stack order of elements"],
        "correctAnswer": "The placement of an element"
    },
    {
        "id": 37,
        "question": "What is the purpose of the 'alt' attribute in an <img> tag?",
        "options": ["To provide alternative text when the image cannot be displayed", "To change the image's size", "To set the image's background color", "To specify the image source"],
        "correctAnswer": "To provide alternative text when the image cannot be displayed"
    },
    {
        "id": 38,
        "question": "What is an API (Application Programming Interface)?",
        "options": ["A set of rules and protocols for building and interacting with software applications", "A type of programming language", "A database query tool", "A method for writing code"],
        "correctAnswer": "A set of rules and protocols for building and interacting with software applications"
    },
    {
        "id": 39,
        "question": "Which of the following is a type of HTTP request?",
        "options": ["GET", "POST", "PUT", "All of the above"],
        "correctAnswer": "All of the above"
    },
    {
        "id": 40,
        "question": "What is the use of the 'target' attribute in an anchor (<a>) tag?",
        "options": ["To specify where the link will open", "To specify the color of the text", "To specify the link destination", "To add an image to the link"],
        "correctAnswer": "To specify where the link will open"
    },
    {
        "id": 41,
        "question": "What is an event listener in JavaScript?",
        "options": ["A function that waits for a specified event to occur", "A type of JavaScript error", "A type of variable", "A CSS function"],
        "correctAnswer": "A function that waits for a specified event to occur"
    },
    {
        "id": 42,
        "question": "What is jQuery?",
        "options": ["A JavaScript library designed to simplify HTML document traversal", "A database", "A CSS framework", "A tool for writing server-side code"],
        "correctAnswer": "A JavaScript library designed to simplify HTML document traversal"
    },
    {
        "id": 43,
        "question": "Which of the following is used to link a CSS file to an HTML document?",
        "options": ["<link>", "<css>", "<style>", "<script>"],
        "correctAnswer": "<link>"
    },
    {
        "id": 44,
        "question": "What does AJAX stand for?",
        "options": ["Asynchronous JavaScript and XML", "Asynchronous JavaScript and XSL", "Advanced JavaScript and XML", "None of the above"],
        "correctAnswer": "Asynchronous JavaScript and XML"
    },
    {
        "id": 45,
        "question": "What is a cookie in web development?",
        "options": ["A small piece of data stored in the user's browser", "A type of HTML element", "A JavaScript function", "A CSS property"],
        "correctAnswer": "A small piece of data stored in the user's browser"
    },
    {
        "id": 46,
        "question": "What is the purpose of the 'meta' tag in HTML?",
        "options": ["To provide metadata such as character encoding or author information", "To add background images", "To create a hyperlink", "To define a list"],
        "correctAnswer": "To provide metadata such as character encoding or author information"
    },
    {
        "id": 47,
        "question": "What is the purpose of the 'title' tag in HTML?",
        "options": ["To define the title of the webpage", "To define the background color", "To define the header of the page", "To define a hyperlink"],
        "correctAnswer": "To define the title of the webpage"
    },
    {
        "id": 48,
        "question": "Which HTML tag is used to define a form?",
        "options": ["<form>", "<input>", "<button>", "<textarea>"],
        "correctAnswer": "<form>"
    },
    {
        "id": 49,
        "question": "What is the difference between '== ' and '===' in JavaScript?",
        "options": ["'==' compares values, '===' compares values and types", "'==' compares data types, '===' compares values", "There is no difference", "'===' compares data types, '==' compares values"],
        "correctAnswer": "'==' compares values, '===' compares values and types"
    },
    {
        "id": 50,
        "question": "What is 'localStorage' in JavaScript?",
        "options": ["A way to store data persistently in the user's browser", "A function to store variables locally", "A method for saving files to a server", "A JavaScript library"],
        "correctAnswer": "A way to store data persistently in the user's browser"
    },
    {
            "id": 51,
            "question": "Which HTML element is used to define an input field?",
            "options": ["<input>", "<textbox>", "<field>", "<inputfield>"],
            "correctAnswer": "<input>"
        },
        {
            "id": 52,
            "question": "What is the use of the 'clear' property in CSS?",
            "options": ["To clear floats", "To clear text", "To clear the background", "To clear colors"],
            "correctAnswer": "To clear floats"
        },
        {
            "id": 53,
            "question": "Which CSS property is used to set the space between the text and its container?",
            "options": ["padding", "margin", "border", "text-align"],
            "correctAnswer": "padding"
        },
        {
            "id": 54,
            "question": "What is an HTTP request method used to retrieve data from a server?",
            "options": ["GET", "POST", "PUT", "DELETE"],
            "correctAnswer": "GET"
        },
        {
            "id": 55,
            "question": "Which HTML tag is used to define a block of text as a paragraph?",
            "options": ["<p>", "<text>", "<para>", "<section>"],
            "correctAnswer": "<p>"
        },
        {
            "id": 56,
            "question": "What is the use of 'flexbox' in CSS?",
            "options": ["To create flexible layouts", "To create animations", "To align text", "To add colors"],
            "correctAnswer": "To create flexible layouts"
        },
        {
            "id": 57,
            "question": "Which JavaScript function is used to execute code after a specific interval of time?",
            "options": ["setTimeout()", "setInterval()", "executeTime()", "runAfter()"],
            "correctAnswer": "setTimeout()"
        },
        {
            "id": 58,
            "question": "What is the difference between 'visibility:hidden;' and 'display:none;' in CSS?",
            "options": ["'visibility:hidden;' hides the element but it takes up space, while 'display:none;' removes the element completely", "'visibility:hidden;' removes the element completely, while 'display:none;' hides it but keeps the space", "There is no difference", "'visibility:hidden;' makes the element visible, while 'display:none;' makes it invisible"],
            "correctAnswer": "'visibility:hidden;' hides the element but it takes up space, while 'display:none;' removes the element completely"
        },
        {
            "id": 59,
            "question": "What is the purpose of the 'data-*' attribute in HTML?",
            "options": ["To store custom data for an element", "To add custom styles to an element", "To create interactive elements", "To define variables in JavaScript"],
            "correctAnswer": "To store custom data for an element"
        },
        {
            "id": 60,
            "question": "Which of the following CSS properties is used to change the font of a text?",
            "options": ["font-family", "font-size", "font-weight", "font-style"],
            "correctAnswer": "font-family"
        },
        {
            "id": 61,
            "question": "What is the purpose of the 'async' attribute in a script tag in HTML?",
            "options": ["To load the script asynchronously", "To block the script from executing", "To load the script synchronously", "To defer the script execution"],
            "correctAnswer": "To load the script asynchronously"
        },
        {
            "id": 62,
            "question": "Which CSS property is used to change the text alignment?",
            "options": ["text-align", "align-text", "text-position", "align"],
            "correctAnswer": "text-align"
        },
        {
            "id": 63,
            "question": "Which HTML tag is used to define a form button?",
            "options": ["<button>", "<input>", "<form>", "<submit>"],
            "correctAnswer": "<button>"
        },
        {
            "id": 64,
            "question": "What does the 'box-shadow' property in CSS do?",
            "options": ["Adds shadow to an element", "Changes the background of an element", "Creates a border around an element", "Changes the position of an element"],
            "correctAnswer": "Adds shadow to an element"
        },
        {
            "id": 65,
            "question": "Which JavaScript method is used to remove an element from an array?",
            "options": ["remove()", "delete()", "splice()", "pop()"],
            "correctAnswer": "splice()"
        },
        {
            "id": 66,
            "question": "Which HTML tag is used to define a table row?",
            "options": ["<tr>", "<td>", "<th>", "<tr-row>"],
            "correctAnswer": "<tr>"
        },
        {
            "id": 67,
            "question": "Which CSS property is used to change the font size of text?",
            "options": ["font-size", "text-size", "font-style", "size"],
            "correctAnswer": "font-size"
        },
        {
            "id": 68,
            "question": "What is the 'window.location' object in JavaScript used for?",
            "options": ["To get or set the current URL", "To store session data", "To manipulate the DOM", "To change the font style"],
            "correctAnswer": "To get or set the current URL"
        },
        {
            "id": 69,
            "question": "Which of the following is an event in JavaScript that occurs when a user clicks on an element?",
            "options": ["onClick", "onHover", "onFocus", "onChange"],
            "correctAnswer": "onClick"
        },
        {
            "id": 70,
            "question": "What is the purpose of the 'viewport' meta tag in HTML?",
            "options": ["To control the layout on mobile devices", "To add background color", "To change the font size", "To define the document title"],
            "correctAnswer": "To control the layout on mobile devices"
        },
        {
            "id": 71,
            "question": "What is the use of 'localStorage' in JavaScript?",
            "options": ["To store data in the browser", "To store data on the server", "To create session variables", "To store cookies"],
            "correctAnswer": "To store data in the browser"
        },
        {
            "id": 72,
            "question": "Which HTML attribute is used to specify the target of a link?",
            "options": ["href", "target", "link", "url"],
            "correctAnswer": "target"
        },
        {
            "id": 73,
            "question": "What is the purpose of the 'font-weight' CSS property?",
            "options": ["To set the thickness of the font", "To set the font size", "To set the font style", "To align text"],
            "correctAnswer": "To set the thickness of the font"
        },
        {
            "id": 74,
            "question": "Which of the following is used to store data between web pages?",
            "options": ["localStorage", "sessionStorage", "cookies", "all of the above"],
            "correctAnswer": "all of the above"
        },
        {
            "id": 75,
            "question": "Which of the following is a valid CSS selector?",
            "options": [".class", "#id", "div", "all of the above"],
            "correctAnswer": "all of the above"
        },
        {
            "id": 76,
            "question": "What does the 'align-items' property in CSS Flexbox do?",
            "options": ["Aligns items along the cross axis", "Aligns items along the main axis", "Aligns text within an item", "Aligns items vertically only"],
            "correctAnswer": "Aligns items along the cross axis"
        },
        {
            "id": 77,
            "question": "What is the 'action' attribute in the HTML <form> tag?",
            "options": ["It specifies where to send the form data", "It specifies the method of data transfer", "It defines the background color of the form", "It defines the form field size"],
            "correctAnswer": "It specifies where to send the form data"
        },
        {
            "id": 78,
            "question": "Which HTML tag is used to define a hyperlink?",
            "options": ["<a>", "<link>", "<url>", "<hyperlink>"],
            "correctAnswer": "<a>"
        },
        {
            "id": 79,
            "question": "What is the purpose of the 'target='_blank'' attribute in HTML links?",
            "options": ["To open the link in a new tab", "To open the link in the same window", "To download the link", "To make the link bold"],
            "correctAnswer": "To open the link in a new tab"
        },
        {
            "id": 80,
            "question": "Which JavaScript function is used to add an element to an array?",
            "options": ["push()", "add()", "append()", "insert()"],
            "correctAnswer": "push()"
        },
        {
            "id": 81,
            "question": "What does the 'opacity' property in CSS do?",
            "options": ["Sets the transparency level of an element", "Sets the width of an element", "Sets the background color", "Sets the font size"],
            "correctAnswer": "Sets the transparency level of an element"
        },
        {
            "id": 82,
            "question": "What is a responsive web design?",
            "options": ["A design that adapts to different screen sizes", "A design that adjusts the content based on data", "A design that uses JavaScript extensively", "A design with fixed layout"],
            "correctAnswer": "A design that adapts to different screen sizes"
        },
        {
            "id": 83,
            "question": "Which of the following is a valid CSS class selector?",
            "options": [".class", "#class", "<class>", "<div>"],
            "correctAnswer": ".class"
        },
        {
            "id": 84,
            "question": "Which JavaScript method is used to display an alert box?",
            "options": ["alert()", "msg()", "popup()", "message()"],
            "correctAnswer": "alert()"
        },
        {
            "id": 85,
            "question": "What is the 'float' property in CSS used for?",
            "options": ["To allow an element to be positioned to the left or right", "To adjust the background color", "To define the width of an element", "To align text within an element"],
            "correctAnswer": "To allow an element to be positioned to the left or right"
        },
        {
            "id": 86,
            "question": "Which HTML tag is used to define the header section of a page?",
            "options": ["<header>", "<head>", "<section>", "<body>"],
            "correctAnswer": "<header>"
        },
        {
            "id": 87,
            "question": "What does 'min-width' in CSS define?",
            "options": ["The minimum width of an element", "The maximum width of an element", "The width of the viewport", "The default width of an element"],
            "correctAnswer": "The minimum width of an element"
        },
        {
            "id": 88,
            "question": "What is the purpose of the 'meta charset' tag in HTML?",
            "options": ["To specify the character encoding for the webpage", "To define the webpage's title", "To define the webpage's keywords", "To set the viewport size"],
            "correctAnswer": "To specify the character encoding for the webpage"
        },
        {
            "id": 89,
            "question": "Which HTML tag is used to define an ordered list?",
            "options": ["<ol>", "<ul>", "<li>", "<list>"],
            "correctAnswer": "<ol>"
        },
        {
            "id": 90,
            "question": "What is the function of the 'return' statement in JavaScript?",
            "options": ["To return a value from a function", "To exit a function", "To loop over elements", "To throw an error"],
            "correctAnswer": "To return a value from a function"
        },
        {
            "id": 91,
            "question": "Which HTML element is used to define a section in a webpage?",
            "options": ["<section>", "<div>", "<header>", "<article>"],
            "correctAnswer": "<section>"
        },
        {
            "id": 92,
            "question": "What is the purpose of the 'z-index' property in CSS?",
            "options": ["To specify the stack order of elements", "To define the size of the element", "To define the color of the element", "To position an element on the page"],
            "correctAnswer": "To specify the stack order of elements"
        },
        {
            "id": 93,
            "question": "Which CSS property is used to create a space between an element and its border?",
            "options": ["padding", "margin", "border-width", "space"],
            "correctAnswer": "padding"
        },
        {
            "id": 94,
            "question": "What does 'npm' stand for?",
            "options": ["Node Package Manager", "Node Processing Module", "Network Package Manager", "None of the above"],
            "correctAnswer": "Node Package Manager"
        },
        {
            "id": 95,
            "question": "Which JavaScript function is used to convert a string into an integer?",
            "options": ["parseInt()", "parseFloat()", "toString()", "convert()"],
            "correctAnswer": "parseInt()"
        },
        {
            "id": 96,
            "question": "Which HTML tag is used to define an image?",
            "options": ["<img>", "<image>", "<pic>", "<src>"],
            "correctAnswer": "<img>"
        },
        {
            "id": 97,
            "question": "Which of the following is used to create a new array in JavaScript?",
            "options": ["[]", "{}", "<array>", "Array()"],
            "correctAnswer": "[]"
        },
        {
            "id": 98,
            "question": "Which CSS property is used to set the space between content and the edges of an element?",
            "options": ["padding", "margin", "border", "space"],
            "correctAnswer": "padding"
        },
        {
            "id": 99,
            "question": "What does the 'this' keyword refer to in JavaScript?",
            "options": ["The current object", "The previous object", "The entire document", "The global object"],
            "correctAnswer": "The current object"
        },
        {
            "id": 100,
            "question": "Which HTML tag is used to define the footer section of a webpage?",
            "options": ["<footer>", "<section>", "<div>", "<header>"],
            "correctAnswer": "<footer>"
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
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/web-dev' className="font-bold text-sm">Web Development</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">Web Development</h1>
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

export default WebDev;

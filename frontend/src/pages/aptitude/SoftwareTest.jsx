import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const SoftwareTest = () => {
  // Mock dataset for questions
  const questionsData = [
    {
        "id": 1,
        "question": "What is the primary goal of software testing?",
        "options": ["To find and fix defects", "To create new features", "To ensure software is user-friendly", "To design the user interface"],
        "correctAnswer": "To find and fix defects"
    },
    {
        "id": 2,
        "question": "Which type of testing verifies that the software functions as expected in different environments?",
        "options": ["Unit Testing", "Integration Testing", "Compatibility Testing", "Regression Testing"],
        "correctAnswer": "Compatibility Testing"
    },
    {
        "id": 3,
        "question": "What does 'black-box testing' focus on?",
        "options": ["Internal code structure", "System behavior", "User interface", "Performance"],
        "correctAnswer": "System behavior"
    },
    {
        "id": 4,
        "question": "Which of the following is an example of functional testing?",
        "options": ["Load Testing", "Integration Testing", "Unit Testing", "Stress Testing"],
        "correctAnswer": "Unit Testing"
    },
    {
        "id": 5,
        "question": "Which of the following is NOT a type of non-functional testing?",
        "options": ["Performance Testing", "Security Testing", "Unit Testing", "Usability Testing"],
        "correctAnswer": "Unit Testing"
    },
    {
        "id": 6,
        "question": "What is the purpose of regression testing?",
        "options": ["To test the new features", "To find performance issues", "To check if previously working features are still working", "To test compatibility with different devices"],
        "correctAnswer": "To check if previously working features are still working"
    },
    {
        "id": 7,
        "question": "What is the key difference between manual and automated testing?",
        "options": ["Manual testing is more efficient", "Automated testing requires human intervention", "Manual testing involves human testers, while automated testing uses scripts", "Automated testing is always faster than manual testing"],
        "correctAnswer": "Manual testing involves human testers, while automated testing uses scripts"
    },
    {
        "id": 8,
        "question": "What is a test case?",
        "options": ["A document that specifies testing details", "A script for automated testing", "A tool for debugging", "A report on testing outcomes"],
        "correctAnswer": "A document that specifies testing details"
    },
    {
        "id": 9,
        "question": "What is the main objective of system testing?",
        "options": ["To test individual units of code", "To validate if the system works as a whole", "To test the system’s usability", "To evaluate system performance"],
        "correctAnswer": "To validate if the system works as a whole"
    },
    {
        "id": 10,
        "question": "What type of testing is done to verify the behavior of a system under stress or load conditions?",
        "options": ["Stress Testing", "Load Testing", "Performance Testing", "Usability Testing"],
        "correctAnswer": "Stress Testing"
    },
    {
        "id": 11,
        "question": "Which testing type is used to verify that the components of a system work together correctly?",
        "options": ["Unit Testing", "Integration Testing", "System Testing", "User Acceptance Testing"],
        "correctAnswer": "Integration Testing"
    },
    {
        "id": 12,
        "question": "Which of the following is considered a static testing technique?",
        "options": ["Unit Testing", "Code Reviews", "Regression Testing", "Integration Testing"],
        "correctAnswer": "Code Reviews"
    },
    {
        "id": 13,
        "question": "What is the purpose of user acceptance testing (UAT)?",
        "options": ["To test the functionality of the software", "To verify the system against business requirements", "To find security vulnerabilities", "To evaluate the system’s performance"],
        "correctAnswer": "To verify the system against business requirements"
    },
    {
        "id": 14,
        "question": "Which of the following testing techniques involves the review of the system's code?",
        "options": ["Static Testing", "Dynamic Testing", "Unit Testing", "System Testing"],
        "correctAnswer": "Static Testing"
    },
    {
        "id": 15,
        "question": "Which of the following is an example of a non-functional testing type?",
        "options": ["Smoke Testing", "Security Testing", "Unit Testing", "Sanity Testing"],
        "correctAnswer": "Security Testing"
    },
    {
        "id": 16,
        "question": "Which testing is performed to ensure that the software performs well under expected user loads?",
        "options": ["Load Testing", "Performance Testing", "Stress Testing", "Volume Testing"],
        "correctAnswer": "Load Testing"
    },
    {
        "id": 17,
        "question": "What is exploratory testing?",
        "options": ["Testing without a predefined test plan", "Testing the user interface", "Testing with automated scripts", "Testing only for specific defects"],
        "correctAnswer": "Testing without a predefined test plan"
    },
    {
        "id": 18,
        "question": "Which type of testing focuses on the usability and user experience of the software?",
        "options": ["Performance Testing", "Usability Testing", "Functional Testing", "Security Testing"],
        "correctAnswer": "Usability Testing"
    },
    {
        "id": 19,
        "question": "What does the term 'defect density' refer to?",
        "options": ["The number of defects per unit of code", "The severity of defects", "The time taken to fix defects", "The rate of defects over time"],
        "correctAnswer": "The number of defects per unit of code"
    },
    {
        "id": 20,
        "question": "What is smoke testing?",
        "options": ["Testing the basic functionality of a system", "Testing for security vulnerabilities", "Testing under extreme conditions", "Testing the system’s overall stability"],
        "correctAnswer": "Testing the basic functionality of a system"
    },
    {
        "id": 21,
        "question": "Which is an example of a validation testing technique?",
        "options": ["Unit Testing", "Acceptance Testing", "Integration Testing", "Regression Testing"],
        "correctAnswer": "Acceptance Testing"
    },
    {
        "id": 22,
        "question": "What is boundary value analysis used for?",
        "options": ["To test values at the boundaries of input ranges", "To test performance under heavy load", "To validate the user interface", "To evaluate the software’s security"],
        "correctAnswer": "To test values at the boundaries of input ranges"
    },
    {
        "id": 23,
        "question": "Which testing technique is used to verify the system’s compliance with security requirements?",
        "options": ["Security Testing", "Functional Testing", "Usability Testing", "Load Testing"],
        "correctAnswer": "Security Testing"
    },
    {
        "id": 24,
        "question": "What is the main goal of performance testing?",
        "options": ["To test if the system meets functional requirements", "To determine how the system handles traffic", "To find security vulnerabilities", "To evaluate usability"],
        "correctAnswer": "To determine how the system handles traffic"
    },
    {
        "id": 25,
        "question": "What does test automation aim to achieve?",
        "options": ["Reduce manual testing effort", "Test all possible inputs", "Ensure all features work correctly", "Evaluate system performance"],
        "correctAnswer": "Reduce manual testing effort"
    },
    {
        "id": 26,
        "question": "What is a test plan?",
        "options": ["A document outlining the test strategy and approach", "A tool for executing tests", "A script for automated testing", "A document that describes defects"],
        "correctAnswer": "A document outlining the test strategy and approach"
    },
    {
        "id": 27,
        "question": "What is stress testing used to evaluate?",
        "options": ["System's ability to handle peak load", "System behavior under heavy load or extreme conditions", "System’s usability", "System’s compliance with business requirements"],
        "correctAnswer": "System behavior under heavy load or extreme conditions"
    },
    {
        "id": 28,
        "question": "Which of the following is a common technique used in dynamic testing?",
        "options": ["Code reviews", "Static analysis", "Unit testing", "User documentation review"],
        "correctAnswer": "Unit testing"
    },
    {
        "id": 29,
        "question": "Which of the following is considered a valid defect in software?",
        "options": ["An unhandled exception", "A security vulnerability", "Poor user interface design", "All of the above"],
        "correctAnswer": "All of the above"
    },
    {
        "id": 30,
        "question": "What does a test suite typically contain?",
        "options": ["Multiple test cases", "Code documentation", "Performance metrics", "Project requirements"],
        "correctAnswer": "Multiple test cases"
    },
    {
        "id": 31,
        "question": "Which of the following is true about unit testing?",
        "options": ["It tests the entire system", "It tests individual units of code", "It checks the system's performance", "It involves users testing the system"],
        "correctAnswer": "It tests individual units of code"
    },
    {
        "id": 32,
        "question": "What is the purpose of the 'bug tracking' process?",
        "options": ["To monitor the status of defects", "To test the functionality of software", "To evaluate the software’s usability", "To measure system performance"],
        "correctAnswer": "To monitor the status of defects"
    },
    {
        "id": 33,
        "question": "What is a test execution report?",
        "options": ["A report that documents test results", "A document describing test strategy", "A script for automated testing", "A tool for debugging code"],
        "correctAnswer": "A report that documents test results"
    },
    {
        "id": 34,
        "question": "What type of testing is performed after fixing defects?",
        "options": ["Re-testing", "Regression Testing", "Unit Testing", "Performance Testing"],
        "correctAnswer": "Re-testing"
    },
    {
        "id": 35,
        "question": "What is the primary focus of usability testing?",
        "options": ["To verify that the software meets functional requirements", "To check how user-friendly the system is", "To check the performance of the system", "To verify the security of the system"],
        "correctAnswer": "To check how user-friendly the system is"
    },
    {
        "id": 36,
        "question": "What is the difference between alpha testing and beta testing?",
        "options": ["Alpha testing is done by developers, while beta testing is done by users", "Alpha testing is more comprehensive", "Alpha testing occurs after beta testing", "Beta testing is more formal than alpha testing"],
        "correctAnswer": "Alpha testing is done by developers, while beta testing is done by users"
    },
    {
        "id": 37,
        "question": "What is the purpose of code coverage in testing?",
        "options": ["To measure the percentage of code executed during testing", "To track defects in code", "To test system performance", "To monitor user behavior"],
        "correctAnswer": "To measure the percentage of code executed during testing"
    },
    {
        "id": 38,
        "question": "Which testing technique is used to ensure the system meets user requirements?",
        "options": ["Acceptance Testing", "Regression Testing", "Performance Testing", "Security Testing"],
        "correctAnswer": "Acceptance Testing"
    },
    {
        "id": 39,
        "question": "What does 'test environment' refer to?",
        "options": ["The hardware and software setup used for testing", "The testing team members", "The set of test cases", "The user acceptance tests"],
        "correctAnswer": "The hardware and software setup used for testing"
    },
    {
        "id": 40,
        "question": "Which of the following is NOT a type of software testing?",
        "options": ["Unit Testing", "Integration Testing", "Load Testing", "Time Management Testing"],
        "correctAnswer": "Time Management Testing"
    },
    {
            "id": 41,
            "question": "What is the primary purpose of exploratory testing?",
            "options": ["To check the system’s performance", "To find defects without predefined test cases", "To test the user interface", "To check code coverage"],
            "correctAnswer": "To find defects without predefined test cases"
        },
        {
            "id": 42,
            "question": "What is a 'test metric'?",
            "options": ["A measure used to track the efficiency of the testing process", "A measure of the number of defects", "A type of test case", "A tool for automated testing"],
            "correctAnswer": "A measure used to track the efficiency of the testing process"
        },
        {
            "id": 43,
            "question": "What is a 'bug report'?",
            "options": ["A document describing defects in the system", "A report on test coverage", "A summary of test cases executed", "A tool for debugging"],
            "correctAnswer": "A document describing defects in the system"
        },
        {
            "id": 44,
            "question": "What is meant by 'continuous testing'?",
            "options": ["Testing performed after the software is released", "Ongoing testing throughout the software development lifecycle", "Testing done only by automation", "Testing done by end users"],
            "correctAnswer": "Ongoing testing throughout the software development lifecycle"
        },
        {
            "id": 45,
            "question": "Which is the main aim of security testing?",
            "options": ["To test the performance of the system", "To identify vulnerabilities in the software", "To validate functional requirements", "To test the user interface"],
            "correctAnswer": "To identify vulnerabilities in the software"
        },
        {
            "id": 46,
            "question": "What is a 'use case' in testing?",
            "options": ["A scenario to test the software’s functionality", "A list of test cases", "A report on testing outcomes", "A tool for automation testing"],
            "correctAnswer": "A scenario to test the software’s functionality"
        },
        {
            "id": 47,
            "question": "What is the significance of 'code review' in software testing?",
            "options": ["To evaluate system performance", "To detect defects early in the development process", "To check the usability of the system", "To validate system requirements"],
            "correctAnswer": "To detect defects early in the development process"
        },
        {
            "id": 48,
            "question": "What is 'ad-hoc testing'?",
            "options": ["Testing without a planned approach", "Testing only for security vulnerabilities", "Testing with automated scripts", "Testing based on pre-defined scenarios"],
            "correctAnswer": "Testing without a planned approach"
        },
        {
            "id": 49,
            "question": "What is 'stress testing' designed to measure?",
            "options": ["System's performance under expected load", "System's response under extreme load conditions", "System's compatibility with different browsers", "System's security vulnerabilities"],
            "correctAnswer": "System's response under extreme load conditions"
        },
        {
            "id": 50,
            "question": "What is 'volume testing'?",
            "options": ["Testing how the system handles large volumes of data", "Testing the user interface design", "Testing for performance under normal load", "Testing for system security"],
            "correctAnswer": "Testing how the system handles large volumes of data"
        },
        {
            "id": 51,
            "question": "What is the difference between verification and validation in software testing?",
            "options": ["Verification checks if the software meets requirements, validation checks if the software works as expected", "Verification checks code quality, validation checks usability", "Verification is done by testers, validation is done by users", "There is no difference between verification and validation"],
            "correctAnswer": "Verification checks if the software meets requirements, validation checks if the software works as expected"
        },
        {
            "id": 52,
            "question": "Which of the following is NOT a software testing tool?",
            "options": ["Selenium", "JUnit", "Eclipse", "JIRA"],
            "correctAnswer": "Eclipse"
        },
        {
            "id": 53,
            "question": "What is the main goal of performance testing?",
            "options": ["To measure system responsiveness and stability under load", "To identify security flaws", "To test user interactions", "To check if the system meets functional requirements"],
            "correctAnswer": "To measure system responsiveness and stability under load"
        },
        {
            "id": 54,
            "question": "What is the difference between functional and non-functional testing?",
            "options": ["Functional testing checks the behavior of the system, non-functional testing checks its performance", "Functional testing checks system performance, non-functional testing checks user behavior", "There is no difference", "Non-functional testing focuses on the code structure"],
            "correctAnswer": "Functional testing checks the behavior of the system, non-functional testing checks its performance"
        },
        {
            "id": 55,
            "question": "What is 'boundary value analysis'?",
            "options": ["A technique to test the boundary values of input ranges", "A technique to test the security of the system", "A technique to evaluate system performance", "A technique to test user interactions"],
            "correctAnswer": "A technique to test the boundary values of input ranges"
        },
        {
            "id": 56,
            "question": "What is 'test coverage'?",
            "options": ["The amount of testing done on the system", "The number of defects found", "The percentage of code executed during testing", "The number of test cases passed"],
            "correctAnswer": "The percentage of code executed during testing"
        },
        {
            "id": 57,
            "question": "What is 'sanity testing'?",
            "options": ["A quick check to see if the system works after a minor change", "A full test of the entire system", "A test focused on system usability", "A test that checks for critical defects only"],
            "correctAnswer": "A quick check to see if the system works after a minor change"
        },
        {
            "id": 58,
            "question": "What is 'parallel testing'?",
            "options": ["Testing two different versions of the software simultaneously", "Testing the system on different devices", "Testing the system with different user inputs", "Testing the system's performance under load"],
            "correctAnswer": "Testing two different versions of the software simultaneously"
        },
        {
            "id": 59,
            "question": "What is 'decision table testing'?",
            "options": ["Testing based on decision tables for different input combinations", "Testing system performance under different conditions", "Testing the user interface", "Testing for security vulnerabilities"],
            "correctAnswer": "Testing based on decision tables for different input combinations"
        },
        {
            "id": 60,
            "question": "What is 'system testing'?",
            "options": ["Testing individual components of the system", "Testing the system as a whole", "Testing specific features only", "Testing the system’s performance"],
            "correctAnswer": "Testing the system as a whole"
        },
        {
            "id": 61,
            "question": "What is 'manual testing'?",
            "options": ["Testing performed by human testers without automation", "Testing done using automated tools", "Testing focused on system security", "Testing done by the development team only"],
            "correctAnswer": "Testing performed by human testers without automation"
        },
        {
            "id": 62,
            "question": "What is 'test automation'?",
            "options": ["Using tools and scripts to automate the execution of tests", "Testing manually with predefined test cases", "Testing for system usability", "Testing the security of the system"],
            "correctAnswer": "Using tools and scripts to automate the execution of tests"
        },
        {
            "id": 63,
            "question": "What is 'performance testing' primarily focused on?",
            "options": ["Testing for security flaws", "Testing the usability of the system", "Testing system response times under load", "Testing the user interface design"],
            "correctAnswer": "Testing system response times under load"
        },
        {
            "id": 64,
            "question": "What is 'smoke testing' designed to verify?",
            "options": ["Critical system functionality", "System performance", "System security", "Usability of the system"],
            "correctAnswer": "Critical system functionality"
        },
        {
            "id": 65,
            "question": "What is 'security testing' focused on?",
            "options": ["The functionality of the system", "The performance of the system", "Identifying potential security threats and vulnerabilities", "The usability of the system"],
            "correctAnswer": "Identifying potential security threats and vulnerabilities"
        },
        {
            "id": 66,
            "question": "What is 'stress testing' used for?",
            "options": ["To test system performance under extreme conditions", "To evaluate system functionality", "To test user interactions", "To validate user inputs"],
            "correctAnswer": "To test system performance under extreme conditions"
        },
        {
            "id": 67,
            "question": "What is 'regression testing' primarily used to check?",
            "options": ["If new code changes have caused any defects in existing functionality", "The performance of the system", "System usability", "The security of the system"],
            "correctAnswer": "If new code changes have caused any defects in existing functionality"
        },
        {
            "id": 68,
            "question": "What is 'user acceptance testing'?",
            "options": ["Testing done by users to verify the system meets their needs", "Testing the code for defects", "Testing for security vulnerabilities", "Testing system performance under load"],
            "correctAnswer": "Testing done by users to verify the system meets their needs"
        },
        {
            "id": 69,
            "question": "What is 'alpha testing'?",
            "options": ["Testing performed by developers before releasing the software to a small group of users", "Testing performed by end users after the release", "Testing focused on system security", "Testing for system performance under load"],
            "correctAnswer": "Testing performed by developers before releasing the software to a small group of users"
        },
        {
            "id": 70,
            "question": "What is 'beta testing'?",
            "options": ["Testing performed by external users to validate the software before final release", "Testing performed by developers in-house", "Testing for system performance", "Testing for security vulnerabilities"],
            "correctAnswer": "Testing performed by external users to validate the software before final release"
        },
        {
            "id": 71,
            "question": "What is 'functional testing' concerned with?",
            "options": ["Validating the functionality of the system", "Testing system performance", "Testing security vulnerabilities", "Testing user interface design"],
            "correctAnswer": "Validating the functionality of the system"
        },
        {
            "id": 72,
            "question": "What is 'non-functional testing' concerned with?",
            "options": ["Testing the behavior of the system", "Testing the performance, usability, and security of the system", "Testing the user interface", "Testing the functionality of the system"],
            "correctAnswer": "Testing the performance, usability, and security of the system"
        },
        {
            "id": 73,
            "question": "What is 'white-box testing'?",
            "options": ["Testing based on the internal structure of the system", "Testing without knowing the internal structure of the system", "Testing for performance under load", "Testing for user experience"],
            "correctAnswer": "Testing based on the internal structure of the system"
        },
        {
            "id": 74,
            "question": "What is 'black-box testing'?",
            "options": ["Testing based on system functionality without knowing the internal structure", "Testing the internal code structure", "Testing the performance of the system", "Testing the user interface"],
            "correctAnswer": "Testing based on system functionality without knowing the internal structure"
        },
        {
            "id": 75,
            "question": "What is the main purpose of 'unit testing'?",
            "options": ["To test individual units of code in isolation", "To check the performance of the system", "To evaluate the system’s usability", "To ensure the system works as a whole"],
            "correctAnswer": "To test individual units of code in isolation"
        },
        {
            "id": 76,
            "question": "What is the main goal of 'integration testing'?",
            "options": ["To test the interaction between different components of the system", "To test individual components", "To test the user interface", "To validate system security"],
            "correctAnswer": "To test the interaction between different components of the system"
        },
        {
            "id": 77,
            "question": "What does 'test case' refer to?",
            "options": ["A set of conditions used to verify a specific function or behavior of the system", "A report documenting defects", "A tool for debugging", "A document for test planning"],
            "correctAnswer": "A set of conditions used to verify a specific function or behavior of the system"
        },
        {
            "id": 78,
            "question": "What is 'test plan'?",
            "options": ["A document outlining the scope, approach, resources, and schedule of testing activities", "A list of test cases", "A script for automated testing", "A tool for debugging"],
            "correctAnswer": "A document outlining the scope, approach, resources, and schedule of testing activities"
        },
        {
            "id": 79,
            "question": "What is 'test strategy'?",
            "options": ["A high-level plan describing the testing approach", "A set of test cases", "A document for bug tracking", "A tool for testing automation"],
            "correctAnswer": "A high-level plan describing the testing approach"
        },
        {
            "id": 80,
            "question": "What is 'end-to-end testing'?",
            "options": ["Testing the complete functionality of the system from start to finish", "Testing the security of the system", "Testing individual modules", "Testing for system performance under load"],
            "correctAnswer": "Testing the complete functionality of the system from start to finish"
        },
        {
                "id": 81,
                "question": "What is 'usability testing'?",
                "options": ["Testing the system's user-friendliness", "Testing for security vulnerabilities", "Testing system performance under load", "Testing the correctness of the code"],
                "correctAnswer": "Testing the system's user-friendliness"
            },
            {
                "id": 82,
                "question": "What is 'test execution'?",
                "options": ["Running the test cases to validate the system", "Creating test cases", "Reporting bugs", "Defining test strategies"],
                "correctAnswer": "Running the test cases to validate the system"
            },
            {
                "id": 83,
                "question": "What is 're-testing'?",
                "options": ["Testing the same scenario after bugs are fixed", "Testing the system's performance", "Testing for system usability", "Testing for user interaction"],
                "correctAnswer": "Testing the same scenario after bugs are fixed"
            },
            {
                "id": 84,
                "question": "What is 'test automation framework'?",
                "options": ["A set of rules and guidelines for automated testing", "A tool for manual testing", "A document outlining the test cases", "A script for unit testing"],
                "correctAnswer": "A set of rules and guidelines for automated testing"
            },
            {
                "id": 85,
                "question": "What is 'test script'?",
                "options": ["A set of instructions for automated testing", "A document describing defects", "A tool for debugging", "A report on test results"],
                "correctAnswer": "A set of instructions for automated testing"
            },
            {
                "id": 86,
                "question": "What is 'code coverage'?",
                "options": ["The percentage of code covered by tests", "The amount of defects found", "The total number of tests executed", "The time taken for testing"],
                "correctAnswer": "The percentage of code covered by tests"
            },
            {
                "id": 87,
                "question": "What is 'defect life cycle'?",
                "options": ["The process through which a defect goes from identification to resolution", "The time spent in fixing defects", "The duration of a test case", "The process of automating tests"],
                "correctAnswer": "The process through which a defect goes from identification to resolution"
            },
            {
                "id": 88,
                "question": "What is 'alpha version'?",
                "options": ["An early release version of the software for internal testing", "The final release version of the software", "A version after beta testing", "A version for user acceptance testing"],
                "correctAnswer": "An early release version of the software for internal testing"
            },
            {
                "id": 89,
                "question": "What is 'beta version'?",
                "options": ["A version of software released for external testing by selected users", "The final version of the software", "A version used by developers only", "A version tested by automated scripts"],
                "correctAnswer": "A version of software released for external testing by selected users"
            },
            {
                "id": 90,
                "question": "What is 'test case design'?",
                "options": ["The process of creating test cases", "The process of debugging code", "The process of writing test scripts", "The process of reporting bugs"],
                "correctAnswer": "The process of creating test cases"
            },
            {
                "id": 91,
                "question": "What is 'test data'?",
                "options": ["The data used during testing to evaluate the system", "The data generated after test execution", "The data for generating test cases", "The data used for security testing"],
                "correctAnswer": "The data used during testing to evaluate the system"
            },
            {
                "id": 92,
                "question": "What is 'test environment'?",
                "options": ["The setup or configuration of hardware, software, and network for testing", "The process of running tests", "The document describing the test cases", "The process of debugging defects"],
                "correctAnswer": "The setup or configuration of hardware, software, and network for testing"
            },
            {
                "id": 93,
                "question": "What is 'acceptance criteria'?",
                "options": ["The conditions that a system must meet to be accepted by the customer", "The conditions for passing a test case", "The requirements for automation scripts", "The guidelines for test reporting"],
                "correctAnswer": "The conditions that a system must meet to be accepted by the customer"
            },
            {
                "id": 94,
                "question": "What is 'test execution log'?",
                "options": ["A record of test execution results, including pass/fail status", "A document for writing test cases", "A record of defects found during testing", "A report summarizing testing strategies"],
                "correctAnswer": "A record of test execution results, including pass/fail status"
            },
            {
                "id": 95,
                "question": "What is 'test status report'?",
                "options": ["A report summarizing the current status of testing, including progress and issues", "A report describing the test cases", "A report listing all the defects found", "A summary of the test environment setup"],
                "correctAnswer": "A report summarizing the current status of testing, including progress and issues"
            },
            {
                "id": 96,
                "question": "What is 'negative testing'?",
                "options": ["Testing to verify how the system behaves with invalid input", "Testing to check the system's functionality", "Testing to check system performance", "Testing the user interface design"],
                "correctAnswer": "Testing to verify how the system behaves with invalid input"
            },
            {
                "id": 97,
                "question": "What is 'positive testing'?",
                "options": ["Testing to verify that the system works with valid input", "Testing for security flaws", "Testing for performance under load", "Testing the user interface"],
                "correctAnswer": "Testing to verify that the system works with valid input"
            },
            {
                "id": 98,
                "question": "What is 'impact analysis' in testing?",
                "options": ["Analyzing the impact of a defect or change on the system", "Testing system performance", "Analyzing user interactions", "Evaluating the usability of the system"],
                "correctAnswer": "Analyzing the impact of a defect or change on the system"
            },
            {
                "id": 99,
                "question": "What is 'bug life cycle'?",
                "options": ["The stages through which a bug passes, from identification to resolution", "The time spent in debugging a system", "The process of creating test cases for defects", "The process of reporting bugs to developers"],
                "correctAnswer": "The stages through which a bug passes, from identification to resolution"
            },
            {
                "id": 100,
                "question": "What is 'test execution phase'?",
                "options": ["The phase in which the actual testing is performed by executing test cases", "The phase where test cases are created", "The phase where defects are identified", "The phase where automation scripts are written"],
                "correctAnswer": "The phase in which the actual testing is performed by executing test cases"
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
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/software-testing' className="font-bold text-sm">Software Testing</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">Software Testing</h1>
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

export default SoftwareTest;

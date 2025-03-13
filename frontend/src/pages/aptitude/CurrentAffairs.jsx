import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const CurrentAffairs = () => {
  const questionsData = [
    {
        "id": 1,
        "question": "Who is the current President of India?",
        "options": ["Ram Nath Kovind", "Pranab Mukherjee", "Droupadi Murmu", "Kovind Ram Nath"],
        "correctAnswer": "Droupadi Murmu"
    },
    {
        "id": 2,
        "question": "Which Indian city hosted the 2023 G20 summit?",
        "options": ["Mumbai", "New Delhi", "Bangalore", "Chennai"],
        "correctAnswer": "New Delhi"
    },
    {
        "id": 3,
        "question": "Who won the 2023 Indian Premier League (IPL) title?",
        "options": ["Mumbai Indians", "Delhi Capitals", "Chennai Super Kings", "Gujarat Titans"],
        "correctAnswer": "Gujarat Titans"
    },
    {
        "id": 4,
        "question": "Which Indian state recently passed a bill to implement 'Uniform Civil Code'?",
        "options": ["Uttarakhand", "Gujarat", "Goa", "Uttar Pradesh"],
        "correctAnswer": "Uttarakhand"
    },
    {
        "id": 5,
        "question": "Who was appointed as the Chief Justice of India in 2023?",
        "options": ["U.U. Lalit", "D.Y. Chandrachud", "N.V. Ramana", "Sharad Arvind Bobde"],
        "correctAnswer": "D.Y. Chandrachud"
    },
    {
        "id": 6,
        "question": "Which Indian state is the first to implement the National Logistics Policy?",
        "options": ["Maharashtra", "Uttar Pradesh", "Tamil Nadu", "Gujarat"],
        "correctAnswer": "Uttar Pradesh"
    },
    {
        "id": 7,
        "question": "What is the name of the first Indian private space mission to the Moon?",
        "options": ["Mangalyaan", "Chandrayaan", "Gaganyaan", "Aditya-L1"],
        "correctAnswer": "Chandrayaan"
    },
    {
        "id": 8,
        "question": "Who is the first woman fighter pilot to command an operational flying unit in the Indian Air Force?",
        "options": ["Avani Chaturvedi", "Mitali Madhusmita", "Bhawana Kanth", "Shivangi Singh"],
        "correctAnswer": "Shivangi Singh"
    },
    {
        "id": 9,
        "question": "In which state is the 'Namami Gange' project aimed at cleaning the Ganga River?",
        "options": ["Uttarakhand", "Bihar", "Uttar Pradesh", "West Bengal"],
        "correctAnswer": "Uttar Pradesh"
    },
    {
        "id": 10,
        "question": "Which state in India introduced a new 'Startup Policy' in 2023?",
        "options": ["Karnataka", "Maharashtra", "Uttarakhand", "Delhi"],
        "correctAnswer": "Karnataka"
    },
    {
        "id": 11,
        "question": "Which country recently signed an agreement to build the largest Indian refinery abroad?",
        "options": ["China", "Sri Lanka", "United Arab Emirates", "Saudi Arabia"],
        "correctAnswer": "United Arab Emirates"
    },
    {
        "id": 12,
        "question": "Who was awarded the 2023 Jnanpith Award?",
        "options": ["Keki N. Daruwalla", "Salim Khan", "Damodar Mauzo", "Nayantara Sahgal"],
        "correctAnswer": "Damodar Mauzo"
    },
    {
        "id": 13,
        "question": "Which city is the headquarters of the Indian Space Research Organisation (ISRO)?",
        "options": ["Mumbai", "Bengaluru", "Hyderabad", "New Delhi"],
        "correctAnswer": "Bengaluru"
    },
    {
        "id": 14,
        "question": "Which Indian politician was recently appointed as the Chairman of the National Democratic Alliance (NDA)?",
        "options": ["Narendra Modi", "Amit Shah", "Nitin Gadkari", "Uddhav Thackeray"],
        "correctAnswer": "Narendra Modi"
    },
    {
        "id": 15,
        "question": "What is the name of the new missile launched by the Indian Army in 2023?",
        "options": ["BrahMos", "Nirbhay", "Prithvi", "Shourya"],
        "correctAnswer": "Prithvi"
    },
    {
        "id": 16,
        "question": "Which Indian state has been declared 'open defecation free' in 2023?",
        "options": ["Gujarat", "Madhya Pradesh", "Haryana", "Rajasthan"],
        "correctAnswer": "Rajasthan"
    },
    {
        "id": 17,
        "question": "Which Indian actor received the Dadasaheb Phalke Award in 2023?",
        "options": ["Amitabh Bachchan", "Rajinikanth", "Shah Rukh Khan", "Salman Khan"],
        "correctAnswer": "Rajinikanth"
    },
    {
        "id": 18,
        "question": "In 2023, which Indian company became the world's most valuable startup?",
        "options": ["Ola", "Zomato", "Byju's", "Paytm"],
        "correctAnswer": "Byju's"
    },
    {
        "id": 19,
        "question": "Which state in India recently launched a new digital education program?",
        "options": ["Kerala", "Karnataka", "Telangana", "Madhya Pradesh"],
        "correctAnswer": "Kerala"
    },
    {
        "id": 20,
        "question": "Who won the 2023 Indian National Congress (INC) Presidential Election?",
        "options": ["Rahul Gandhi", "Mallikarjun Kharge", "Sonia Gandhi", "P. Chidambaram"],
        "correctAnswer": "Mallikarjun Kharge"
    },
    {
        "id": 21,
        "question": "Which Indian state is the first to set up a climate change center?",
        "options": ["Kerala", "Himachal Pradesh", "Odisha", "Sikkim"],
        "correctAnswer": "Sikkim"
    },
    {
        "id": 22,
        "question": "Which Indian startup became the first to enter the $1 billion valuation club in 2023?",
        "options": ["PhonePe", "Ola", "Swiggy", "Zomato"],
        "correctAnswer": "PhonePe"
    },
    {
        "id": 23,
        "question": "Which Indian bank launched a new digital payment system in 2023?",
        "options": ["SBI", "ICICI Bank", "HDFC Bank", "Punjab National Bank"],
        "correctAnswer": "ICICI Bank"
    },
    {
        "id": 24,
        "question": "Which Indian state hosted the 2023 National Games?",
        "options": ["Uttarakhand", "Gujarat", "Himachal Pradesh", "Kerala"],
        "correctAnswer": "Gujarat"
    },
    {
        "id": 25,
        "question": "Which Indian company became the first to launch 5G services in India?",
        "options": ["Airtel", "Jio", "Vi", "BSNL"],
        "correctAnswer": "Jio"
    },
    {
            "id": 26,
            "question": "Which Indian company has been ranked as the most valuable company in India as of 2023?",
            "options": ["Reliance Industries", "Tata Consultancy Services", "HDFC Bank", "Infosys"],
            "correctAnswer": "Tata Consultancy Services"
        },
        {
            "id": 27,
            "question": "Who is the current Finance Minister of India?",
            "options": ["Arun Jaitley", "Nirmala Sitharaman", "P. Chidambaram", "Sushma Swaraj"],
            "correctAnswer": "Nirmala Sitharaman"
        },
        {
            "id": 28,
            "question": "Which Indian state has recently enacted the 'Anti-Conversion Law' in 2023?",
            "options": ["Uttar Pradesh", "Madhya Pradesh", "Assam", "Karnataka"],
            "correctAnswer": "Uttar Pradesh"
        },
        {
            "id": 29,
            "question": "Which Indian state will host the 2023 National Sports Meet?",
            "options": ["Gujarat", "Haryana", "Uttarakhand", "Madhya Pradesh"],
            "correctAnswer": "Gujarat"
        },
        {
            "id": 30,
            "question": "Which Indian organization has launched the first indigenous 5G technology in 2023?",
            "options": ["BSNL", "Reliance Jio", "DRDO", "ISRO"],
            "correctAnswer": "DRDO"
        },
        {
            "id": 31,
            "question": "Who was appointed as the new Chief Minister of Maharashtra in 2023?",
            "options": ["Uddhav Thackeray", "Devendra Fadnavis", "Eknath Shinde", "Ajit Pawar"],
            "correctAnswer": "Eknath Shinde"
        },
        {
            "id": 32,
            "question": "Which Indian state became the first to implement the 'Elderly Care Bill'?",
            "options": ["Kerala", "Tamil Nadu", "Madhya Pradesh", "Goa"],
            "correctAnswer": "Kerala"
        },
        {
            "id": 33,
            "question": "Which Indian city will host the 2024 Winter Olympics?",
            "options": ["New Delhi", "Bengaluru", "Shimla", "Gangtok"],
            "correctAnswer": "None of the above (Winter Olympics will be held in Milan-Cortina, Italy) "
        },
        {
            "id": 34,
            "question": "Which Indian actor won the 2023 Filmfare Award for Best Actor?",
            "options": ["Shah Rukh Khan", "Aamir Khan", "Ranbir Kapoor", "Vicky Kaushal"],
            "correctAnswer": "Shah Rukh Khan"
        },
        {
            "id": 35,
            "question": "Who was the winner of the 2023 Padma Bhushan award?",
            "options": ["Virat Kohli", "M. S. Dhoni", "Ratan Tata", "Narayana Murthy"],
            "correctAnswer": "Ratan Tata"
        },
        {
            "id": 36,
            "question": "What is the name of India's first fully indigenously developed aircraft carrier?",
            "options": ["INS Vikrant", "INS Vishal", "INS Vikramaditya", "INS Viraat"],
            "correctAnswer": "INS Vikrant"
        },
        {
            "id": 37,
            "question": "Which Indian state is set to implement the country's first 'Green Hydrogen' project?",
            "options": ["Maharashtra", "Gujarat", "Uttarakhand", "Karnataka"],
            "correctAnswer": "Gujarat"
        },
        {
            "id": 38,
            "question": "Who became the first Indian cricketer to score 8000 runs in T20 cricket?",
            "options": ["Rohit Sharma", "Virat Kohli", "Suresh Raina", "MS Dhoni"],
            "correctAnswer": "Virat Kohli"
        },
        {
            "id": 39,
            "question": "Which city in India was awarded the title of 'Cleanest City' in the 2023 Swachh Survekshan rankings?",
            "options": ["Indore", "Surat", "Chandrapur", "Bhopal"],
            "correctAnswer": "Indore"
        },
        {
            "id": 40,
            "question": "Which Indian city will host the 2023 World Economic Forum (WEF) Annual Meeting?",
            "options": ["New Delhi", "Mumbai", "Bengaluru", "Hyderabad"],
            "correctAnswer": "None of the above (The WEF Annual Meeting will be held in Davos, Switzerland)"
        },
        {
            "id": 41,
            "question": "Which Indian company has announced a $1 billion investment to establish a semiconductor manufacturing plant?",
            "options": ["Reliance Industries", "Tata Group", "HCL Technologies", "Adani Group"],
            "correctAnswer": "Tata Group"
        },
        {
            "id": 42,
            "question": "Which Indian state has been declared free from manual scavenging in 2023?",
            "options": ["Haryana", "Tamil Nadu", "Uttar Pradesh", "Madhya Pradesh"],
            "correctAnswer": "Haryana"
        },
        {
            "id": 43,
            "question": "Who is the author of the book 'The India Story'?",
            "options": ["Chetan Bhagat", "Raghuram Rajan", "Shashi Tharoor", "Kiran Desai"],
            "correctAnswer": "Shashi Tharoor"
        },
        {
            "id": 44,
            "question": "Which Indian state has launched the 'Startup India Seed Fund' in 2023?",
            "options": ["Gujarat", "Bihar", "Maharashtra", "Karnataka"],
            "correctAnswer": "Karnataka"
        },
        {
            "id": 45,
            "question": "Which Indian telecom company successfully launched India's first 5G service in 2023?",
            "options": ["Airtel", "Reliance Jio", "BSNL", "Vodafone Idea"],
            "correctAnswer": "Reliance Jio"
        },
        {
            "id": 46,
            "question": "Who was the first Indian to win the Nobel Prize in Physics?",
            "options": ["Satyendra Nath Bose", "C. V. Raman", "Har Gobind Khorana", "Venkatraman Ramakrishnan"],
            "correctAnswer": "C. V. Raman"
        },
        {
            "id": 47,
            "question": "In which Indian city is the National Institute of Fashion Technology (NIFT) headquartered?",
            "options": ["Bengaluru", "Mumbai", "New Delhi", "Chennai"],
            "correctAnswer": "New Delhi"
        },
        {
            "id": 48,
            "question": "Which state in India was the first to pass the 'Right to Health' Bill?",
            "options": ["Rajasthan", "Tamil Nadu", "Kerala", "Madhya Pradesh"],
            "correctAnswer": "Rajasthan"
        },
        {
            "id": 49,
            "question": "Which Indian state recently launched the 'One District One Product' initiative in 2023?",
            "options": ["Uttar Pradesh", "Madhya Pradesh", "Bihar", "Assam"],
            "correctAnswer": "Uttar Pradesh"
        },
        {
            "id": 50,
            "question": "Who was appointed as the new Chief Election Commissioner of India in 2023?",
            "options": ["Sushil Chandra", "Rajiv Kumar", "Sunil Arora", "Agarwal Rajeev"],
            "correctAnswer": "Rajiv Kumar"
        },    
        {
                "id": 51,
                "question": "Who was appointed the new Prime Minister of India in 2023?",
                "options": ["Narendra Modi", "Manmohan Singh", "Arvind Kejriwal", "Yogi Adityanath"],
                "correctAnswer": "Narendra Modi"
            },
            {
                "id": 52,
                "question": "Which Indian city is known as the 'Silicon Valley of India'?",
                "options": ["Hyderabad", "Bengaluru", "Chennai", "Mumbai"],
                "correctAnswer": "Bengaluru"
            },
            {
                "id": 53,
                "question": "Which Indian state has set a target to achieve 100% electric vehicle (EV) penetration by 2030?",
                "options": ["Maharashtra", "Uttarakhand", "Delhi", "Haryana"],
                "correctAnswer": "Delhi"
            },
            {
                "id": 54,
                "question": "Which Indian state launched a scheme to provide free education to girls in 2023?",
                "options": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "West Bengal"],
                "correctAnswer": "Madhya Pradesh"
            },
            {
                "id": 55,
                "question": "Who was awarded the 'Best Actor' award at the 2023 National Film Awards?",
                "options": ["Ranveer Singh", "Ajay Devgn", "Vicky Kaushal", "Rajinikanth"],
                "correctAnswer": "Ajay Devgn"
            },
            {
                "id": 56,
                "question": "Which Indian city became the first in the country to launch a 'Solar City' project?",
                "options": ["New Delhi", "Mumbai", "Bengaluru", "Nagpur"],
                "correctAnswer": "Nagpur"
            },
            {
                "id": 57,
                "question": "Who is the current Governor of the Reserve Bank of India (RBI)?",
                "options": ["Shaktikanta Das", "Raghuram Rajan", "Duvvuri Subbarao", "Urjit Patel"],
                "correctAnswer": "Shaktikanta Das"
            },
            {
                "id": 58,
                "question": "Which Indian state recently became the first to set up a 'Women’s Parliament' in 2023?",
                "options": ["Tamil Nadu", "Kerala", "Madhya Pradesh", "Himachal Pradesh"],
                "correctAnswer": "Himachal Pradesh"
            },
            {
                "id": 59,
                "question": "Which Indian state launched the 'Digital Empowerment Program' for farmers in 2023?",
                "options": ["Gujarat", "Maharashtra", "Punjab", "Rajasthan"],
                "correctAnswer": "Maharashtra"
            },
            {
                "id": 60,
                "question": "Which Indian cricketer became the fastest to reach 10,000 runs in One-Day Internationals (ODIs)?",
                "options": ["Virat Kohli", "Rohit Sharma", "Sachin Tendulkar", "MS Dhoni"],
                "correctAnswer": "Virat Kohli"
            },
            {
                "id": 61,
                "question": "Which country did India sign a historic 'Free Trade Agreement' (FTA) with in 2023?",
                "options": ["USA", "Australia", "United Kingdom", "European Union"],
                "correctAnswer": "Australia"
            },
            {
                "id": 62,
                "question": "Which Indian state was the first to declare the 'Climate Change Action Plan' in 2023?",
                "options": ["Sikkim", "Kerala", "Tamil Nadu", "Himachal Pradesh"],
                "correctAnswer": "Sikkim"
            },
            {
                "id": 63,
                "question": "Which city hosted the 2023 India-ASEAN (Association of Southeast Asian Nations) Summit?",
                "options": ["New Delhi", "Chennai", "Kochi", "Goa"],
                "correctAnswer": "New Delhi"
            },
            {
                "id": 64,
                "question": "Who is the current CEO of the Indian Space Research Organisation (ISRO)?",
                "options": ["K. Sivan", "Vikram Sarabhai", "A. S. Kiran Kumar", "S. Somanath"],
                "correctAnswer": "S. Somanath"
            },
            {
                "id": 65,
                "question": "In which year did India successfully launch its first mission to Mars, 'Mangalyaan'?",
                "options": ["2011", "2012", "2013", "2014"],
                "correctAnswer": "2013"
            },
            {
                "id": 66,
                "question": "Who became the first Indian athlete to win a medal at the 2023 World Athletics Championships?",
                "options": ["Neeraj Chopra", "Hima Das", "Mary Kom", "Sathish Sivalingam"],
                "correctAnswer": "Neeraj Chopra"
            },
            {
                "id": 67,
                "question": "Which Indian state passed the 'Anti-Romeo' law in 2023?",
                "options": ["Uttar Pradesh", "Bihar", "Rajasthan", "Haryana"],
                "correctAnswer": "Uttar Pradesh"
            },
            {
                "id": 68,
                "question": "Which Indian airport became the first in the country to fully transition to solar power in 2023?",
                "options": ["Cochin International Airport", "Chennai International Airport", "Indira Gandhi International Airport", "Netaji Subhas Chandra Bose International Airport"],
                "correctAnswer": "Cochin International Airport"
            },
            {
                "id": 69,
                "question": "Which Indian city is the host of the 2023 International Film Festival of India (IFFI)?",
                "options": ["Goa", "Bengaluru", "Hyderabad", "Kochi"],
                "correctAnswer": "Goa"
            },
            {
                "id": 70,
                "question": "Which Indian bank recently launched a mobile banking app with artificial intelligence features?",
                "options": ["SBI", "ICICI Bank", "HDFC Bank", "Punjab National Bank"],
                "correctAnswer": "ICICI Bank"
            },
            {
                "id": 71,
                "question": "Which state in India became the first to pass the 'Child Protection Law' in 2023?",
                "options": ["Goa", "Kerala", "Assam", "Uttarakhand"],
                "correctAnswer": "Goa"
            },
            {
                "id": 72,
                "question": "Which city became the first in India to implement a 'Public Bicycle Sharing' scheme in 2023?",
                "options": ["Hyderabad", "Bengaluru", "New Delhi", "Mumbai"],
                "correctAnswer": "Bengaluru"
            },
            {
                "id": 73,
                "question": "Which Indian sports team won the 2023 ICC Women's World Cup?",
                "options": ["Australia", "India", "England", "New Zealand"],
                "correctAnswer": "England"
            },
            {
                "id": 74,
                "question": "Who won the 2023 Booker Prize for Literature?",
                "options": ["Aravind Adiga", "Geetanjali Shree", "Salman Rushdie", "Vikram Seth"],
                "correctAnswer": "Geetanjali Shree"
            },
            {
                "id": 75,
                "question": "Which Indian politician was awarded the 'Padma Vibhushan' in 2023?",
                "options": ["Narendra Modi", "Sonia Gandhi", "Atal Bihari Vajpayee", "Lal Krishna Advani"],
                "correctAnswer": "Atal Bihari Vajpayee"
            },    
            {
                    "id": 76,
                    "question": "Which Indian cricketer recently became the highest run-scorer in T20 internationals?",
                    "options": ["Rohit Sharma", "Virat Kohli", "Shikhar Dhawan", "MS Dhoni"],
                    "correctAnswer": "Rohit Sharma"
                },
                {
                    "id": 77,
                    "question": "Which state in India was the first to introduce a 'Water Conservation Bill' in 2023?",
                    "options": ["Madhya Pradesh", "Karnataka", "Punjab", "Gujarat"],
                    "correctAnswer": "Madhya Pradesh"
                },
                {
                    "id": 78,
                    "question": "Who became the first woman fighter pilot in India to fly solo in a combat aircraft?",
                    "options": ["Avani Chaturvedi", "Bhavana Kanth", "Madhuri Gupta", "Sujata Yadav"],
                    "correctAnswer": "Avani Chaturvedi"
                },
                {
                    "id": 79,
                    "question": "Which Indian state became the first to offer 'Artificial Intelligence' courses in schools in 2023?",
                    "options": ["Maharashtra", "Gujarat", "Kerala", "Tamil Nadu"],
                    "correctAnswer": "Kerala"
                },
                {
                    "id": 80,
                    "question": "Which Indian city is known as the 'City of Lakes'?",
                    "options": ["Bhopal", "Jaipur", "Udaipur", "Pune"],
                    "correctAnswer": "Udaipur"
                },
                {
                    "id": 81,
                    "question": "Which Indian company achieved the milestone of producing the world's first electric car with solid-state batteries in 2023?",
                    "options": ["Tata Motors", "Mahindra & Mahindra", "Bajaj Auto", "Hero Electric"],
                    "correctAnswer": "Tata Motors"
                },
                {
                    "id": 82,
                    "question": "Which Indian state passed the 'First Right' Bill for children in 2023?",
                    "options": ["West Bengal", "Kerala", "Madhya Pradesh", "Uttarakhand"],
                    "correctAnswer": "West Bengal"
                },
                {
                    "id": 83,
                    "question": "Who is the current External Affairs Minister of India?",
                    "options": ["Sushma Swaraj", "Nirmala Sitharaman", "Subrahmanyam Jaishankar", "Rajiv Gandhi"],
                    "correctAnswer": "Subrahmanyam Jaishankar"
                },
                {
                    "id": 84,
                    "question": "In which year did India achieve the title of 'World's Largest Producer of Milk'?",
                    "options": ["2015", "2016", "2017", "2018"],
                    "correctAnswer": "2017"
                },
                {
                    "id": 85,
                    "question": "Who was the winner of the 2023 Jnanpith Award?",
                    "options": ["Shashi Tharoor", "Keki N. Daruwalla", "Amitav Ghosh", "Nilgiri K. Shukla"],
                    "correctAnswer": "Keki N. Daruwalla"
                },
                {
                    "id": 86,
                    "question": "Which Indian startup became the first to achieve a $100 billion valuation in 2023?",
                    "options": ["Zomato", "Flipkart", "Byju's", "Swiggy"],
                    "correctAnswer": "Byju's"
                },
                {
                    "id": 87,
                    "question": "Which Indian state introduced the 'Green Budget' in 2023?",
                    "options": ["Uttarakhand", "Himachal Pradesh", "Assam", "Nagaland"],
                    "correctAnswer": "Himachal Pradesh"
                },
                {
                    "id": 88,
                    "question": "Which Indian railway station became the first to be fully solar-powered in 2023?",
                    "options": ["Bhopal Junction", "New Delhi Railway Station", "Chennai Central", "Nagpur Junction"],
                    "correctAnswer": "Bhopal Junction"
                },
                {
                    "id": 89,
                    "question": "Who is the author of the book 'The Great Indian Novel'?",
                    "options": ["Shashi Tharoor", "Vikram Seth", "Amitav Ghosh", "Chetan Bhagat"],
                    "correctAnswer": "Shashi Tharoor"
                },
                {
                    "id": 90,
                    "question": "Which city is the first in India to launch the 'Integrated Command and Control Center' for traffic management in 2023?",
                    "options": ["Bengaluru", "Hyderabad", "Mumbai", "Chennai"],
                    "correctAnswer": "Hyderabad"
                },
                {
                    "id": 91,
                    "question": "Which state in India became the first to launch the 'Online Education for Children with Disabilities' initiative?",
                    "options": ["Punjab", "Tamil Nadu", "Haryana", "Kerala"],
                    "correctAnswer": "Punjab"
                },
                {
                    "id": 92,
                    "question": "Who is the current Chief Minister of Delhi?",
                    "options": ["Arvind Kejriwal", "Sheila Dikshit", "Manish Sisodia", "Ajay Maken"],
                    "correctAnswer": "Arvind Kejriwal"
                },
                {
                    "id": 93,
                    "question": "Which Indian city is known as the 'City of Joy'?",
                    "options": ["Kolkata", "Mumbai", "Chennai", "Bengaluru"],
                    "correctAnswer": "Kolkata"
                },
                {
                    "id": 94,
                    "question": "Which Indian state became the first to implement 'Minimum Wage for Domestic Workers'?",
                    "options": ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Kerala"],
                    "correctAnswer": "Kerala"
                },
                {
                    "id": 95,
                    "question": "Which Indian state is the first to launch 'State Cancer Care Policy' in 2023?",
                    "options": ["Maharashtra", "Tamil Nadu", "Uttarakhand", "Kerala"],
                    "correctAnswer": "Uttarakhand"
                },
                {
                    "id": 96,
                    "question": "Which country did India sign an agreement with for 'Shared Defence Technology' in 2023?",
                    "options": ["USA", "Russia", "France", "Israel"],
                    "correctAnswer": "France"
                },
                {
                    "id": 97,
                    "question": "Which Indian leader is the author of the book 'Pax Indica'?",
                    "options": ["Sushma Swaraj", "Narendra Modi", "Shashi Tharoor", "Manmohan Singh"],
                    "correctAnswer": "Shashi Tharoor"
                },
                {
                    "id": 98,
                    "question": "Who became the first Indian woman to win a medal at the Winter Olympics?",
                    "options": ["Mirabai Chanu", "P.V. Sindhu", "Lalita Babar", "Jasmina Pasha"],
                    "correctAnswer": "None of the above (No Indian woman has won a Winter Olympics medal yet)"
                },
                {
                    "id": 99,
                    "question": "Which Indian state became the first to pass the 'Social Media Regulation Law' in 2023?",
                    "options": ["Kerala", "Tamil Nadu", "Uttar Pradesh", "Maharashtra"],
                    "correctAnswer": "Kerala"
                },
                {
                    "id": 100,
                    "question": "Which Indian city was awarded the title of 'Best City for Public Transport' in 2023?",
                    "options": ["Mumbai", "Delhi", "Kochi", "Bengaluru"],
                    "correctAnswer": "Kochi"
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
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/current-affairs' className="font-bold text-sm">Current Affairs</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">Current Affairs</h1>
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

export default CurrentAffairs;

import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const GeneralScience = () => {
  // Mock dataset for questions
  const questionsData = [
    {
        "id": 1,
        "question": "What is the chemical formula of water?",
        "options": ["H2O", "O2", "CO2", "H2O2"],
        "correctAnswer": "H2O"
    },
    {
        "id": 2,
        "question": "What is the powerhouse of the cell?",
        "options": ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        "correctAnswer": "Mitochondria"
    },
    {
        "id": 3,
        "question": "What gas do plants absorb for photosynthesis?",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "correctAnswer": "Carbon Dioxide"
    },
    {
        "id": 4,
        "question": "Which is the largest organ in the human body?",
        "options": ["Liver", "Skin", "Heart", "Brain"],
        "correctAnswer": "Skin"
    },
    {
        "id": 5,
        "question": "What is the primary source of energy for Earth?",
        "options": ["The Moon", "The Sun", "The Ocean", "Geothermal Energy"],
        "correctAnswer": "The Sun"
    },
    {
        "id": 6,
        "question": "Which planet is known as the 'Blue Planet'?",
        "options": ["Venus", "Mars", "Earth", "Neptune"],
        "correctAnswer": "Earth"
    },
    {
        "id": 7,
        "question": "What is the boiling point of water at sea level?",
        "options": ["90°C", "100°C", "120°C", "110°C"],
        "correctAnswer": "100°C"
    },
    {
        "id": 8,
        "question": "What type of blood cells help fight infections?",
        "options": ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
        "correctAnswer": "White Blood Cells"
    },
    {
        "id": 9,
        "question": "Which part of the plant is responsible for photosynthesis?",
        "options": ["Root", "Stem", "Leaf", "Flower"],
        "correctAnswer": "Leaf"
    },
    {
        "id": 10,
        "question": "What is the most abundant gas in Earth's atmosphere?",
        "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        "correctAnswer": "Nitrogen"
    },
    {
        "id": 11,
        "question": "Which vitamin is responsible for blood clotting?",
        "options": ["Vitamin A", "Vitamin B", "Vitamin D", "Vitamin K"],
        "correctAnswer": "Vitamin K"
    },
    {
        "id": 12,
        "question": "Which type of rock is formed from lava?",
        "options": ["Sedimentary", "Igneous", "Metamorphic", "Granite"],
        "correctAnswer": "Igneous"
    },
    {
        "id": 13,
        "question": "What is the chemical symbol for gold?",
        "options": ["Au", "Ag", "Fe", "Pb"],
        "correctAnswer": "Au"
    },
    {
        "id": 14,
        "question": "What does DNA stand for?",
        "options": ["Deoxyribonucleic Acid", "Dinucleic Acid", "Dioxygen Nucleic Acid", "Dicarbon Nucleic Acid"],
        "correctAnswer": "Deoxyribonucleic Acid"
    },
    {
        "id": 15,
        "question": "Which organ in the human body filters blood?",
        "options": ["Liver", "Kidney", "Heart", "Lung"],
        "correctAnswer": "Kidney"
    },
    {
        "id": 16,
        "question": "What is the smallest particle of an element?",
        "options": ["Molecule", "Atom", "Proton", "Neutron"],
        "correctAnswer": "Atom"
    },
    {
        "id": 17,
        "question": "Which gas is essential for human respiration?",
        "options": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"],
        "correctAnswer": "Oxygen"
    },
    {
        "id": 18,
        "question": "What is the SI unit of force?",
        "options": ["Joule", "Pascal", "Newton", "Watt"],
        "correctAnswer": "Newton"
    },
    {
        "id": 19,
        "question": "What do we call animals that eat both plants and meat?",
        "options": ["Herbivores", "Carnivores", "Omnivores", "Detritivores"],
        "correctAnswer": "Omnivores"
    },
    {
        "id": 20,
        "question": "Which part of the brain controls balance and coordination?",
        "options": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
        "correctAnswer": "Cerebellum"
    },
    {
        "id": 21,
        "question": "What is the main component of natural gas?",
        "options": ["Methane", "Propane", "Butane", "Ethane"],
        "correctAnswer": "Methane"
    },
    {
        "id": 22,
        "question": "What are the three states of matter?",
        "options": ["Solid, Liquid, Plasma", "Solid, Liquid, Gas", "Gas, Plasma, Liquid", "Solid, Plasma, Gas"],
        "correctAnswer": "Solid, Liquid, Gas"
    },
    {
        "id": 23,
        "question": "What is the hardest natural substance on Earth?",
        "options": ["Iron", "Diamond", "Granite", "Quartz"],
        "correctAnswer": "Diamond"
    },
    {
        "id": 24,
        "question": "What is the process of converting light energy into chemical energy in plants?",
        "options": ["Respiration", "Digestion", "Photosynthesis", "Transpiration"],
        "correctAnswer": "Photosynthesis"
    },
    {
        "id": 25,
        "question": "Which planet has the most moons?",
        "options": ["Jupiter", "Saturn", "Mars", "Neptune"],
        "correctAnswer": "Saturn"
    },
    {
            "id": 26,
            "question": "Which gas is commonly known as 'laughing gas'?",
            "options": ["Nitric Oxide", "Nitrous Oxide", "Carbon Monoxide", "Sulfur Dioxide"],
            "correctAnswer": "Nitrous Oxide"
        },
        {
            "id": 27,
            "question": "Which organelle is known as the 'control center' of the cell?",
            "options": ["Mitochondria", "Nucleus", "Ribosome", "Cytoplasm"],
            "correctAnswer": "Nucleus"
        },
        {
            "id": 28,
            "question": "What is the main function of red blood cells?",
            "options": ["Fight infections", "Transport oxygen", "Regulate body temperature", "Clot blood"],
            "correctAnswer": "Transport oxygen"
        },
        {
            "id": 29,
            "question": "Which is the largest planet in the solar system?",
            "options": ["Saturn", "Jupiter", "Neptune", "Earth"],
            "correctAnswer": "Jupiter"
        },
        {
            "id": 30,
            "question": "What is the speed of light in a vacuum?",
            "options": ["300,000 km/s", "150,000 km/s", "1,000 km/s", "500,000 km/s"],
            "correctAnswer": "300,000 km/s"
        },
        {
            "id": 31,
            "question": "What is the most common element in the universe?",
            "options": ["Oxygen", "Hydrogen", "Carbon", "Helium"],
            "correctAnswer": "Hydrogen"
        },
        {
            "id": 32,
            "question": "Which part of the flower is responsible for reproduction?",
            "options": ["Petal", "Stamen", "Sepal", "Stem"],
            "correctAnswer": "Stamen"
        },
        {
            "id": 33,
            "question": "Which vitamin is also known as ascorbic acid?",
            "options": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B"],
            "correctAnswer": "Vitamin C"
        },
        {
            "id": 34,
            "question": "What type of bond involves the sharing of electron pairs between atoms?",
            "options": ["Ionic Bond", "Covalent Bond", "Metallic Bond", "Hydrogen Bond"],
            "correctAnswer": "Covalent Bond"
        },
        {
            "id": 35,
            "question": "What is the main function of the liver?",
            "options": ["Produce insulin", "Filter blood", "Digest food", "Store oxygen"],
            "correctAnswer": "Filter blood"
        },
        {
            "id": 36,
            "question": "What is the SI unit of energy?",
            "options": ["Watt", "Newton", "Joule", "Pascal"],
            "correctAnswer": "Joule"
        },
        {
            "id": 37,
            "question": "What is the primary function of the ozone layer?",
            "options": ["Provide oxygen", "Absorb UV radiation", "Trap heat", "Regulate rain patterns"],
            "correctAnswer": "Absorb UV radiation"
        },
        {
            "id": 38,
            "question": "Which organ in the human body produces insulin?",
            "options": ["Liver", "Pancreas", "Kidney", "Spleen"],
            "correctAnswer": "Pancreas"
        },
        {
            "id": 39,
            "question": "What is the scientific name for table salt?",
            "options": ["Sodium Carbonate", "Sodium Chloride", "Potassium Chloride", "Calcium Carbonate"],
            "correctAnswer": "Sodium Chloride"
        },
        {
            "id": 40,
            "question": "What does the Richter scale measure?",
            "options": ["Wind speed", "Earthquake magnitude", "Tsunami height", "Atmospheric pressure"],
            "correctAnswer": "Earthquake magnitude"
        },
        {
            "id": 41,
            "question": "What is the smallest unit of life?",
            "options": ["Organ", "Cell", "Tissue", "Organism"],
            "correctAnswer": "Cell"
        },
        {
            "id": 42,
            "question": "Which type of muscle is found in the heart?",
            "options": ["Smooth Muscle", "Skeletal Muscle", "Cardiac Muscle", "Voluntary Muscle"],
            "correctAnswer": "Cardiac Muscle"
        },
        {
            "id": 43,
            "question": "What type of lens is used to correct myopia?",
            "options": ["Convex Lens", "Concave Lens", "Bifocal Lens", "Cylindrical Lens"],
            "correctAnswer": "Concave Lens"
        },
        {
            "id": 44,
            "question": "What is the unit of electrical resistance?",
            "options": ["Ohm", "Ampere", "Volt", "Watt"],
            "correctAnswer": "Ohm"
        },
        {
            "id": 45,
            "question": "What is the process by which water changes from liquid to gas?",
            "options": ["Condensation", "Evaporation", "Sublimation", "Precipitation"],
            "correctAnswer": "Evaporation"
        },
        {
            "id": 46,
            "question": "What is the primary function of chlorophyll in plants?",
            "options": ["Store nutrients", "Capture sunlight", "Absorb water", "Support the plant structure"],
            "correctAnswer": "Capture sunlight"
        },
        {
            "id": 47,
            "question": "Which gas is released during photosynthesis?",
            "options": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
            "correctAnswer": "Oxygen"
        },
        {
            "id": 48,
            "question": "Which element is the primary component of diamonds?",
            "options": ["Carbon", "Silicon", "Oxygen", "Iron"],
            "correctAnswer": "Carbon"
        },
        {
            "id": 49,
            "question": "What does the term 'antibiotic' mean?",
            "options": ["Kills bacteria", "Kills viruses", "Neutralizes toxins", "Kills fungi"],
            "correctAnswer": "Kills bacteria"
        },
        {
            "id": 50,
            "question": "Which is the densest planet in the solar system?",
            "options": ["Earth", "Saturn", "Venus", "Jupiter"],
            "correctAnswer": "Earth"
        },
        {
                "id": 51,
                "question": "What is the pH level of pure water?",
                "options": ["7", "5", "9", "6"],
                "correctAnswer": "7"
            },
            {
                "id": 52,
                "question": "Which blood group is known as the universal donor?",
                "options": ["A", "B", "O", "AB"],
                "correctAnswer": "O"
            },
            {
                "id": 53,
                "question": "What is the name of the first artificial satellite launched into space?",
                "options": ["Sputnik 1", "Apollo 11", "Voyager 1", "Chandrayaan"],
                "correctAnswer": "Sputnik 1"
            },
            {
                "id": 54,
                "question": "Which part of the human body is responsible for producing red blood cells?",
                "options": ["Heart", "Bone Marrow", "Liver", "Lungs"],
                "correctAnswer": "Bone Marrow"
            },
            {
                "id": 55,
                "question": "What is the process of water cycle movement called?",
                "options": ["Filtration", "Distillation", "Hydrological Cycle", "Sublimation"],
                "correctAnswer": "Hydrological Cycle"
            },
            {
                "id": 56,
                "question": "Which scientist proposed the theory of relativity?",
                "options": ["Isaac Newton", "Albert Einstein", "Marie Curie", "Nikola Tesla"],
                "correctAnswer": "Albert Einstein"
            },
            {
                "id": 57,
                "question": "What is the chemical symbol for iron?",
                "options": ["Ir", "Fe", "In", "I"],
                "correctAnswer": "Fe"
            },
            {
                "id": 58,
                "question": "Which animal is known for having three hearts?",
                "options": ["Octopus", "Squid", "Jellyfish", "Starfish"],
                "correctAnswer": "Octopus"
            },
            {
                "id": 59,
                "question": "Which process in plants is responsible for water loss?",
                "options": ["Photosynthesis", "Respiration", "Transpiration", "Osmosis"],
                "correctAnswer": "Transpiration"
            },
            {
                "id": 60,
                "question": "What is the largest bone in the human body?",
                "options": ["Skull", "Femur", "Tibia", "Spine"],
                "correctAnswer": "Femur"
            },
            {
                "id": 61,
                "question": "Which gas is used to fill balloons to make them float?",
                "options": ["Oxygen", "Helium", "Hydrogen", "Nitrogen"],
                "correctAnswer": "Helium"
            },
            {
                "id": 62,
                "question": "What is the study of insects called?",
                "options": ["Botany", "Zoology", "Entomology", "Ornithology"],
                "correctAnswer": "Entomology"
            },
            {
                "id": 63,
                "question": "Which planet is known as the 'Red Planet'?",
                "options": ["Venus", "Mars", "Saturn", "Mercury"],
                "correctAnswer": "Mars"
            },
            {
                "id": 64,
                "question": "What is the chemical formula of common salt?",
                "options": ["NaCl", "KCl", "MgCl2", "CaCl2"],
                "correctAnswer": "NaCl"
            },
            {
                "id": 65,
                "question": "What is the SI unit of temperature?",
                "options": ["Celsius", "Kelvin", "Fahrenheit", "Rankine"],
                "correctAnswer": "Kelvin"
            },
            {
                "id": 66,
                "question": "What is the smallest bone in the human body?",
                "options": ["Stapes", "Ulna", "Femur", "Tarsal"],
                "correctAnswer": "Stapes"
            },
            {
                "id": 67,
                "question": "Which gas is known as a greenhouse gas?",
                "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
                "correctAnswer": "Carbon Dioxide"
            },
            {
                "id": 68,
                "question": "What is the main component of Earth's core?",
                "options": ["Iron", "Nickel", "Silicon", "Carbon"],
                "correctAnswer": "Iron"
            },
            {
                "id": 69,
                "question": "Which vitamin is also known as the sunshine vitamin?",
                "options": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
                "correctAnswer": "Vitamin D"
            },
            {
                "id": 70,
                "question": "What is the process by which plants lose water through their leaves?",
                "options": ["Transpiration", "Condensation", "Respiration", "Evaporation"],
                "correctAnswer": "Transpiration"
            },
            {
                "id": 71,
                "question": "What is the basic unit of a chemical element?",
                "options": ["Proton", "Atom", "Neutron", "Molecule"],
                "correctAnswer": "Atom"
            },
            {
                "id": 72,
                "question": "Which organ in the human body is responsible for filtering toxins?",
                "options": ["Kidney", "Liver", "Heart", "Stomach"],
                "correctAnswer": "Liver"
            },
            {
                "id": 73,
                "question": "What is the process of cell division called?",
                "options": ["Meiosis", "Mitosis", "Fission", "Fusion"],
                "correctAnswer": "Mitosis"
            },
            {
                "id": 74,
                "question": "Which scientist is known for the laws of motion?",
                "options": ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
                "correctAnswer": "Isaac Newton"
            },
            {
                "id": 75,
                "question": "What is the force that causes objects to fall to the ground?",
                "options": ["Friction", "Magnetism", "Gravity", "Momentum"],
                "correctAnswer": "Gravity"
            },       
            {
                    "id": 76,
                    "question": "What is the function of white blood cells in the human body?",
                    "options": ["Carry oxygen", "Fight infections", "Clot blood", "Regulate temperature"],
                    "correctAnswer": "Fight infections"
                },
                {
                    "id": 77,
                    "question": "Which type of radiation is blocked by sunscreen?",
                    "options": ["Infrared", "Gamma", "Ultraviolet", "X-ray"],
                    "correctAnswer": "Ultraviolet"
                },
                {
                    "id": 78,
                    "question": "What is the boiling point of water at sea level?",
                    "options": ["90°C", "100°C", "110°C", "120°C"],
                    "correctAnswer": "100°C"
                },
                {
                    "id": 79,
                    "question": "What is the study of the universe called?",
                    "options": ["Geology", "Astrology", "Astronomy", "Biology"],
                    "correctAnswer": "Astronomy"
                },
                {
                    "id": 80,
                    "question": "Which metal is liquid at room temperature?",
                    "options": ["Mercury", "Sodium", "Potassium", "Iron"],
                    "correctAnswer": "Mercury"
                },
                {
                    "id": 81,
                    "question": "What is the most abundant gas in Earth's atmosphere?",
                    "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
                    "correctAnswer": "Nitrogen"
                },
                {
                    "id": 82,
                    "question": "Which layer of the Earth is the thickest?",
                    "options": ["Crust", "Mantle", "Outer Core", "Inner Core"],
                    "correctAnswer": "Mantle"
                },
                {
                    "id": 83,
                    "question": "Which part of the brain controls balance and coordination?",
                    "options": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
                    "correctAnswer": "Cerebellum"
                },
                {
                    "id": 84,
                    "question": "What is the powerhouse of the cell?",
                    "options": ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
                    "correctAnswer": "Mitochondria"
                },
                {
                    "id": 85,
                    "question": "What is the chemical formula for water?",
                    "options": ["H2O", "O2", "CO2", "H2O2"],
                    "correctAnswer": "H2O"
                },
                {
                    "id": 86,
                    "question": "Which planet is the closest to the Sun?",
                    "options": ["Earth", "Mars", "Mercury", "Venus"],
                    "correctAnswer": "Mercury"
                },
                {
                    "id": 87,
                    "question": "What is the process of turning a liquid into a solid?",
                    "options": ["Melting", "Freezing", "Condensation", "Evaporation"],
                    "correctAnswer": "Freezing"
                },
                {
                    "id": 88,
                    "question": "Which part of the cell contains genetic material?",
                    "options": ["Mitochondria", "Nucleus", "Ribosome", "Golgi Apparatus"],
                    "correctAnswer": "Nucleus"
                },
                {
                    "id": 89,
                    "question": "Which gas is essential for human respiration?",
                    "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
                    "correctAnswer": "Oxygen"
                },
                {
                    "id": 90,
                    "question": "What is the primary source of energy for life on Earth?",
                    "options": ["The Moon", "The Sun", "Volcanoes", "Earth's Core"],
                    "correctAnswer": "The Sun"
                },
                {
                    "id": 91,
                    "question": "Which organ is part of both the digestive and respiratory systems?",
                    "options": ["Liver", "Esophagus", "Pharynx", "Stomach"],
                    "correctAnswer": "Pharynx"
                },
                {
                    "id": 92,
                    "question": "What type of celestial body is the Sun?",
                    "options": ["Planet", "Star", "Asteroid", "Comet"],
                    "correctAnswer": "Star"
                },
                {
                    "id": 93,
                    "question": "What is the SI unit of force?",
                    "options": ["Pascal", "Newton", "Joule", "Watt"],
                    "correctAnswer": "Newton"
                },
                {
                    "id": 94,
                    "question": "What is the largest organ in the human body?",
                    "options": ["Heart", "Liver", "Skin", "Lungs"],
                    "correctAnswer": "Skin"
                },
                {
                    "id": 95,
                    "question": "Which type of energy is stored in a stretched spring?",
                    "options": ["Kinetic Energy", "Thermal Energy", "Elastic Potential Energy", "Gravitational Energy"],
                    "correctAnswer": "Elastic Potential Energy"
                },
                {
                    "id": 96,
                    "question": "What is the main function of hemoglobin?",
                    "options": ["Fight infections", "Clot blood", "Carry oxygen", "Digest food"],
                    "correctAnswer": "Carry oxygen"
                },
                {
                    "id": 97,
                    "question": "What is the SI unit of power?",
                    "options": ["Joule", "Watt", "Newton", "Ohm"],
                    "correctAnswer": "Watt"
                },
                {
                    "id": 98,
                    "question": "What is the smallest particle of an element that retains its properties?",
                    "options": ["Molecule", "Atom", "Proton", "Electron"],
                    "correctAnswer": "Atom"
                },
                {
                    "id": 99,
                    "question": "Which gas is produced during respiration?",
                    "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
                    "correctAnswer": "Carbon Dioxide"
                },
                {
                    "id": 100,
                    "question": "What is the process by which plants make their own food?",
                    "options": ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
                    "correctAnswer": "Photosynthesis"
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
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/general-science' className="font-bold text-sm">General Science</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">General Science</h1>
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

export default GeneralScience;

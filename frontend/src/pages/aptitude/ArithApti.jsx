import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const ArithApti = () => {
  const questionsData = [
      {
        "id": 1,
        "question": "What is 2 plus 3?",
        "options": [
          "5",
          "6",
          "4",
          "7"
        ],
        "correctAnswer": "5"
      },
      {
        "id": 2,
        "question": "What is 4 plus 6?",
        "options": [
          "10",
          "11",
          "9",
          "12"
        ],
        "correctAnswer": "10"
      },
      {
        "id": 3,
        "question": "What is 6 plus 9?",
        "options": [
          "15",
          "16",
          "14",
          "17"
        ],
        "correctAnswer": "15"
      },
      {
        "id": 4,
        "question": "What is 8 plus 12?",
        "options": [
          "20",
          "21",
          "19",
          "22"
        ],
        "correctAnswer": "20"
      },
      {
        "id": 5,
        "question": "What is 10 plus 15?",
        "options": [
          "25",
          "26",
          "24",
          "27"
        ],
        "correctAnswer": "25"
      },
      {
        "id": 6,
        "question": "What is 12 plus 18?",
        "options": [
          "30",
          "31",
          "29",
          "32"
        ],
        "correctAnswer": "30"
      },
      {
        "id": 7,
        "question": "What is 14 plus 21?",
        "options": [
          "35",
          "36",
          "34",
          "37"
        ],
        "correctAnswer": "35"
      },
      {
        "id": 8,
        "question": "What is 16 plus 24?",
        "options": [
          "40",
          "41",
          "39",
          "42"
        ],
        "correctAnswer": "40"
      },
      {
        "id": 9,
        "question": "What is 18 plus 27?",
        "options": [
          "45",
          "46",
          "44",
          "47"
        ],
        "correctAnswer": "45"
      },
      {
        "id": 10,
        "question": "What is 20 plus 30?",
        "options": [
          "50",
          "51",
          "49",
          "52"
        ],
        "correctAnswer": "50"
      },
      {
        "id": 11,
        "question": "What is 22 plus 33?",
        "options": [
          "55",
          "56",
          "54",
          "57"
        ],
        "correctAnswer": "55"
      },
      {
        "id": 12,
        "question": "What is 24 plus 36?",
        "options": [
          "60",
          "61",
          "59",
          "62"
        ],
        "correctAnswer": "60"
      },
      {
        "id": 13,
        "question": "What is 26 plus 39?",
        "options": [
          "65",
          "66",
          "64",
          "67"
        ],
        "correctAnswer": "65"
      },
      {
        "id": 14,
        "question": "What is 28 plus 42?",
        "options": [
          "70",
          "71",
          "69",
          "72"
        ],
        "correctAnswer": "70"
      },
      {
        "id": 15,
        "question": "What is 30 plus 45?",
        "options": [
          "75",
          "76",
          "74",
          "77"
        ],
        "correctAnswer": "75"
      },
      {
        "id": 16,
        "question": "What is 32 plus 48?",
        "options": [
          "80",
          "81",
          "79",
          "82"
        ],
        "correctAnswer": "80"
      },
      {
        "id": 17,
        "question": "What is 34 plus 51?",
        "options": [
          "85",
          "86",
          "84",
          "87"
        ],
        "correctAnswer": "85"
      },
      {
        "id": 18,
        "question": "What is 36 plus 54?",
        "options": [
          "90",
          "91",
          "89",
          "92"
        ],
        "correctAnswer": "90"
      },
      {
        "id": 19,
        "question": "What is 38 plus 57?",
        "options": [
          "95",
          "96",
          "94",
          "97"
        ],
        "correctAnswer": "95"
      },
      {
        "id": 20,
        "question": "What is 40 plus 60?",
        "options": [
          "100",
          "101",
          "99",
          "102"
        ],
        "correctAnswer": "100"
      },
      {
        "id": 21,
        "question": "What is 42 plus 63?",
        "options": [
          "105",
          "106",
          "104",
          "107"
        ],
        "correctAnswer": "105"
      },
      {
        "id": 22,
        "question": "What is 44 plus 66?",
        "options": [
          "110",
          "111",
          "109",
          "112"
        ],
        "correctAnswer": "110"
      },
      {
        "id": 23,
        "question": "What is 46 plus 69?",
        "options": [
          "115",
          "116",
          "114",
          "117"
        ],
        "correctAnswer": "115"
      },
      {
        "id": 24,
        "question": "What is 48 plus 72?",
        "options": [
          "120",
          "121",
          "119",
          "122"
        ],
        "correctAnswer": "120"
      },
      {
        "id": 25,
        "question": "What is 50 plus 75?",
        "options": [
          "125",
          "126",
          "124",
          "127"
        ],
        "correctAnswer": "125"
      },
      {
        "id": 26,
        "question": "What is 52 plus 78?",
        "options": [
          "130",
          "131",
          "129",
          "132"
        ],
        "correctAnswer": "130"
      },
      {
        "id": 27,
        "question": "What is 54 plus 81?",
        "options": [
          "135",
          "136",
          "134",
          "137"
        ],
        "correctAnswer": "135"
      },
      {
        "id": 28,
        "question": "What is 56 plus 84?",
        "options": [
          "140",
          "141",
          "139",
          "142"
        ],
        "correctAnswer": "140"
      },
      {
        "id": 29,
        "question": "What is 58 plus 87?",
        "options": [
          "145",
          "146",
          "144",
          "147"
        ],
        "correctAnswer": "145"
      },
      {
        "id": 30,
        "question": "What is 60 plus 90?",
        "options": [
          "150",
          "151",
          "149",
          "152"
        ],
        "correctAnswer": "150"
      },
      {
        "id": 31,
        "question": "What is 62 plus 93?",
        "options": [
          "155",
          "156",
          "154",
          "157"
        ],
        "correctAnswer": "155"
      },
      {
        "id": 32,
        "question": "What is 64 plus 96?",
        "options": [
          "160",
          "161",
          "159",
          "162"
        ],
        "correctAnswer": "160"
      },
      {
        "id": 33,
        "question": "What is 66 plus 99?",
        "options": [
          "165",
          "166",
          "164",
          "167"
        ],
        "correctAnswer": "165"
      },
      {
        "id": 34,
        "question": "What is 68 plus 102?",
        "options": [
          "170",
          "171",
          "169",
          "172"
        ],
        "correctAnswer": "170"
      },
      {
        "id": 35,
        "question": "What is 70 plus 105?",
        "options": [
          "175",
          "176",
          "174",
          "177"
        ],
        "correctAnswer": "175"
      },
      {
        "id": 36,
        "question": "What is 72 plus 108?",
        "options": [
          "180",
          "181",
          "179",
          "182"
        ],
        "correctAnswer": "180"
      },
      {
        "id": 37,
        "question": "What is 74 plus 111?",
        "options": [
          "185",
          "186",
          "184",
          "187"
        ],
        "correctAnswer": "185"
      },
      {
        "id": 38,
        "question": "What is 76 plus 114?",
        "options": [
          "190",
          "191",
          "189",
          "192"
        ],
        "correctAnswer": "190"
      },
      {
        "id": 39,
        "question": "What is 78 plus 117?",
        "options": [
          "195",
          "196",
          "194",
          "197"
        ],
        "correctAnswer": "195"
      },
      {
        "id": 40,
        "question": "What is 80 plus 120?",
        "options": [
          "200",
          "201",
          "199",
          "202"
        ],
        "correctAnswer": "200"
      },
      {
        "id": 41,
        "question": "What is 82 plus 123?",
        "options": [
          "205",
          "206",
          "204",
          "207"
        ],
        "correctAnswer": "205"
      },
      {
        "id": 42,
        "question": "What is 84 plus 126?",
        "options": [
          "210",
          "211",
          "209",
          "212"
        ],
        "correctAnswer": "210"
      },
      {
        "id": 43,
        "question": "What is 86 plus 129?",
        "options": [
          "215",
          "216",
          "214",
          "217"
        ],
        "correctAnswer": "215"
      },
      {
        "id": 44,
        "question": "What is 88 plus 132?",
        "options": [
          "220",
          "221",
          "219",
          "222"
        ],
        "correctAnswer": "220"
      },
      {
        "id": 45,
        "question": "What is 90 plus 135?",
        "options": [
          "225",
          "226",
          "224",
          "227"
        ],
        "correctAnswer": "225"
      },
      {
        "id": 46,
        "question": "What is 92 plus 138?",
        "options": [
          "230",
          "231",
          "229",
          "232"
        ],
        "correctAnswer": "230"
      },
      {
        "id": 47,
        "question": "What is 94 plus 141?",
        "options": [
          "235",
          "236",
          "234",
          "237"
        ],
        "correctAnswer": "235"
      },
      {
        "id": 48,
        "question": "What is 96 plus 144?",
        "options": [
          "240",
          "241",
          "239",
          "242"
        ],
        "correctAnswer": "240"
      },
      {
        "id": 49,
        "question": "What is 98 plus 147?",
        "options": [
          "245",
          "246",
          "244",
          "247"
        ],
        "correctAnswer": "245"
      },
      {
        "id": 50,
        "question": "What is 100 plus 150?",
        "options": [
          "250",
          "251",
          "249",
          "252"
        ],
        "correctAnswer": "250"
      },
      {
        "id": 51,
        "question": "What is 102 plus 153?",
        "options": [
          "255",
          "256",
          "254",
          "257"
        ],
        "correctAnswer": "255"
      },
      {
        "id": 52,
        "question": "What is 104 plus 156?",
        "options": [
          "260",
          "261",
          "259",
          "262"
        ],
        "correctAnswer": "260"
      },
      {
        "id": 53,
        "question": "What is 106 plus 159?",
        "options": [
          "265",
          "266",
          "264",
          "267"
        ],
        "correctAnswer": "265"
      },
      {
        "id": 54,
        "question": "What is 108 plus 162?",
        "options": [
          "270",
          "271",
          "269",
          "272"
        ],
        "correctAnswer": "270"
      },
      {
        "id": 55,
        "question": "What is 110 plus 165?",
        "options": [
          "275",
          "276",
          "274",
          "277"
        ],
        "correctAnswer": "275"
      },
      {
        "id": 56,
        "question": "What is 112 plus 168?",
        "options": [
          "280",
          "281",
          "279",
          "282"
        ],
        "correctAnswer": "280"
      },
      {
        "id": 57,
        "question": "What is 114 plus 171?",
        "options": [
          "285",
          "286",
          "284",
          "287"
        ],
        "correctAnswer": "285"
      },
      {
        "id": 58,
        "question": "What is 116 plus 174?",
        "options": [
          "290",
          "291",
          "289",
          "292"
        ],
        "correctAnswer": "290"
      },
      {
        "id": 59,
        "question": "What is 118 plus 177?",
        "options": [
          "295",
          "296",
          "294",
          "297"
        ],
        "correctAnswer": "295"
      },
      {
        "id": 60,
        "question": "What is 120 plus 180?",
        "options": [
          "300",
          "301",
          "299",
          "302"
        ],
        "correctAnswer": "300"
      },
      {
        "id": 61,
        "question": "What is 122 plus 183?",
        "options": [
          "305",
          "306",
          "304",
          "307"
        ],
        "correctAnswer": "305"
      },
      {
        "id": 62,
        "question": "What is 124 plus 186?",
        "options": [
          "310",
          "311",
          "309",
          "312"
        ],
        "correctAnswer": "310"
      },
      {
        "id": 63,
        "question": "What is 126 plus 189?",
        "options": [
          "315",
          "316",
          "314",
          "317"
        ],
        "correctAnswer": "315"
      },
      {
        "id": 64,
        "question": "What is 128 plus 192?",
        "options": [
          "320",
          "321",
          "319",
          "322"
        ],
        "correctAnswer": "320"
      },
      {
        "id": 65,
        "question": "What is 130 plus 195?",
        "options": [
          "325",
          "326",
          "324",
          "327"
        ],
        "correctAnswer": "325"
      },
      {
        "id": 66,
        "question": "What is 132 plus 198?",
        "options": [
          "330",
          "331",
          "329",
          "332"
        ],
        "correctAnswer": "330"
      },
      {
        "id": 67,
        "question": "What is 134 plus 201?",
        "options": [
          "335",
          "336",
          "334",
          "337"
        ],
        "correctAnswer": "335"
      },
      {
        "id": 68,
        "question": "What is 136 plus 204?",
        "options": [
          "340",
          "341",
          "339",
          "342"
        ],
        "correctAnswer": "340"
      },
      {
        "id": 69,
        "question": "What is 138 plus 207?",
        "options": [
          "345",
          "346",
          "344",
          "347"
        ],
        "correctAnswer": "345"
      },
      {
        "id": 70,
        "question": "What is 140 plus 210?",
        "options": [
          "350",
          "351",
          "349",
          "352"
        ],
        "correctAnswer": "350"
      },
      {
        "id": 71,
        "question": "What is 142 plus 213?",
        "options": [
          "355",
          "356",
          "354",
          "357"
        ],
        "correctAnswer": "355"
      },
      {
        "id": 72,
        "question": "What is 144 plus 216?",
        "options": [
          "360",
          "361",
          "359",
          "362"
        ],
        "correctAnswer": "360"
      },
      {
        "id": 73,
        "question": "What is 146 plus 219?",
        "options": [
          "365",
          "366",
          "364",
          "367"
        ],
        "correctAnswer": "365"
      },
      {
        "id": 74,
        "question": "What is 148 plus 222?",
        "options": [
          "370",
          "371",
          "369",
          "372"
        ],
        "correctAnswer": "370"
      },
      {
        "id": 75,
        "question": "What is 150 plus 225?",
        "options": [
          "375",
          "376",
          "374",
          "377"
        ],
        "correctAnswer": "375"
      },
      {
        "id": 76,
        "question": "What is 152 plus 228?",
        "options": [
          "380",
          "381",
          "379",
          "382"
        ],
        "correctAnswer": "380"
      },
      {
        "id": 77,
        "question": "What is 154 plus 231?",
        "options": [
          "385",
          "386",
          "384",
          "387"
        ],
        "correctAnswer": "385"
      },
      {
        "id": 78,
        "question": "What is 156 plus 234?",
        "options": [
          "390",
          "391",
          "389",
          "392"
        ],
        "correctAnswer": "390"
      },
      {
        "id": 79,
        "question": "What is 158 plus 237?",
        "options": [
          "395",
          "396",
          "394",
          "397"
        ],
        "correctAnswer": "395"
      },
      {
        "id": 80,
        "question": "What is 160 plus 240?",
        "options": [
          "400",
          "401",
          "399",
          "402"
        ],
        "correctAnswer": "400"
      },
      {
        "id": 81,
        "question": "What is 162 plus 243?",
        "options": [
          "405",
          "406",
          "404",
          "407"
        ],
        "correctAnswer": "405"
      },
      {
        "id": 82,
        "question": "What is 164 plus 246?",
        "options": [
          "410",
          "411",
          "409",
          "412"
        ],
        "correctAnswer": "410"
      },
      {
        "id": 83,
        "question": "What is 166 plus 249?",
        "options": [
          "415",
          "416",
          "414",
          "417"
        ],
        "correctAnswer": "415"
      },
      {
        "id": 84,
        "question": "What is 168 plus 252?",
        "options": [
          "420",
          "421",
          "419",
          "422"
        ],
        "correctAnswer": "420"
      },
      {
        "id": 85,
        "question": "What is 170 plus 255?",
        "options": [
          "425",
          "426",
          "424",
          "427"
        ],
        "correctAnswer": "425"
      },
      {
        "id": 86,
        "question": "What is 172 plus 258?",
        "options": [
          "430",
          "431",
          "429",
          "432"
        ],
        "correctAnswer": "430"
      },
      {
        "id": 87,
        "question": "What is 174 plus 261?",
        "options": [
          "435",
          "436",
          "434",
          "437"
        ],
        "correctAnswer": "435"
      },
      {
        "id": 88,
        "question": "What is 176 plus 264?",
        "options": [
          "440",
          "441",
          "439",
          "442"
        ],
        "correctAnswer": "440"
      },
      {
        "id": 89,
        "question": "What is 178 plus 267?",
        "options": [
          "445",
          "446",
          "444",
          "447"
        ],
        "correctAnswer": "445"
      },
      {
        "id": 90,
        "question": "What is 180 plus 270?",
        "options": [
          "450",
          "451",
          "449",
          "452"
        ],
        "correctAnswer": "450"
      },
      {
        "id": 91,
        "question": "What is 182 plus 273?",
        "options": [
          "455",
          "456",
          "454",
          "457"
        ],
        "correctAnswer": "455"
      },
      {
        "id": 92,
        "question": "What is 184 plus 276?",
        "options": [
          "460",
          "461",
          "459",
          "462"
        ],
        "correctAnswer": "460"
      },
      {
        "id": 93,
        "question": "What is 186 plus 279?",
        "options": [
          "465",
          "466",
          "464",
          "467"
        ],
        "correctAnswer": "465"
      },
      {
        "id": 94,
        "question": "What is 188 plus 282?",
        "options": [
          "470",
          "471",
          "469",
          "472"
        ],
        "correctAnswer": "470"
      },
      {
        "id": 95,
        "question": "What is 190 plus 285?",
        "options": [
          "475",
          "476",
          "474",
          "477"
        ],
        "correctAnswer": "475"
      },
      {
        "id": 96,
        "question": "What is 192 plus 288?",
        "options": [
          "480",
          "481",
          "479",
          "482"
        ],
        "correctAnswer": "480"
      },
      {
        "id": 97,
        "question": "What is 194 plus 291?",
        "options": [
          "485",
          "486",
          "484",
          "487"
        ],
        "correctAnswer": "485"
      },
      {
        "id": 98,
        "question": "What is 196 plus 294?",
        "options": [
          "490",
          "491",
          "489",
          "492"
        ],
        "correctAnswer": "490"
      },
      {
        "id": 99,
        "question": "What is 198 plus 297?",
        "options": [
          "495",
          "496",
          "494",
          "497"
        ],
        "correctAnswer": "495"
      },
      {
        "id": 100,
        "question": "What is 200 plus 300?",
        "options": [
          "500",
          "501",
          "499",
          "502"
        ],
        "correctAnswer": "500"
      }
  ];

  const getRandomQuestions = (data) => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 20);
  };
  

  const [questions, setQuestions] = useState(getRandomQuestions(questionsData));
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

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

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

    const calculateScore = () => {
      return questions.reduce((score, question) => {
        return score + (answers[question.id] === question.correctAnswer ? 1 : 0);
      }, 0);
    };

  return (
    <div className="bg-gray-800 text-white transition duration-500">
      <Header />
      <div className="flex mt-8">
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/arithmetic' className="font-bold text-sm">Arithmetic Aptitude</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">Arithmetic Aptitude</h1>
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

export default ArithApti;

import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const CyberSec = () => {
  // Mock dataset for questions
  const questionsData = [
    {
        id: 1,
        question: "What is cybersecurity?",
        options: ["The practice of protecting systems and networks from digital attacks", "The study of computer languages", "A type of cloud computing", "The process of building firewalls"],
        correctAnswer: "The practice of protecting systems and networks from digital attacks"
  },
  {
        id: 2,
        question: "What is malware?",
        options: ["A type of software designed to harm or exploit devices and networks", "An antivirus program", "A network protocol", "A secure coding practice"],
        correctAnswer: "A type of software designed to harm or exploit devices and networks"
  },
  {
        id: 3,
        question: "Which of these is an example of a phishing attack?",
        options: ["Fraudulent emails pretending to be from a legitimate source", "Installing antivirus software", "Encrypting sensitive data", "Blocking suspicious IP addresses"],
        correctAnswer: "Fraudulent emails pretending to be from a legitimate source"
  },
  {
        id: 4,
        question: "What is a firewall?",
        options: ["A network security device that monitors and controls incoming and outgoing traffic", "An encryption protocol", "A type of malware", "A wireless communication method"],
        correctAnswer: "A network security device that monitors and controls incoming and outgoing traffic"
  },
  {
        id: 5,
        question: "What does the CIA triad stand for in cybersecurity?",
        options: ["Confidentiality, Integrity, Availability", "Cybersecurity, Internet, Access", "Cloud, IoT, Authentication", "Confidentiality, Integration, Algorithm"],
        correctAnswer: "Confidentiality, Integrity, Availability"
  },
  {
        id: 6,
        question: "What is ransomware?",
        options: ["Malware that encrypts a user's data and demands payment for its release", "A type of firewall", "A secure browsing protocol", "A network scanning tool"],
        correctAnswer: "Malware that encrypts a user's data and demands payment for its release"
  },
  {
        id: 7,
        question: "What is the purpose of two-factor authentication (2FA)?",
        options: ["To provide an extra layer of security by requiring two forms of verification", "To encrypt user data", "To speed up login processes", "To bypass firewalls"],
        correctAnswer: "To provide an extra layer of security by requiring two forms of verification"
  },
  {
        id: 8,
        question: "Which of the following is an example of social engineering?",
        options: ["Tricking users into revealing personal information", "Hacking into a server", "Installing a security patch", "Creating a virtual private network"],
        correctAnswer: "Tricking users into revealing personal information"
  },
  {
        id: 9,
        question: "What is a DDoS attack?",
        options: ["An attack that floods a target with excessive traffic, rendering it unavailable", "A method of encrypting data", "A secure data storage protocol", "A type of antivirus software"],
        correctAnswer: "An attack that floods a target with excessive traffic, rendering it unavailable"
  },
  {
        id: 10,
        question: "What is encryption?",
        options: ["The process of converting data into a secure, unreadable format", "A way to hack into secure systems", "A type of antivirus software", "A form of firewall"],
        correctAnswer: "The process of converting data into a secure, unreadable format"
  },
  {
        id: 11,
        question: "What does VPN stand for?",
        options: ["Virtual Private Network", "Virtual Public Node", "Verified Protection Network", "Very Private Node"],
        correctAnswer: "Virtual Private Network"
  },
  {
        id: 12,
        question: "What is the main goal of penetration testing?",
        options: ["To identify vulnerabilities in a system", "To install security software", "To monitor network traffic", "To update firewall settings"],
        correctAnswer: "To identify vulnerabilities in a system"
  },
  {
        id: 13,
        question: "What is the purpose of an SSL certificate?",
        options: ["To encrypt communications between a browser and a server", "To store passwords securely", "To manage firewall rules", "To block phishing attacks"],
        correctAnswer: "To encrypt communications between a browser and a server"
  },
  {
        id: 14,
        question: "What is a brute-force attack?",
        options: ["An attempt to guess passwords or keys through exhaustive trial and error", "A type of malware", "A phishing technique", "A way to install software"],
        correctAnswer: "An attempt to guess passwords or keys through exhaustive trial and error"
  },
  {
        id: 15,
        question: "Which of these is a type of cybersecurity threat?",
        options: ["Phishing", "Ransomware", "Man-in-the-Middle attacks", "All of the above"],
        correctAnswer: "All of the above"
  },
  {
        id: 16,
        question: "What is the purpose of anti-virus software?",
        options: ["To detect and remove malicious software", "To encrypt sensitive data", "To manage firewalls", "To monitor network activity"],
        correctAnswer: "To detect and remove malicious software"
  },
  {
        id: 17,
        question: "What is multi-factor authentication (MFA)?",
        options: ["A security measure requiring multiple forms of verification", "A way to hack into systems", "A tool for encrypting data", "A network protocol"],
        correctAnswer: "A security measure requiring multiple forms of verification"
  },
  {
        id: 18,
        question: "What is spyware?",
        options: ["Malicious software designed to gather information without consent", "A tool for encrypting files", "A secure file transfer protocol", "A network scanning tool"],
        correctAnswer: "Malicious software designed to gather information without consent"
  },
  {
        id: 19,
        question: "What is the main function of a honeypot in cybersecurity?",
        options: ["To lure attackers into a controlled environment for analysis", "To encrypt sensitive data", "To speed up network traffic", "To block phishing attacks"],
        correctAnswer: "To lure attackers into a controlled environment for analysis"
  },
  {
        id: 20,
        question: "What is a zero-day vulnerability?",
        options: ["A security flaw that is exploited before the vendor releases a patch", "A type of firewall", "A network protocol", "A phishing attack"],
        correctAnswer: "A security flaw that is exploited before the vendor releases a patch"
  },
  {
    id: 21,
    question: "What is the purpose of a digital signature?",
    options: ["To verify the authenticity of a message or document", "To encrypt network traffic", "To prevent phishing attacks", "To secure wireless networks"],
    correctAnswer: "To verify the authenticity of a message or document"
},
{
    id: 22,
    question: "What does the term 'botnet' refer to?",
    options: ["A network of compromised devices controlled by a hacker", "A type of firewall", "A secure browsing protocol", "An encryption tool"],
    correctAnswer: "A network of compromised devices controlled by a hacker"
},
{
    id: 23,
    question: "What is the function of a security operations center (SOC)?",
    options: ["To monitor and respond to cybersecurity threats", "To manage cloud resources", "To encrypt sensitive data", "To update firewall configurations"],
    correctAnswer: "To monitor and respond to cybersecurity threats"
},
{
    id: 24,
    question: "What is the purpose of a vulnerability scanner?",
    options: ["To identify potential security weaknesses in a system", "To block malware", "To encrypt data", "To monitor network performance"],
    correctAnswer: "To identify potential security weaknesses in a system"
},
{
    id: 25,
    question: "What is a Trojan horse in cybersecurity?",
    options: ["Malware disguised as legitimate software", "A type of firewall", "A phishing tool", "An encryption protocol"],
    correctAnswer: "Malware disguised as legitimate software"
},
{
    id: 26,
    question: "What does a hash function do in cybersecurity?",
    options: ["Generates a fixed-size string of characters from data", "Encrypts data for transmission", "Monitors network traffic", "Manages user authentication"],
    correctAnswer: "Generates a fixed-size string of characters from data"
},
{
    id: 27,
    question: "What is the purpose of endpoint security?",
    options: ["To protect devices such as laptops, desktops, and mobile phones", "To monitor network traffic", "To encrypt wireless communications", "To update software automatically"],
    correctAnswer: "To protect devices such as laptops, desktops, and mobile phones"
},
{
    id: 28,
    question: "What is spear phishing?",
    options: ["A targeted phishing attack aimed at a specific individual or organization", "A mass phishing email", "A type of malware", "A network scanning tool"],
    correctAnswer: "A targeted phishing attack aimed at a specific individual or organization"
},
{
    id: 29,
    question: "What does IDS stand for in cybersecurity?",
    options: ["Intrusion Detection System", "Internet Data Security", "Internal Data System", "Information Distribution Service"],
    correctAnswer: "Intrusion Detection System"
},
{
    id: 30,
    question: "What is an access control list (ACL)?",
    options: ["A set of rules defining permissions for accessing resources", "An encryption protocol", "A type of malware", "A tool for phishing prevention"],
    correctAnswer: "A set of rules defining permissions for accessing resources"
},
{
    id: 31,
    question: "What is a man-in-the-middle (MITM) attack?",
    options: ["An attack where a hacker intercepts communication between two parties", "A type of malware", "A secure data storage protocol", "A type of phishing attack"],
    correctAnswer: "An attack where a hacker intercepts communication between two parties"
},
{
    id: 32,
    question: "What is the purpose of an intrusion prevention system (IPS)?",
    options: ["To actively block detected threats", "To encrypt network traffic", "To monitor application performance", "To create firewalls"],
    correctAnswer: "To actively block detected threats"
},
{
    id: 33,
    question: "What does BYOD stand for in cybersecurity?",
    options: ["Bring Your Own Device", "Build Your Online Database", "Back Your Organizational Data", "Block Your Online Data"],
    correctAnswer: "Bring Your Own Device"
},
{
    id: 34,
    question: "What is the purpose of security information and event management (SIEM)?",
    options: ["To analyze and respond to security incidents", "To block phishing attacks", "To encrypt sensitive data", "To update software automatically"],
    correctAnswer: "To analyze and respond to security incidents"
},
{
    id: 35,
    question: "What is an Advanced Persistent Threat (APT)?",
    options: ["A prolonged and targeted cyberattack aimed at stealing information", "A type of firewall", "A phishing tool", "A method of encrypting data"],
    correctAnswer: "A prolonged and targeted cyberattack aimed at stealing information"
},
{
    id: 36,
    question: "What is the main goal of data masking?",
    options: ["To hide sensitive information by obscuring it", "To encrypt data in transit", "To create firewalls", "To monitor network activity"],
    correctAnswer: "To hide sensitive information by obscuring it"
},
{
    id: 37,
    question: "What is the role of a cybersecurity policy in an organization?",
    options: ["To establish guidelines and best practices for security", "To encrypt sensitive data", "To manage user authentication", "To block malware"],
    correctAnswer: "To establish guidelines and best practices for security"
},
{
    id: 38,
    question: "What is the purpose of patch management?",
    options: ["To update software to fix vulnerabilities", "To monitor application performance", "To encrypt sensitive data", "To manage firewalls"],
    correctAnswer: "To update software to fix vulnerabilities"
},
{
    id: 39,
    question: "What does social engineering rely on?",
    options: ["Manipulating people to disclose confidential information", "Using brute-force attacks", "Encrypting sensitive data", "Installing security software"],
    correctAnswer: "Manipulating people to disclose confidential information"
},
{
    id: 40,
    question: "What is a cyber kill chain?",
    options: ["A framework describing the stages of a cyberattack", "A method of encrypting data", "A type of firewall", "A tool for phishing prevention"],
    correctAnswer: "A framework describing the stages of a cyberattack"
},
{
    id: 41,
    question: "What is the primary purpose of penetration testing?",
    options: ["To identify and exploit vulnerabilities in a system", "To encrypt sensitive data", "To block phishing attacks", "To monitor network traffic"],
    correctAnswer: "To identify and exploit vulnerabilities in a system"
},
{
    id: 42,
    question: "What is a rootkit?",
    options: ["Malware designed to provide unauthorized access to a system", "A secure data storage protocol", "A type of antivirus software", "A method for encrypting data"],
    correctAnswer: "Malware designed to provide unauthorized access to a system"
},
{
    id: 43,
    question: "What is the purpose of network segmentation?",
    options: ["To divide a network into smaller parts to limit access and improve security", "To speed up data transmission", "To block malware", "To encrypt communications"],
    correctAnswer: "To divide a network into smaller parts to limit access and improve security"
},
{
    id: 44,
    question: "What is a security token?",
    options: ["A physical or digital device used for authentication", "A type of malware", "An encryption protocol", "A network traffic monitoring tool"],
    correctAnswer: "A physical or digital device used for authentication"
},
{
    id: 45,
    question: "What is the role of a cybersecurity auditor?",
    options: ["To assess and ensure compliance with security policies and regulations", "To block phishing attacks", "To encrypt sensitive data", "To manage firewall configurations"],
    correctAnswer: "To assess and ensure compliance with security policies and regulations"
},
{
    id: 46,
    question: "What does MFA stand for in cybersecurity?",
    options: ["Multi-Factor Authentication", "Managed Firewall Access", "Multiple File Access", "Mainframe Authorization"],
    correctAnswer: "Multi-Factor Authentication"
},
{
    id: 47,
    question: "What is a sandbox in cybersecurity?",
    options: ["An isolated environment for testing or analyzing software", "A type of malware", "A tool for encrypting data", "A phishing technique"],
    correctAnswer: "An isolated environment for testing or analyzing software"
},
{
    id: 48,
    question: "What is a cyber threat intelligence (CTI)?",
    options: ["Information used to understand and prevent cyber threats", "A tool for encrypting sensitive data", "A type of phishing attack", "A network monitoring system"],
    correctAnswer: "Information used to understand and prevent cyber threats"
},
{
    id: 49,
    question: "What is a keylogger?",
    options: ["Malware that records keystrokes to steal sensitive information", "A tool for encrypting data", "A firewall configuration tool", "A secure file transfer protocol"],
    correctAnswer: "Malware that records keystrokes to steal sensitive information"
},
{
    id: 50,
    question: "What is the purpose of a cybersecurity risk assessment?",
    options: ["To identify and evaluate potential threats and vulnerabilities", "To encrypt network traffic", "To block phishing attacks", "To monitor network performance"],
    correctAnswer: "To identify and evaluate potential threats and vulnerabilities"
},
{
    id: 51,
    question: "What is the function of a web application firewall (WAF)?",
    options: ["To protect web applications from various attacks", "To encrypt data transmissions", "To manage user authentication", "To block network-level threats"],
    correctAnswer: "To protect web applications from various attacks"
},
{
    id: 52,
    question: "What is the purpose of a security operations center (SOC)?",
    options: ["To monitor and manage an organization’s security posture", "To update software regularly", "To encrypt sensitive data", "To perform penetration testing"],
    correctAnswer: "To monitor and manage an organization’s security posture"
},
{
    id: 53,
    question: "What is whaling in cybersecurity?",
    options: ["A phishing attack targeting high-profile individuals", "A large-scale DDoS attack", "A type of ransomware", "A method of encrypting data"],
    correctAnswer: "A phishing attack targeting high-profile individuals"
},
{
    id: 54,
    question: "What is the purpose of biometric authentication?",
    options: ["To verify identity using physical characteristics", "To block phishing attacks", "To encrypt sensitive data", "To monitor network activity"],
    correctAnswer: "To verify identity using physical characteristics"
},
{
    id: 55,
    question: "What is data exfiltration?",
    options: ["The unauthorized transfer of data from a system", "A method for encrypting data", "A type of malware", "A secure network protocol"],
    correctAnswer: "The unauthorized transfer of data from a system"
},
{
    id: 56,
    question: "What is the role of an incident response team (IRT)?",
    options: ["To handle and mitigate security incidents", "To monitor network traffic", "To encrypt sensitive data", "To update firewall configurations"],
    correctAnswer: "To handle and mitigate security incidents"
},
{
    id: 57,
    question: "What is a backdoor in cybersecurity?",
    options: ["An unauthorized way to access a system", "A type of firewall", "A secure data transfer protocol", "A phishing tool"],
    correctAnswer: "An unauthorized way to access a system"
},
{
    id: 58,
    question: "What is a cryptojacking attack?",
    options: ["The unauthorized use of a device’s resources to mine cryptocurrency", "A method of encrypting data", "A type of phishing attack", "A network monitoring tool"],
    correctAnswer: "The unauthorized use of a device’s resources to mine cryptocurrency"
},
{
    id: 59,
    question: "What is a security patch?",
    options: ["A software update that fixes vulnerabilities", "A type of malware", "A network protocol", "A phishing tool"],
    correctAnswer: "A software update that fixes vulnerabilities"
},
{
    id: 60,
    question: "What does SOC stand for in cybersecurity?",
    options: ["Security Operations Center", "System of Controls", "Secure Online Communication", "Safety Over Cybernetics"],
    correctAnswer: "Security Operations Center"
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
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/cyber-security' className="font-bold text-sm">Cyber Security</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">Cyber Security</h1>
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

export default CyberSec;

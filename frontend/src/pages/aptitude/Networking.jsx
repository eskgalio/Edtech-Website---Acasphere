import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const Networking = () => {
  // Mock dataset for questions
  const questionsData = [
    {
        "id": 1,
        "question": "What does TCP stand for in computer networking?",
        "options": ["Transmission Control Protocol", "Transport Control Protocol", "Terminal Communication Protocol", "Transfer Communication Protocol"],
        "correctAnswer": "Transmission Control Protocol"
    },
    {
        "id": 2,
        "question": "Which device is used to connect two different networks?",
        "options": ["Switch", "Router", "Hub", "Bridge"],
        "correctAnswer": "Router"
    },
    {
        "id": 3,
        "question": "What is the default port number for HTTP?",
        "options": ["21", "80", "443", "25"],
        "correctAnswer": "80"
    },
    {
        "id": 4,
        "question": "Which layer of the OSI model is responsible for end-to-end communication?",
        "options": ["Transport Layer", "Network Layer", "Application Layer", "Session Layer"],
        "correctAnswer": "Transport Layer"
    },
    {
        "id": 5,
        "question": "What is the primary function of a DNS server?",
        "options": ["To store IP addresses", "To translate domain names into IP addresses", "To manage firewalls", "To encrypt data"],
        "correctAnswer": "To translate domain names into IP addresses"
    },
    {
        "id": 6,
        "question": "What type of address is used to uniquely identify a device on a network?",
        "options": ["IP Address", "MAC Address", "Subnet Mask", "Gateway Address"],
        "correctAnswer": "MAC Address"
    },
    {
        "id": 7,
        "question": "Which protocol is used to send email?",
        "options": ["HTTP", "SMTP", "FTP", "SNMP"],
        "correctAnswer": "SMTP"
    },
    {
        "id": 8,
        "question": "What does LAN stand for?",
        "options": ["Local Area Network", "Long Area Network", "Low Access Network", "Logical Address Network"],
        "correctAnswer": "Local Area Network"
    },
    {
        "id": 9,
        "question": "Which layer of the OSI model is responsible for data encryption?",
        "options": ["Session Layer", "Presentation Layer", "Transport Layer", "Application Layer"],
        "correctAnswer": "Presentation Layer"
    },
    {
        "id": 10,
        "question": "What is the maximum length of an IPv4 address?",
        "options": ["16 bits", "32 bits", "64 bits", "128 bits"],
        "correctAnswer": "32 bits"
    },
    {
        "id": 11,
        "question": "What does FTP stand for?",
        "options": ["File Transfer Protocol", "Fast Transfer Protocol", "File Transmission Program", "File Transport Protocol"],
        "correctAnswer": "File Transfer Protocol"
    },
    {
        "id": 12,
        "question": "Which protocol is used for secure communication over the Internet?",
        "options": ["HTTP", "HTTPS", "FTP", "DNS"],
        "correctAnswer": "HTTPS"
    },
    {
        "id": 13,
        "question": "Which device operates at the data link layer of the OSI model?",
        "options": ["Router", "Switch", "Firewall", "Modem"],
        "correctAnswer": "Switch"
    },
    {
        "id": 14,
        "question": "What is the primary purpose of a firewall in networking?",
        "options": ["To manage DNS queries", "To block unauthorized access", "To route data packets", "To manage IP addresses"],
        "correctAnswer": "To block unauthorized access"
    },
    {
        "id": 15,
        "question": "What is the default port number for HTTPS?",
        "options": ["25", "443", "110", "8080"],
        "correctAnswer": "443"
    },
    {
        "id": 16,
        "question": "Which layer of the OSI model handles logical addressing?",
        "options": ["Network Layer", "Data Link Layer", "Transport Layer", "Physical Layer"],
        "correctAnswer": "Network Layer"
    },
    {
        "id": 17,
        "question": "What does IP stand for in networking?",
        "options": ["Internet Protocol", "Interconnect Protocol", "International Protocol", "Internal Program"],
        "correctAnswer": "Internet Protocol"
    },
    {
        "id": 18,
        "question": "Which type of network topology connects all nodes to a central device?",
        "options": ["Star", "Ring", "Bus", "Mesh"],
        "correctAnswer": "Star"
    },
    {
        "id": 19,
        "question": "What is the purpose of a subnet mask?",
        "options": ["To route packets", "To divide IP addresses into network and host parts", "To encrypt data", "To provide security"],
        "correctAnswer": "To divide IP addresses into network and host parts"
    },
    {
        "id": 20,
        "question": "Which layer of the OSI model is responsible for packet forwarding?",
        "options": ["Application Layer", "Transport Layer", "Network Layer", "Session Layer"],
        "correctAnswer": "Network Layer"
    },
    {
        "id": 21,
        "question": "What is the range of a Class C IP address?",
        "options": ["192.0.0.0 to 223.255.255.255", "128.0.0.0 to 191.255.255.255", "1.0.0.0 to 126.255.255.255", "224.0.0.0 to 239.255.255.255"],
        "correctAnswer": "192.0.0.0 to 223.255.255.255"
    },
    {
        "id": 22,
        "question": "Which protocol is used for transferring files between computers?",
        "options": ["FTP", "SMTP", "HTTP", "IMAP"],
        "correctAnswer": "FTP"
    },
    {
        "id": 23,
        "question": "What is the full form of VPN?",
        "options": ["Virtual Private Network", "Virtual Public Network", "Virtual Protocol Network", "Virtual Proxy Network"],
        "correctAnswer": "Virtual Private Network"
    },
    {
        "id": 24,
        "question": "What type of network spans a large geographical area?",
        "options": ["LAN", "MAN", "WAN", "PAN"],
        "correctAnswer": "WAN"
    },
    {
        "id": 25,
        "question": "Which protocol is used for remote login to another computer?",
        "options": ["Telnet", "FTP", "SMTP", "DNS"],
        "correctAnswer": "Telnet"
    },
    {
            "id": 26,
            "question": "Which protocol is used for resolving IP addresses to MAC addresses?",
            "options": ["ARP", "RARP", "ICMP", "DHCP"],
            "correctAnswer": "ARP"
        },
        {
            "id": 27,
            "question": "What is the purpose of the ICMP protocol?",
            "options": ["To manage email communication", "To perform error reporting and diagnostics", "To assign IP addresses", "To encrypt data"],
            "correctAnswer": "To perform error reporting and diagnostics"
        },
        {
            "id": 28,
            "question": "Which device divides a network into multiple collision domains?",
            "options": ["Hub", "Switch", "Repeater", "Gateway"],
            "correctAnswer": "Switch"
        },
        {
            "id": 29,
            "question": "What does the acronym NAT stand for in networking?",
            "options": ["Network Address Translation", "Network Access Table", "Network Administration Tool", "Network Assignment Topology"],
            "correctAnswer": "Network Address Translation"
        },
        {
            "id": 30,
            "question": "Which layer of the OSI model is responsible for establishing, maintaining, and terminating connections?",
            "options": ["Application Layer", "Session Layer", "Network Layer", "Transport Layer"],
            "correctAnswer": "Session Layer"
        },
        {
            "id": 31,
            "question": "What is the primary purpose of DHCP in a network?",
            "options": ["Assigning dynamic IP addresses", "Resolving domain names", "Encrypting network traffic", "Monitoring network performance"],
            "correctAnswer": "Assigning dynamic IP addresses"
        },
        {
            "id": 32,
            "question": "What is the size of an IPv6 address?",
            "options": ["32 bits", "64 bits", "128 bits", "256 bits"],
            "correctAnswer": "128 bits"
        },
        {
            "id": 33,
            "question": "Which protocol is used for secure file transfer over the Internet?",
            "options": ["FTP", "SFTP", "SMTP", "HTTP"],
            "correctAnswer": "SFTP"
        },
        {
            "id": 34,
            "question": "What type of network device works at the physical layer of the OSI model?",
            "options": ["Switch", "Router", "Hub", "Firewall"],
            "correctAnswer": "Hub"
        },
        {
            "id": 35,
            "question": "Which layer of the OSI model ensures data is delivered error-free?",
            "options": ["Data Link Layer", "Transport Layer", "Network Layer", "Session Layer"],
            "correctAnswer": "Transport Layer"
        },
        {
            "id": 36,
            "question": "What is the purpose of a proxy server?",
            "options": ["To encrypt traffic", "To cache web pages and manage network requests", "To assign IP addresses", "To filter email traffic"],
            "correctAnswer": "To cache web pages and manage network requests"
        },
        {
            "id": 37,
            "question": "What is a unicast communication in networking?",
            "options": ["One-to-one communication", "One-to-many communication", "Many-to-one communication", "Broadcast communication"],
            "correctAnswer": "One-to-one communication"
        },
        {
            "id": 38,
            "question": "Which command is used to test the connectivity between two devices?",
            "options": ["ping", "traceroute", "nslookup", "ipconfig"],
            "correctAnswer": "ping"
        },
        {
            "id": 39,
            "question": "What is the primary function of a VLAN?",
            "options": ["To divide a physical network into logical segments", "To encrypt network traffic", "To provide Internet access", "To resolve DNS queries"],
            "correctAnswer": "To divide a physical network into logical segments"
        },
        {
            "id": 40,
            "question": "Which protocol is used to retrieve email from a mail server?",
            "options": ["SMTP", "POP3", "HTTP", "FTP"],
            "correctAnswer": "POP3"
        },
        {
            "id": 41,
            "question": "What is the default gateway in a network?",
            "options": ["A backup router", "The main router that connects the local network to external networks", "A DNS server", "A firewall"],
            "correctAnswer": "The main router that connects the local network to external networks"
        },
        {
            "id": 42,
            "question": "What is the term for the maximum data transfer rate of a network?",
            "options": ["Latency", "Throughput", "Bandwidth", "Jitter"],
            "correctAnswer": "Bandwidth"
        },
        {
            "id": 43,
            "question": "Which protocol is used for assigning IP addresses dynamically in a network?",
            "options": ["DNS", "DHCP", "ARP", "ICMP"],
            "correctAnswer": "DHCP"
        },
        {
            "id": 44,
            "question": "Which type of attack involves overwhelming a network with excessive traffic?",
            "options": ["Phishing", "Denial of Service (DoS)", "Man-in-the-Middle", "SQL Injection"],
            "correctAnswer": "Denial of Service (DoS)"
        },
        {
            "id": 45,
            "question": "Which layer of the OSI model is responsible for framing?",
            "options": ["Physical Layer", "Data Link Layer", "Network Layer", "Session Layer"],
            "correctAnswer": "Data Link Layer"
        },
        {
            "id": 46,
            "question": "What does the acronym BGP stand for?",
            "options": ["Basic Gateway Protocol", "Border Gateway Protocol", "Bandwidth Gateway Protocol", "Backup Gateway Protocol"],
            "correctAnswer": "Border Gateway Protocol"
        },
        {
            "id": 47,
            "question": "What is the purpose of the traceroute command?",
            "options": ["To check DNS resolution", "To trace the path of packets to a destination", "To assign IP addresses", "To ping a server"],
            "correctAnswer": "To trace the path of packets to a destination"
        },
        {
            "id": 48,
            "question": "What is the maximum transmission distance for a twisted-pair Ethernet cable (Cat5e)?",
            "options": ["50 meters", "100 meters", "500 meters", "1000 meters"],
            "correctAnswer": "100 meters"
        },
        {
            "id": 49,
            "question": "Which protocol is used for browsing web pages?",
            "options": ["HTTP", "SMTP", "FTP", "DNS"],
            "correctAnswer": "HTTP"
        },
        {
            "id": 50,
            "question": "What is the loopback IP address for testing?",
            "options": ["192.168.1.1", "127.0.0.1", "255.255.255.0", "10.0.0.1"],
            "correctAnswer": "127.0.0.1"
        },
        {
                "id": 51,
                "question": "Which protocol is used to access a remote computer securely?",
                "options": ["Telnet", "SSH", "FTP", "SMTP"],
                "correctAnswer": "SSH"
            },
            {
                "id": 52,
                "question": "What is the primary function of a NIC in a computer?",
                "options": ["Processing data", "Managing storage", "Connecting to a network", "Encrypting data"],
                "correctAnswer": "Connecting to a network"
            },
            {
                "id": 53,
                "question": "Which layer of the OSI model is responsible for translating data between the network and the application?",
                "options": ["Session Layer", "Presentation Layer", "Transport Layer", "Network Layer"],
                "correctAnswer": "Presentation Layer"
            },
            {
                "id": 54,
                "question": "Which command is used to display the IP configuration of a computer?",
                "options": ["traceroute", "ipconfig", "ping", "netstat"],
                "correctAnswer": "ipconfig"
            },
            {
                "id": 55,
                "question": "What does the acronym WAN stand for?",
                "options": ["Wide Area Network", "Wireless Access Network", "Wired Area Network", "Web Area Network"],
                "correctAnswer": "Wide Area Network"
            },
            {
                "id": 56,
                "question": "What is the default port number for SMTP?",
                "options": ["80", "25", "110", "443"],
                "correctAnswer": "25"
            },
            {
                "id": 57,
                "question": "Which protocol is used for sending control messages across the network?",
                "options": ["ICMP", "DHCP", "DNS", "HTTP"],
                "correctAnswer": "ICMP"
            },
            {
                "id": 58,
                "question": "What is the process of dividing a larger network into smaller subnetworks called?",
                "options": ["Routing", "Subnetting", "Switching", "Tunneling"],
                "correctAnswer": "Subnetting"
            },
            {
                "id": 59,
                "question": "Which device is used to boost the signal in a network?",
                "options": ["Switch", "Router", "Repeater", "Firewall"],
                "correctAnswer": "Repeater"
            },
            {
                "id": 60,
                "question": "What is the purpose of the NAT protocol?",
                "options": ["To resolve domain names", "To convert private IP addresses into public IP addresses", "To monitor traffic", "To encrypt data"],
                "correctAnswer": "To convert private IP addresses into public IP addresses"
            },
            {
                "id": 61,
                "question": "Which type of address is used in a private network?",
                "options": ["192.168.1.1", "8.8.8.8", "172.217.0.1", "1.1.1.1"],
                "correctAnswer": "192.168.1.1"
            },
            {
                "id": 62,
                "question": "What is the range of multicast IP addresses?",
                "options": ["192.0.0.0 to 223.255.255.255", "224.0.0.0 to 239.255.255.255", "240.0.0.0 to 255.255.255.255", "0.0.0.0 to 127.255.255.255"],
                "correctAnswer": "224.0.0.0 to 239.255.255.255"
            },
            {
                "id": 63,
                "question": "Which protocol is used to manage network devices?",
                "options": ["SNMP", "DNS", "HTTP", "SMTP"],
                "correctAnswer": "SNMP"
            },
            {
                "id": 64,
                "question": "What is a topology where all nodes are connected in a circular format?",
                "options": ["Star Topology", "Bus Topology", "Ring Topology", "Mesh Topology"],
                "correctAnswer": "Ring Topology"
            },
            {
                "id": 65,
                "question": "Which protocol provides IP address conflict detection?",
                "options": ["ARP", "RARP", "DHCP", "ICMP"],
                "correctAnswer": "DHCP"
            },
            {
                "id": 66,
                "question": "Which technology is used to connect multiple networks securely over the Internet?",
                "options": ["VPN", "Firewall", "Proxy Server", "Telnet"],
                "correctAnswer": "VPN"
            },
            {
                "id": 67,
                "question": "Which protocol is used to synchronize time between devices on a network?",
                "options": ["HTTP", "SMTP", "NTP", "ICMP"],
                "correctAnswer": "NTP"
            },
            {
                "id": 68,
                "question": "Which tool is used to measure the speed of a network connection?",
                "options": ["ping", "speedtest", "traceroute", "nslookup"],
                "correctAnswer": "speedtest"
            },
            {
                "id": 69,
                "question": "Which type of address is assigned manually to a device?",
                "options": ["Static IP", "Dynamic IP", "Private IP", "Public IP"],
                "correctAnswer": "Static IP"
            },
            {
                "id": 70,
                "question": "What is the purpose of a subnet mask?",
                "options": ["To encrypt data", "To define network boundaries", "To route packets", "To increase bandwidth"],
                "correctAnswer": "To define network boundaries"
            },
            {
                "id": 71,
                "question": "Which protocol is used for transferring hypertext documents over the Internet?",
                "options": ["HTTP", "FTP", "SMTP", "POP3"],
                "correctAnswer": "HTTP"
            },
            {
                "id": 72,
                "question": "What does the acronym MAC stand for in networking?",
                "options": ["Media Access Control", "Multiple Address Channel", "Media Authentication Control", "Memory Access Control"],
                "correctAnswer": "Media Access Control"
            },
            {
                "id": 73,
                "question": "Which type of IP address is used to communicate within a local network?",
                "options": ["Public IP", "Private IP", "Dynamic IP", "Static IP"],
                "correctAnswer": "Private IP"
            },
            {
                "id": 74,
                "question": "What is the primary purpose of a gateway in networking?",
                "options": ["To manage IP addresses", "To connect different networks", "To block unauthorized access", "To monitor bandwidth"],
                "correctAnswer": "To connect different networks"
            },
            {
                "id": 75,
                "question": "Which command is used to display active connections on a device?",
                "options": ["ping", "netstat", "traceroute", "ipconfig"],
                "correctAnswer": "netstat"
            },  
            {
                    "id": 76,
                    "question": "Which type of network is designed to cover a city or large campus?",
                    "options": ["LAN", "WAN", "MAN", "PAN"],
                    "correctAnswer": "MAN"
                },
                {
                    "id": 77,
                    "question": "What does the acronym DNS stand for?",
                    "options": ["Domain Name System", "Data Network System", "Direct Name Service", "Domain Network Service"],
                    "correctAnswer": "Domain Name System"
                },
                {
                    "id": 78,
                    "question": "Which OSI layer provides end-to-end communication control?",
                    "options": ["Session Layer", "Transport Layer", "Network Layer", "Data Link Layer"],
                    "correctAnswer": "Transport Layer"
                },
                {
                    "id": 79,
                    "question": "What is the primary function of a router?",
                    "options": ["Boosting network signals", "Filtering email traffic", "Connecting different networks and directing packets", "Encrypting data"],
                    "correctAnswer": "Connecting different networks and directing packets"
                },
                {
                    "id": 80,
                    "question": "Which protocol is used for secure communication over the web?",
                    "options": ["HTTP", "HTTPS", "FTP", "Telnet"],
                    "correctAnswer": "HTTPS"
                },
                {
                    "id": 81,
                    "question": "What is the main difference between TCP and UDP?",
                    "options": ["TCP is connectionless, UDP is connection-oriented", "TCP is connection-oriented, UDP is connectionless", "TCP is faster than UDP", "UDP is more reliable than TCP"],
                    "correctAnswer": "TCP is connection-oriented, UDP is connectionless"
                },
                {
                    "id": 82,
                    "question": "Which device operates at the Network Layer of the OSI model?",
                    "options": ["Switch", "Router", "Hub", "Firewall"],
                    "correctAnswer": "Router"
                },
                {
                    "id": 83,
                    "question": "Which type of cabling is immune to electromagnetic interference?",
                    "options": ["Coaxial Cable", "Fiber Optic Cable", "Twisted Pair Cable", "Ethernet Cable"],
                    "correctAnswer": "Fiber Optic Cable"
                },
                {
                    "id": 84,
                    "question": "What does the acronym FTP stand for?",
                    "options": ["File Transfer Protocol", "Fast Transfer Protocol", "File Transmission Path", "Fast Transmission Protocol"],
                    "correctAnswer": "File Transfer Protocol"
                },
                {
                    "id": 85,
                    "question": "Which network topology connects all nodes to a central hub?",
                    "options": ["Bus Topology", "Star Topology", "Ring Topology", "Mesh Topology"],
                    "correctAnswer": "Star Topology"
                },
                {
                    "id": 86,
                    "question": "Which command is used to clear the DNS cache on a computer?",
                    "options": ["ipconfig /renew", "ipconfig /flushdns", "ipconfig /release", "ipconfig /registerdns"],
                    "correctAnswer": "ipconfig /flushdns"
                },
                {
                    "id": 87,
                    "question": "What is the primary purpose of a firewall?",
                    "options": ["Encrypting network data", "Protecting the network from unauthorized access", "Assigning IP addresses", "Monitoring network performance"],
                    "correctAnswer": "Protecting the network from unauthorized access"
                },
                {
                    "id": 88,
                    "question": "Which layer of the OSI model manages error detection and correction?",
                    "options": ["Physical Layer", "Data Link Layer", "Network Layer", "Session Layer"],
                    "correctAnswer": "Data Link Layer"
                },
                {
                    "id": 89,
                    "question": "Which type of network communication sends data to all devices on a network?",
                    "options": ["Unicast", "Multicast", "Broadcast", "Anycast"],
                    "correctAnswer": "Broadcast"
                },
                {
                    "id": 90,
                    "question": "Which technology uses light pulses for data transmission?",
                    "options": ["Twisted Pair", "Fiber Optic", "Coaxial Cable", "Satellite"],
                    "correctAnswer": "Fiber Optic"
                },
                {
                    "id": 91,
                    "question": "What is the purpose of the MTU in networking?",
                    "options": ["To encrypt data", "To limit the size of packets sent over a network", "To monitor traffic", "To assign IP addresses"],
                    "correctAnswer": "To limit the size of packets sent over a network"
                },
                {
                    "id": 92,
                    "question": "What does the acronym VPN stand for?",
                    "options": ["Virtual Public Network", "Virtual Private Network", "Verified Private Network", "Virtual Protection Network"],
                    "correctAnswer": "Virtual Private Network"
                },
                {
                    "id": 93,
                    "question": "Which protocol allows users to download files from a remote server?",
                    "options": ["FTP", "HTTP", "SMTP", "DNS"],
                    "correctAnswer": "FTP"
                },
                {
                    "id": 94,
                    "question": "What is the role of a network bridge?",
                    "options": ["To connect two different networks", "To connect two network segments within the same network", "To block unauthorized traffic", "To route data packets"],
                    "correctAnswer": "To connect two network segments within the same network"
                },
                {
                    "id": 95,
                    "question": "Which protocol translates domain names into IP addresses?",
                    "options": ["DHCP", "DNS", "ARP", "ICMP"],
                    "correctAnswer": "DNS"
                },
                {
                    "id": 96,
                    "question": "Which layer of the OSI model is responsible for data formatting and encryption?",
                    "options": ["Application Layer", "Presentation Layer", "Session Layer", "Transport Layer"],
                    "correctAnswer": "Presentation Layer"
                },
                {
                    "id": 97,
                    "question": "What is the primary purpose of QoS in networking?",
                    "options": ["To encrypt traffic", "To prioritize network traffic", "To allocate IP addresses", "To resolve domain names"],
                    "correctAnswer": "To prioritize network traffic"
                },
                {
                    "id": 98,
                    "question": "What is the standard port number for HTTPS?",
                    "options": ["80", "25", "110", "443"],
                    "correctAnswer": "443"
                },
                {
                    "id": 99,
                    "question": "What is the term for a device's unique identifier on a network?",
                    "options": ["MAC Address", "IP Address", "Gateway", "Subnet Mask"],
                    "correctAnswer": "MAC Address"
                },
                {
                    "id": 100,
                    "question": "Which network model is also known as a peer-to-peer model?",
                    "options": ["Client-Server Model", "Distributed Network", "Workgroup Model", "Hybrid Model"],
                    "correctAnswer": "Workgroup Model"
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
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/networking' className="font-bold text-sm">Computer Networking</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">Computer Networking</h1>
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

export default Networking;

import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const Cloud = () => {
  // Mock dataset for questions
  const questionsData = [
  {
    id: 1,
    question: "What is cloud computing?",
    options: ["A type of storage device", "A technology to store and access data over the internet", "A computer hardware component", "A local storage solution"],
    correctAnswer: "A technology to store and access data over the internet"
},
{
    id: 2,
    question: "Which of the following is a cloud deployment model?",
    options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 3,
    question: "What does IaaS stand for?",
    options: ["Internet as a Service", "Infrastructure as a Service", "Integration as a Service", "Instance as a Service"],
    correctAnswer: "Infrastructure as a Service"
},
{
    id: 4,
    question: "Which cloud service model provides a platform allowing customers to develop, run, and manage applications?",
    options: ["IaaS", "PaaS", "SaaS", "CaaS"],
    correctAnswer: "PaaS"
},
{
    id: 5,
    question: "Which of the following is a benefit of cloud computing?",
    options: ["Scalability", "Cost-effectiveness", "Flexibility", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 6,
    question: "What does SaaS stand for?",
    options: ["Software as a Service", "Storage as a Service", "Server as a Service", "System as a Service"],
    correctAnswer: "Software as a Service"
},
{
    id: 7,
    question: "Which of the following is an example of a public cloud provider?",
    options: ["Amazon Web Services", "Google Cloud", "Microsoft Azure", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 8,
    question: "What is the primary feature of a hybrid cloud?",
    options: ["It combines public and private clouds", "It is entirely private", "It is entirely public", "It is only available for enterprises"],
    correctAnswer: "It combines public and private clouds"
},
{
    id: 9,
    question: "Which type of cloud computing offers shared resources to multiple organizations?",
    options: ["Public Cloud", "Private Cloud", "Community Cloud", "Hybrid Cloud"],
    correctAnswer: "Community Cloud"
},
{
    id: 10,
    question: "What is a Virtual Machine in the context of cloud computing?",
    options: ["Physical hardware in the cloud", "An emulation of a computer system", "A storage device", "A network router"],
    correctAnswer: "An emulation of a computer system"
},
{
    id: 11,
    question: "Which of these is a key characteristic of cloud computing?",
    options: ["On-demand self-service", "Broad network access", "Resource pooling", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 12,
    question: "Which of the following is NOT a cloud deployment model?",
    options: ["Public Cloud", "Private Cloud", "Local Cloud", "Hybrid Cloud"],
    correctAnswer: "Local Cloud"
},
{
    id: 13,
    question: "What does PaaS stand for?",
    options: ["Platform as a Service", "Product as a Service", "Process as a Service", "Performance as a Service"],
    correctAnswer: "Platform as a Service"
},
{
    id: 14,
    question: "What is the advantage of using a private cloud?",
    options: ["Enhanced security", "Greater control over resources", "Customization", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 15,
    question: "What is cloud bursting?",
    options: ["A method to break into a cloud server", "An ability to move applications to a public cloud during high demand", "A storage technique", "None of the above"],
    correctAnswer: "An ability to move applications to a public cloud during high demand"
},
{
    id: 16,
    question: "Which cloud model provides the highest level of control over resources?",
    options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
    correctAnswer: "Private Cloud"
},
{
    id: 17,
    question: "Which of the following is a popular cloud storage service?",
    options: ["Google Drive", "Dropbox", "OneDrive", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 18,
    question: "What is serverless computing?",
    options: ["Computing without servers", "A cloud service model where the cloud provider manages the infrastructure", "A local computing model", "A hardware device"],
    correctAnswer: "A cloud service model where the cloud provider manages the infrastructure"
},
{
    id: 19,
    question: "Which cloud service model is typically used for web hosting?",
    options: ["IaaS", "PaaS", "SaaS", "DaaS"],
    correctAnswer: "IaaS"
},
{
    id: 20,
    question: "What is elasticity in cloud computing?",
    options: ["The ability to stretch networks", "The ability to scale resources up and down based on demand", "A storage technique", "A networking method"],
    correctAnswer: "The ability to scale resources up and down based on demand"
},
{
    id: 21,
    question: "What does multitenancy in cloud computing mean?",
    options: ["One user per cloud environment", "Multiple users sharing the same physical infrastructure", "Only one application per cloud", "None of the above"],
    correctAnswer: "Multiple users sharing the same physical infrastructure"
},
{
    id: 22,
    question: "Which of the following is a common protocol used for cloud storage?",
    options: ["FTP", "HTTP", "REST", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 23,
    question: "Which cloud model is ideal for businesses that need exclusive access to their infrastructure?",
    options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
    correctAnswer: "Private Cloud"
},
{
    id: 24,
    question: "What is an API in cloud computing?",
    options: ["Application Performance Interface", "Application Programming Interface", "Application Provider Interface", "Application Process Interface"],
    correctAnswer: "Application Programming Interface"
},
{
    id: 25,
    question: "What is a major risk associated with cloud computing?",
    options: ["Data security concerns", "High costs", "Lack of scalability", "Inability to access data remotely"],
    correctAnswer: "Data security concerns"
},
{
    id: 26,
    question: "Which cloud service is ideal for data analytics and machine learning applications?",
    options: ["IaaS", "PaaS", "SaaS", "DaaS"],
    correctAnswer: "PaaS"
},
{
    id: 27,
    question: "Which of the following is a major benefit of using cloud computing for businesses?",
    options: ["Reduced IT infrastructure costs", "Increased operational agility", "Improved collaboration", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 28,
    question: "What is a CDN in cloud computing?",
    options: ["Cloud Distribution Network", "Content Delivery Network", "Content Data Network", "Cloud Data Network"],
    correctAnswer: "Content Delivery Network"
},
{
    id: 29,
    question: "What is a cloud-native application?",
    options: ["An application designed specifically to run in the cloud", "An application hosted locally", "An application for legacy systems", "None of the above"],
    correctAnswer: "An application designed specifically to run in the cloud"
},
{
    id: 30,
    question: "What is the primary purpose of cloud load balancing?",
    options: ["To improve data storage", "To distribute workloads across multiple resources", "To secure cloud networks", "To encrypt cloud data"],
    correctAnswer: "To distribute workloads across multiple resources"
},
{
    id: 31,
    question: "Which service is typically offered in a SaaS model?",
    options: ["CRM software", "Web hosting", "Virtual machines", "Network management"],
    correctAnswer: "CRM software"
},
{
    id: 32,
    question: "Which of the following is an open-source cloud platform?",
    options: ["OpenStack", "Microsoft Azure", "Amazon Web Services", "Google Cloud"],
    correctAnswer: "OpenStack"
},
{
    id: 33,
    question: "What is vendor lock-in in cloud computing?",
    options: ["Dependency on a specific cloud provider", "A method of securing data", "A pricing strategy", "A networking model"],
    correctAnswer: "Dependency on a specific cloud provider"
},
{
    id: 34,
    question: "What is the role of an orchestrator in cloud computing?",
    options: ["To manage cloud billing", "To automate the management of cloud resources", "To secure cloud environments", "To provide customer support"],
    correctAnswer: "To automate the management of cloud resources"
},
{
    id: 35,
    question: "Which of the following is an example of a serverless platform?",
    options: ["AWS Lambda", "Google Cloud Functions", "Azure Functions", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 36,
    question: "What is the main goal of disaster recovery in cloud computing?",
    options: ["Prevent network outages", "Recover data and services after a disruption", "Encrypt all cloud data", "Enhance performance"],
    correctAnswer: "Recover data and services after a disruption"
},
{
    id: 37,
    question: "Which tool is commonly used for cloud infrastructure as code?",
    options: ["Terraform", "Ansible", "CloudFormation", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 38,
    question: "What is the purpose of cloud autoscaling?",
    options: ["To minimize costs", "To automatically adjust resources based on demand", "To secure cloud services", "To monitor cloud performance"],
    correctAnswer: "To automatically adjust resources based on demand"
},
{
    id: 39,
    question: "What is the purpose of a Service Level Agreement (SLA) in cloud computing?",
    options: ["To define the terms of service between a provider and customer", "To regulate cloud pricing", "To manage data backups", "To monitor network traffic"],
    correctAnswer: "To define the terms of service between a provider and customer"
},
{
    id: 40,
    question: "Which of the following describes edge computing?",
    options: ["Processing data closer to the source of data generation", "A centralized cloud data center", "A storage technique", "None of the above"],
    correctAnswer: "Processing data closer to the source of data generation"
},
{
    id: 41,
    question: "What is the purpose of cloud monitoring?",
    options: ["To monitor the performance of cloud services", "To secure cloud resources", "To create backups", "To manage user accounts"],
    correctAnswer: "To monitor the performance of cloud services"
},
{
    id: 42,
    question: "What is cloud migration?",
    options: ["Moving data from one physical location to another", "The process of moving applications, data, or other business elements to a cloud computing environment", "Creating backups in the cloud", "None of the above"],
    correctAnswer: "The process of moving applications, data, or other business elements to a cloud computing environment"
},
{
    id: 43,
    question: "What does scalability in cloud computing mean?",
    options: ["Ability to scale up or down resources based on demand", "Fixed resource allocation", "Enhanced security measures", "Ability to store more data"],
    correctAnswer: "Ability to scale up or down resources based on demand"
},
{
    id: 44,
    question: "What is a cloud service level agreement (SLA)?",
    options: ["A document specifying cloud storage requirements", "A contract outlining expected service levels between a provider and a customer", "A security protocol", "A data access method"],
    correctAnswer: "A contract outlining expected service levels between a provider and a customer"
},
{
    id: 45,
    question: "Which of these is a cloud management tool?",
    options: ["Microsoft System Center", "AWS Management Console", "Google Cloud Console", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 46,
    question: "What is the difference between cloud storage and local storage?",
    options: ["Cloud storage is remote and local storage is on-site", "Cloud storage is faster", "Local storage is unlimited", "There is no difference"],
    correctAnswer: "Cloud storage is remote and local storage is on-site"
},
{
    id: 47,
    question: "Which of the following is an example of cloud computing in everyday use?",
    options: ["Email services like Gmail", "Streaming platforms like Netflix", "Cloud storage like Google Drive", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 48,
    question: "Which of the following is a security concern in cloud computing?",
    options: ["Data breaches", "Compliance issues", "Insider threats", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 49,
    question: "What is the primary role of a hypervisor in cloud computing?",
    options: ["Managing virtual machines", "Securing data", "Scaling resources", "Monitoring network traffic"],
    correctAnswer: "Managing virtual machines"
},
{
    id: 50,
    question: "Which type of cloud is shared by multiple organizations with similar requirements?",
    options: ["Private Cloud", "Public Cloud", "Community Cloud", "Hybrid Cloud"],
    correctAnswer: "Community Cloud"
},
{
    id: 51,
    question: "What is a container in cloud computing?",
    options: ["A virtualized operating system environment", "A physical storage device", "A type of cloud deployment model", "A data backup solution"],
    correctAnswer: "A virtualized operating system environment"
},
{
    id: 52,
    question: "Which of the following cloud providers is known for its Kubernetes service?",
    options: ["Amazon Web Services", "Google Cloud Platform", "Microsoft Azure", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 53,
    question: "What is a virtual private cloud (VPC)?",
    options: ["A private cloud hosted on-premises", "A secure and isolated section of a public cloud", "A type of hybrid cloud", "A community cloud"],
    correctAnswer: "A secure and isolated section of a public cloud"
},
{
    id: 54,
    question: "What is meant by pay-as-you-go in cloud computing?",
    options: ["Paying upfront for cloud resources", "Paying based on resource usage", "A subscription-based payment model", "None of the above"],
    correctAnswer: "Paying based on resource usage"
},
{
    id: 55,
    question: "What does high availability in cloud computing refer to?",
    options: ["Ensuring systems are continuously operational with minimal downtime", "Scalability of resources", "Low cost", "Enhanced security"],
    correctAnswer: "Ensuring systems are continuously operational with minimal downtime"
},
{
    id: 56,
    question: "Which cloud deployment model offers the least customization?",
    options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
    correctAnswer: "Public Cloud"
},
{
    id: 57,
    question: "Which of these is a primary use case for edge computing?",
    options: ["Real-time data processing", "Centralized data analysis", "Archiving old data", "Long-term storage"],
    correctAnswer: "Real-time data processing"
},
{
    id: 58,
    question: "What is a common use of cloud computing in IoT?",
    options: ["Data aggregation and analysis", "Real-time alerts", "Device management", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 59,
    question: "What is a key benefit of using managed cloud services?",
    options: ["Less administrative burden", "Enhanced security features", "Expert technical support", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 60,
    question: "What does cloud elasticity help organizations achieve?",
    options: ["Save costs during low demand", "Handle spikes in demand effectively", "Improve resource utilization", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 61,
    question: "What is the main function of a cloud firewall?",
    options: ["To monitor application performance", "To filter and block unauthorized access to cloud resources", "To optimize resource usage", "To analyze user behavior"],
    correctAnswer: "To filter and block unauthorized access to cloud resources"
},
{
    id: 62,
    question: "What is the primary advantage of using cloud-based disaster recovery solutions?",
    options: ["Faster recovery times", "Lower costs compared to on-premises solutions", "Improved scalability", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 63,
    question: "What does cloud orchestration refer to?",
    options: ["Automating the configuration and management of cloud resources", "Monitoring cloud performance", "Securing cloud services", "Data encryption"],
    correctAnswer: "Automating the configuration and management of cloud resources"
},
{
    id: 64,
    question: "Which cloud model combines on-premises infrastructure with cloud resources?",
    options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
    correctAnswer: "Hybrid Cloud"
},
{
    id: 65,
    question: "What is the role of a load balancer in cloud computing?",
    options: ["To distribute network or application traffic across multiple servers", "To enhance security", "To monitor storage usage", "To encrypt data"],
    correctAnswer: "To distribute network or application traffic across multiple servers"
},
{
    id: 66,
    question: "What is the purpose of cloud backup services?",
    options: ["To store large data files temporarily", "To provide data recovery in case of loss or failure", "To encrypt sensitive information", "To create new cloud instances"],
    correctAnswer: "To provide data recovery in case of loss or failure"
},
{
    id: 67,
    question: "What is the significance of cloud governance?",
    options: ["Ensuring compliance with policies and regulations", "Improving cost management", "Enhancing operational efficiency", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 68,
    question: "What is the primary function of a cloud gateway?",
    options: ["To connect on-premises environments with the cloud", "To monitor network traffic", "To enhance security", "To encrypt data"],
    correctAnswer: "To connect on-premises environments with the cloud"
},
{
    id: 69,
    question: "What is a major challenge in cloud computing?",
    options: ["Data security and privacy", "Latency issues", "Cost management", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 70,
    question: "Which cloud model is typically used by startups for its cost-efficiency?",
    options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
    correctAnswer: "Public Cloud"
},
{
    id: 71,
    question: "What is the role of a cloud service broker?",
    options: ["To manage relationships between cloud providers and customers", "To monitor cloud performance", "To provide encryption services", "To create virtual machines"],
    correctAnswer: "To manage relationships between cloud providers and customers"
},
{
    id: 72,
    question: "Which of these is an advantage of edge computing over centralized cloud computing?",
    options: ["Reduced latency", "Enhanced privacy", "Real-time processing", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 73,
    question: "What is a key feature of a multi-cloud strategy?",
    options: ["Using multiple cloud providers for redundancy and flexibility", "Restricting data to a single provider", "Avoiding cloud usage altogether", "Consolidating resources in one location"],
    correctAnswer: "Using multiple cloud providers for redundancy and flexibility"
},
{
    id: 74,
    question: "Which of the following describes cloud federation?",
    options: ["Interconnecting multiple cloud services or environments", "Securing cloud resources", "Standardizing cloud protocols", "None of the above"],
    correctAnswer: "Interconnecting multiple cloud services or environments"
},
{
    id: 75,
    question: "Which is a key benefit of adopting a cloud-native architecture?",
    options: ["Enhanced scalability", "Faster deployment cycles", "Improved resource efficiency", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 76,
    question: "What is the role of a cloud API?",
    options: ["To enable applications to interact with cloud services", "To provide data encryption", "To monitor cloud storage", "To balance network traffic"],
    correctAnswer: "To enable applications to interact with cloud services"
},
{
    id: 77,
    question: "Which service is most likely used for big data processing in the cloud?",
    options: ["Amazon EMR", "Google BigQuery", "Azure Synapse Analytics", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 78,
    question: "What is the difference between vertical and horizontal scaling in cloud computing?",
    options: ["Vertical scaling adds resources to a single server; horizontal scaling adds more servers", "Vertical scaling reduces costs; horizontal scaling increases them", "Vertical scaling only works with private clouds", "There is no difference"],
    correctAnswer: "Vertical scaling adds resources to a single server; horizontal scaling adds more servers"
},
{
    id: 79,
    question: "What is a cloud sandbox?",
    options: ["An isolated environment for testing and development", "A secure data backup system", "A type of cloud storage", "A virtual network"],
    correctAnswer: "An isolated environment for testing and development"
},
{
    id: 80,
    question: "Which of these is a responsibility of cloud users in a shared responsibility model?",
    options: ["Securing their data and applications", "Managing the cloud infrastructure", "Maintaining hardware", "Updating server firmware"],
    correctAnswer: "Securing their data and applications"
},
{
    id: 81,
    question: "Which service allows real-time communication and collaboration in the cloud?",
    options: ["Microsoft Teams", "Slack", "Google Workspace", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 82,
    question: "What is the purpose of cloud cost optimization tools?",
    options: ["To reduce unnecessary spending on cloud resources", "To enhance security", "To improve application performance", "To create backups"],
    correctAnswer: "To reduce unnecessary spending on cloud resources"
},
{
    id: 83,
    question: "What is the role of Kubernetes in cloud computing?",
    options: ["To manage containerized applications", "To provide cloud storage", "To encrypt data", "To monitor network traffic"],
    correctAnswer: "To manage containerized applications"
},
{
    id: 84,
    question: "Which of the following ensures secure data transmission in the cloud?",
    options: ["SSL/TLS", "Firewall", "Data encryption", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 85,
    question: "What does the term 'cloud sprawl' refer to?",
    options: ["Uncontrolled growth of cloud resources", "Efficient use of cloud services", "Consolidation of cloud environments", "None of the above"],
    correctAnswer: "Uncontrolled growth of cloud resources"
},
{
    id: 86,
    question: "What is an advantage of a multi-cloud architecture?",
    options: ["Vendor flexibility", "Redundancy", "Improved disaster recovery", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 87,
    question: "What does BYOL mean in cloud computing?",
    options: ["Bring Your Own License", "Build Your Own Logic", "Back Your Online Logs", "None of the above"],
    correctAnswer: "Bring Your Own License"
},
{
    id: 88,
    question: "What is the purpose of cloud monitoring dashboards?",
    options: ["To visualize cloud usage and performance", "To encrypt cloud data", "To automate updates", "To manage cloud billing"],
    correctAnswer: "To visualize cloud usage and performance"
},
{
    id: 89,
    question: "Which of the following is a key feature of SaaS?",
    options: ["Accessible via web browser", "Subscription-based pricing", "Managed by the provider", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 90,
    question: "What is the function of IAM in cloud computing?",
    options: ["Managing user access and permissions", "Encrypting cloud data", "Optimizing cloud costs", "Backing up cloud data"],
    correctAnswer: "Managing user access and permissions"
},
{
    id: 91,
    question: "What is the primary focus of DevOps in cloud environments?",
    options: ["Automating deployment and operations", "Enhancing security", "Providing disaster recovery", "Optimizing costs"],
    correctAnswer: "Automating deployment and operations"
},
{
    id: 92,
    question: "What does cloud bursting help with?",
    options: ["Handling temporary spikes in workload demand", "Enhancing security", "Reducing costs", "Encrypting data"],
    correctAnswer: "Handling temporary spikes in workload demand"
},
{
    id: 93,
    question: "Which of these is a compliance framework relevant to cloud computing?",
    options: ["ISO 27001", "SOC 2", "GDPR", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 94,
    question: "What is the purpose of a virtual network in the cloud?",
    options: ["To connect cloud resources securely", "To provide internet access", "To monitor application performance", "To encrypt data"],
    correctAnswer: "To connect cloud resources securely"
},
{
    id: 95,
    question: "What does latency refer to in cloud computing?",
    options: ["The delay before data begins to transfer", "The time it takes to back up data", "The speed of resource provisioning", "The cost of cloud services"],
    correctAnswer: "The delay before data begins to transfer"
},
{
    id: 96,
    question: "Which service is often used for CI/CD in cloud environments?",
    options: ["AWS CodePipeline", "Azure DevOps", "Google Cloud Build", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 97,
    question: "What does DRaaS stand for?",
    options: ["Disaster Recovery as a Service", "Data Recovery as a Service", "Dynamic Resource Allocation Service", "None of the above"],
    correctAnswer: "Disaster Recovery as a Service"
},
{
    id: 98,
    question: "Which of the following is a cloud storage service?",
    options: ["Amazon S3", "Google Cloud Storage", "Microsoft Azure Blob Storage", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 99,
    question: "What is a benefit of using cloud-based AI services?",
    options: ["Access to pre-built models", "Scalable compute power", "Reduced development time", "All of the above"],
    correctAnswer: "All of the above"
},
{
    id: 100,
    question: "Which of these is an example of edge devices in cloud computing?",
    options: ["IoT sensors", "Smartphones", "Industrial machines", "All of the above"],
    correctAnswer: "All of the above"
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
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/cloud' className="font-bold text-sm">Cloud Computing</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">Cloud Computing</h1>
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

export default Cloud;

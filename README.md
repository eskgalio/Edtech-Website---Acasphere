
# 📌 **Project Title**  
**Integrated Study and Workflow Optimization Web Portal (AcaSphere)**  

---

## 🌟 **Project Overview**  
AcaSphere is a centralized productivity platform designed to help students efficiently manage their academic responsibilities. It integrates task management, note-taking, resource sharing, performance tracking, and collaboration into a single Progressive Web Application (PWA). The goal is to reduce cognitive load, streamline workflows, and enhance academic performance through a modern, feature-rich interface.  

This project was developed using the **MERN (MongoDB, Express.js, React.js, Node.js)** stack, ensuring scalability, high performance, and a seamless user experience across multiple devices.  

---

## 🧑‍💻 **Contributors**  
- Jyotirmoy Dutta (30101222057)  
- Jayosree Mandal (30101222013)  
- Mirza Jahir Abbas (30101222026)  
- Anuska Ghosh (30101222083)  
- Nripendra Nath Mahato (30101222088)  

**Under the supervision of:**  
- Ankita Das Debnath  
- Sumit Kumar Sinha  

---

## 🎯 **Objectives**  
✅ Centralize multiple academic tools into a single platform  
✅ Provide an intuitive task management system with reminders  
✅ Develop a comprehensive note-taking module with multimedia support  
✅ Enable real-time collaboration and resource sharing  
✅ Offer a performance tracker for academic insights  
✅ Deliver seamless offline access via PWA  

---

## 🚀 **Core Features**  
### 1. **Task Management**  
- Create, edit, and prioritize tasks  
- Synchronization with Google Calendar  
- Deadline reminders via Twilio SMS  

### 2. **Note-Taking**  
- Rich-text editor with multimedia support (images, links, videos)  
- Categorization and search capabilities  

### 3. **Real-Time Collaboration**  
- Instant messaging using WebSockets  
- Group discussions and file sharing  

### 4. **Resource Library**  
- Centralized repository for academic content  
- File upload and download functionality  

### 5. **Aptitude Practice**  
- Daily quizzes to enhance cognitive skills  
- Performance tracking based on results  

---

## 🏗️ **Technology Stack**  
| Layer | Technology |
|-------|------------|
| **Frontend** | React.js, HTML5, CSS3, Tailwind |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Hosting** | AWS (EC2 for hosting, S3 for file storage) |
| **APIs** | Google Calendar (for syncing), Twilio (for SMS notifications) |
| **Real-Time** | WebSockets for chat and live updates |

---

## 🏆 **Advantages**  
✅ Unified platform eliminates the need for multiple apps  
✅ User-friendly, modern interface with responsive design  
✅ Offline access ensures productivity even without internet connectivity  
✅ Secure platform with encrypted data and role-based access control  
✅ Scalable infrastructure ensures smooth performance under high traffic  

---

## 🔧 **Setup Instructions**  
### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/acasphere.git
cd acasphere
```

### **2. Install Dependencies**  
```bash
npm install
```

### **3. Setup Environment Variables**  
Create a `.env` file in the root directory and add the following values:
```plaintext
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
GOOGLE_CALENDAR_API_KEY=<your-google-calendar-api-key>
TWILIO_ACCOUNT_SID=<your-twilio-account-sid>
TWILIO_AUTH_TOKEN=<your-twilio-auth-token>
AWS_ACCESS_KEY=<your-aws-access-key>
AWS_SECRET_KEY=<your-aws-secret-key>
```

### **4. Start the Development Server**  
```bash
npm run dev
```

### **5. Build for Production**  
```bash
npm run build
npm start
```

---

## 📁 **Project Structure**  
```
├── client                  # React.js Frontend  
├── server                  # Node.js Backend  
├── config                  # Configuration files  
├── models                  # MongoDB Models  
├── routes                  # API Routes  
├── controllers             # Business Logic  
├── public                  # Static Files  
└── README.md               # Project Documentation  
```

---

## 🧪 **Testing**  
- Unit Testing with **Jest**  
- Integration Testing with **Supertest**  
- E2E Testing with **Cypress**  

---

## 🛡️ **Security Measures**  
- OAuth2 for secure authentication  
- Role-based access control (RBAC)  
- Data encryption (at rest and in transit)  
- AWS-based failover support and automatic scaling  

---

## 📊 **Performance Goals**  
✅ **Load Time:** Under 3 seconds  
✅ **Uptime:** 99.9% reliability during peak traffic  
✅ **Latency:** Near-instant real-time updates with WebSockets  

---

## 🚦 **Future Scope**  
🔹 Add Machine Learning-based study habit insights  
🔹 Expand resource library with AI-driven content suggestions  
🔹 Implement gamification for improved user engagement  
🔹 Introduce offline mode for all core features  

---

## 🏅 **License**  
This project is licensed under the [MIT License](LICENSE).  

---

## 🤝 **Acknowledgments**  
We extend our gratitude to our project supervisors, Ankita Das Debnath and Sumit Kumar Sinha, for their invaluable guidance and support. We also thank our peers and the faculty of B.P. Poddar Institute of Management and Technology for providing a conducive learning environment.  

---

## 📢 **Contributing**  
We welcome contributions! Feel free to submit pull requests or raise issues to suggest improvements or report bugs.  

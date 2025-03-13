import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext'; 

import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from './pages/Services';
import Contact from './pages/Contact';
import StudyCatalog from './pages/StudyCatalog';
import BlogPosts from './pages/BlogPosts';
import BlogListing from './pages/BlogListing';
import CodeEditor from './pages/CodeEditor';
import EventRegistration from './pages/EventRegistration';
import EventSchedule from './pages/EventSchedule';
import FocusTools from './pages/FocusTools';
import MathSolver from './pages/MathSolver';
import NotesRepository from './pages/NotesRepository';
import NoteTaking from './pages/NoteTaking';
import Gamification from './pages/Gamification';
import GroupAdmin from './pages/GroupAdmin';
import GroupCreate from './pages/GroupCreate';
import GroupDashboard from './pages/GroupDashboard';
import GroupJoin from './pages/GroupJoin';
import GroupActivity from './pages/GroupActivity';
import GroupPerformance from './pages/GroupPerformance';
import GroupUser from './pages/GroupUser';
import GroupWorkspace from './pages/GroupWorkspace';
import NewsItem from './pages/NewsItem';
import Newlisting from './pages/NewsListing';
import NotesUpload from './pages/NotesUpload';
import Todo from './pages/Todo';
import UserProfile from './pages/UserProfile';
import AdminProfile from './pages/AdminProfile';
import FAQPage from './pages/FAQPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import WebSettings from './pages/WebSettings';
import Dashboard from './pages/aptitude/Dashboard';
import ArithApti from './pages/aptitude/ArithApti';
import DataInterApti from './pages/aptitude/DataInterApti';
import OnlineApti from './pages/aptitude/OnlineApti';
import LogicalApti from './pages/aptitude/LogicalApti';
import VerbalApti from './pages/aptitude/VerbalApti';
import CurrentAffairs from './pages/aptitude/CurrentAffairs';
import GeneralKnowledge from './pages/aptitude/GeneralKnowledge';
import GeneralScience from './pages/aptitude/GeneralScience';
import Networking from './pages/aptitude/Networking';
import Database from './pages/aptitude/Database';
import Architecture from './pages/aptitude/Architecture';
import DigiElec from './pages/aptitude/DigiElec';
import SoftwareTest from './pages/aptitude/SoftwareTest';
import WebDev from './pages/aptitude/WebDev';
import Cloud from './pages/aptitude/Cloud';
import CyberSec from './pages/aptitude/CyberSec';
import Cprog from './pages/aptitude/Cprog';
import Pyprog from './pages/aptitude/Pyprog';
import Unix from './pages/aptitude/Unix';
import Java from './pages/aptitude/Java';
import EventCreation from './pages/events/EventCreation';
import ExamPage from './pages/events/ExamPage';
import EventJoining from './pages/events/EventJoining';
import EventListing from './pages/events/EventListing';
import EventProgression from './pages/events/EventProgression';

function App() {

  return (
    <SessionProvider>
    <Router>
      <div className="bg-gray-800 text-white">
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/study-catalog" element={<StudyCatalog />} />
          <Route path="/blog-posts" element={<BlogPosts />} />
          <Route path="/blog-listing" element={<BlogListing />} />
          <Route path="/code-editor" element={<CodeEditor />} />
          <Route path="/event-registration" element={<EventRegistration />} />
          <Route path="/event-schedule" element={<EventSchedule />} />
          <Route path="/focus-tools" element={<FocusTools />} />
          <Route path="/math-solver" element={<MathSolver />} />
          <Route path="/notes-repository" element={<NotesRepository />} />
          <Route path="/note-taking" element={<NoteTaking />} />
          <Route path="/gamification" element={<Gamification />} />
          <Route path="/group-admin" element={<GroupAdmin />} />
          <Route path="/group-create" element={<GroupCreate />} />
          <Route path="/group-dashboard" element={<GroupDashboard />} />
          <Route path="/group-join" element={<GroupJoin />} />
          <Route path="/group-activity" element={<GroupActivity />} />
          <Route path="/group-performance" element={<GroupPerformance />} />
          <Route path="/group-user" element={<GroupUser />} />
          <Route path="/group-workspace" element={<GroupWorkspace />} />
          <Route path="/news-item" element={<NewsItem />} />
          <Route path="/news-listing" element={<Newlisting />} />
          <Route path="/notes-upload" element={<NotesUpload />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/settings" element={<WebSettings/>} />
          <Route path="/aptitude" element={<Dashboard />} />
          <Route path="/aptitude/arithmetic" element={<ArithApti />} />
          <Route path="/aptitude/interpretation" element={<DataInterApti />} />
          <Route path="/aptitude/general" element={<OnlineApti />} />
          <Route path="/aptitude/logical" element={<LogicalApti />} />
          <Route path="/aptitude/verbal" element={<VerbalApti />} />
          <Route path="/aptitude/current-affairs" element={<CurrentAffairs />} />
          <Route path="/aptitude/general-knowledge" element={<GeneralKnowledge />} />
          <Route path="/aptitude/general-science" element={<GeneralScience />} />
          <Route path="/aptitude/networking" element={<Networking />} />
          <Route path="/aptitude/database" element={<Database />} />
          <Route path="/aptitude/computer-architecture" element={<Architecture />} />
          <Route path="/aptitude/digital-electronics" element={<DigiElec />} />
          <Route path="/aptitude/software-testing" element={<SoftwareTest />} />
          <Route path="/aptitude/web-dev" element={<WebDev />} />
          <Route path="/aptitude/cloud" element={<Cloud />} />
          <Route path="/aptitude/cyber-security" element={<CyberSec />} />
          <Route path="/aptitude/c" element={<Cprog />} />
          <Route path="/aptitude/python" element={<Pyprog />} />
          <Route path="/aptitude/unix" element={<Unix />} />
          <Route path="/aptitude/java" element={<Java />} />
          <Route path="/event/creation" element={<EventCreation />} />
          <Route path="/event/exam" element={<ExamPage />} />
          <Route path="/event/:id" element={<EventJoining />} /> {/* Event Details Page */}
          <Route path="/event/listing" element={<EventListing />} />
          <Route path="/event/progression" element={<EventProgression />} />
        </Routes>
      </div>
    </Router>
    </SessionProvider>
  );
}

export default App;

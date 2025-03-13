import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import Timetable from '../components/TimeTable';
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';

const StudyTimetable = () => {

  return (
    <div>
      <Header/>
      <main className="flex-grow custom-container p-6">
        <Timetable />
      </main>
      <Footer />
    </div>
  );
};

export default StudyTimetable;

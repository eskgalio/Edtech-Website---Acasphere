import React from 'react';
import CalendarSection from './WrkCalendarSection';
import FileSharingSection from './FileSharingSection';
import FeedbackSection from './WrkFeedbackSection';
import SecuritySection from './SecuritySection';
import InsightsSection from './InsightsSection';
import ChatSection from './WrkChatSection';
import { Link } from 'react-router-dom';

function MainContent() {
  return (
    <div className="flex">
      <main className="flex-grow p-6">
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center text-blue-400">Group Workspace & Collaboration</h2>
          <CalendarSection />
          <FileSharingSection />
          <FeedbackSection />
          <SecuritySection />
          <InsightsSection />
        </section>
      </main>
      <ChatSection />
    </div>
  );
}

export default MainContent;

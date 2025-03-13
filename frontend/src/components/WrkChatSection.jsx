import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ChatSection() {
  const [messages, setMessages] = useState([
    { user: 'Alice', text: 'Hi team!', time: '10:01 AM', isUser: false },
    { user: 'Bob', text: "Let's review the latest document.", time: '10:02 AM', isUser: false },
    { user: 'Charlie', text: "I'll take care of it.", time: '10:03 AM', isUser: false },
    { user: 'Jane', text: 'Ready for the meeting!', time: '10:04 AM', isUser: false },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        user: 'You',
        text: input,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: true,
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  return (
    <div className="md:w-1/3 w-full p-6 bg-gray-900 rounded-lg sticky top-0 h-fit flex flex-col border border-gray-700 shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-white">Group Chat</h3>

      <div className="bg-gray-800 p-4 rounded-lg flex-grow max-h-80 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end ${msg.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-center space-x-2 ${msg.isUser ? 'flex-row-reverse' : ''}`}>
              {!msg.isUser && (
                <span className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full">
                  {msg.user.charAt(0)}
                </span>
              )}
              <div
                className={`p-3 rounded-lg max-w-xs ${
                  msg.isUser ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <p className="text-xs mt-1 text-gray-400 text-right">{msg.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none border border-gray-700"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full"
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>

      <div className="flex justify-between mt-4">
      <div className="flex flex-col items-center cursor-pointer">
          <i className="fas fa-user-circle text-gray-400"></i>
          <span className="text-xs text-gray-300"><Link to="/group-user" className='hover:text-white'>Profile</Link></span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <i className="fas fa-users text-gray-400"></i>
          <span className="text-xs text-gray-300"><Link to="/group-dashboard" className='hover:text-white'>Groups</Link></span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <i className="fas fa-chart-line text-gray-400"></i> {/* Performance icon */}
          <span className="text-xs text-gray-300"><Link to="/group-performance" className='hover:text-white'>Performance</Link></span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <i className="fas fa-sign-out-alt text-gray-400"></i> {/* Exit icon */}
          <span className="text-xs text-gray-300"><Link to="/group-join" className='hover:text-white'>Exit Group</Link></span>
        </div>
      </div>
    </div>
  );
}

export default ChatSection;

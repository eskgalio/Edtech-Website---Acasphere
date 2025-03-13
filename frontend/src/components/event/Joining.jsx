import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EventDetailsPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [isJoined, setIsJoined] = useState(false);
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/events/${id}`);
        const data = await response.json();
        setEvent(data);

        if (new Date(data.date) > new Date()) {
          startCountdown(new Date(data.date));
        }
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };
    fetchEvent();
  }, [id]);

  const startCountdown = (eventDate) => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setCountdown('The event has started!');
      } else {
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setCountdown(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
  };

  const handleJoinEvent = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/events/${id}/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: 'sample-user-id' }),
      });

      const data = await response.json();
      if (data.success) {
        setIsJoined(true);
        alert('You have successfully joined the event!');
      } else {
        alert(data.message || 'Failed to join the event.');
      }
    } catch (error) {
      console.error('Error joining event:', error);
      alert('Failed to join the event.');
    }
  };

  if (!event) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="container bg-gray-800 flex justify-center my-20">
      <div className="bg-indigo-200 w-full max-w-5xl p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">{event.name}</h1>
          <p className="text-gray-600 text-sm mb-4">{event.description}</p>
          <div className="flex flex-wrap text-gray-700 gap-4 mb-6">
            <p className="font-semibold">Date: <span className="font-normal text-gray-500">{new Date(event.date).toLocaleString()}</span></p>
            <p className="font-semibold">Location: <span className="font-normal text-gray-500">{event.location || 'Online'}</span></p>
            <p className="font-semibold">Category: <span className="font-normal text-gray-500">{event.category}</span></p>
            <p className="font-semibold">Max Participants: <span className="font-normal text-gray-500">{event.maxParticipants}</span></p>
          </div>
        </div>
        {countdown && (
          <div className="bg-indigo-600 text-white p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold">Event Countdown</h2>
            <p className="text-2xl">{countdown}</p>
          </div>
        )}
        <div className="text-center">
          {!isJoined ? (
            <button
              onClick={handleJoinEvent}
              className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold transform transition-all duration-200 ease-in-out hover:bg-green-600 hover:scale-105 focus:outline-none"
            >
              Join Event
            </button>
          ) : (
            <p className="text-green-500 font-semibold mt-4">You have successfully joined this event!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;

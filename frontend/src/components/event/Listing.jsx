import React, { useState, useEffect } from 'react';

const EventCard = ({ event }) => {
  const eventDate = new Date(event.date);
  const currentDate = new Date();
  const isUpcoming = eventDate > currentDate;
  const isOngoing =
    eventDate.toDateString() === currentDate.toDateString();

  const status = isUpcoming
    ? 'Upcoming'
    : isOngoing
    ? 'Ongoing'
    : 'Completed';

  return (
    <div className="p-5 bg-gray-700 border shadow-md rounded-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
      <h2 className="text-xl font-bold text-white">{event.name}</h2>
      <p className="text-sm text-purple-300">{event.date} | {event.location}</p>
      <p className="text-purple-300 mt-3 text-sm">{event.description}</p>
      <p className="mt-4 text-xs font-medium">
        Category: <span className="font-bold">{event.category}</span>
      </p>
      <p
        className={`mt-2 inline-block px-3 py-1 rounded-full text-xs font-medium ${
          status === 'Upcoming'
            ? 'bg-blue-100 text-blue-700'
            : status === 'Ongoing'
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-200 text-gray-600'
        }`}
      >
        {status}
      </p>
      <div className="mt-4">
      <button
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-lg text-sm hover:from-blue-600 hover:to-indigo-700 transition-colors duration-200"
          onClick={() => window.location.href = `/event/${event._id}`} // Use event._id from MongoDB
        >
          View Details
        </button>
      </div>
    </div>
  );
};

const EventListingPage = (event) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [featuredEvent, setFeaturedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        const data = await response.json();
        setEvents(data);
        setFilteredEvents(data);

        // Set a random featured event
        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setFeaturedEvent(data[randomIndex]);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = events.filter(
      (event) =>
        event.name.toLowerCase().includes(term) &&
        (selectedCategory ? event.category === selectedCategory : true)
    );

    setFilteredEvents(filtered);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    const filtered = events.filter(
      (event) =>
        (category ? event.category === category : true) &&
        (searchTerm ? event.name.toLowerCase().includes(searchTerm) : true)
    );

    setFilteredEvents(filtered);
  };

  return (
    <div className="p-10 bg-gray-800 min-h-screen">
      <div className='bg-gradient-to-r from-indigo-800 to-blue-600 p-4 px-6 rounded-lg mb-6 border'>
      <h3 className='py-6 ml-2 text-white text-5xl font-bold'>Event Listing</h3>
      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search by event name"
          value={searchTerm}
          onChange={handleSearch}
          className="p-3 rounded-lg border border-gray-500 w-1/2 bg-blue-100 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="p-3 rounded-lg border border-gray-500 bg-blue-100 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">All Categories</option>
          <option value="Education">Education</option>
          <option value="Sports">Sports</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Business">Business</option>
        </select>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => <EventCard key={event._id} event={event} />)
        ) : (
          <p className="text-white">No events found</p>
        )}
      </div>
    </div>
  );
};

export default EventListingPage;

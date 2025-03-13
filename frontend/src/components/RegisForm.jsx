import { Link } from 'react-router-dom';

const RegisForm = () => {
    return (
      <main className="mt-10 text-center">
        <section className="py-4">
          <h1 className="text-4xl font-bold text-blue-100 mb-4">My Event</h1>
          <p className="text-lg text-gray-400 mb-8">This is a great place to tell guests more about the event and get them excited about it.</p>
          <img src="/public/event.jpg" alt="Event Celebration" className="mx-auto rounded-lg border-8 border-blue-100 w-fit h-96" />
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-transform hover:scale-105"><Link to="/event-schedule" className='hover:text-white'>Register</Link></button>
        </section>
        <section className="mt-4 p-4 bg-gray-900 rounded-lg border">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Time & Location</h2>
          <p className="text-lg text-gray-300 mb-4">15 Sept 2024, 6:00 pm – 16 Sept 2024, 9:00 pm</p>
          <p className="text-lg text-gray-300 mb-8">Wix Office, 500 Terry Francois Street, San Francisco, CA 94158</p>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">About the Event</h2>
          <p className="text-lg text-gray-300 mb-8">Here, you can provide information about the event history, speakers, and the overall schedule to excite potential attendees.</p>
        </section>
        <div className="map mt-12">
          <iframe src="https://www.google.com/maps/embed" className="w-full mx-auto h-96 rounded-lg"></iframe>
        </div>
      </main>
    );
  };
  
  export default RegisForm;
  
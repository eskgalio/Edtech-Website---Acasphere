import Header from '../../common/Header';
import Footer from '../../common/Footer';
import EventDetailsPage from '../../components/event/Joining';

function EventJoining() {
  return (
    <div className="bg-gray-800 text-white">
      <Header />
      <EventDetailsPage />
      <Footer />
    </div>
  );
}

export default EventJoining;

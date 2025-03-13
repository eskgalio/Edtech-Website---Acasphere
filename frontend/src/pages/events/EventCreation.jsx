import Header from '../../common/Header';
import Footer from '../../common/Footer';
import EventCreationPage from '../../components/event/Creation';

function EventCreation() {
  return (
    <div className="bg-gray-800 text-white">
      <Header />
      <EventCreationPage />
      <Footer />
    </div>
  );
}

export default EventCreation;

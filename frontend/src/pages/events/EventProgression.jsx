import Header from '../../common/Header';
import Footer from '../../common/Footer';
import EventProgressionPage from '../../components/event/Progression';

function EventProgression() {
  return (
    <div className="bg-gray-800 text-white">
      <Header />
      <EventProgressionPage />
      <Footer />
    </div>
  );
}

export default EventProgression;

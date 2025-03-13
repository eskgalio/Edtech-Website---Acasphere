import Header from '../../common/Header';
import Footer from '../../common/Footer';
import EventListingPage from '../../components/event/Listing';

function EventListing() {
  return (
    <div className="bg-gray-800 text-white">
      <Header />
      <EventListingPage />
      <Footer />
    </div>
  );
}

export default EventListing;

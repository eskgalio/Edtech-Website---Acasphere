import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Exam from '../../components/event/Exam';

function ExamPage() {
  return (
    <div className="bg-gray-800 text-white">
      <Header />
      <Exam />
      <Footer />
    </div>
  );
}

export default ExamPage;

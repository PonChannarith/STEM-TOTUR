import { useParams } from "react-router-dom";
import BookDetail from "../../components/bookDetail/BookDetail";
import FooterCard from "../../components/footer/FooterCard";

const BookDetailPage = () => {
  return (
    <div>
      <BookDetail />
      <FooterCard />
    </div>
  );
};
export default BookDetailPage;

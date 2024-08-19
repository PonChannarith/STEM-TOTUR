import React, { useState, useEffect } from "react";
import BookAllCard from "../../components/bookAllCard/BookAllCard";
import FooterCard from "../../components/footer/FooterCard";
import Spinner from "../../components/appSpinner/Spinner";
import NavbarComponent from "../../components/navbar/NavbarComponent";
const categories = [
  "ទាំងអស់",
  "Google",
  "គណិតវិទ្យា",
  "វិទ្យាសាស្រ្តពិត",
  "វិទ្យាសាស្ត្រសង្គម",
  "ប្រវត្តវិទ្យា",
  "ជីវៈវិទ្យា",
  "រូបវិទ្យា",
  "គីមីវិទ្យា",
  "បច្ចេកវិទ្យា",
  "អក្ខរកម្មឌីជីថល",
  "ទស្សនវិទ្យា និង ចិត្តវិទ្យា",
  "ស្នេហា",
  "កម្រងវិញ្ញាសារ",
  "ផ្សេងៗទៀត",
];

const filterKeywords = {
  Google: ["google"],
  គណិតវិទ្យា: ["គណិតវិទ្យា", "math", "mathematics"],
  វិទ្យាសាស្រ្តពិត: ["វិទ្យាសាស្រ្តពិត", "វិទ្យាសាស្រ្ត", "science"],
  វិទ្យាសាស្រ្តសង្គម: ["វិទ្យាសាស្រ្តសង្គម", "វិទ្យាសាស្រ្ត", "science"],
  ប្រវត្តវិទ្យា: ["ប្រវត្តវិទ្យា", "history", "his", "ប្រវត្តិ"],
  ជីវៈវិទ្យា: ["ជីវៈវិទ្យា", "biology", "bio"],
  រូបវិទ្យា: ["រូបវិទ្យា", "physics", "phys"],
  គីមីវិទ្យា: ["គីមីវិទ្យា", "chemistry", "chem"],
  បច្ចេកវិទ្យា: ["បច្ចេកវិទ្យា", "technology", "tech"],
  អក្ខរកម្មឌីជីថល: ["អក្ខរកម្មឌីជីថល", "digital literacy", "digital"],
  ទស្សនវិទ្យា: ["ទស្សនវិទ្យា", "philosophy", "psychology", "ចិត្តវិទ្យា"],
  ស្នេហា: ["love", "ស្នេហា", "សេច"],
  កម្រងវិញ្ញាសារ: ["exam preparation book", "វិញ្ញាសា", "ប្រឡង"],
  ផ្សេងៗទៀត: ["other", "ផ្សេងៗ"],
};

const Book = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("ទាំងអស់");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchBooks(1);
  }, []);

  const fetchBooks = (page) => {
    setIsLoading(true);
    fetch(`http://136.228.158.126:50001/api/courses/?page=${page}`).replace(/^http:/, "https:")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setFilteredData(data.results); // Initialize filtered data
        setCurrentPage(page);
        setTotalPages(Math.ceil(data.count / 10)); // Assuming 10 books per page
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setIsLoading(false);
      });
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    fetchBooks(pageNumber);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (filter === "ទាំងអស់") {
      setFilteredData(data);
    } else {
      const keywords = filterKeywords[filter] || [filter.toLowerCase()];
      const filtered = data.filter((item) =>
        keywords.some((keyword) =>
          item.course_name.toLowerCase().includes(keyword)
        )
      );
      setFilteredData(filtered);
    }
  };

  return (
    <>
      <div className="ml-10 mt-5 justify-center font-suwannaphum">
        <div className="flex flex-wrap gap-1.5 font-suwannaphum">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-2 py-1 sm:px-3  sm:py-2 md:px-3 md:py-2 lg:px-5 lg:py-3 xl:px-6 xl:py-3 rounded-full text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[15px] font-suwannaphum gap-1 mt-5 ${
                activeFilter === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <section
          id="Projects"
          className="p-10 font-suwannaphum mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5"
        >
          {filteredData.length > 0 ? (
            filteredData.map((book) => (
              <BookAllCard key={book.id} book={book} />
            ))
          ) : (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7486/7486754.png"
                  width="100"
                  height="100"
                  alt="Empty Box"
                  className="mx-auto mb-4"
                />
                <p className="text-gray-500 font-suwannaphum">
                  មិនមានទាន់ការឆ្លើយតបទេ
                </p>
              </div>
            </div>
          )}
        </section>
      )}
      <div className="flex justify-center mt-4">
          <div className="bg-white p-2 sm:p-4 md:p-5 lg:p-6 xl:p-8 flex items-center flex-wrap">
            <button
              className="px-2 py-1 sm:px-4 sm:py-2 md:px-5 md:py-3 text-green-600 transition-colors duration-150 bg-white border border-r-0 border-green-600 rounded-l-lg focus:shadow-outline hover:bg-green-100 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]"
              disabled={currentPage === 1 || isLoading}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-2 py-1 sm:px-4 sm:py-2 md:px-5 md:py-3 text-green-600 transition-colors duration-150 bg-white border border-r-0 border-green-600 focus:shadow-outline text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] ${
                    currentPage === pageNumber ? "bg-green-100" : ""
                  }`}
                >
                  {pageNumber}
                </button>
              )
            )}
            <button
              className="px-2 py-1 sm:px-4 sm:py-2 md:px-5 md:py-3 text-green-600 transition-colors duration-150 bg-white border border-green-600 rounded-r-lg focus:shadow-outline hover:bg-green-100 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]"
              disabled={currentPage === totalPages || isLoading}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      <FooterCard />
    </>
  );
};

export default Book;

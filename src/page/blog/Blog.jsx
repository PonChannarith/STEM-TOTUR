import { useEffect, useState } from "react";
import BlogAllCard from "../../components/blogAllCard/BlogAllCard";
import FooterCard from "../../components/footer/FooterCard";
import Spinner from "../../components/appSpinner/Spinner";
import NavbarComponent from "../../components/navbar/NavbarComponent";

const categories = [
  "ទាំងអស់",
  "បច្ចេកវិទ្យា",
  "សាលារៀន",
  "អប់រំ",
  "ផ្សព្វផ្សាយ",
  "កម្មវិធី",
  "ផ្សេងៗទៀត",
];

const filterKeywords = {
  បច្ចេកវិទ្យា: [
    "បច្ចេកវិទ្យា",
    "Technology",
    "programming",
    "programing",
    "ឌីជីថល",
  ],
  សាលារៀន: ["សាលារៀន", "School", "ចំណេះដឹង"],
  អប់រំ: ["អប់រំ", "Education", "ការអប់រំ"],
  ផ្សព្វផ្សាយ: ["ផ្សព្វផ្សាយ", "ប្រព័ន្ធផ្សព្វផ្សាយ", "ព័ឥមានផ្សព្វផ្សាយ"],
  កម្មវិធី: ["កម្មវិធី", "program", "technology"],
  ផ្សេងៗទៀត: ["ផ្សេងៗទៀត", "Other"],
};

export const Blog = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("ទាំងអស់");

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  const fetchBlogs = (page) => {
    setIsLoading(true);
    fetch(`http://136.228.158.126:50001/api/articles/?page=${page}`)
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
    fetchBlogs(pageNumber);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);

    if (filter === "ទាំងអស់") {
      setFilteredData(data);
    } else {
      const keywords = filterKeywords[filter] || [filter.toLowerCase()];
      const filtered = data.filter((item) =>
        keywords.some((keyword) =>
          item.title.toLowerCase().includes(keyword.toLowerCase())
        )
      );
      setFilteredData(filtered);
    }
  };

  return (
    <>
      <div className="ml-10 mt-5 flex justify-center">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-suwannaphum flex items-center justify-center gap-2 mt-5 ${
                activeFilter === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              } sm:px-3 sm:py-1.5 md:px-4 md:py-2 xl:px-6 xl:py-3 xl:text-[15px]`}
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
            filteredData.map((blog) => (
              <BlogAllCard key={blog.id} blog={blog} />
            ))
          ) : (
            <p>No blogs found</p>
          )}
        </section>
      )}
      <div className="flex justify-center mt-4">
        <div className="bg-white p-2 sm:p-4 flex items-center flex-wrap">
          <button
            className="px-2 sm:px-4 py-1 sm:py-2 text-green-600 transition-colors duration-150 bg-white border border-r-0 border-green-600 rounded-l-lg focus:shadow-outline hover:bg-green-100"
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
                className={`px-2 sm:px-4 py-1 sm:py-2 text-green-600 transition-colors duration-150 bg-white border border-r-0 border-green-600 focus:shadow-outline ${
                  currentPage === pageNumber ? "bg-green-100" : ""
                }`}
              >
                {pageNumber}
              </button>
            )
          )}
          <button
            className="px-2 sm:px-4 py-1 sm:py-2 text-green-600 transition-colors duration-150 bg-white border border-green-600 rounded-r-lg focus:shadow-outline hover:bg-green-100"
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

export default Blog;

import React, { useEffect, useState } from "react";
import ForumContent from "../../components/forumContent/ForumContent";
import FooterCard from "../../components/footer/FooterCard";
import CardForum from "../../components/forumCardForm/CardForum";
import Spinner from "../../components/appSpinner/Spinner";

const Forum = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [forums, setForums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchForums(1);
  }, []);

  const fetchForums = (page) => {
    setIsLoading(true);
    // fetch(`http://136.228.158.126:50001/api/forums/?page=${page}`)
    fetch(`https://stem.automatex.dev/api/forums/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setForums(data.results);
        setCurrentPage(page);
        setTotalPages(Math.ceil(data.count / 10));
      })
      .catch((error) => {
        console.error("Error fetching forums:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handlePageChange = (pageNumber) => {
    fetchForums(pageNumber);
  };

  return (
    <div>
      <ForumContent />
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <section
          id="Projects"
          className="card-container" // Apply the container class here
        >
          {forums.map((forum, index) => (
            <div key={index} className="card-wrapper">
              <CardForum forums={forum} />
            </div>
          ))}
        </section>
      )}
      <div className="flex justify-center">
        <div className="bg-white p-4 flex items-center flex-wrap">
          <button
            className="px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-r-0 border-green-600 rounded-l-lg focus:shadow-outline hover:bg-green-100"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className="px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-r-0 border-green-600 focus:shadow-outline"
              >
                {pageNumber}
              </button>
            )
          )}
          <button
            className="px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-green-600 rounded-r-lg focus:shadow-outline hover:bg-green-100"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
      <FooterCard />
    </div>
  );
};

export default Forum;

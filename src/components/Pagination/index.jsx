import { useEffect, useState } from "react";

const Pagination = () => {
  const [forums, setForums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch the initial set of forums
    fetchForums(1);
  }, []);

  const fetchForums = (page) => {
    fetch(`http://136.228.158.126:50001/api/forums/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setForums(data.results);
        setCurrentPage(page);
        setTotalPages(Math.ceil(data.count / 10)); // Assuming 10 forums per page
      })
      .catch((error) => {
        console.error("Error fetching forums:", error);
      });
  };

  const handlePageChange = (pageNumber) => {
    fetchForums(pageNumber);
  };

  // //
  // let [num, setNum] = useState(1);
  // let [cur, setCur] = useState(1);

  // const pages = [
  //   { page: num },
  //   { page: num + 1 },
  //   { page: num + 2 },
  //   { page: num + 3 },
  // ];
  // function Next() {
  //   setNum(++num);
  // }
  // function back() {
  //   num > 1 && setNum(--num);
  // }
  return (
    <div>
      {/* {pages.map((pg, i) => (
        <button
          key={i}
          onClick={() => setCur(pg.page)}
          className={`h-12 border-2 border-r-0 border-indigo-600
               w-12 ${cur === pg.page && "bg-indigo-600 text-white"}`}
        >
          {pg.page}
        </button>
      ))} */}
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              style={{
                fontWeight: currentPage === pageNumber ? "bold" : "normal",
              }}
            >
              {pageNumber}
            </button>
          )
        )}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

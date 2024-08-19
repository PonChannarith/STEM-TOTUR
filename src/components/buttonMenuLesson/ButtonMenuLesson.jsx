import React, { useState, useEffect } from "react";

// Define the categories for filtering
const categories = [
  "All",
  "Google Docs",
  "Google Drive",
  "Google Form",
  "Google Meets",
  "Google Sheets",
  "Google Slide",
  "Other",
];

const ButtonMenuLesson = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  // Fetch data from the API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://136.228.158.126:50001/api/courses/"
        );
        const result = await response.json();
        setData(result.results); // Update to reflect the actual field from the response
        setFilteredData(result.results); // Initialize with all data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter data based on the selected category
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (filter === "All") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.course_name.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mt-5">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded ${
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
      <div className="mt-5">
        <ul>
          {filteredData.length > 0 ? (
            filteredData.map((course) => (
              <div key={course.id} className="py-2">
                <strong>{course.course_name}</strong>:{" "}
                {course.course_description}
              </div>
            ))
          ) : (
            <li>No courses found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ButtonMenuLesson;

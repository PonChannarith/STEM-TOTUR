import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CardForum({ forums }) {
  const [formattedDate, setFormattedDate] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const formatDate = () => {
      const date = new Date(forums.updated_at);
      return date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
    };
    setFormattedDate(formatDate());
  }, [forums.updated_at]);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <div className="card bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 xl:w-[95%] mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
      <Link to={`/createComment/${forums.id}`} className="block">
        <div className="flex items-center mb-4">
          <img
            src={
              forums.profileUser ||
              "https://cdna.artstation.com/p/assets/images/images/034/807/864/large/gil-lagziel-oggy-artstation1.jpg?1613299994"
            }
            alt="Avatar"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
          />
          <div className="flex flex-col ml-3">
            <p className="text-gray-600 font-semibold hover:text-indigo-600 font-suwannaphum text-[14px] md:text-[16px]">
              {forums.author}
            </p>
            <p className="text-gray-600 font-suwannaphum text-xs sm:text-sm mt-1">
              {formattedDate}
            </p>
          </div>
        </div>
        <h2
          className="card-title font-bold text-lg md:text-xl text-gray-800"
          dangerouslySetInnerHTML={{ __html: forums.title || "No title" }}
        ></h2>
        <p
          className={`text-base md:text-lg text-gray-700 font-suwannaphum mt-2 ${
            isExpanded ? "" : "line-clamp-2"
          }`}
          dangerouslySetInnerHTML={{
            __html: forums.description || "No description",
          }}
        ></p>
        <button
            onClick={handleToggle}
            className="mt-2 bg-blue-600 text-md px-2 py-1 xl:px-4 xl:py-2 rounded-lg xl:text-lg font-suwannaphum text-white hover:underline focus:outline-none md:text-xl lg:text-1xl xl:text-1xl"
          >
            {isExpanded ? "See less" : "See more"}
          </button>
      </Link>
    </div>
  );
}

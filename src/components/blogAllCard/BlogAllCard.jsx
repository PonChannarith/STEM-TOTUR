import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogAllCard = ({ blog }) => {
  const [totalFollowers, setTotalFollowers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch total followers for the blog author
  const fetchTotalFollowers = async () => {
    if (!blog || !blog.author_id) {
      console.error("Author ID is missing");
      return;
    }

    try {
      const response = await fetch(
        `http://136.228.158.126:50001/api/follow/${blog.author_id}/followers/`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setTotalFollowers(data.total_followers);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTotalFollowers();
  }, [blog.author_id]);

  return (
    <Link to={`/blogDetail/${blog.id}`} className="block mb-4">
      <div className="bg-white rounded-lg shadow-md border overflow-hidden sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="flex flex-col justify-between leading-normal rounded-lg w-full">
          <img
            src={blog.image || "../src/assets/placeholder.png"}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "../src/assets/placeholder.png";
            }}
            className="w-full h-[200px] sm:h-[200px] md:h-[200px] lg:h-[200px] xl:h-[250px] object-cover rounded-t-lg"
            alt="Blog"
          />
          <div className="p-2 pt-2">
            <div className="mb-0">
              <p
                className="text-[12px] sm:text-[14px]  md:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-700 font-bold blog-card-title line-clamp-1 -mt-1 pt-3 font-suwannaphum"
                dangerouslySetInnerHTML={{
                  __html: blog.title || "No title",
                }}
              ></p>
              <span
                className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-gray-700 blog-card-title line-clamp-1 -mt-1 pt-3 font-suwannaphum"
                dangerouslySetInnerHTML={{
                  __html: blog.content || "No content",
                }}
              ></span>
            </div>
            <div className="flex items-center mt-3">
              <a href="#">
                <img
                  className="w-9 h-9 sm:w-9 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 rounded-full object-cover"
                  src={
                    blog.profileUser ||
                    "https://cdna.artstation.com/p/assets/images/images/034/807/864/large/gil-lagziel-oggy-artstation1.jpg?1613299994"
                  }
                  alt="Avatar"
                />
              </a>
              <div className="flex flex-col">
                <span
                  className="ml-2 sm:ml-3 md:ml-4 lg:ml-5 xl:ml-6 rounded m-2 text-gray-600 font-semibold hover:text-indigo-600 font-suwannaphum text-[14px] sm:text-[16px] md:text-[18px]"
                >
                  {blog.author}
                </span>
                <p className="text-gray-600 font-suwannaphum text-[12px] sm:text-[14px] md:text-[16px] ml-3 sm:ml-4 md:ml-5 lg:ml-4 xl:ml-7 -mt-1">
                  {loading
                    ? "Loading followers..."
                    : error
                    ? `Error: ${error}`
                    : `អ្នកតាមដាន ${totalFollowers} នាក់`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogAllCard;

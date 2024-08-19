import { useEffect, useState } from "react";
import { fetchBlogById } from "../../services/fetchBlogById";
import { useParams } from "react-router-dom";
import { SlUserFollow } from "react-icons/sl";
import moment from "moment";
import "./styleBlog.css";
const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followError, setFollowError] = useState("");
  const [followSuccessMessage, setFollowSuccessMessage] = useState("");
  const [totalFollowers, setTotalFollowers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog data
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogData = await fetchBlogById(id);
        setBlog(blogData);

        // Retrieve follow status from local storage or check from backend
        const followedBlogs =
          JSON.parse(localStorage.getItem("followed_blogs")) || {};
        if (blogData.author_id in followedBlogs) {
          setIsFollowing(followedBlogs[blogData.author_id]);
        } else {
          // Check follow status from backend if not in local storage
          const accessToken = localStorage.getItem("access_token");
          if (accessToken) {
            const response = await fetch(
              `http://136.228.158.126:50001/api/follows/${blogData.author_id}/unfollow_user/`,
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
            const responseData = await response.json();
            setIsFollowing(responseData.isFollowing || false);
            followedBlogs[blogData.author_id] = responseData.isFollowing;
            localStorage.setItem(
              "followed_blogs",
              JSON.stringify(followedBlogs)
            );
          }
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError("Failed to load blog data.");
      }
    };

    fetchBlogData();
  }, [id]);

  // Fetch total followers for the blog
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

  // Trigger fetch of total followers when blog data is available
  useEffect(() => {
    if (blog && blog.author_id) {
      fetchTotalFollowers();
    }
  }, [blog]);

  const handleFollowToggle = async () => {
    if (!blog || !blog.author_id) {
      setFollowError("Author ID is missing or undefined");
      return;
    }

    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      const url = isFollowing
        ? `http://136.228.158.126:50001/api/follows/${blog.author_id}/unfollow_user/`
        : `http://136.228.158.126:50001/api/follows/${blog.author_id}/follow_user/`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        setFollowError(errorData.detail || "Failed to update follow status");
        setFollowSuccessMessage("");
        return;
      }

      const newIsFollowing = !isFollowing;
      setIsFollowing(newIsFollowing);

      // Update total followers count based on the new follow status
      setTotalFollowers((prev) => (newIsFollowing ? prev + 1 : prev - 1));

      setFollowSuccessMessage(
        newIsFollowing
          ? "You have started following this blog."
          : "You have unfollowed this blog."
      );
      setFollowError("");

      const followedBlogs =
        JSON.parse(localStorage.getItem("followed_blogs")) || {};
      followedBlogs[blog.author_id] = newIsFollowing;
      localStorage.setItem("followed_blogs", JSON.stringify(followedBlogs));
    } catch (error) {
      console.error("Error toggling follow status:", error);
      setFollowError(error.message);
      setFollowSuccessMessage("");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <section className="w-[100%] mx-auto flex flex-col md:flex-row justify-between gap-8 p-8 font-suwannaphum ">
        <div className="w-full h-full">
          <h1 className="text-2xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: blog.title || "No title" }}></h1>
          <p className="mb-4 text-[18px]" dangerouslySetInnerHTML={{ __html: blog.content || "No title" }} ></p>
          <div className="w-[60%] mx-auto flex justify-center">
            <div>
              <img
                className="w-full object-cover rounded-lg"
                src={blog.image}
                alt={blog.title}
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-[35%] flex flex-col gap-8">
          {/* Profile Section */}
          <div className="w-full py-4 px-3 bg-gray-200 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src={
                blog.profileUser ||
                "https://mastertondental.co.nz/wp-content/uploads/2022/12/team-profile-placeholder.jpg"
              }
              alt="Profile Image"
              className="w-16 h-16 md:w-12 md:h-12 rounded-full"
            />
            <div className="ml-3 flex flex-col items-center text-center">
              <div className="font-bold text-base md:text-sm mt-2">{`${blog.author}`}</div>
              <div className="text-gray-400 text-sm md:text-xs mt-2">
                @{blog.author}
              </div>
              <span className="mt-2">
                {error && <p>Error: {error}</p>}
                {totalFollowers !== null && !loading && !error && (
                  <p className="text-sm md:text-base">
                    ចំនួនតាម : {totalFollowers}
                  </p>
                )}
              </span>
            </div>

            <div
              className={`flex items-center text-white space-x-2 py-2 px-4 md:px-8 lg:px-12 xl:px-16 rounded-xl cursor-pointer transition-all duration-300 mt-4 ${
                isFollowing
                  ? "bg-gray-400"
                  : "bg-[#16a1df] hover:bg-[#246a8b] transform hover:scale-105"
              }`}
              onClick={handleFollowToggle}
            >
              <SlUserFollow className="text-base md:text-sm" />
              <button className="text-sm md:text-base lg:text-lg">
                {isFollowing ? "ឈប់តាម" : "តាមដាន"}
              </button>
            </div>
          </div>

          {/* Related Articles Section */}
          <div className="w-full p-4 bg-gray-200 rounded-lg">
            <ul>
              <li className="font-bold text-lg md:text-base mb-4">
                អត្ថបទដែលពាក់ព័ន្ធ
              </li>
              {[...Array(4)].map((_, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="w-[80px] h-[80px] md:w-[60px] md:h-[60px] mt-3 cursor-pointer">
                    <img
                      src={blog.image}
                      alt="Related article image"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="block title-truncate text-sm md:text-base" dangerouslySetInnerHTML={{ __html: blog.title || "No title" }}>
                    </p>
                    <div className="text-sm md:text-[14px]">
                      បង្កើត: {moment(blog.created_at).format("MMMM D, YYYY")}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Keywords Section */}
          <div className="w-full p-4 bg-gray-200 rounded-lg shadow-md items-center gap-2 font-suwannaphum">
            <h6 className="text-gray-800 font-semibold text-lg md:text-base mb-2">
              ពាក្យគន្លឹះ:
            </h6>
            <span className="mt-2 px-4 py-2 text-sm md:text-xs bg-gray-100 rounded-full text-gray-700 cursor-pointer hover:bg-blue-500 hover:text-white">
              មិនទាន់មានពាក្យគន្លឹះទេ
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;

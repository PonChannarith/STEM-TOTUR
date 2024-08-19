import React, { useEffect, useState } from "react";
import { GoBell } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { GrArticle } from "react-icons/gr";
import { MdForum } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AUTH_HEADER } from "../../services/constants";
import BlogDetail from "../blogDetail/BlogDetail";

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [profile, setProfile] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const handleNotificationClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addNotification = (notification) => {
    setNotifications((prevNotifications) => [
      notification,
      ...prevNotifications,
    ]);
    setNotificationCount((prevCount) => prevCount + 1);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/dashboard", name: "Dashboard", icon: RxDashboard },
    { id: 2, path: "/article", name: "Article", icon: GrArticle },
    { id: 3, path: "/setting", name: "Setting", icon: IoSettingsOutline },
    { id: 4, path: "/getforum", name: "Forum", icon: MdForum },
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "https://stem.automatex.dev/api/profile/",
          {
            headers: {
              ...AUTH_HEADER,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const data = await response.json();
        setProfile(data);
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: data.username,
          })
        );
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    const fetchNotifications = async () => {
      try {
        const response = await fetch("https://stem.automatex.dev/api/notifications", {
          headers: {
            ...AUTH_HEADER,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setNotifications(data);
        setNotificationCount(data.length);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchProfile();
    fetchNotifications();
  }, []);

  if (!profile) {
    return (
      <button
        disabled
        type="button"
        class="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
      >
        <svg
          aria-hidden="true"
          role="status"
          class="inline w-10 h-10 mx-auto me-3 text-gray-200 animate-spin dark:text-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="#1C64F2"
          />
        </svg>
        Loading...
      </button>
    );
  }

  return (
    <>
      <div className="flex justify-between md:items-center p-5 bg-[#16A1DF]">
        <div className="flex flex-row items-center w-full sm:w-auto"></div>
        <div className="flex items-center space-x-2 sm:space-x-5">
          <div className="hidden md:flex"></div>
          <div className="flex items-center space-x-2 sm:space-x-5">
            <img
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full "
              src={profile.image}
              alt="Profile"
            />
            <span className="text-sm pr-3 sm:text-xl text-white -mt-[1px] sm:-mt-[2px] font-semibold  font-suwannaphum">
              {profile.username}
            </span>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div className="w-12 sm:w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-2 sm:px-4 bg-white">
        {/* Logo */}
        <div className="mb-8 flex justify-center sm:justify-center">
          <Link to="/home">
            <main className="mb-8 flex justify-center sm:justify-start">
              <img
                src="../src/assets/STEM_TOTUR.jpg"
                alt="logo"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full object-cover"
              />
            </main>
          </Link>
        </div>
        {/* Navigation Links */}
        <ul className="mt-6 space-y-3 sm:space-y-6">
          {SIDEBAR_LINKS.map((link, index) => (
            <li
              key={index}
              className={`font-medium rounded-md py-1 sm:py-2 px-3 sm:px-5 hover:bg-gray-100 hover:text-indigo-500 ${
                activeLink === index ? "bg-indigo-100 text-indigo-500" : ""
              }`}
            >
              <Link
                to={link.path}
                className="flex justify-center md:justify-start items-center space-x-2 sm:space-x-5"
                onClick={() => handleLinkClick(index)}
              >
                <span>{<link.icon />}</span>
                <span className="text-xs sm:text-sm text-gray-500 hidden md:flex">
                  {link.name}
                </span>
              </Link>
            </li>
          ))} 
        </ul>
      </div>

      {/* Notifications Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-80">
            <h2 className="text-lg font-semibold mb-2">Notifications</h2>
            <ul className="space-y-2">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className="p-2 border-b border-gray-200"
                >
                  {notification.type === "follow" && (
                    <span className="text-blue-600 font-semibold">
                      {notification.username} started following you.
                    </span>
                  )}
                  {notification.type === "unfollow" && (
                    <span className="text-red-600 font-semibold">
                      {notification.username} unfollowed you.
                    </span>
                  )}
                  {notification.type !== "follow" &&
                    notification.type !== "unfollow" &&
                    notification.message}
                </li>
              ))}
            </ul>
            <button
              onClick={handleNotificationClick}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* BlogDetail component */}
      <BlogDetail addNotification={addNotification} />
    </>
  );
};

export default Dashboard;

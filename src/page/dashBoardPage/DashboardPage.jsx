import React, { useEffect, useState } from 'react';
import { MdForum } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { GiShadowFollower } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";
import axios from 'axios';
import Dashboard from '../../components/dashboard/Dashboard';
import DashboardDetail from '../../components/dashboardDetail/DashboardDetail';
import DashboardDetailChart from '../../components/dashboardDetailchart/DashboardDetailChart';

const DashboardPage = () => {
  const [data, setData] = useState({
    posts: [],
    articles: [],
    // followers: 0,
    // likes: 0,
  });
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem("access_token");
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : 1; // Replace with actual user ID from user object
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://136.228.158.126:50001/api/forums/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('Posts Response:', response.data);
      return response.data.results.filter(post => post.user === userId);
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  };

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://136.228.158.126:50001/api/articles/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('Articles Response:', response.data);
      return response.data.results.filter(article => article.user === userId);
    } catch (error) {
      console.error("Error fetching articles:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [posts, articles] = await Promise.all([
          fetchPosts(),
          fetchArticles(),
          // fetchFollowers(userId),
          // fetchLikes()
        ]);

        setData({
          posts,
          articles,
          // followers,
          // likes,
        });
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [accessToken, userId]);


  return (
    <div>
      <Dashboard />
      {error && <p className="text-red-500">Error fetching data: {error}</p>}
      <section className="flex max-w-screen-xl mx-auto mt-5">
        <main className="w-full">
          <div className="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-green-400">
            <div className="grid grid-cols-12 gap-6">
              <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                <div className="col-span-12 mt-8">
                  <div className="flex items-center h-10 intro-y">
                    <h2 className="mr-5 text-lg font-medium truncate">Dashboard welcome</h2>
                  </div>
                  <section className="max-w-screen2xl mx-auto">
                    <div className="grid grid-cols-12 gap-10 mt-5">
                      <a
                        className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                        href="#"
                      >
                        <div className="p-5">
                          <div className="flex justify-between">
                            <MdForum className="h-7 w-7 text-blue-400" />
                            <div className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                              <span className="flex items-center">30%</span>
                            </div>
                          </div>
                          <div className="ml-2 w-full flex-1">
                            <div>
                              <div className="mt-3 text-3xl font-bold leading-8">{data.posts.length}</div>
                              <div className="mt-1 text-base text-gray-600">Total Postforum</div>
                            </div>
                          </div>
                        </div>
                      </a>

                      <a
                        className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                        href="#"
                      >
                        <div className="p-5">
                          <div className="flex justify-between">
                            <GrArticle className="h-7 w-7 text-yellow-400" />
                            <div className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                              <span className="flex items-center">30%</span>
                            </div>
                          </div>
                          <div className="ml-2 w-full flex-1">
                            <div>
                              <div className="mt-3 text-3xl font-bold leading-8">{data.articles.length}</div>
                              <div className="mt-1 text-base text-gray-600">Total postarticle</div>
                            </div>
                          </div>
                        </div>
                      </a>


                      <a
                        className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                        href="#"
                      >
                        <div className="p-5">
                          <div className="flex justify-between">
                            <GiShadowFollower className="h-7 w-7 text-yellow-400" />
                            <div className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                              <span className="flex items-center">30%</span>
                            </div>
                          </div>
                          <div className="ml-2 w-full flex-1">
                            <div>
                              {/* <div className="mt-3 text-3xl font-bold leading-8">{data.total_followers}</div> */}
                              <div className="mt-3 text-3xl font-bold leading-8">2</div>
                              <div className="mt-1 text-base text-gray-600">Total Follower</div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                        href="#"
                      >
                        <div className="p-5">
                          <div className="flex justify-between">
                            <AiFillLike className="h-7 w-7 text-yellow-400" />
                            <div className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                              <span className="flex items-center">30%</span>
                            </div>
                          </div>
                          <div className="ml-2 w-full flex-1">
                            <div>
                              {/* <div className="mt-3 text-3xl font-bold leading-8">{data.likes}</div> */}
                              <div className="mt-3 text-3xl font-bold leading-8">0</div>
                              <div className="mt-1 text-base text-gray-600">Total Like</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      <section className="flex max-w-screen-2xl mx-auto mt-5">
        <DashboardDetail />
        <div className="mt-10">
          <DashboardDetailChart />
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;

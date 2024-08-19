import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/layout/Layout";
import Error from "./page/error-page/Error";
import Create from "./page/create/Create";
import Register from "./page/auth/Register";
import Login from "./page/auth/Login";
import Home from "./page/home/Home";
import LessonDetailPage from "./page/lessonDetailPage/LessonDetailPage";
import BookDetailPage from "./page/bookDetailPage/BookDetailPage";
import Create_forum_detail from "./page/create_forum_detail/Create_forum_detail";
import BlogDetailPage from "./page/blogDetailPage/BlogDetailPage";
import CreateCommentPage from "./page/createCommentPage/CreateCommentPage";
import Lesson from "./page/lesson/Lesson";
import Book from "./page/book/Book";
import Forum from "./page/forum/Forum";
import Blog from "./page/blog/Blog";
import AboutUs from "./page/about-us/AboutUs";
import PageVerify from "./page/optpage/PageVerify";
import DashboardPage from "./page/dashBoardPage/DashboardPage";
import ArticlePage from "./page/articlePage/ArticlePage";
import SettingPage from "./page/settingPage/SettingPage";
import DashboardPageDetail from "./page/dashboardPageDetail/DashboardPageDetail";
import ForumContent from "./components/forumContent/ForumContent";
import PostArticlePage from "./page/postArticlePage/PostArticlePage";
import GetForumPage from "./page/getForumPage/GetForumPage";
import EditArticlePage from "./page/editArticlePage/EditArticlePage";
import EditForumPage from "./page/editForumPage/EditForumPage";

import { GoogleOAuthProvider } from "@react-oauth/google";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/book", element: <Book /> },
      { path: "/lesson", element: <Lesson /> },
      { path: "/forum", element: <Forum /> },
      { path: "/blog", element: <Blog /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/create", element: <Create /> },
      { path: "/createComment/:id", element: <CreateCommentPage /> },
      { path: "/home", element: <Home /> },
      { path: "/book", element: <Book /> },
      { path: "/lesson", element: <Lesson /> },
      { path: "/forum", element: <ForumContent /> },
      { path: "/blog", element: <Blog /> },
      { path: "/bookDetail/:id", element: <BookDetailPage /> },
      { path: "/lessonDetail/:id", element: <LessonDetailPage /> },
      { path: "/blogDetail/:id", element: <BlogDetailPage /> },
      { path: "/editArticle/:id", element: <EditArticlePage /> },
      { path: "/editForum/:id", element: <EditForumPage /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  { path: "/create_forum", element: <Create_forum_detail /> },

  { path: "/bookAllCard", element: <Book /> },

  { path: "/blogDetail", element: <BlogDetailPage /> },

  { path: "/otp", element: <PageVerify /> },
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/dashboardDetail", element: <DashboardPageDetail /> },
  { path: "/article", element: <ArticlePage /> },
  { path: "/getForum", element: <GetForumPage /> },
  { path: "/setting", element: <SettingPage /> },
  { path: "/postArticle", element: <PostArticlePage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="1071896170769-iv3ggmiq41d1jsfe723tk81dkauv2fp1.apps.googleusercontent.com">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </GoogleOAuthProvider>
);

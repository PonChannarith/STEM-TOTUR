import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AUTH_HEADER } from "../../services/constants";
import Background from "../../components/background/Background";
import BookCard from "../../components/bookCard/BookCard";
import FooterCard from "../../components/footer/FooterCard";
import LessonCard from "../../components/lessonCard/LessonCard";
import BlogCard from "../../components/blogCard/BlogCard";
import ForumCard from "../../components/forumCard/ForumCard";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import GeminiChat from "../../components/gemini/gemini";

const Home = () => {
  const navigate = useNavigate();
  const [hasAccessToken, setHasAccessToken] = useState(false);
  const handleNavigate = (path) => {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      navigate("/login");
    } else {
      navigate(path);
    }
  };
  const handleSignOut = () => {
    try {
      localStorage.removeItem("access_token");
      delete AUTH_HEADER.Authorization;
      alert("You have been successfully signed out.");
      navigate("/login");
    } catch (error) {
      alert("There was an error signing you out. Please try again.");
      console.error(error);
    }
  };
  return (
    <div >
      <Background />
      <section className="mt-[10px] m-3">
      {/* gemini chat AI */}
      <section className="w-[80%] mx-auto">
        <GeminiChat />
      </section>
        <BookCard />
      </section>
      <section className="mt-[10px]">
        <LessonCard />
      </section>
      <section className="mt-[10px]">
        <ForumCard />
      </section>
      <section className="mt-[10px] ">
        <BlogCard />
      </section>
      <FooterCard />
    </div>
  );
};

export default Home;


import React from "react";
import { Link } from "react-router-dom";

const LessonAllCard = ({ lesson }) => {
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  const randomViewsCount = Math.floor(Math.random() * 1000) + 1;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full border">
      <Link to={/lessonDetail/ + lesson.id}>
        <img
          src={
            isValidUrl(lesson.lesson_image)
              ? lesson.lesson_image
              : "https://blog.snappymob.com/wp-content/uploads/2020/12/8-Tips-for-Designing-Empty-Placeholder-Pages-Leni-Featured.png"
          }
          alt="Lesson Image"
          className="w-full h-[250px] object-cover rounded-lg"
        />
      </Link>
      <div className="p-[10px]">
        <h2 className="text-[18px] font-bold text-gray-800 mb-2 font-suwannaphum line-clamp-1">
          {lesson.lesson_title}
        </h2>
        <p className="text-gray-700 text-[17px] leading-tight mt-3 font-suwannaphum line-clamp-1">
          {lesson.lesson_description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex justify-center">
            <button className="h-[25px] ​​​text-[10px]  text-sm px-2 md:text-[7px] xl:text-[17px] xl:h-[35px] mt-4  rounded-md bg-gradient-to-r from-blue-500 to-blue-700 xl:px-2 xlpy-1 text-white text-[18px] font-suwannaphum">
              ឥតគិតថ្លៃ
            </button>
          </div>
          <span className="text-[14px] md:text-[16px] lg:text-[15px] text-gray-600 mt-5 font-suwannaphum xl:text-[18px]">
            ចំនួនអ្នកមើល​​ : {randomViewsCount}​ នាក់
          </span>
        </div>
      </div>
    </div>
  );
};

export default LessonAllCard;

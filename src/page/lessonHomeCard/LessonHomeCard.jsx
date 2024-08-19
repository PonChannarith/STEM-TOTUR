import { useEffect, useState } from "react";
import LessonCard from "../../components/lessonCard/LessonCard";
import ButtonMenu from "../../components/button_Menu/ButtonMenu";
import { fetchLesson } from "../../services/fetchLesson";
import LessonAllCard from "../../components/lessonAllCard/LessonAllCard";
import Paginatin from "../../components/pagination/Paginatin";
import FooterCard from "../../components/footer/FooterCard";
const LessHomeCard = () => {
  return (
    <>
      <ButtonMenu />
      <section
        id="Projects"
        className="max-w-screen-2xl p-10  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5 "
      >
        <LessonAllCard />
      </section>
      <Paginatin />
      <FooterCard />
    </>
  );
};

export default LessHomeCard;

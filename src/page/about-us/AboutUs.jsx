import React, { useEffect, useState } from "react";
import AllAboutUs from "../../components/allAboutUs/AllAboutUs";
import FooterCard from "../../components/footer/FooterCard";
import Spinner from "../../components/appSpinner/Spinner";
import NavbarComponent from "../../components/navbar/NavbarComponent";
const AboutUs = () => {
  const [isloading, setIsloading] = useState(true);
  const onLessonFetch = () => {
    setIsloading(false);
  };
  useEffect(() => {
    onLessonFetch(); // Fetch lessons on component mount
  }, []);

  return (
    <>
      {isloading ? <Spinner /> : <AllAboutUs />}

      <div className="mt-20">
        <FooterCard />
      </div>
    </>
  );
};

export default AboutUs;

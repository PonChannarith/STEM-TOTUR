import React from "react";
import Create_Forum from "../../components/create_forum/Create_Forum";
import FooterCard from "../../components/footer/FooterCard";
import NavbarComponent from "../../components/navbar/NavbarComponent";

const Create_forum_detail = () => {
  return (
    <div>
      <NavbarComponent />
      <Create_Forum />
      <FooterCard />
    </div>
  );
};
export default Create_forum_detail;

import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
const FooterCard = () => {
  return (
    <>
      <Footer container className=" bg-[#16A1DF] ">
        <div className="w-[95%] h-auto mx-auto">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
            <Footer.Brand
                src="../src/assets/STEM_TOTUR.jpg"
                className="w-16 h-16 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-28 xl:h-28 rounded-full object-cover xl:-ml-5"
                alt="Stem Logo"
              />
              <span className="text-[17px] font-suwannaphum text-white">
                STEM website
                ​ដែល​រចនា​ឡើង​សម្រាប់​សិស្សដើម្បី​ចូល​រួម​ក្នុង​ការ​សិក្សា​សហការ
                និង​ការ​ចែក​រំលែក​ចំណេះដឹង <br />
                អ្នកប្រើប្រាស់មានការគ្រប់គ្រងពេញលេញលើការធ្វើដំណើររបស់ពួកគេនិងបង្កើតមេរៀននៅក្នុងវេទិកា។
              </span>
            </div>

            <div className="mt-5 grid gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
              <div>
                <Footer.Title
                  title="គេហទំព័រ"
                  className="font-suwannaphum text-[17px] font-semibold text-white ml-4"
                />
                <Footer.LinkGroup
                  col
                  className="text-[17px] font-medium font-suwannaphum text-white"
                >
                  <Footer.Link href="#">មេរៀន</Footer.Link>
                  <Footer.Link href="#">ប្លុក</Footer.Link>
                  <Footer.Link href="#">វេទិកា</Footer.Link>
                  <Footer.Link href="#">វីដេអូ</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  title="ព័ត៌មាន"
                  className="font-suwannaphum text-[17px] font-semibold text-white ml-4"
                />
                <Footer.LinkGroup
                  col
                  className="text-[17px] font-medium font-suwannaphum text-white"
                >
                  <Footer.Link href="#">លក្ខខណ្ឌប្រើប្រាស់</Footer.Link>
                  <Footer.Link href="#">សាកសួរព័ត៌មាន</Footer.Link>
                  <Footer.Link href="#">អំពីយើង</Footer.Link>
                  <Footer.Link href="#">ដោះស្រាយបញ្ហា</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  title="ទំនាក់ទំនងមកពួកយើង"
                  className="font-suwannaphum text-[17px] font-semibold text-white ml-4"
                />
                <Footer.LinkGroup
                  col
                  className="text-[17px] font-medium font-suwannaphum text-white"
                >
                  <Footer.Link href="#">អាសយដ្ធាន</Footer.Link>
                  <Footer.Link href="#">ក្រុមការងារ</Footer.Link>
                  <Footer.Link href="#">ផ្សេងៗ</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between text-white">
            <Footer.Copyright href="#" by="2024 STEM(Science, technology, engineering, and mathematics). All Rights Reserved " className="text-white text-[16px] font-suwannaphum"/>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-white">
              <Footer.Icon href="#" icon={BsFacebook} className="text-white hover:text-blue-600"/>
              <Footer.Icon href="#" icon={BsInstagram} className="text-white hover:text-pink-700"/>
              <Footer.Icon href="#" icon={BsTwitter} className="text-white hover:text-blue-500"/>
              <Footer.Icon href="#" icon={BsGithub} className="text-white hover:text-black"/>
              <Footer.Icon href="#" icon={BsDribbble} className="text-white"/>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterCard;

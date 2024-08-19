import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const BookCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of items to show per slide

  const books = [
    {
      imgSrc: "../src/assets/stem_book.jpg",
      title: "ការសិក្សាទាក់ទងទៅនិង STEM",
      description:
        "ស្វែងរកសៀវភៅផ្សេងៗដែលទាក់ទងទៅនឹង Technology ជាពិសេសមានសៀវភៅដែលបង្ហាញ... ",
      views: 44,
    },
    {
      imgSrc: "../src/assets/stem_book_technology.webp",
      title: " STEM sister Cambodia",
      description:
        "បទសម្ភាសន៍អ្នកនាង អេង ឡេងស៊ា អំពីចំណាប់អារម្មណ៍ និងបទពិសោធន៍៖ អ្នកនាងមានចំណាប់...",
      views: 10,
    },
    {
      imgSrc: "../src/assets/Stem_book_technology1.webp",
      title: " ការអនុវត្តកម្មវិធីអប់រំបង្កើតហ្គេម",
      description:
        "ការអនុវត្តកម្មវិធីអប់រំបង្កើតហ្គេមនៅអនុវិទ្យាល័យ កែវពណ៌ ខេត្តសៀមរាប៖កម្មវិធីនេះមានគោលបំណង...",
      views: 24,
    },
    {
      imgSrc: "../src/assets/book_stem3.jpg",
      title: " Exploring STEM Innovations",
      description:
        "This book is designed to facilitate the study of STEM concepts by providing...",
      views: 63,
    },
    {
      imgSrc: "../src/assets/stem_book_technology2.webp",
      title: "GIMP Master Class",
      description:
        "GIMP ជាកម្មវិធីកុំព្យូទ័រ ប្រភេទ Open Source សម្រាប់ការកែសម្រួលរូបភាព និងការបង្កើតក្រាហ្វិក...",
      views: 67,
    },
    {
      imgSrc: "../src/assets/stem_forum_technoligy3.webp",
      title: "OBS Studio",
      description:
        "OBS Studio គឺជាកម្មវិធីសម្រាប់ថត និងផ្សាយផ្ទាល់។ វាអាចប្រើបានទាំង Windows, macOS, Linux...",
      views: 100,
    },
    {
      imgSrc: "../src/assets/stem_book_technology5.webp",
      title: "Virtual Private Netword",
      description:
        "បណ្តាញឯកជននិម្មិត ឬ VPN គឺជាការតភ្ជាប់ដែលបានអ៊ិនគ្រីបតាមអ៊ីនធឺណិតពីពីឧបករណ៍របស់អ្នកទៅ...",
      views: 94,
    },
    {
      imgSrc: "../src/assets/stem_book_technology6.webp",
      title: "រចនារូបភាពនៅលើកម្មវិធី Canva",
      description:
        "Canva គឺជាវេទិការចនាក្រាហ្វិចពហុជាតិជាសកលរបស់អូស្ត្រាលី ដែលត្រូវបានប្រើប្រាស់សម្រាប់ការ...",
      views: 9,
    },
    // Add more books as needed
  ];

  const totalSlides = Math.ceil(books.length / itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <>
      <section className="flex  justify-between mt-5 gap w-[95%] mx-auto font-suwannaphum mb-10">
        <span className=" font-bold text-[#16A1DF] xl:text-[25px] ">សៀវភៅ</span>
        <Link to="/book">
          <span className="flex items-center text-black xl:text-[25px]">
            បង្ហាញទាំងអស់
            <FaArrowRight />
          </span>
        </Link>
      </section>
      {/* section stem */}
      <nav className="text-1xl font-suwannaphum text-center md:text-2xl xl:text-3xl font-semibold mb-5">
        <marquee behavior="" direction="">
          សូមស្វាគមន៍មកកាន់ STEM
        </marquee>
      </nav>
      {/* Slide bar */}
      <section className="relative w-[96%] mx-auto overflow-hidden rounded-lg mb-5 gap-5">
        <div
          className="flex transition-transform  ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {books.map((book, index) => (
            <Link
              to="/book"
              key={index}
              className="flex-shrink-0 w-[96%] sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2"
            >
              <div className="border  bg-white text-gray-700 shadow-md rounded-lg ">
                <div className="relative h-[250px] overflow-hidden ">
                  <img
                    className="w-full h-[200px] xl:h-full xl:w-full object-cover rounded-t-md  hover:scale-105 transition-transform duration-500 ease-in-out"
                    src={book.imgSrc}
                    alt={book.title}
                  />
                </div>
                <div className="p-3">
                  <h4 className="line-clamp-1 text-[18px]  -mt-12 md:text-[18px] lg:text-[19px] md:line-clamp-1 lg:line-clamp-1   block font-suwannaphum xl:text-xl xl:mt-4 font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {book.title}
                  </h4>
                  <span className="line-clamp-2 mt-2 text-[15px] xl:h-[50px] xl:mb-7 block mb-5  md:line-clamp-2 lg:line-clamp-2 xl:line-clamp-2 2xl:line-clamp-3 font-suwannaphum  xl:text-lg  antialiased font-normal leading-relaxed text-gray-900">
                    {book.description}
                  </span>
                </div>
                <div className="border-t -mt-5 ">
                  <div className="flex items-center justify-between p-3 mt-1">
                    <p className="font-suwannaphum  text-black xl:text-md">
                      ចំនួនអ្នកមេីល: {book.views} នាក់
                    </p>
                    <div className="flex items-center text-lg">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-3 h-3 text-yellow-400 text-lg"
                        >
                          <path
                          className="text-lg"
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black p-1 xs:p-2 sm:p-3 md:p-4 lg:p-3 xl:p-4 rounded-full hover:bg-gray-700 transition-colors"
          >
            <FaChevronLeft className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black p-1 xs:p-2 sm:p-3 md:p-3 lg:p-4 xl:p-4 rounded-full hover:bg-gray-700 transition-colors"
          >
            <FaChevronRight className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5"  />
          </button>
      </section>
      {/* Bookcard no slide */}
      <Link to="/book">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[95%] mx-auto">
          {/* Card 1 */}
          <div className="border rounded-lg bg-white text-gray-700 shadow-sm transition-transform duration-500 ease-in-out">
            <div className="relative h-full w-full overflow-hidden">
              <img
                className="h-full w-full object-cover rounded-t-lg"
                src="../src/assets/Lesspn_STEM.jpg"
                alt="Stem Book"
              />
              <div className="absolute inset-0 font-suwannaphum bg-transparent hover:bg-slate-300 opacity-0 hover:opacity-60 transition-opacity duration-300 ease-in-out flex items-center justify-center p-3">
                <h2 className="text-black text-[20px] sm:text-[25px] font-suwannaphum text-center font-bold">
                  ការសិក្សាផ្សេងៗដែលទាក់ទងទៅនិង STEM
                  <br />
                  <span className="text-[14px] sm:text-[18px]">
                    ស្វែងរកសៀវភៅផ្សេងៗដែលទាក់ទងទៅនឹង Technology
                  </span>
                </h2>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="border rounded-lg bg-white text-gray-700 shadow-md h-full">
            <div className="relative h-[250px] overflow-hidden">
              <img
                className="h-full w-full object-cover rounded-t-lg hover:scale-110 transition-transform duration-500 ease-linear"
                src="../src/assets/IOS programming.jpg"
                alt=""
              />
            </div>
            <div className="p-3 mb-4">
              <h4 className="block font-suwannaphum text-lg sm:text-xl font-bold leading-snug tracking-normal text-blue-gray-900">
                IOS Programming 16
              </h4>
              <span className="line-clamp-2 block font-suwannaphum mt-2 text-sm sm:text-base antialiased font-normal md:line-clamp-2 lg:line-clamp-2 xl:line-clamp-2 2xl:line-clamp-2 leading-relaxed text-gray-700">
                សៀវភៅនេះគ្របដណ្តប់អ្វីគ្រប់យ៉ាងដែលអ្នកត្រូវរៀនសម្រាប់ការអភិវឌ្ឍន៍កម្មវិធី iOS ។ Swift គ្រាន់តែ...
              </span>
            </div>
            <div className="border-t">
              <div className="flex items-center justify-between p-3">
                <p className="font-suwannaphum text-sm sm:text-md text-black">
                  ចំនួនអ្នកមេីល: 10 នាក់
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 text-yellow-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="border rounded-lg bg-white text-gray-700 shadow-md h-full">
            <div className="relative h-[250px] overflow-hidden">
              <img
                className="h-full w-full object-cover rounded-t-lg hover:scale-110 transition-transform duration-500 ease-linear"
                src="../src/assets/Python crash course E.jpg"
                alt=""
              />
            </div>
            <div className="p-3 mb-4">
              <h4 className="block font-suwannaphum text-lg sm:text-xl font-bold leading-snug tracking-normal text-blue-gray-900">
                Python Crash Course
              </h4>
              <span className="line-clamp-2 block font-suwannaphum mt-2 text-sm sm:text-base antialiased font-normal md:line-clamp-2 lg:line-clamp-2 xl:line-clamp-2 2xl:line-clamp-2 leading-relaxed text-gray-700">
                Python Crash Course គឺជាសៀវភៅណែនាំដែលលក់ដាច់បំផុតរបស់ពិភពលោកចំពោះភាសាសរសេរ...
              </span>
            </div>
            <div className="border-t">
              <div className="flex items-center justify-between p-3">
                <p className="font-suwannaphum text-sm sm:text-md text-black">
                  ចំនួនអ្នកមេីល: 22 នាក់
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 text-yellow-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="border rounded-lg bg-white text-gray-700 shadow-md h-full">
            <div className="relative h-[250px] overflow-hidden">
              <img
                className="h-full w-full object-cover rounded-t-lg hover:scale-110 transition-transform duration-500 ease-linear"
                src="../src/assets/Mathematic.jpg"
                alt=""
              />
            </div>
            <div className="p-3 mb-4">
              <h4 className="block font-suwannaphum text-lg sm:text-xl font-bold leading-snug tracking-normal text-blue-gray-900">
                ការណែនាំអំពីគណិតវិទ្យា
              </h4>
              <span className="block mt-2 font-suwannaphum text-sm sm:text-base antialiased font-normal leading-relaxed text-gray-700 ">
                ស្វែងយល់ពីមូលដ្ឋានគ្រឹះការដោះស្រាយបញ្ហាប្រចាំថ្ងៃតាមរយៈនព្វន្ធ
                ពិជគណិត ធរណីមាត្រ និងការ...
              </span>
            </div>
            <div className="border-t">
              <div className="flex items-center justify-between p-3">
                <p className="font-suwannaphum text-sm sm:text-md text-black">
                  ចំនួនអ្នកមេីល: 27 នាក់
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 text-yellow-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Link>
    </>
  );
};

export default BookCard;

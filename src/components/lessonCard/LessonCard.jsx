import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const LessonCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of items to show per slide

  const lessons = [
    {
      imgSrc: "../src/assets/Theory and Practice.jpg",
      title: "គណិតវិទ្យា ទ្រឹស្តី​ និង​ ការអនុវត្តន៏​",
      description:
        "គណិតវិទ្យាត្រូវបានប្រើដើម្បីដោះស្រាយបញ្ហាក្នុងពិភពពិតក្នុងវិស័យដូចជា ហិរញ្ញវត្ថុ វិស្វកម្ម វិទ្យាសាស្ត្រ...",
      views: 44, 
    },
    {
      imgSrc: "../src/assets/Design Fundamentals.jpg",
      title: "Design Fundamentals",
      description:
        "សិក្សាពីគោលការណ៍សនៃការរចនា រួមទាំង​ vlogនិងការបង្ហាញពីវិធីសាស្ត្រសំខាន់ៗក្នុងការបង្កើតផលិតផ...",
      views: 10,
    },
    {
      imgSrc: "../src/assets/Transforming Ideas.jpg",
      title: "Transforming Ideas into Visual",
      description:
        "យល់ពីរបៀបបង្វែរគំនិតទៅជាការរចនាដែលគួរអោយទាក់ទាញ បង្ហាញពីបច្ចេកទេសសម្រាប់ការបង្ហាញនិង...",
      views: 24,
    },
    {
      imgSrc: "../src/assets/physic.jpg",
      title: "មូលដ្ឋានគ្រឹះនៃរូបវិទ្យា",
      description:
        "ស្វែងយល់ពីគោលគំនិតជាមូលដ្ឋាននៃរូបវិទ្យាពីមេកានិចបុរាណ រហូតដល់ទ្រឹស្តីទំនើប ដើម្បីអភិវឌ្ឍចំណេះដឹង...",
      views: 63,
    },
    {
      imgSrc: "../src/assets/A Journey of Physics.jpg",
      title: "A Journey of Physics",
      description:
        "ស្វែងយល់ពីព្រឹត្តិការណ៍សំខាន់ៗក្នុងការអភិវឌ្ឍន៍រូបវិទ្យា ពីមេកានិច Newtonian រហូតដល់ទ្រឹស្តីនៃរូបវិទ្យា...",
      views: 67,
    },
    {
      imgSrc: "../src/assets/frontend.jpg",
      title: "Frontend Fundamentals",
      description:
        "Building the Web Experience សិក្សាពីគោលគំនិតស្នូលនៃការអភិវឌ្ឍន៍ Frontendដើម្បីបង្កើតបទ...",
      views: 100,
    },
    {
      imgSrc: "../src/assets/Designing User Interfaces.jpg",
      title: "Designing User Interfaces",
      description:
        "ស្វែងយល់ពីគោលការណ៍នៃការរចនា និងបច្ចេកទេសអភិវឌ្ឍន៍ Frontendត្រូវបានប្រើដើម្បីបង្កើតបទពិ...",
      views: 94,
    },
    {
      imgSrc: "../src/assets/Electronics E.jpg",
      title: "Electronics",
      description:
        "អេឡិចត្រូនិកស្វែងយល់ពីលក្ខណៈសម្បត្តិ និងកម្មវិធីនៃធាតុផ្សំដាច់ពីគ្នា ដែលជាប្លុកគ្រឹះនៃការរចនាសៀគ្វីការ..",
      views: 9,
    },
    // Add more books as needed
  ];

  const totalSlides = Math.ceil(lessons.length / itemsPerPage);

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
      <section className="flex  justify-between mt-5 gap w-[94%] mx-auto font-suwannaphum mb-10">
        <h3 className=" font-bold text-[#16A1DF] xl:text-[25px]">មេរៀន</h3>
        <Link to="/lesson">
          <span className="flex items-center text-black xl:text-[25px]">
            បង្ហាញទាំងអស់
            <FaArrowRight />
          </span>
        </Link>
      </section>

      {/* slide bar */}
      <section className="relative w-[95%] mx-auto overflow-hidden rounded-lg mb-5 gap-4">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {lessons.map((book, index) => (
            <Link
              to="/lesson"
              key={index}
              className="flex-shrink-0 w-[96%] sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2"
            >
              <div className="border bg-white text-gray-700 shadow-md rounded-lg">
                <div className="relative h-[250px] overflow-hidden">
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
                <div className="border-t -mt-5">
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
                          className="w-3 h-3 text-yellow-400 text-md"
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
          <FaChevronRight className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
        </button>
      </section>

      {/* second section */}
      <Link to="/lesson">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[94%] mx-auto">
        <div className="border rounded-lg bg-white text-gray-700 shadow-sm transition-transform duration-500 ease-in-out">
            <div className="relative h-full w-full overflow-hidden">
              <img
                className="h-full w-full object-cover opacity-100 transition duration-300 ease-in-out transform scale-100 rounded-t-lg "
                src="../src/assets/Lesson.webp"
                alt="Stem Book"
              />
              <div className="absolute inset-0 font-suwannaphum bg-transparent hover:bg-slate-300 opacity-0 hover:opacity-60 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                <h2 className="text-black text-[20px] sm:text-[25px] font-suwannaphum text-center font-bold">
                  ការសិក្សាវីដេអូដែលទាក់ទងនឹង STEM
                  <br />
                  <span className="text-[14px] sm:text-[18px]">
                    ស្វែងរកវីដេអូផ្សេងៗដែលទាក់ទងនឹង Technology
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {/* Card1 */}
          <div className="border rounded-xl bg-white text-gray-700 shadow-md h-[430px]">
            <div className="relative h-[250px] overflow-hidden">
              <img
                className="h-full w-full object-cover rounded-t-md  hover:scale-105 transition-transform duration-500 ease-in-out"
                src="../src/assets/Photoshop Basics.jpg"
                alt=""
              />
            </div>
            <div className="p-3 mb-5">
              <h4 className="block font-suwannaphum text-xl font-bold leading-snug tracking-normal text-blue-gray-900">
                Photoshop Basics
              </h4>
              <span className="h-[50px] block font-suwannaphum mt-2 text-l antialiased font-normal leading-relaxed text-gray-700">
                ចាប់ផ្តើមជាមួយ Adobe Photoshop ដោយសិក្សាឧបករណ៍
                និងបច្ចេកទេសជាមូលដ្ឋានសម្រាប់កែ...
              </span>
            </div>

            <div className="border-t">
              <div className="flex items-center justify-between p-3 mt-1">
                <p className="font-suwannaphum text-md text-black ">
                  ចំនួនអ្នកមេីល: 100 នាក់
                </p>
                <div className="flex items-center text-[15px] ">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                     className="w-3 h-3 text-yellow-400 text-md"
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
          {/* Card2 */}
          <div className="border rounded-xl bg-white text-gray-700 shadow-md h-[430px]">
            <div className="relative h-[250px] overflow-hidden">
              <img
                className="h-full w-full object-cover rounded-t-md  hover:scale-105 transition-transform duration-500 ease-in-out"
                src="../src/assets/Logic for kid E.jpg"
                alt=""
              />
            </div>
            <div className="p-3 mb-4">
              <h4 className="block font-suwannaphum text-lg sm:text-xl font-bold leading-snug tracking-normal text-blue-gray-900">
                Ask A Scientist
              </h4>
              <span className="line-clamp-2 block font-suwannaphum mt-2 text-sm sm:text-base antialiased font-normal md:line-clamp-2 lg:line-clamp-2 xl:line-clamp-2 2xl:line-clamp-2 leading-relaxed text-gray-700">
                នៅក្នុងសៀវភៅវិទ្យាសាស្ត្រដ៏ពិសេសនេះសាស្ត្រាចារ្យ Robert Winston
                ឆ្លើយសំណួរជីវិតពិតជាង100ពី...
              </span>
            </div>

            <div className="border-t">
              <div className="flex items-center justify-between p-3 mt-1">
                <p className="font-suwannaphum text-sm sm:text-md text-black">
                  ចំនួនអ្នកមេីល: 56 នាក់
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 text-yellow-400 text-md"
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
          {/* Card3 */}
          <div className="border rounded-xl bg-white text-gray-700 shadow-md h-[430px]">
            <div className="relative h-[250px] overflow-hidden">
              <img
                className="h-full w-full object-cover rounded-t-md  hover:scale-105 transition-transform duration-500 ease-in-out"
                src="../src/assets/The simple science activity E.jpg"
                alt=""
              />
            </div>
            <div className="p-3 mb-4">
              <h4 className="block font-suwannaphum text-lg sm:text-xl font-bold leading-snug tracking-normal text-blue-gray-900">
                The Science Activity
              </h4>
              <span className="line-clamp-2 block font-suwannaphum mt-2 text-sm sm:text-base antialiased font-normal md:line-clamp-2 lg:line-clamp-2 xl:line-clamp-2 2xl:line-clamp-2 leading-relaxed text-gray-700">
                ក្មេងតូចៗនឹងក្លាយជាអ្នកវិទ្យាសាស្ត្រតូចៗ នៅពេលដែលពួកគេរុករក
                ពិសោធន៍ បង្កើត និងបង្កើតផ្លូវរបស់ពួកគេ...
              </span>
            </div>

            <div className="border-t">
              <div className="flex items-center justify-between p-3 mt-1">
                <p className="font-suwannaphum text-sm sm:text-md text-black">
                  ចំនួនអ្នកមេីល: 27 នាក់
                </p>
                <div className="flex items-center text-[15px] ">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                     className="w-3 h-3 text-yellow-400 text-md"
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

export default LessonCard;

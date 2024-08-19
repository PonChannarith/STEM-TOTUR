import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const ForumCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of items to show per slide
  const forums = [
    {
      imgSrc: "../src/assets/Science in the city​ E.jpg",
      title: "Science in the City",
      description:
        "សៀវភៅនេះភ្ជាប់ការរុករកនៃការស្រាវជ្រាវសហសម័យស្តីពីការបង្រៀនវិទ្យាសាស្ត្រទៅនឹងវិធីសាស្រ្តបង្រៀន...",
      views: 44,
    },
    {
      imgSrc: "../src/assets/A Framework for K-12.jpg",
      title: "Framework for K-12",
      description:
        "វិទ្យាសាស្ត្រ វិស្វកម្ម និងបច្ចេកវិជ្ជា ជាគន្លឹះក្នុងការដោះស្រាយបញ្ហាប្រឈមសំខាន់ៗជាច្រើននាពេលបច្ចុប្បន្ន...",
      views: 10,
    },
    {
      imgSrc: "../src/assets/Designing with Photoshop.jpg",
      title: "Designing with Photoshop",
      description:
        "Photoshop សម្រាប់ការរចនាក្រាហ្វិក រួមទាំងការបង្កើតរូបភាពដ៏អស្ចារ្យ និងក្រាហ្វិកប្រកបដោយប្រសិទ្ធ...",
      views: 24,
    },
    {
      imgSrc: "../src/assets/Creative with Photoshop.jpg",
      title: "Creative with Photoshop",
      description:
        "Tips and Techniques:ស្វែងយល់ពីបច្ចេកទេសសម្រាប់ការរៀបចំរូបភាពប្រកបដោយភាពច្នៃប្រឌិត...",
      views: 63,
    },
    {
      imgSrc: "../src/assets/Open middle math E.jpg",
      title: "Open Middle Math",
      description:
        "សៀវភៅនេះសម្រាប់គ្រូក្នុងការជួយសិស្សឱ្យអភិវឌ្ឍទាំងភាពស្ទាត់ជំនាញ ការបង្កើតបញ្ហាគណិតវិទ្យា Open...",
      views: 67,
    },
    {
      imgSrc: "../src/assets/Learning STEM.jpg",
      title: "Learning STEM",
      description:
        "ការរៀន STEM ផ្តោតលើការរៀនដែលមានតែមួយគត់ចំពោះការបង្រៀនវិទ្យាសាស្ត្រ បច្ចេកវិទ្យា វិស្វកម្ម និ...",
      views: 100,
    },
    {
      imgSrc: "../src/assets/Video Production.jpg",
      title: "Video Production",
      description:
        "ស្វែងយល់ពីរបៀបបង្កើតគំនិតគួរឱ្យទាក់ទាញ រៀបចំផែនការថតរបស់អ្នក និងអនុវត្តការថតដោយយកចិត្ត...",
      views: 94,
    },
    {
      imgSrc: "../src/assets/Creating Compelling Video E.jpg",
      title: "Creating Compelling Video ",
      description:
        "ស្វែងយល់ពីរបៀបបង្កើតរឿងគួរឱ្យទាក់ទាញអារម្មណ៍ រៀបចំផែនការធាតុរូបភាព សំឡេង និងប្រើប្រាស់ឧប...",
      views: 9,
    },
    // Add more books as needed
  ];

  const totalSlides = Math.ceil(forums.length / itemsPerPage);

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
        <h3 className="font-bold text-[#16A1DF] xl:text-[25px]">វេទិកា</h3>
        <Link to="/forum">
          <span className="flex items-center text-black xl:text-[25px]">
            បង្ហាញទាំងអស់
            <FaArrowRightLong />
          </span>
        </Link>
      </section>
      <Link to="/forum">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[94%] mx-auto">
          <div className="border rounded-lg bg-white text-gray-700 shadow-sm h-[430px]">
            <div className="relative h-full w-full overflow-hidden">
              <img
                className="h-full w-full rounded-md object-cover opacity-100 transition duration-300 ease-in-out transform scale-100"
                src="../src/assets/Forum Part.jpg"
                alt="Stem Book"
              />
              <div className="absolute inset-0 font-suwannaphum bg-transparent hover:bg-slate-300 opacity-0 hover:opacity-60 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                  <h2 className="text-black text-[20px] font-suwannaphum text-center font-bold">
                      ចែករំលែកដំណឹងទាក់ទងទៅនិង STEM
                      <br />
                      <span className="text-[18px]">
                          ស្វែងរកអត្ថបទផ្សេងៗដែលទាក់ទងទៅនឹងវិទ្យាសាស្រ្ត និងបច្ចេកវិទ្យា
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
                src="../src/assets/chamistry of products.jpg"
                alt=""
              />
            </div>
            <div className="p-3 mb-4">
              <h4 className="block font-suwannaphum text-lg line-clamp-1 sm:text-xl font-bold leading-snug tracking-normal text-blue-gray-900">
                Chemistry of Products
              </h4>
              <span className="line-clamp-2 block font-suwannaphum mt-2 text-sm sm:text-base antialiased font-normal md:line-clamp-2 lg:line-clamp-2 xl:line-clamp-2 2xl:line-clamp-2 leading-relaxed text-gray-700">
                ស្វែងយល់ពីរបកគំហើញចុងក្រោយបំផុតនៅក្នុងគីមីវិទ្យាសរីរាង្គ
                រួមទាំងវិធីសាស្ត្រសំយោគថ្មី និងកម្មវិធីនៅក្នុង...
              </span>
            </div>

            <div className="border-t">
              <div className="flex items-center justify-between p-3 mt-1">
                <p className="font-suwannaphum text-md text-black ">
                  ចំនួនអ្នកមេីល: 100 នាក់
                </p>
                <div className="flex items-center text-md">
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
                src="../src/assets/From Batch to Stream.jpg"
                alt=""
              />
            </div>
            <div className="p-3 mb-4">
              <h4 className="block font-suwannaphum text-lg sm:text-xl font-bold leading-snug tracking-normal text-blue-gray-900">
                From Batch to Stream
              </h4>
              <span className="line-clamp-2 block font-suwannaphum mt-2 text-sm sm:text-base antialiased font-normal md:line-clamp-2 lg:line-clamp-2 xl:line-clamp-2 2xl:line-clamp-2 leading-relaxed text-gray-700">
                ស្វែងយល់ពីវិធីសាស្រ្តផ្សេងៗចំពោះដំណើរការទិន្នន័យធំ
                រួមទាំងដំណើរការជាបាច់ និងដំណើរការស្ទ្រីមតាមពេ...
              </span>
            </div>

            <div className="border-t">
              <div className="flex items-center justify-between p-3 mt-1">
                <p className="font-suwannaphum text-md text-black ">
                  ចំនួនអ្នកមេីល: 56 នាក់
                </p>
                <div className="flex items-center text-md">
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
          {/* Card3 */}
          <div className="border rounded-xl bg-white text-gray-700 shadow-md h-[430px]">
            <div className="relative h-[250px] overflow-hidden">
              <img
                className="h-full w-full object-cover rounded-t-md  hover:scale-105 transition-transform duration-500 ease-in-out"
                src="../src/assets/Machine Learning.jpg"
                alt=""
              />
            </div>
            <div className="p-3 mb-4">
              <h4 className="block font-suwannaphum text-lg sm:text-xl font-bold leading-snug tracking-normal text-blue-gray-900">
                Machine Learning
              </h4>
              <span className="line-clamp-2 block font-suwannaphum mt-2 text-sm sm:text-base antialiased font-normal md:line-clamp-2 lg:line-clamp-2 xl:line-clamp-2 2xl:line-clamp-2 leading-relaxed text-gray-700">
                Big Data with Machine Learning ស្វែងយល់ពីរបៀបដែល Big Data
                ជួយបង្កើន model ដោយ...
              </span>
            </div>

            <div className="border-t">
              <div className="flex items-center justify-between p-3 mt-1">
                <p className="font-suwannaphum text-md text-black ">
                  ចំនួនអ្នកមេីល: 27 នាក់
                </p>
                <div className="flex items-center text-md">
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
      <Link to="/forum">
        <section className="relative w-[94%] mx-auto overflow-hidden rounded-lg mt-5 gap-4">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {forums.map((book, index) => (
              <Link
                to="/forum"
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
                      <div className="flex items-center text-md">
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
              </Link>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black p-1 xs:p-2 sm:p-3 md:p-4 lg:p-3 xl:p-4 rounded-full hover:bg-gray-700 transition-colors"
          >
            <FaChevronLeft className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5"/>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black p-1 xs:p-2 sm:p-3 md:p-3 lg:p-4 xl:p-4 rounded-full hover:bg-gray-700 transition-colors"
          >
            <FaChevronRight className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
          </button>
        </section>
      </Link>
    </>
  );
};
export default ForumCard;

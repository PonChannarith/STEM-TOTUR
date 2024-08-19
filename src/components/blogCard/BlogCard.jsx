import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const BlogCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of items to show per slide

  const blogs = [
    {
      imgSrc: "../src/assets/Telegram E.png",
      title: "​កែ​ពុម្ព​អក្សរ​ខ្មែរ​លើ Telegram",
      description:
        "Telegram ជា​កម្មវិធី​ផ្ញើ​សារ (Messenger app) មួយ​ក្នុង​ចំណោម​កម្មវិធី​ដទៃ​ទៀត​ដែល​កំពុង​ពេញ​និ...",
      views: 44,
    },
    {
      imgSrc: "../src/assets/ABA .png",
      title: "​ប្រយ័ត្ន​​ការ​ឆបោក​តាម​អនឡាញ",
      description:
        "ធនាគារ ABA ដែល​ជា​ធនាគារ​មួយ​​នៅ​កម្ពុជា ប្រកាស​ឲ្យ​អតិថិជន​របស់​ខ្លួន​ប្រុង​ប្រយ័ត្ន​ចំពោះ​អំពើ​ឆបោក​ផ្សេ...",
      views: 10,
    },
    {
      imgSrc: "../src/assets/Social Protection.jpg",
      title: "ការ​ការពារ​ខ្លួន​នៅ​លើ​បណ្ដាញ​សង្គម",
      description:
        "អង្គការ Localization Lab ណែនាំ​អ្នក​ប្រើប្រាស់​អ៊ីនធឺណិត​ពី​របៀប​ការពារ​ខ្លួន​នៅ​លើ​បណ្ដាញ​សង្គម...",
      views: 24,
    },
    {
      imgSrc: "../src/assets/Hide IP Telegram.png",
      title: "Hide IP in Telegram",
      description:
        "កម្មវិធី Telegram ប្រើ​នៅ​លើ​កុំព្យូទ័រ (Desktop version) ត្រូវ​បាន​រក​ឃើញ​ថា​លេច​ធ្លាយ​ IP Add...",
      views: 63,
    },
    {
      imgSrc: "../src/assets/Hide Friend List FB.png",
      title: "Hide Friend List",
      description:
        "ជាទូទៅ បណ្ដាញ​ទំនាក់ទំនង​សង្គម​Facebook បាន​កំណត់​ឲ្យ​អ្នក​ប្រើប្រាស់​ហ្វេសប៊ុក​ទាំងអស់​អាច​មើល...",
      views: 67,
    },
    {
      imgSrc: "../src/assets/Microsoft 10 points.png",
      title: "ចំណុច​ខ្សោយ​ Microsoft",
      description:
        "ក្រុមហ៊ុន Microsoft ចេញ​ផ្សាយ​ចំណុច​ខ្សោយ​ធ្ងន់ធ្ងរ​បំផុត​ចំនួន ១០ ក្នុង​ចំណោម​ចំណុច​ខ្សោយ​ទាំងអស់​...",
      views: 100,
    },
    {
      imgSrc: "../src/assets/Koompi Computer.png",
      title: "កុំព្យូទ័រ​ KOOMPI",
      description:
        "កុំព្យូទ័រ KOOMPI ដែល​បង្កើត​ឡើង​ដោយ​កូន​ខ្មែរ នឹង​ត្រូវ​សម្ពោធ​ជា​ផ្លូវការ​ស្រប​ពេល​ជាមួយ​គ្នា​នឹង​ព្រឹត្តិកា...",
      views: 94,
    },
    {
      imgSrc: "../src/assets/Java.jpg",
      title: " Common Mistakes in Java",
      description:
        "ការអនុវត្តល្អបំផុតរបស់ Java ដូចជាការធ្វើទ្រង់ទ្រាយកូដនិងលំនាំនៃការរចនាឱ្យមានកូដដែលពិបាក...",
      views: 9,
    },
    // Add more books as needed
  ];

  const totalSlides = Math.ceil(blogs.length / itemsPerPage);

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
      <section className="flex justify-between mt-5 gap w-[94%] mx-auto font-suwannaphum mb-10">
        <h3 className="font-bold text-[#16A1DF] xl:text-[25px]">ប្លុក</h3>
        <Link to="/blog">
          <span className="flex items-center text-black xl:text-[25px]">
            បង្ហាញទាំងអស់
            <FaArrowRightLong />
          </span>
        </Link>
      </section>

      <Link to="/blog">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[94%] mx-auto ">
          <div className="border rounded-lg bg-white text-gray-700 shadow-sm h-[430px]">
            <div className="relative h-full w-full overflow-hidden">
              <img
                className="h-full w-full rounded-lg object-cover opacity-100 transition duration-300 ease-in-out transform scale-100"
                src="../src/assets/Blog Part.jpg"
                alt="Stem Book"
              />
              <div className="absolute inset-0 font-suwannaphum bg-transparent hover:bg-slate-300 opacity-0 hover:opacity-60 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                <h2 className="text-black text-xl font-suwannaphum text-center font-bold">
                  ចំណេះដឹងស្ដីពីវិទ្យាសាស្រ្តនិងបច្ចេកវិទ្យា
                  <br />
                  <span className="text-[18px]">
                    រុករកកិច្ចការស្រាវជ្រាវស្តីពីវិទ្យាសាស្រ្តបច្ចេកវិទ្យា
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {/* Card1 */}
          <div className="border rounded-xl bg-white text-gray-700 shadow-md h-[430px]">
            <div className="relative h-[250px] overflow-hidden ">
              <img
                className="h-full w-full object-cover rounded-t-md  hover:scale-105 transition-transform duration-500 ease-in-out"
                src="../src/assets/C++ Programming.jpg"
                alt=""
              />
            </div>
            <div className="p-3 mb-4">
              <h4 className="block font-suwannaphum text-lg sm:text-xl font-bold leading-snug tracking-normal text-blue-gray-900">
                C++ Programming
              </h4>
              <span className="line-clamp-2 block font-suwannaphum mt-2 text-sm sm:text-base antialiased font-normal md:line-clamp-2 lg:line-clamp-2 xl:line-clamp-2 2xl:line-clamp-2 leading-relaxed text-gray-700">
                ស្វែងយល់ពីចំណុចសំខាន់នៃការសរសេរកម្មវិធី C++
                ចាប់ពីគោលគំនិតជាមូលដ្ឋានរហូតដល់បច្ចេកទេស...
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
            <div className="relative h-[250px] overflow-hidden ">
              <img
                className="h-full w-full object-cover rounded-t-md  hover:scale-105 transition-transform duration-500 ease-in-out"
                src="../src/assets/Introduct to .Net E.jpg"
                alt=""
              />
            </div>
            <div className="p-3 mb-4">
              <h4 className="block font-suwannaphum text-lg sm:text-xl font-bold leading-snug tracking-normal text-blue-gray-900">
                Introduction to .NET Core
              </h4>
              <span className="line-clamp-2 block font-suwannaphum mt-2 text-sm sm:text-base antialiased font-normal md:line-clamp-2 lg:line-clamp-2 xl:line-clamp-2 2xl:line-clamp-2 leading-relaxed text-gray-700">
                ស្វែងយល់អំពីចំណុចខ្លាំង និងករណីប្រើប្រាស់នៃក្របខ័ណ្ឌនីមួយៗ
                និងរបៀបជ្រើសរើសមួយដែលត្រឹម...
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
            <div className="relative h-[250px] overflow-hidden ">
              <img
                className="h-full w-full object-cover rounded-t-md  hover:scale-105 transition-transform duration-500 ease-in-out"
                 src="../src/assets/.NET.jpg"
                alt=""
              />
            </div>
            <div className="p-3 mb-4">
              <h4 className="block font-suwannaphum text-lg sm:text-xl font-bold leading-snug tracking-normal text-blue-gray-900">
              Desktop Applications .NET
              </h4>
              <span className="line-clamp-2 block font-suwannaphum mt-2 text-sm sm:text-base antialiased font-normal md:line-clamp-2 lg:line-clamp-2 xl:line-clamp-2 2xl:line-clamp-2 leading-relaxed text-gray-700">
              ការណែនាំនេះគ្របដណ្តប់លើការអនុវត្តល្អបំផុត សមាសធាតុសំខាន់ៗ
              និងការពិចារណាអំពីស្ថាបត្យកម្មសម្រាប់...
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

        {/* second section */}
      </Link>
      {/* slide bar */}
      <section className="relative w-[94%] mx-auto overflow-hidden rounded-lg mb-5 gap-4">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {blogs.map((book, index) => (
            <Link
              to="/blog"
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
                <div className="border-t">
                  <div className="flex items-center justify-between p-3 mt-1">
                    <p className="font-suwannaphum text-md text-black">
                      ចំនួនអ្នកមេីល: {book.views} នាក់
                    </p>
                    <div className="flex items-center text-md text-[15px]">
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
          <FaChevronLeft className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black p-1 xs:p-2 sm:p-3 md:p-3 lg:p-4 xl:p-4 rounded-full hover:bg-gray-700 transition-colors"
        >
          <FaChevronRight className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
        </button>
      </section>
    </>
  );
};

export default BlogCard;

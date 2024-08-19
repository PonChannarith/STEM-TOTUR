import React from "react";
import { FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";
import { Avatar } from "flowbite-react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
const AllAboutUs = () => {
  return (
    <>
    {/* Hero */}
    
      <section className="relative">
      <div className="absolute inset-0 backdrop-blur-sm"></div>
        <img
          className="w-full h-[80vh] object-cover"
          src="../src/assets/AboutUs_content.jpg"
          alt="About STEM"
        />
        <div className="absolute inset-0 font-suwannaphum flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <div className="w-max">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-2xl p-3 text-white font-bold sm:text-3xl">
              អំពីយើង
            </h1>
          </div>
          <span className="text-center text-base px-4 sm:text-lg">
            STEM ដែលមាន​ទម្រង់ពេញ​ (Science, technology, engineering, and
            mathematics) <br className="mt-2" />
            ជាការធ្វើការដែលពាក់ព័ន្ធនឹង ផ្នែកវិទ្យាសាស្រ្ត, បច្ចេកវិទ្យា,
            វិស្វកម្ម និងគណិតវិទ្យា។
          </span>
        </div>
      </section>
      {/* section 1 */}
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 " data-aos="fade-up" data-aos-duration="1500">
            <div className="img-box" >
              <img
                src="../src/assets/Online-learning.gif"
                alt="Online Learning"
                className="w-auto h-[300px] sm:h-[400px]"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full" data-aos="zoom-in-up" data-aos-duration="1500">
                <h2 className="font-suwannaphum uppercase font-bold text-2xl text-[#0056B1] mb-9 text-center sm:text-3xl">
                  អំពី STEM
                </h2>
                <p className="max-w-2xl mx-auto​ font-suwannaphum  font-normal text-base leading-8 text-gray-700 text-center sm:text-left sm:text-lg">
                  ជាមួយ STEM
                  អ្នកប្រើប្រាស់អាចរៀនតាមប្រព័ន្ធអ៊ីនធឺណិតទៅលើមុខជំនាញជាច្រើនដែលកំពុងពេញនិយម
                  ពិសេសយើងផ្តោតសំខាន់ទៅលើជំនាញ STEM
                  ដើម្បីអោយអ្នកសិក្សាបានយល់ដឹងអំពីសារ:សំខាន់នៃ STEM
                  និងចូលរួមចំណែកក្នុងការអភិវឌ្ឍន៍ប្រទេសរបស់យើងផងដែរ។
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="py-14 lg:py-24 relative">
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="lg:pr-[100px] flex items-center" data-aos="fade-up" data-aos-duration="1500">
              <div className="data w-full">
                <h1 className="font-suwannaphum  uppercase font-bold text-2xl text-[#0056B1] text-center sm:text-3xl">
                  គោលបំណងរបស់ពួកយើង
                </h1>
                <p className="max-w-2xl font-suwannaphum mx-auto-normal text-base leading-8 text-gray-700 text-center sm:text-left sm:text-lg">
                  ប្រមូលផ្តុំឯកសារ និងវីឌីអូដែលជាភាសាខ្មែរដែលទាក់ទង STEM
                  ដើម្បីជាជំនួយដល់ការលើកកម្ពស់ការបណ្តះបណ្តាលដល់ការសិក្សារទៅលើ
                  STEM។
                </p>
              </div>
            </div>
            <div className="img-box ml-14"  data-aos="fade-up" data-aos-duration="1500">
              <img
                src="../src/assets/Course app.gif"
                alt="Purpose of STEM"
                className="w-auto h-[300px] sm:h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mentor */}
      <div className="mt-10 flex  flex-col justify-center w-max gap-20 mx-auto">
        <marquee behavior="" direction="">
        <h1 className="text-center text-3xl p-3 text-[#0056B1] font-bold sm:text-4xl font-suwannaphum" >
          លោកគ្រូអ្នកគ្រូរបស់យើង
        </h1>
        </marquee>
        <div className="mt-10 grid justify-center selection  sm:px-4 gap-20 md:gap-20 lg:gap-40  sm:grid-cols-2" >
          {/* Mentor 1 */}
          <div className="w-[300px] text-center py-4 px-6 bg-[#16A1DF] shadow-sm rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-sm" data-aos="fade-up" data-aos-duration="1500">
      <div className="flex justify-center items-center" >
        <img
          src="../src/assets/Mentor_MuyleangDevOps.jpg"
          alt="Mentor"
          height={200}
          className="mb-4 rounded-full border-4 border-yellow-400 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
        />
      </div>
      <h3 className="text-white text-lg tracking-tight md:text-xl lg:text-2xl font-bold font-suwannaphum">Ing Muyleang</h3>
      <h4 className="text-black text-md font-semibold md:text-lg lg:text-xl mb-2 font-suwannaphum">Mentor</h4>
      <p className="text-gray-200 -mt-2 text-sm md:text-base lg:text-lg font-suwannaphum">
      Center of Science and Technology Advanced Development
      </p>
      <ul className="flex justify-center  mt-2">
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600 ">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
          <FaTelegram />
          </a>
        </li>
      </ul>
          </div>
              
          {/* Mentor 2 */}
          <div className="w-[300px] text-center py-4 px-6 bg-[#16A1DF] shadow-sm rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-sm" data-aos="fade-up" data-aos-duration="1500">
            <div className="flex justify-center items-center" >
              <img
                  src="../src/assets/Mentor_Jessica1.jpg"
                alt="Mentor"
                height={200}
                className="mb-4 rounded-full border-4 border-yellow-400 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
              />
            </div>
              <h3 className="text-white text-lg tracking-tight md:text-xl lg:text-2xl font-bold font-suwannaphum">Sun Jessica</h3>
              <h4 className="text-black text-md font-semibold md:text-lg lg:text-xl mb-2 font-suwannaphum">Mentor</h4>
              <p className="text-gray-200 -mt-2 text-sm md:text-base lg:text-lg font-suwannaphum">
              Center of Science and Technology Advanced Development
              </p>
              <ul className="flex justify-center mt-2">
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600 ">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
                  <FaTelegram />
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </div>

      {/* Our member*/}
      <div className="flex flex-col justify-center mt-14 w-max mx-auto">
        <h1 className="text-center text-3xl p-3 text-[#0056B1] font-bold sm:text-4xl font-suwannaphum" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
          សមាជិកក្រុមរបស់យើង
        </h1>
        
        {/* Member */}
        <div className="mt-10 grid justify-center items-center lg:gap-40 md:gap-20 gap-20 sm:grid-cols-2 lg:grid-cols-3">
        <div className="w-[300px] text-center py-4 px-6 bg-[#16A1DF] shadow-sm rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-sm" data-aos="fade-up" data-aos-duration="1500">
      <div className="flex justify-center items-center">
        <img
          src="../src/assets/cuteis.jpg"
          alt="Mentor"
          height={200}
          className="mb-4 rounded-full border-4 border-yellow-400 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
        />
      </div>
      <h3 className="text-white text-lg tracking-tight md:text-xl lg:text-2xl font-bold font-suwannaphum">Sek Pisal</h3>
      <h4 className="text-black text-md font-semibold md:text-lg lg:text-xl mb-2 font-suwannaphum">Leader</h4>
      <p className="text-gray-200 -mt-2 text-sm md:text-base lg:text-lg font-suwannaphum">
      Center of Science and Technology Advanced Development
      </p>
      <ul className="flex justify-center  mt-2">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100028119094073&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600 ">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
          <FaTelegram />
          </a>
        </li>
      </ul>
          </div>

          <div className="w-[300px] text-center py-4 px-6 bg-[#16A1DF] shadow-sm rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-sm" data-aos="fade-up" data-aos-duration="1500">
      <div className="flex justify-center items-center">
        <img
          src="../src/assets/channarith_offical.jpg"
          alt="Mentor"
          height={200}
          className="mb-4 object-cover rounded-full border-4 border-yellow-400 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
        />
      </div>
      <h3 className="text-white text-lg tracking-tight md:text-xl lg:text-2xl font-bold font-suwannaphum">Pon Channarith</h3>
      <h4 className="text-black text-md font-semibold md:text-lg lg:text-xl mb-2 font-suwannaphum">Frontend</h4>
      <p className="text-gray-200 -mt-2 text-sm md:text-base lg:text-lg font-suwannaphum">
      Center of Science and Technology Advanced Development
      </p>
      <ul className="flex justify-center  mt-2">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100053897863470&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600 ">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://github.com/Channarith_Pon" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://t.me/Channarith11" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
          <FaTelegram />
          </a>
        </li>
      </ul>
          </div>
          <div className="w-[300px] text-center py-4 px-6 bg-[#16A1DF] shadow-sm rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-sm" data-aos="fade-up" data-aos-duration="1500">
      <div className="flex justify-center items-center">
        <img
          src="../src/assets/sreyneang.jpg"
          alt="Mentor"
          height={200}
          className="mb-4 object-cover rounded-full border-4 border-yellow-400 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
        />
      </div>
      <h3 className="text-white text-lg tracking-tight md:text-xl lg:text-2xl font-bold font-suwannaphum">Hong Sreyneang</h3>
      <h4 className="text-black text-md font-semibold md:text-lg lg:text-xl mb-2 font-suwannaphum">Frontend</h4>
      <p className="text-gray-200 -mt-2 text-sm md:text-base lg:text-lg font-suwannaphum">
      Center of Science and Technology Advanced Development
      </p>
      <ul className="flex justify-center  mt-2">
        <li>
          <a href="https://www.facebook.com/HongSreyneang.2004?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600 ">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://github.com/SREYNEANG-HONG" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://t.me/SREYNEANG_HONG" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
          <FaTelegram />
          </a>
        </li>
      </ul>
          </div>

      

          <div className="w-[300px] text-center py-4 px-6 bg-[#16A1DF] shadow-sm rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-sm" data-aos="fade-up" data-aos-duration="1500">
      <div className="flex justify-center items-center">
        <img
          src="../src/assets/Sokvan.jpg"
          alt="Mentor"
          height={200}
          className="mb-4 object-cover rounded-full border-4 border-yellow-400 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
        />
      </div>
      <h3 className="text-white text-lg tracking-tight md:text-xl lg:text-2xl font-bold font-suwannaphum">Sok Van</h3>
      <h4 className="text-black text-md font-semibold md:text-lg lg:text-xl mb-2 font-suwannaphum">Frontend</h4>
      <p className="text-gray-200 -mt-2 text-sm md:text-base lg:text-lg font-suwannaphum">
      Center of Science and Technology Advanced Development
      </p>
      <ul className="flex justify-center  mt-2">
        <li>
          <a href="https://www.facebook.com/van.sok.980?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600 ">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://github.com/VanSok55" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://t.me/VanSok_z" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
          <FaTelegram />
          </a>
        </li>
      </ul>
          </div>

          <div className="w-[300px] text-center py-4 px-6 bg-[#16A1DF] shadow-sm rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-sm" data-aos="fade-up" data-aos-duration="1500">
      <div className="flex justify-center items-center">
        <img
          src="../src/assets/kanika.jpg"
          alt="Mentor"
          height={200}
          className="mb-4 object-cover rounded-full border-4 border-yellow-400 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
        />
      </div>
      <h3 className="text-white text-lg tracking-tight md:text-xl lg:text-2xl font-bold font-suwannaphum">Luy Kanika</h3>
      <h4 className="text-black text-md font-semibold md:text-lg lg:text-xl mb-2 font-suwannaphum">UX/UI</h4>
      <p className="text-gray-200 -mt-2 text-sm md:text-base lg:text-lg font-suwannaphum">
      Center of Science and Technology Advanced Development
      </p>
      <ul className="flex justify-center  mt-2">
        <li>
          <a href="https://www.facebook.com/ka.nika.7737769?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600 ">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://github.com/Ni-kaaa" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://t.me/nikaaaa03" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
          <FaTelegram />
          </a>
        </li>
      </ul>
          </div>

          <div className="w-[300px] text-center py-4 px-6 bg-[#16A1DF] shadow-sm rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-sm" data-aos="fade-up" data-aos-duration="1500">
      <div className="flex justify-center items-center">
        <img
          src="../src/assets/ponleu.jpg"
          alt="Mentor"
          height={200}
          className="mb-4 object-cover rounded-full border-4 border-yellow-400 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
        />
      </div>
      <h3 className="text-white text-lg tracking-tight md:text-xl lg:text-2xl font-bold font-suwannaphum">Nam Ponleu</h3>
      <h4 className="text-black text-md font-semibold md:text-lg lg:text-xl mb-2 font-suwannaphum">Frontend</h4>
      <p className="text-gray-200 -mt-2 text-sm md:text-base lg:text-lg font-suwannaphum">
      Center of Science and Technology Advanced Development
      </p>
      <ul className="flex justify-center  mt-2">
        <li>
          <a href="https://www.facebook.com/nam.ponleu?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600 ">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://github.com/namponleu" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://t.me/ponleu07" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
          <FaTelegram />
          </a>
        </li>
      </ul>
          </div>

          <div className="w-[300px] text-center py-4 px-6 bg-[#16A1DF] shadow-sm rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-sm" data-aos="fade-up" data-aos-duration="1500">
      <div className="flex justify-center items-center">
        <img
          src="../src/assets/mengeam.jpg"
          alt="Mentor"
          height={200}
          className="mb-4 object-cover rounded-full border-4 border-yellow-400 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
        />
      </div>
      <h3 className="text-white text-lg tracking-tight md:text-xl lg:text-2xl font-bold font-suwannaphum">Seng Mengeam</h3>
      <h4 className="text-black text-md font-semibold md:text-lg lg:text-xl mb-2 font-suwannaphum">UX/UI</h4>
      <p className="text-gray-200 -mt-2 text-sm md:text-base lg:text-lg font-suwannaphum">
      Center of Science and Technology Advanced Development
      </p>
      <ul className="flex justify-center  mt-2">
        <li>
          <a href="https://www.facebook.com/mengeam.seng?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600 ">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://github.com/MengEam08" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://t.me/MengEam_Seng" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
          <FaTelegram />
          </a>
        </li>
      </ul>
          </div>

          <div className="w-[300px] text-center py-4 px-6 bg-[#16A1DF] shadow-sm rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-sm" data-aos="fade-up" data-aos-duration="1500">
      <div className="flex justify-center items-center">
        <img
          src="../src/assets/Bunthi.jpg"
          alt="Mentor"
          height={200}
          className="mb-4 object-cover rounded-full border-4 border-yellow-400 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
        />
      </div>
      <h3 className="text-white text-lg tracking-tight md:text-xl lg:text-2xl font-bold font-suwannaphum">Boen Thi</h3>
      <h4 className="text-black text-md font-semibold md:text-lg lg:text-xl mb-2 font-suwannaphum">UX/UI</h4>
      <p className="text-gray-200 -mt-2 text-sm md:text-base lg:text-lg font-suwannaphum">
      Center of Science and Technology Advanced Development
      </p>
      <ul className="flex justify-center  mt-2">
        <li>
          <a href="https://www.facebook.com/Boen.thi.monster?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600 ">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://github.com/boenthi" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="http://t.me/BoenThi" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
          <FaTelegram />
          </a>
        </li>
      </ul>
          </div>
          <div className="w-[300px] text-center py-4 px-6 bg-[#16A1DF] shadow-sm rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-sm" data-aos="fade-up" data-aos-duration="1500">
      <div className="flex justify-center items-center">
        <img
          src="../src/assets/Piseth_offical.jpg"
          alt="Mentor"
          height={200}
          className="mb-4 rounded-full border-4 border-yellow-400 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
        />
      </div>
      <h3 className="text-white text-lg tracking-tight md:text-xl lg:text-2xl font-bold font-suwannaphum">Poch Piseth</h3>
      <h4 className="text-black text-md font-semibold md:text-lg lg:text-xl mb-2 font-suwannaphum">UX/UI</h4>
      <p className="text-gray-200 -mt-2 text-sm md:text-base lg:text-lg font-suwannaphum">
      Center of Science and Technology Advanced Development
      </p>
      <ul className="flex justify-center  mt-2">
        <li>
          <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600 ">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://github.com/PochPisethh" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="http://t.me/Zwcodecambodia168" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-red-600">
          <FaTelegram />
          </a>
        </li>
      </ul>
          </div>
        </div>
      </div>
        </>
    
  );
};
export default AllAboutUs;

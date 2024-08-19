import { useEffect, useState, useRef } from "react";
import { Button } from "flowbite-react";
import { useParams } from "react-router-dom";
import { fetchForumByid } from "../../services/fetchForumByid";
import FooterCard from "../footer/FooterCard";
import ReplyCard from "../rpCrad/ReplyCard";
import axios from "axios";
import { AUTH_HEADER } from "../../services/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faTimes } from '@fortawesome/free-solid-svg-icons';

const CreateComment = () => {
  const { id } = useParams();
  const bookId = decodeURIComponent(id);
  const [forum, setForum] = useState(null);
  const [formattedDate, setFormattedDate] = useState("");
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState("");
  const replyFormRef = useRef(null);

  useEffect(() => {
    const fetchForumData = async () => {
      try {
        const bookData = await fetchForumByid(encodeURIComponent(bookId));
        setForum(bookData);
        const date = new Date(bookData.updated_at);
        setFormattedDate(
          date.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          })
        );
      } catch (error) {
        console.error("Error fetching forums data:", error);
      }
    };

    fetchForumData();
  }, [bookId]);

  const handleReplyClick = () => {
    setShowReplyForm(true);
    replyFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://136.228.158.126:50001/api/comments/",
        {
          forum_id: id,
          content: replyText,
        },
        {
          headers: {
            ...AUTH_HEADER,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        setReplyText("");
        setShowReplyForm(false);
        // Optionally reload or refresh the comments section
      }
    } catch (error) {
      console.error("Error submitting reply:", error);
    }
  };

  const handleTextChange = (e) => {
    setReplyText(e.target.value);
  };

  if (!forum) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="">
        <main className="max-w-screen-xl mx-auto px-4 sm:px-0">
          <div className="w-full mx-auto h-auto relative bg-white p-5 sm:p-8 flex flex-col sm:flex-row sm:items-center">
            <div className="sm:flex-1">
              <h1 className="text-zinc-800 text-2xl sm:text-3xl font-semibold font-suwannaphum mb-3">
                ចូលរួមជាមួយយើងដើម្បីបង្កើតសហគមន៍សិក្សា
              </h1>
              <p className="text-zinc-800 text-base sm:text-lg font-normal font-suwannaphum">
                រីករាយក្នុងការសួរ
                និងឆ្លើយសំណួរទាក់ទងនឹងជំនាញផ្សេងៗដើម្បីចែករំលែកចំណេះដឹងឲ្យគ្នាទៅវិញទៅមក
              </p>
            </div>
            <div className="sm:w-[255px] sm:ml-8 mt-5 sm:mt-0">
              <img
                className="w-full h-auto rounded-xl object-cover"
                src="../src/assets/Online learning (2).gif"
                alt="Learning by yourself"
              />
            </div>
          </div>


          <section className="max-w-screen-xl mx-auto mt-10 px-4 sm:px-0 font-suwannaphum">
            <div className="w-[100%] mx-auto bg-[#ffffff] border rounded-lg">
              <div className="flex items-center mb-6 mt-5">
                <img
                  src={
                    forum.profileUser ||
                    "https://wallpapers.com/images/hd/smiling-close-up-oggy-and-the-cockroaches-71njhqoakbau7nbm.jpg"
                  }
                  alt="Avatar"
                  className="w-12 h-12 rounded-full mr-4 ml-5"
                />
                <div>
                  <div className="text-lg font-medium text-gray-800 ml-5">
                    {forum.author}
                  </div>
                  <div className="text-gray-500 ml-5">{formattedDate}</div>
                </div>
              </div>
              <h3
                className="text-[20px] leading-relaxed mb-2 font-bold ml-5 text-gray-500"
                dangerouslySetInnerHTML={{ __html: forum.title || "No title" }}
              ></h3>
              <p
                className="p-2 text-sm leading-relaxed mb-2 ml-5 text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: forum.description || "No description",
                }}
              ></p>
              <div className="flex justify-center items-center transition-shadow duration-300">
                <img
                  className="w-[700px]  my-5 rounded-lg dark:shadow-gray-800 mt-1"
                  src={forum.image}
                  alt="image description"
                />
              </div>

              <div className="flex justify-end items-center mr-5 mt-5">
                <div className="ml-5 mb-5">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-700 mr-4 mb-2"
                  >
                    <i className="far fa-thumbs-up"></i> Like
                  </a>

                  <a
                    className="text-gray-500 hover:text-gray-700 mr-4 mb-2 cursor-pointer"
                    onClick={handleReplyClick}
                  >
                    <i className="far fa-thumbs-up"></i> Reply
                  </a>
                </div>
              </div>

              <div
                ref={replyFormRef}
                className={`p-10 ${showReplyForm ? "" : "hidden"}`}
              >
                <form
                  onSubmit={handleReplySubmit}
                  className="max-w-full bg-white rounded-lg mx-auto"
                >
                  <textarea
                    value={replyText}
                    onChange={handleTextChange}
                    rows="1"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-slate-100"
                    placeholder="Write your reply here..."
                  />
                  <div className="flex justify-end gap-2 mt-2">
                    <button
                      type="submit"
                      className="p-2 rounded-full text-blue-500 hover:bg-blue-100"
                    >
                      <FontAwesomeIcon icon={faReply} size="l" />
                    </button>
                    <button
                      type="button"
                      className="p-2 rounded-full text-gray-500 hover:bg-gray-100"
                      onClick={() => setShowReplyForm(false)}
                    >
                      <FontAwesomeIcon icon={faTimes} size="l" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-[100%] mx-auto rounded-lg p-5 mt-6">
              <div className="mt-4">
                <ReplyCard forumId={id} />
              </div>
            </div>
          </section>
        </main>
      </section>
      <FooterCard />
    </>
  );
};

export default CreateComment;

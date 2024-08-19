 
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
const ReplyCard = ({ forumId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [replyContent, setReplyContent] = useState("");
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyingToCommentId, setReplyingToCommentId] = useState(null);
  const [replySuccess, setReplySuccess] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `http://136.228.158.126:50001/api/forums/${forumId}/`
        );
        if (response.ok) {
          const data = await response.json();
          setComments(data.comments);
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.message || "Error fetching comments");
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [forumId]);

  const handleReplyContentChange = (e) => {
    setReplyContent(e.target.value);
  };

  const handleReplySubmit = async (e) => {
    e.preventDefault();

    if (!replyContent.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Reply content cannot be empty.",
      });
      return;
    }

    try {
      const accessToken = localStorage.getItem("access_token");
      const response = await fetch(
        `http://136.228.158.126:50001/api/forums/${forumId}/comments/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: replyContent,
            replying_to: replyingToCommentId,
          }),
        }
      );

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your reply has been submitted.",
        }).then(() => {
          setReplyContent("");
          setShowReplyForm(false);
          setReplyingToCommentId(null);
          setReplySuccess(true);
          // Re-fetch comments to include the new reply
          fetchComments();
        });
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: errorData.message || "Error submitting reply",
        });
      }
    } catch (error) {
      console.error("Error submitting reply:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: error.message,
      });
    }
  };

  const handleReplyClick = (commentId) => {
    setReplyingToCommentId(commentId);
    setShowReplyForm(true);
  };


  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="mx-auto my-8 flex flex-col sm:flex-row max-w-screen-xl rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8"
          >
            <img
              className="block max-w-full sm:w-16 sm:h-16 w-12 h-12 rounded-full mr-0 sm:mr-4 mb-4 sm:mb-0 ml-0 sm:ml-5"
              src="https://wallpapers.com/images/hd/smiling-close-up-oggy-and-the-cockroaches-71njhqoakbau7nbm.jpg"
              alt="Profile Picture"
            />
            <div className="w-full text-left">
              <div className="mb-2 flex flex-col sm:flex-row justify-between text-gray-600">
                <h3 className="font-bold text-sm text-black">{comment.author}</h3>
                <div className="text-gray-500 mt-2 sm:mt-0 sm:ml-5">
                  {new Date(comment.created_at).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </div>
              </div>
              <p className="text-sm">{comment.content}</p>
              <div className=" flex flex-col sm:flex-row sm:items-center justify-between text-gray-600">
                
              </div>
            </div>
          </div>
        ))
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7486/7486754.png"
              width="100"
              height="100"
              alt="Empty Box"
              className="mx-auto mb-4"
            />
            <p className="text-gray-500 font-suwannaphum">
              មិនមានទាន់ការឆ្លើយតបទេ
            </p>
          </div>
        </div>
      )}
      {showReplyForm && !replySuccess && (
        <form
          onSubmit={handleReplySubmit}
          className="my-8 p-4 border border-gray-200 rounded-lg shadow-lg"
        >
          <h4 className="text-xl font-semibold mb-4">Reply</h4>
          <textarea
            value={replyContent}
            onChange={handleReplyContentChange}
            rows="1"
            className="w-full px-3 py-2 border rounded mb-4"
            placeholder="Write your reply..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Submit Reply
          </button>
          <button
            type="button"
            onClick={() => setShowReplyForm(false)}
            className="ml-4 px-4 py-2 bg-gray-300 text-black rounded"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default ReplyCard;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import TextEditor from "../texteditor/TextEditor"; // Import TextEditor

const EditForum = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [forumData, setForumData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    const fetchForumData = async () => {
      const accessToken = localStorage.getItem("access_token");
      setLoading(true);
      try {
        const response = await fetch(
          `https://stem.automatex.dev/api/forums/${id}/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch forum data");
        }

        const data = await response.json();

        // Strip HTML tags from title and description
        const strippedTitle = data.title.replace(/<\/?[^>]+(>|$)/g, "");
        const strippedDescription = data.description.replace(
          /<\/?[^>]+(>|$)/g,
          ""
        );

        setForumData({
          ...data,
          title: strippedTitle,
          description: strippedDescription,
        });

        if (data.image) {
          setPreviewImage(data.image);
        }
      } catch (error) {
        console.error("Error fetching forum data:", error);
        Swal.fire(
          "Error",
          "Failed to fetch forum data. Please try again.",
          "error"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchForumData();
  }, [id]);

  const handleChangeTitle = (content) => {
    setForumData((prevState) => ({
      ...prevState,
      title: content, // Fixed title update
    }));
  };

  const handleChangeDescription = (content) => {
    setForumData((prevState) => ({
      ...prevState,
      description: content, // Fixed description update
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = forumData.image;

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const uploadResponse = await fetch(
          "https://stem.automatex.dev/api/upload/",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!uploadResponse.ok) {
          const errorText = await uploadResponse.text();
          console.error("Error response:", errorText);
          throw new Error("Failed to upload image");
        }

        const uploadResult = await uploadResponse.json();
        imageUrl = uploadResult.url;
      } catch (error) {
        console.error("Error uploading image:", error);
        Swal.fire(
          "Error",
          "Failed to upload image. Please try again.",
          "error"
        );
        setLoading(false);
        return;
      }
    }

    const accessToken = localStorage.getItem("access_token");
    try {
      const response = await fetch(
        `https://stem.automatex.dev/api/forums/${id}/`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...forumData,
            image: imageUrl,
          }),
        }
      );

      if (response.ok) {
        Swal.fire("Success", "Forum updated successfully.", "success");
        navigate("/getforum");
      } else {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error("Failed to update forum data");
      }
    } catch (error) {
      console.error("Error updating forum data:", error);
      Swal.fire(
        "Error",
        "Failed to update forum data. Please try again.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Any unsaved changes will be lost!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, close it!",
      cancelButtonText: "No, stay here",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/getforum");
      }
    });
  };

  return (
    <div className="container mx-auto p-4 font-suwannaphum bg-white dark:bg-gray-900 mt-10 rounded-lg w-full max-w-screen-xl shadow-extra">
      <div className="text-2xl md:text-3xl font-bold mb-4 text-black text-center">
        កែប្រែវេទិកា
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <label className="block">ចំណងជើង</label>
            <TextEditor
              value={forumData.title}
              onChange={handleChangeTitle}
              className="text-black"
              placeholder="សូមធ្វើការសរសេរកែប្រែនៅចំណងជើងវេទិការបស់អ្នក......"
            />
            <label className="block mt-4">ការពិពណ៌នា</label>
            <TextEditor
              value={forumData.description}
              onChange={handleChangeDescription}
              className="text-black"
              placeholder="សូមធ្វើការសរសេរកែប្រែនៅការពិពណ៌នារបស់អ្នក......"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="inline-block">រូបភាព</label>
            <div className="rounded-lg shadow-xl bg-gray-50">
              <div className="flex items-center justify-center w-full">
                <label className="flex m-5 flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="pt-1 text-lg tracking-wider font-suwannaphum group-hover:text-gray-600">
                      សូមជ្រើសរើសរូបភាព
                    </p>
                  </div>
                  <input
                    type="file"
                    className="opacity-0"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
            {previewImage && (
              <div className="mt-2">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-auto object-cover rounded-lg"
                  style={{ maxWidth: "700px" }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 mt-4">
          <button
            type="submit"
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            disabled={loading}
          >
            {loading ? "រក្សាទុក្ខ..." : "រក្សាទុក្ខ"}
          </button>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={handleCancel}
          >
            បោះបង់
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForum;

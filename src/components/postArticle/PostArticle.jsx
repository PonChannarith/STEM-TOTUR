import React, { useEffect, useState } from "react";
import { saveBlog } from "../../services/fetchBooks";
import { useNavigate } from "react-router-dom";
import { API_BASE_URI } from "../../services/constants";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import TextEditor from "../texteditor/TextEditor";

const PostArticle = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const MySwal = withReactContent(Swal);

  const onFormSubmited = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch(`${API_BASE_URI}upload/`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const json = await response.json();
      console.log(json);

      await saveBlog({
        title,
        content, // The rich text content
        image: json.url,
      });

      MySwal.fire({
        title: "Success!",
        text: "Blog posted successfully!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/article");
      });
    } catch (error) {
      console.error(error);
      MySwal.fire({
        title: "Error!",
        text: "Failed to post article. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  const onForumImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <main className="max-w-7xl mx-auto p-4 space-y-4">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="relative w-full h-64 bg-blue-600 rounded-lg overflow-hidden">
          <img
            src="../src/assets/create_forum.jpg"
            alt="Cartoon"
            className="object-cover w-full h-full p-2"
          />
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6 font-suwannaphum">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2 text-center">
          ការបង្កើតប្លុក
        </h2>
        <form onSubmit={onFormSubmited}>
          <label
            htmlFor="title"
            className="block text-md leading-6 text-gray-900 font-bold"
          >
            ចំណងជើង**
          </label>
          <TextEditor
            value={title}
            onChange={(content) => setTitle(content)}
            className="text-black font-suwannaphum"
          />
          
          <label
            htmlFor="content"
            className="block text-md leading-6 text-gray-900 font-bold mt-4"
          >
            ពិពណ៏នាចំណងជើង**
          </label>
          <TextEditor
            value={content}
            onChange={(content) => setContent(content)}
            className="text-black"
          />

          <div className="col-span-full mt-4">
            <label
              htmlFor="file-upload"
              className="block text-md font-bold leading-6 text-gray-900"
            >
              រូបភាព**
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>ដាក់បញ្ចូលរូបភាព</span>
                    <div>
                      {previewImage && (
                        <img
                          src={previewImage}
                          alt="Preview"
                          style={{
                            maxWidth: "200px",
                            borderRadius: "10px",
                          }}
                        />
                      )}
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={onForumImage}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between py-2 border-t">
            <button
              type="submit"
              className="inline-flex w-[100px] items-center py-2.5 px-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
            >
              បង្ហោះ
            </button>
          </div>
        </form>

      </div>
    </main>
  );
};

export default PostArticle;

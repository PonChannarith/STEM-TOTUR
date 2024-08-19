import React, { useEffect, useState } from "react";
import { saveBook } from "../../services/fetchBooks";
import { useNavigate } from "react-router-dom";
import { API_BASE_URI } from "../../services/constants";
import Swal from "sweetalert2"; // Import SweetAlert2
import DOMPurify from "dompurify";
import TextEditor from "../texteditor/TextEditor";

const Create_Forum = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [content, setContent] = useState(""); // This holds the rich text content

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

      await saveBook({
        title,
        description,
        image: json.url,
        content: DOMPurify.sanitize(content), // Sanitize the rich text content
      });

      // Show success message
      Swal.fire({
        title: "Success!",
        text: "Your post has been submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/forum");
      });
    } catch (error) {
      console.error(error);
      // Show error message
      Swal.fire({
        title: "Error!",
        text: "There was an issue submitting your post.",
        icon: "error",
        confirmButtonText: "Try Again",
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
    <>
      <main className="max-w-7xl mx-auto p-4 space-y-4">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="relative w-full bg-blue-600 rounded-lg overflow-hidden">
            <img
              src="../src/assets/Discussion.gif"
              alt="Cartoon"
              className="object-cover h-[500px]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-3xl font-suwannaphum font-bold text-white">
                  សំណួរ និង ដំណោះស្រាយ
                </h1>
                <span className="text-white font-suwannaphum mt-2 text-[20px]">
                  ចួលរួមជាមួយពួកយើង​
                  អ្នកអាចធ្វើការបង្កើតសំណួរនិងធ្វើការឆ្លើយសំណួរដែលទាក់ទងនិងស្ទែម
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6 font-suwannaphum">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 font-suwannaphum">
            សួរសំណល់របស់អ្នកនៅទីនេះ
          </h2>
          <form onSubmit={onFormSubmited}>
            <label
              htmlFor="title"
              className="block text-md leading-6 text-gray-900 font-bold font-suwannaphum"
            >
              ចំណងជើង**
            </label>
            <TextEditor
              value={title}
              onChange={(content) => setTitle(content)}
              className="text-black font-suwannaphum text-[20px]"
            />
            <label
              htmlFor="description"
              className="block text-md leading-6 text-black font-bold font-suwannaphum mt-4"
            >
              ចម្ងល់របស់អ្នក**
            </label>
            <TextEditor
              value={description}
              onChange={(content) => setDescription(content)}
              className="text-black"
            />

            <div className="col-span-full mt-4">
              <label
                htmlFor="file-upload"
                className="block text-md font-bold leading-6 text-gray-900 font-suwannaphum"
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
                      className="relative cursor-pointer font-suwannaphum rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>ដាក់បញ្ចូលរូបភាព</span>
                      <div>
                        {previewImage && (
                          <img
                            src={previewImage}
                            alt="Preview"
                            className="mt-2 rounded-lg"
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
            <div className="flex items-center justify-between py-2 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex font-suwannaphum w-[100px] items-center py-2.5 px-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                បង្ហោះ
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
export default Create_Forum;

// components/CustomEditor.js

import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the Quill styles

const CustomEditor = ({ value, onChange }) => {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={CustomEditor.modules}
      formats={CustomEditor.formats}
      placeholder="Write your content here..."
    />
  );
};

// Define custom modules and formats
CustomEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["clean"], // remove formatting button
  ],
};

CustomEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "background",
  "align",
];

export default CustomEditor;

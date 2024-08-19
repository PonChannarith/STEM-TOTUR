import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Import Quill's CSS
import hljs from "highlight.js";
import "highlight.js/styles/monokai.css";

const formats = [
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "list",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "background",
  "align",
  "direction",
  "script",
  "formula",
];

const toolbarOptions = [
  [{ size: ["large", false, "small"] }],
  [{ font: [] }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  ["blockquote", "code-block"],
  [{ align: [] }],
  [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
  ["link", "image", "video", "formula"],
  ["clean"], // remove formatting button
];

const TextEditor = ({ value, onChange, placeholder }) => {
  const editorRef = useRef(null);
  const quillRef = useRef(null); // Ref for Quill instance

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        formats,
        modules: {
          syntax: { hljs },
          toolbar: toolbarOptions,
        },
        placeholder,
      });

      // Load content from local storage if available
      const savedContent = localStorage.getItem("editorContent");
      if (savedContent) {
        quillRef.current.root.innerHTML = savedContent;
      }

      // Handle editor change event
      quillRef.current.on("text-change", () => {
        const content = quillRef.current.root.innerHTML;
        onChange(content); // Pass content to parent component
        localStorage.setItem("editorContent", content);
      });
    }
  }, [onChange, placeholder]);

  useEffect(() => {
    if (quillRef.current) {
      // Ensure the editor content reflects the passed value
      const currentContent = quillRef.current.root.innerHTML;
      if (currentContent !== value) {
        quillRef.current.root.innerHTML = value;
        localStorage.setItem("editorContent", value); // Update local storage with new value
      }
    }
  }, [value]);

  return (
    <div className="inline-block w-full font-suwannaphum h-28">
      <div ref={editorRef} id="editor" />
    </div>
  );
};

export default TextEditor;

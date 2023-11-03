import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './TextEditor.css';

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    ["link", "image"],
    [{ align: [] }],
  ],
};

const formats = [
  "header",
  "font",
  "list",
  "bold",
  "italic",
  "underline",
  "link",
  "image",
  "align",
];

const inputStyle = {
  borderRadius: "10px",
  backgroundColor: "#F7F7F7", // Set the background color to grey for input fields
};

const editorStyle = {
  height: "400px", // Set your desired fixed height
  width: "60vw", // Set your desired width
  overflowY: "auto", // Add a scrollbar when content exceeds the fixed height
};

export default function TextEditor() {
  const [successStory, setSuccessStory] = useState("");

  return (
    <div className="editor-container" style={editorStyle}>
      <label htmlFor="text-area" style={{ fontWeight: "bold" }}>
        Content
      </label>
      <ReactQuill
        id="text-area"
        value={successStory}
        onChange={(value) => setSuccessStory(value)}
        modules={modules}
        formats={formats}
        placeholder="Write your success story here"
        style={inputStyle}
      />
    </div>
  );
}

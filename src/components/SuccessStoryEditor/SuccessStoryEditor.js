import React, { useState, useEffect } from "react";
import "./SuccessStoryEditor.css";
import Checklist from "./Checklist";
import ImageUpload from "./ImageUpload";
import TextEditor from "./TextEditor";
import ArticleTitle from "./ArticleTitle";

const SuccessStoryEditor = () => {
  // State variables
  const [options, setOptions] = useState([]);

  // Simulated API call to fetch options
  useEffect(() => {
    // Replace with your actual API endpoint
    // fetch('https://api.example.com/options')
    //   .then(response => response.json())
    //   .then(data => setOptions(data));
    setOptions(["hello", "hi"]);
  }, []);

  // Handle publishing
  const handlePublish = () => {
    // Implement publishing logic here
    alert('Published');
  };

  return (
    <div className="success-story-editor">
      <h4 className="title">Success Story Editor</h4>
      <div className="title-options">
         <ArticleTitle />
         <Checklist />
      </div>
      <div className="article-image">
        <TextEditor />
        <ImageUpload />
      </div>
      <button className="publish-button" onClick={handlePublish} 
        style={{
            backgroundColor: '#B81A1A',
            color: 'white',
            fontWeight: 'bold',
            width: '100px',
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '15px',
            alignSelf: 'flex-end',
            border: 'none',
        }}
        >
        Publish
      </button>
    </div>
  );
};

export default SuccessStoryEditor;

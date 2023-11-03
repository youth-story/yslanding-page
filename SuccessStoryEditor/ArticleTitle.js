import React, { useState, useEffect } from "react";
import './ArticleTitle.css';

const inputStyle = {
    backgroundColor: "#F7F7F7", // Set the background color to grey for input fields
  };

export default function ArticleTitle() {

    const [title, setTitle] = useState("");

    return (
        <div>
              <div className="title-input">
            <label htmlFor="title" className="title-label">
            Title
            </label>
            <input
            type="text"
            id="title"
            placeholder="Enter title"
            className="title-inp"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={inputStyle}
            />
        </div>
        </div>
    );

}
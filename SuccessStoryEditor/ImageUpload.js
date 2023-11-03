import React, { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./ImageUpload.module.css";

export default function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const logoImageStyle = {
    fontSize: "150px", // Adjust the font size to make the icon even larger
    marginBottom: "10px",
  };

  const imageContainerStyle = {
    width: "350px",
    height: "400px",
    display: "flex",
    flexDirection: "column", // Stack the icon and text vertically
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#F7F7F7",
    border: "2px dashed #ccc",
    backgroundSize: "4px 8px",
  };

  const uploadedImageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  };

  const dropImageLabelStyle = {
    cursor: "pointer",
    textAlign: "center",
  };

  return (
    <div class="img-upd-container" style={{ display: "flex", flexDirection: "column", width: "350px" }}>
      <label htmlFor="image-upload" style={{ textAlign: "left", alignSelf: "flex-start", fontWeight: "bold", marginBottom: "7px" }}>
        Add Thumbnail
      </label>
      <div style={imageContainerStyle}>
        <DriveFolderUploadOutlinedIcon style={logoImageStyle} />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          id="image-upload"
          style={{ display: "none" }}
        />
        <label
          htmlFor="image-upload"
          style={dropImageLabelStyle}
        >
          Drop Image or Click Here
        </label>
        {image && <img style={uploadedImageStyle} src={image} alt="Uploaded" />}
      </div>
    </div>
  );
}

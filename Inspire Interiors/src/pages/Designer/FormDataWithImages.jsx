import React, { useState } from "react";
import axios from "axios";
import "../../components/designer/Popup/popup.css";
import { useDropzone } from "react-dropzone";

function FormDataWithImages() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImages(acceptedFiles);
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/your-upload-endpoint", formData);

      // Handle the server response, e.g., show a success message
      console.log("Server Response:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Upload Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Images:</label>
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drag &amp; drop images here, or click to select files</p>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormDataWithImages;

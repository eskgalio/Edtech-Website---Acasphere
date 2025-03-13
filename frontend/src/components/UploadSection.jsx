import React, { useState } from "react";
import { Link } from 'react-router-dom';

function UploadSection() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mb-8">
      <div className="w-full max-w-lg mb-4 bg-gray-700 rounded-lg overflow-hidden shadow-lg border">
        {image ? (
          <img src={image} alt="Uploaded Formula" className="w-full" />
        ) : (
          <p className="p-4 text-gray-400 ">No image uploaded yet. Please select an image to preview.</p>
        )}
      </div>
      <label className="w-full max-w-sm flex flex-col items-center px-4 py-6 bg-white text-blue-600 rounded-lg shadow-lg cursor-pointer hover:bg-blue-600 hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M16.88 11.39c.75-1.36.77-2.97.05-4.37a5.75 5.75 0 00-1.64-2.13c-1.5-1.13-3.57-1.48-5.29-.97a4.56 4.56 0 00-2.3 1.79 5.13 5.13 0 00-.78 3.57c.19 1.38.9 2.62 2.03 3.5a4.56 4.56 0 002.56.85 4.6 4.6 0 003.35-1.25c1.17-1.15 1.71-2.77 1.72-4.33v-.05z"></path>
        </svg>
        <span>Select an Image</span>
        <input type="file" className="hidden" onChange={handleImageChange} />
      </label>
    </div>
  );
}

export default UploadSection;

import React from 'react';
import { Link } from 'react-router-dom';

function FileSharingSection() {
  const openFile = (fileName) => {
    alert(`${fileName} opened.`);
  };

  const uploadFile = () => {
    alert('Upload new file functionality.');
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg mt-8 border border-gray-700">
      <h3 className="text-xl font-bold">Files & Resources</h3>
      <div className="mt-4 space-y-4">
        {['Project Brief.pdf', 'Wireframe.sketch', 'Meeting Notes.docx'].map((file, index) => (
          <div
            key={index}
            className="file-card bg-gray-700 p-3 rounded-lg flex justify-between items-center hover:bg-blue-500"
          >
            <span>{file}</span>
            <button className="text-blue-200" onClick={() => openFile(file)}>
              Open
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={uploadFile}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
      >
        Upload New File
      </button>
    </div>
  );
}

export default FileSharingSection;

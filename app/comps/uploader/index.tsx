import React from "react";
import { useDropzone } from "react-dropzone";
import "./uploader.css";

export default function Uploader() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const upload = () => {
    console.log("upload!");
  };

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag and drop some files here, or click to select files</p>
      </div>
      <div className="files">
        <h4>Files</h4>
        <ul>{files}</ul>
      </div>
      <button type="button" onClick={upload} className="up-btn">
        Upload
      </button>
    </section>
  );
}

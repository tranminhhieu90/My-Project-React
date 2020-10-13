import React, { useState } from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";
function DragDropFile() {
  const [fileNames, setFileNames] = useState([]);
  const [imgSrc, setImgSrc] = useState('')
  const handleDrop = (acceptedFiles) => {
    const reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.addEventListener("load", function () {
      setImgSrc(`${reader.result}`)
    }, false);
    setFileNames(acceptedFiles.map((file) => file.name));
  };
  return (
    <div>
      <h2>Drag and Drop File</h2>
      <Dropzone 
        onDrop={handleDrop}
        multiple={false}
        >
        {({ getRootProps, getInputProps }) => (
          <DropDiv {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop files, or click to select files</p>
          </DropDiv>
        )}
      </Dropzone>
      <div>
        <strong>Files:</strong>
        <ul>
          {fileNames.map((fileName) => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
        <img src={imgSrc} alt="Image preview..."/>
      </div>
    </div>
  );
}

const DropDiv = styled.div`
  width: 300px;
  height: 200px;
  text-align: center;
  border: dashed;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export default DragDropFile;

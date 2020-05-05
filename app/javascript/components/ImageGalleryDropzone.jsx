/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useDropzone } from 'react-dropzone';

export default function ImageGalleryDropzone() {
  const [imagesToUpload, setImagesToUpload] = useState([]);
  useEffect(() => {
    Axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  }, []);

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    imagesToUpload.forEach((image) => URL.revokeObjectURL(image.preview));
  }, [imagesToUpload]);

  const removeImagePreview = (index) => {
    const updatedImagesToUpload = imagesToUpload.filter((_, i) => index !== i);
    setImagesToUpload(updatedImagesToUpload);
  };

  const handleUpload = () => {
    const formData = new FormData();

    imagesToUpload.forEach((image) => {
      formData.append('gallery_items[]', image);
    });

    Axios.post('/gallery_items/upload', formData, {
      headers: {
        // eslint-disable-next-line quote-props
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
      },
    }).then((response) => {
      if (response.status === 200) {
        window.location.reload(false);
      } else if (response.status === 422) {

      }
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const recentlyDroppedImages = acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file),
      }));
      setImagesToUpload(imagesToUpload.concat(recentlyDroppedImages));
    },
    multiple: true,
    accept: 'image/jpeg, image/png',
  });

  const filesList = imagesToUpload.length > 0
    ? imagesToUpload.map((image, index) => (
      <li key={image.path} className="upload-preview">
        <img src={image.preview} alt="" />
        <button type="button" className="styleless-button" onClick={() => { removeImagePreview(index); }}>
          <span className="fa-stack">
            <i className="fas fa-circle fa-stack-2x" />
            <i className="fas fa-times fa-stack-1x fa-inverse" />
          </span>
        </button>
      </li>
    )) : null;

  return (
    <div className="dropzone-container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag and drop some images here, or click to select images</p>
      </div>
      <ul className="uploads-preview-container">
        {filesList}
      </ul>
      {imagesToUpload.length > 0
          && (
            <div className="upload-button-container">
              <button type="button" className="CMAC-button" onClick={handleUpload}>
                Upload
              </button>
            </div>
          )}
    </div>
  );
}

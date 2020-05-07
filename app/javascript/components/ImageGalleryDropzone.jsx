/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState, useMemo } from 'react';
import Axios from 'axios';
import { useDropzone } from 'react-dropzone';

export default function ImageGalleryDropzone() {
  const [imagesToUpload, setImagesToUpload] = useState([]);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [failedImages, setFailedImages] = useState([]);
  const [dropzoneDisabled, setDropzoneDisabled] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search).getAll('filename');
    if (urlParams.length > 0) {
      setFailedImages(urlParams);
    }
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
      formData.append('gallery_items[gallery_items][]gallery_item[image]', image);
    });

    setDropzoneDisabled(true);
    Axios.post('/gallery_items/upload', formData, {
      headers: {
        // eslint-disable-next-line quote-props
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      },
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        const percent = Math.floor((loaded / total) * 100);
        if (percent < 99) {
          setUploadPercentage(percent);
        }
      },
    }).then((response) => {
      if (response.status === 200) {
        setUploadPercentage(100);
        window.location.reload(false);
      }
    }).catch((error) => {
      const failedFileNames = error.response.data;
      let url = '/gallery_items?';
      failedFileNames.forEach((file, index) => {
        if (index !== failedFileNames.length - 1) {
          url += `filename=${file}&`;
        } else {
          url += `filename=${file}`;
        }
      });
      window.location.href = url;
    });
  };

  const imagesList = imagesToUpload.length > 0
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

  const failedImagesList = (
    <div style={{ color: 'red' }}>
      <h6>The following files failed to upload. Please try to upload them again or contact the dev team if issue persists.</h6>
      <ul style={{ marginBottom: 0 }}>
        {failedImages.map((image) => (
          <li key={image}>{image}</li>
        ))}
      </ul>
    </div>
  );

  const uploadsPreview = (
    <>
      <ul className="uploads-preview-container">
        {imagesList}
      </ul>
      {imagesToUpload.length > 0
          && (
            <div className="upload-button-container">
              <button type="button" className="cmac-button" onClick={handleUpload}>
                Upload
              </button>
            </div>
          )}
    </>
  );

  const progressBar = (
    <div className="progress">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${uploadPercentage}%` }} aria-valuenow={uploadPercentage} aria-valuemin="0" aria-valuemax="100" />
    </div>
  );

  const {
    getRootProps, getInputProps, isDragActive, isDragReject,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      const recentlyDroppedImages = acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file),
      }));
      setImagesToUpload(imagesToUpload.concat(recentlyDroppedImages));
    },
    multiple: true,
    accept: 'image/jpeg, image/png',
    disabled: dropzoneDisabled,
  });


  const activeStyle = {
    borderColor: '#2196f3',
  };

  const rejectStyle = {
    borderColor: '#ff1744',
  };

  const style = useMemo(() => ({
    ...(isDragActive ? activeStyle : {}),
    ...(isDragReject ? rejectStyle : {}),
  }), [
    isDragActive,
  ]);

  return (
    <div className="dropzone-container">
      <div {...getRootProps({ className: 'dropzone', style })}>
        <input {...getInputProps()} />
        {uploadPercentage > 0
          ? <p>Uploading...</p>
          : <p>Drag and drop some images here, or click to select images</p> }
      </div>
      {failedImages.length > 0 && failedImagesList}
      { uploadPercentage === 0 ? uploadsPreview : progressBar}
    </div>
  );
}

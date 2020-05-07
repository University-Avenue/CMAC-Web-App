import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ImageGalleryOverlay from './ImageGalleryOverlay';

export default function ImageGallerySection() {
  const [images, setImages] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [failedToRetrieve, setFailedToRetrieve] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayImage, setOverlayImage] = useState('');
  const [page, setPage] = useState(1);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);

  const fetch = () => {
    setFetching(true);
    const fetchURL = `/gallery_items/page/${page}.json`;
    Axios.get(fetchURL).then((response) => {
      if (response.status === 200) {
        if (response.data.length < 6) {
          setShowLoadMoreButton(false);
        }
        setImages(images.concat(response.data));
        setPage(page + 1);
      } else {
        setFailedToRetrieve(true);
      }
      setFetching(false);
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  // Todo: handle errors
  if (fetching && images.length === 0) {
    return (null);
  }

  if (failedToRetrieve) {
    return (null);
  }

  const imageList = images.map((image) => (
    <li key={image.id} className="gallery-item">
      <button
        type="button"
        className="styleless-button"
        onClick={() => {
          setShowOverlay(true);
          setOverlayImage(image.image_url);
        }}
      >
        <img src={image.image_url} alt="" />
      </button>
    </li>
  ));

  return (
    <section id="image-gallery">
      <div className="home-page-section-title-container">
        <h3>Image Gallery</h3>
      </div>
      <div className="home-page-section-content-container">
        <div className="home-page-section-content">
          <ul className="image-gallery">
            {imageList}
          </ul>
        </div>
        { fetching && <div className="lds-dual-ring" /> }
        { !fetching && showLoadMoreButton
          && (
          <button
            type="button"
            className="cmac-button"
            onClick={() => { fetch(); }}
          >
            Load more
          </button>
          )}
      </div>
      { showOverlay
        && (
        <ImageGalleryOverlay
          imageToDisplay={overlayImage}
          handleHide={() => { setShowOverlay(false); }}
        />
        )}
    </section>
  );
}

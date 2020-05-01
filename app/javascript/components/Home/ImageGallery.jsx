import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Footer from './Footer';
import ImageGalleryOverlay from './ImageGalleryOverlay';

export default function ImageGallerySection() {
  const [images, setImages] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [failedToRetrieve, setFailedToRetrieve] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayImage, setOverlayImage] = useState('');

  useEffect(() => {
    Axios.get('/gallery_items.json').then((response) => {
      if (response.status === 200) {
        const imagesList = response.data.map((image) => (
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
        setImages(imagesList);
      } else {
        setFailedToRetrieve(true);
      }
      setFetching(false);
    });
  }, []);

  // Todo: handle error;
  if (fetching) {
    return (
      null
    );
  }
  if (failedToRetrieve) {
    return (null);
  }

  return (
    <section id="image-gallery">
      <div className="home-page-section-title-container">
        <h3>Image Gallery</h3>
      </div>
      <div className="home-page-section-content-container">
        <div className="home-page-section-content">
          <ul className="image-gallery">
            {images}
          </ul>
        </div>
        <button type="button">Load more</button>
      </div>
      { showOverlay
        && (
        <ImageGalleryOverlay
          imageToDisplay={overlayImage}
          handleHide={() => { setShowOverlay(false); }}
        />
        )}
      <Footer />
    </section>
  );
}

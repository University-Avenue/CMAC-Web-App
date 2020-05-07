import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGalleryOverlay(props) {
  const { imageToDisplay, handleHide } = props;

  return (
    <div className="image-gallery-overlay">
      <div className="image-gallery-overlay-inner">
        <div className="image-gallery-close-button-container">
          <button
            className="styleless-button image-gallery-close-button"
            type="button"
            onClick={() => { handleHide(); }}
          >
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="image-gallery-overlay-image-container">
          <figure>
            <img src={imageToDisplay} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

ImageGalleryOverlay.propTypes = {
  imageToDisplay: PropTypes.string.isRequired,
  handleHide: PropTypes.func.isRequired,
};

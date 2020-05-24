import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor/visibility-sensor';

const Masthead = () => {
  const [intialPageLoad, setIntialPageLoad] = useState(true);

  useEffect(() => {
    setIntialPageLoad(false);
  }, []);

  const handleVisibilityChange = (isVisible) => {
    const dotNavigator = document.getElementById('dot-navigator');
    if (isVisible) {
      dotNavigator.classList.remove('fade-in');
      if (!intialPageLoad) {
        dotNavigator.classList.add('fade-out');
      }
    } else {
      dotNavigator.classList.add('fade-in');
      dotNavigator.classList.remove('fade-out');
    }
  };

  return (
    <VisibilitySensor
      partialVisibility
      offset={{ top: 200 }}
      onChange={handleVisibilityChange}
    >
      <header className="masthead">
        <div className="masthead-container">
          <div className="masthead-title-container">
            <h1 className="font-weight-bold text-uppercase">
              Classical Martial Arts Center Waterloo
            </h1>
            <hr className="divider" />
            Serving the Kitchener-Waterloo community for 30 years
          </div>
          <Link
            className="masthead-scroll-indicator-container"
            to="our-story"
            duration={1000}
            smooth
          >
            <div className="scroll-indicator">
              <i className="fa fa-chevron-down" />
            </div>
          </Link>
        </div>
      </header>
    </VisibilitySensor>
  );
};

export default Masthead;

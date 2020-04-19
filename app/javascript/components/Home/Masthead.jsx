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
        <div className="container">
          <div className="row text-center justify-content-center" style={{ height: '100%' }}>
            <div className="col-md-12 col-lg-10 align-self-end">
              <h1 className="font-white font-bold text-uppercase">
                classical martial arts center waterloo
              </h1>
              <hr className="divider" />
            </div>
            {/* col */}
            <div className="col-8 align-self-baseline">
              <p className="font-white font-light">
                Serving the Kitchener-Waterloo community for 30 years
              </p>
            </div>
            {/* col */}
            <div className="col-8 align-self-stretch align-items-center">
              <Link
                to="our-story"
                duration={1000}
                smooth
              >
                Find out more
                <span className="scroll-indicator" />
              </Link>
            </div>
            {/* col */}
          </div>
          {/* row */}
        </div>
        {/* container */}
      </header>
    </VisibilitySensor>
  );
};

export default Masthead;

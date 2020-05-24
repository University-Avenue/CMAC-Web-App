import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

export default function DotNavigator(props) {
  const { visibleSection, setVisibleSection } = props;

  return (
    <div id="dot-navigator" className="dot-navigator">
      <ul className="dots">
        <li className="dot-list-item">
          <Link
            className="dot"
            to="our-story"
            duration={1000}
            smooth
            onClick={() => { setVisibleSection('ourStory'); }}
          >
            <div className="circle-container">
              <span className="outer-circle">
                <span className={`inner-circle ${visibleSection === 'ourStory' ? 'fill' : ''}`} />
              </span>
            </div>
          </Link>
          {/* <p className="dot-title">Our Story</p> */}
        </li>
        <li className="dot-list-item">
          <Link
            className="dot"
            to="cmac"
            duration={1000}
            smooth
            onClick={() => {
              setVisibleSection('cmac');
            }}
          >
            <div className="circle-container">
              <span className="outer-circle">
                <span className={`inner-circle ${visibleSection === 'cmac' ? 'fill' : ''}`} />
              </span>
            </div>
          </Link>
          {/* <p className="dot-title">CMAC</p> */}
        </li>
        {/* <li className="dot-list-item">
          <Link
            className="dot"
            to="why-you-should-join"
            duration={1000}
            smooth
            onClick={() => { setVisibleSection('whyYouShouldJoin'); }}
          >
            <div className="circle-container">
              <span className="outer-circle">
                <span className={`inner-circle ${visibleSection === 'whyYouShouldJoin' ? 'fill' : ''}`} />
              </span>
            </div>
          </Link>
          <p className="dot-title">Join</p>
        </li> */}
        <li className="dot-list-item">
          <Link
            className="dot"
            to="our-instructors"
            duration={1000}
            smooth
            onClick={() => { setVisibleSection('ourInstructors'); }}
          >
            <div className="circle-container">
              <span className="outer-circle">
                <span className={`inner-circle ${visibleSection === 'ourInstructors' ? 'fill' : ''}`} />
              </span>
            </div>
          </Link>
          {/* <p className="dot-title">Our Instructors</p> */}
        </li>
        <li className="dot-list-item">
          <Link
            className="dot"
            to="todays-schedule"
            duration={1000}
            smooth
            onClick={() => { setVisibleSection('todaysSchedule'); }}
          >
            <div className="circle-container">
              <span className="outer-circle">
                <span className={`inner-circle ${visibleSection === 'todaysSchedule' ? 'fill' : ''}`} />
              </span>
            </div>
          </Link>
          {/* <p className="dot-title">Today&apos;s Schedule</p> */}
        </li>
        <li className="dot-list-item">
          <Link
            className="dot"
            to="image-gallery"
            duration={1000}
            smooth
            onClick={() => { setVisibleSection('imageGallery'); }}
          >
            <div className="circle-container">
              <span className="outer-circle">
                <span className={`inner-circle ${visibleSection === 'imageGallery' ? 'fill' : ''}`} />
              </span>
            </div>
          </Link>
          {/* <p className="dot-title">Image Gallery</p> */}
        </li>
      </ul>
    </div>
  );
}

DotNavigator.propTypes = {
  visibleSection: PropTypes.string.isRequired,
  setVisibleSection: PropTypes.func.isRequired,
};

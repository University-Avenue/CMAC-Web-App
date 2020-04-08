import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll';

const DotNavigator = () => {
  const [activeSection, setActiveSection] = useState('ourStory');
  const target = useRef(null);

  return (
    <div id="dot-navigator" className="dot-navigator">
      <ul>
        <li>
          <Link
            to="our-story"
            duration={1000}
            smooth
            onClick={() => { setActiveSection('ourStory'); }}
            target={target.current}
          >
            <span className={`dot ${activeSection === 'ourStory' ? 'fill' : ''}`} />
          </Link>
        </li>
        <li>
          <Link
            to="cmac"
            duration={1000}
            smooth
            onClick={() => {
              setActiveSection('cmac');
            }}
          >
            <span className={`dot ${activeSection === 'cmac' ? 'fill' : ''}`} />
          </Link>
        </li>
        <li>
          <Link
            to="why-you-should-join"
            duration={1000}
            smooth
            onClick={() => { setActiveSection('whyYouShouldJoin'); }}
          >
            <span className={`dot ${activeSection === 'whyYouShouldJoin' ? 'fill' : ''}`} />
          </Link>
        </li>
        <li>
          <Link
            to="our-instructors"
            duration={1000}
            smooth
            onClick={() => { setActiveSection('ourInstructors'); }}
          >
            <span className={`dot ${activeSection === 'ourInstructors' ? 'fill' : ''}`} />
          </Link>
        </li>
        <li>
          <Link
            to="todays-schedule"
            duration={1000}
            smooth
            onClick={() => { setActiveSection('todaysSchedule'); }}
          >
            <span className={`dot ${activeSection === 'todaysSchedule' ? 'fill' : ''}`} />
          </Link>
        </li>
        <li>
          <Link
            to="image-gallery"
            duration={1000}
            smooth
            onClick={() => { setActiveSection('imageGallery'); }}
          >
            <span className={`dot ${activeSection === 'imageGallery' ? 'fill' : ''}`} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DotNavigator;

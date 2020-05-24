import React from 'react';
import PropTypes from 'prop-types';

export default function Course({ name, isLoggedIn, image }) {
  const isCourseLocked = isLoggedIn ? '' : 'locked';
  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="course">
      <div
        className={`course-photo ${isCourseLocked}`}
        id={name.toLowerCase()}
        style={style}
      >
      </div>
      <div className="course-description">
        <p className="lesson-count">{`${name.length * 2} Lessons`}</p>
        <div className="course-title">
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
}

Course.propTypes = {
  name: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  image: PropTypes.object.isRequired,
};

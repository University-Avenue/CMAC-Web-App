import React from 'react';
import PropTypes from 'prop-types';

export default function Course({ name, isLoggedIn, image }) {
  const isCourseLocked = isLoggedIn ? '' : 'locked';
  const style = {
    backgroundImage: ` 
      url(${image})`,
  };

  return (
    <div className="course">
      <a href={`${isLoggedIn ? { name } : '/login'}`}>
        <div
          className={`course-photo ${isCourseLocked}`}
          id={name.toLowerCase()}
          style={style}
        >
          {!isLoggedIn && (
          <div className="locked-layer">
            <i className="fas fa-lock" />
          </div>
          )}
        </div>
      </a>
      <div className="course-description">
        <p className="lesson-count">{`${name.length * 2} Lessons`}</p>
        <div className="course-title">
          <a href={`${isLoggedIn ? { name } : '/login'}`}>
            <h4>{name}</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

Course.propTypes = {
  name: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  image: PropTypes.node.isRequired,
};

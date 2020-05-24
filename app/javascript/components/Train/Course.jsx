import React from 'react';
import PropTypes from 'prop-types';

export default function Course({ name, isLoggedIn }) {
  const isCourseLocked = isLoggedIn ? '' : 'locked';

  return (
    <div className="course">
      <div className={`course-photo ${isCourseLocked}`}>
        <img src={require(`../../../assets/images/${name.toLowerCase()}.png`)} alt={name} id={name.toLowerCase()}/>
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
};

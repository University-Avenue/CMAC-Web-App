import React, { useEffect, useState } from 'react';
import Course from './Course';
import useLoginStatus from '../../hooks/useLoginStatus';

export default function CourseGrid() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => { useLoginStatus(setIsLoggedIn); }, []);


  return (
    <div className="course-grid">
      <Course name="Karate" isLoggedIn={isLoggedIn} />
      <Course name="Weapons" isLoggedIn={isLoggedIn} />
      <Course name="Tai Chi" isLoggedIn={isLoggedIn} />
    </div>
  );
}

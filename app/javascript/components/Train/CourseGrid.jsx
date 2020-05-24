import React, { useEffect, useState } from 'react';
import Course from './Course';
import useLoginStatus from '../../hooks/useLoginStatus';
import KarateImage from '../../../assets/images/karate.png';
import WeaponsImage from '../../../assets/images/weapons.png';
import TaiChiImage from '../../../assets/images/tai_chi.png';

export default function CourseGrid() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => { useLoginStatus(setIsLoggedIn); }, []);


  return (
    <div className="course-grid">
      <Course name="Karate" isLoggedIn={isLoggedIn} image={KarateImage} />
      <Course name="Weapons" isLoggedIn={isLoggedIn} image={WeaponsImage} />
      <Course name="Tai Chi" isLoggedIn={isLoggedIn} image={TaiChiImage} />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import Course from './Course';
import useLoginStatus from '../../hooks/useLoginStatus';
import KarateImage from '../../../assets/images/karate.jpg';
import WeaponsImage from '../../../assets/images/weapons.jpg';
import TaiChiImage from '../../../assets/images/tai_chi.jpg';
import ConditioningImage from '../../../assets/images/conditioning.jpg';
import WarmUpImage from '../../../assets/images/warm_up.jpg';
import StretchingImage from '../../../assets/images/stretching.jpg';

export default function CourseGrid() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => { useLoginStatus(setIsLoggedIn); }, []);


  return (
    <div className="container">
      <div className="course-grid">
        <Course name="Karate" isLoggedIn={isLoggedIn} image={KarateImage} />
        <Course name="Weapons" isLoggedIn={isLoggedIn} image={WeaponsImage} />
        <Course name="Tai Chi" isLoggedIn={isLoggedIn} image={TaiChiImage} />
        <Course name="Conditioning" isLoggedIn={isLoggedIn} image={ConditioningImage} />
        <Course name="Stretching" isLoggedIn={isLoggedIn} image={StretchingImage} />
        <Course name="Warming Up" isLoggedIn={isLoggedIn} image={WarmUpImage} />
      </div>
    </div>
  );
}

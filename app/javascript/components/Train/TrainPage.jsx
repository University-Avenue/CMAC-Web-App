import React from 'react';
import CourseGrid from './CourseGrid';
import MapContainer from '../ContactUs/MapContainer';

export default function TrainPage() {
  return (
    <>
      <div className="page-header-container">
        <h1>Training Center</h1>
      </div>
      <CourseGrid />
      <MapContainer />
    </>
  );
}

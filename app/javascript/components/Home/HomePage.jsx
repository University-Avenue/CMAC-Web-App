/* eslint-disable no-trailing-spaces */
import React from 'react';
import Masthead from './Masthead';
import OurStorySection from './OurStory';
import CMACSection from './CMAC';
import WhyYouShouldJoinSection from './WhyYouShouldJoin';
import OurInstructorsSections from './OurInstructors';
import TodaysScheduleSection from './TodaysSchedule';
import ImageGallerySection from './ImageGallery';

export default function HomePage() {
  return (
    <>
      <Masthead />
      <OurStorySection />
      <CMACSection />
      <WhyYouShouldJoinSection />
      <OurInstructorsSections />
      <TodaysScheduleSection />
      <ImageGallerySection />
    </>
  );
}
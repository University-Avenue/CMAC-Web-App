import React, { useState } from 'react';
import Masthead from './Masthead';
import OurStorySection from './OurStory';
import CMACSection from './CMAC';
import WhyYouShouldJoinSection from './WhyYouShouldJoin';
import OurInstructorsSections from './OurInstructors';
import TodaysScheduleSection from './TodaysSchedule';
import ImageGallerySection from './ImageGallery';
import DotNavigator from './DotNavigator';

export default function HomePage() {
  const [visibleSection, setVisibleSection] = useState('ourStory');

  return (
    <>
      <DotNavigator
        visibleSection={visibleSection}
        setVisibleSection={(section) => { setVisibleSection(section); }}
      />
      <Masthead setVisibleSection={(section) => { setVisibleSection(section); }} />
      <OurStorySection setVisibleSection={(section) => { setVisibleSection(section); }} />
      <CMACSection setVisibleSection={(section) => { setVisibleSection(section); }} />
      {/* <WhyYouShouldJoinSection setVisibleSection={(section) => { setVisibleSection(section); }} /> */}
      <OurInstructorsSections setVisibleSection={(section) => { setVisibleSection(section); }} />
      <TodaysScheduleSection setVisibleSection={(section) => { setVisibleSection(section); }} />
      <ImageGallerySection setVisibleSection={(section) => { setVisibleSection(section); }} />
    </>
  );
}

import React, { useState } from 'react';
import Masthead from './Masthead';
import OurStorySection from './OurStory';
import CMACSection from './CMAC';
import WhyYouShouldJoinSection from './WhyYouShouldJoin';
import OurInstructorsSections from './OurInstructors';
import TodaysScheduleSection from './TodaysSchedule';
import ImageGallerySection from './ImageGallery';
import DotNavigator from './DotNavigator';
import Footer from './Footer';

export default function HomePage() {
  const [visibleSection, setVisibleSection] = useState('ourStory');

  return (
    <>
      <DotNavigator
        visibleSection={visibleSection}
        setVisibleSection={(section) => { setVisibleSection(section); }}
      />
      <Masthead />
      <OurStorySection />
      <CMACSection />
      {/* <WhyYouShouldJoinSection setVisibleSection={(section) => { setVisibleSection(section); }} /> */}
      <OurInstructorsSections />
      <TodaysScheduleSection />
      <ImageGallerySection />
      <Footer />
    </>
  );
}

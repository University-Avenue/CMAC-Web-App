import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import '../../stylesheets/application.scss';

export default function TodaysScheduleSection() {
  return (
    <section id="todays-schedule" className="home-page-section">
      <div className="home-page-section-title-container">
        <h3>Today&apos;s Schedule</h3>
      </div>
      <div className="home-page-section-content-container">
        <div className="home-page-section-content">
          <FullCalendar defaultView="timeGridDay" plugins={[timeGridPlugin]} />
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import '../../stylesheets/application.scss';
import events from '../Schedule/Events';

export default function TodaysScheduleSection() {
  return (
    <section id="todays-schedule" className="home-page-section">
      <div className="home-page-section-title-container">
        <h3>Today&apos;s Schedule</h3>
      </div>
      <div className="home-page-section-content-container">
        <div className="home-page-section-content">
          <FullCalendar
            defaultView="timeGridDay"
            plugins={[timeGridPlugin]}
            events={events}
            minTime="11:00:00"
            maxTime="22:00:00"
            eventTextColor="white"
            eventTimeFormat={
            {
              hour: 'numeric',
              minute: '2-digit',
              meridiem: 'short',
            }
          }
          />
        </div>
      </div>
    </section>
  );
}

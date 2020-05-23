import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import events from './Events';

export default function Schedule() {
  return (
    <>
      <div className="page-header-container">
        <h1>Schedule</h1>

      </div>
      <div className="calendar-container">
        <FullCalendar
          defaultView="timeGridWeek"
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay',
          }}
          plugins={[timeGridPlugin]}
          allDaySlot={false}
          contentHeight="auto"
          minTime="11:00:00"
          maxTime="22:00:00"
          events={events}
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
    </>
  );
}

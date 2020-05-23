import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import EventCreationFrom from './EventCreationFrom';

export default function Schedule() {
  const [showEventCreationFrom, setShowEventCreationFrom] = useState(false);
  const [selectionInfo, setSelectionInfo] = useState('');

  useEffect(() => {
    if (selectionInfo !== '') {
      setShowEventCreationFrom(true);
    }
  }, [selectionInfo]);

  return (
    <>
      <div className="page-header-container">
        <h1>Schedule</h1>
      </div>
      <div className="container">
        <div className="calendar-container">
          <FullCalendar
            defaultView="timeGridWeek"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'timeGridWeek,timeGridDay',
            }}
            plugins={[timeGridPlugin, interactionPlugin]}
            allDaySlot={false}
            contentHeight="auto"
            minTime="9:00:00"
            maxTime="22:00:00"
            dateClick={(info) => {
              console.log(info)
              setSelectionInfo(info.dateStr);
              }}
            defaultTimedEventDuration="01:00"
          />
        </div>
      </div>
      {
        showEventCreationFrom
        && (
          <EventCreationFrom
            info={selectionInfo}
            handleClose={() => { setShowEventCreationFrom(false); }}
          />
        )
      }
    </>
  );
}

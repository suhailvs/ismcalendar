"use client";
// https://stackoverflow.com/q/78011246/2351696
import React, { useState, useEffect, useMemo } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from './events';
// const localizer = momentLocalizer(moment);
export default function Home() {
  // const [events, setEvents] = useState([]);
  const localizer = useMemo(() => momentLocalizer(moment), []);
  // const handleCalendarNavigate = (date: Date) => {
  //   console.log("Month ----->>>", moment(date).format("MMMM YYYY"));
  // };
  // const {views, ...otherProps} = useMemo(() => ({
  //     views: {
  //         month: true,       
  //     }
  // }), [])
  return (
    <>
      <div className="row custom_row bg-white rounded-corner h-100 p-4">
        <div className="col-md-12 px-0">
          <Calendar
            localizer={localizer}
            // views={views}
            events={events}
            style={{ height: 580 }}
            // onNavigate={handleCalendarNavigate}
            defaultView="day"
          />
        </div>
      </div>
    </>
  );
}

/*
 initialView: 'dayGridWeek',
  headerToolbar: {
    left: 'prev,next',
    center: 'title',
    right: 'dayGridMonth,dayGridWeek,dayGridDay' // user can switch between the two
  },
    height: '100%',
    */
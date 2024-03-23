"use client";
// https://stackoverflow.com/q/78011246/2351696
import React, { useState, useEffect, useMemo } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
// const localizer = momentLocalizer(moment);
export default function Home() {
  const [events, setEvents] = useState([]);
  const localizer = useMemo(() => momentLocalizer(moment), []);
  const handleCalendarNavigate = (date: Date) => {
    console.log("Month ----->>>", moment(date).format("MMMM YYYY"));
  };
  return (
    <>
      <div className="row custom_row bg-white rounded-corner h-100 p-4">
        <div className="col-md-12 px-0">
          <Calendar
            localizer={localizer}
            events={events}
            style={{ height: 580 }}
            onNavigate={handleCalendarNavigate}
          />
        </div>
      </div>
    </>
  );
}
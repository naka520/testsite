//
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // ここでカレンダーに表示するイベントを取得する処理を書く
    const fetchedEvents = [
      {
        title: "イベント1",
        start: "2023-02-20T10:00:00",
        end: "2023-02-20T12:00:00",
      },
      {
        title: "イベント2",
        start: "2023-02-22T14:00:00",
        end: "2023-02-22T16:00:00",
      },
    ];
    setEvents(fetchedEvents);
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
  );
};

export default Calendar;

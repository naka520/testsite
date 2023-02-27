import Style from "../App.css";
import logo from "./logo.svg";
import Header from "./Header";
import { List, Stack, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import FullCalendar from "./Calender";
import Okame from "./Okame";
import Mokuhyoutaizyuu from "./mokuhyoutaizyuu";
import { useState, useEffect } from "react";

const Top = () => {
  const eventdata = localStorage.getItem("events")
    ? JSON.parse(localStorage.getItem("events"))
    : [];
  const data = localStorage.getItem("targetdiet")
    ? JSON.parse(localStorage.getItem("targetdiet"))
    : 40;
  const [targetdiet, setTargetdiet] = useState(data);
  const [events, setEvents] = useState(eventdata);

  useEffect(() => {
    const json = JSON.stringify(events);
    localStorage.setItem("events", json);
  }, [events]);

  useEffect(() => {
    const json = JSON.stringify(targetdiet);
    localStorage.setItem("targetdiet", json);
  }, [targetdiet]);

  return (
    <div>
      <Header />
      <Stack>
        <ul className="yoko">
          <ul>
            <li className="hiduke">
              <Box sx={{ p: 2, border: "2px dashed grey" }}>
                <FullCalendar events={events} setEvents={setEvents} />
              </Box>
            </li>
            {/* <li>
              <Box sx={{ p: 2, border: "2px dashed grey" }}>
                
              </Box>
            </li> */}
          </ul>
          <ul className="side">
            <li className="okame">
              <Okame targetdiet={targetdiet} events={events} />
            </li>
            <li className="mokuhyou">
              <Mokuhyoutaizyuu
                targetdiet={targetdiet}
                setTargetdiet={setTargetdiet}
              />
            </li>
          </ul>
        </ul>
      </Stack>
    </div>
  );
};

export default Top;

//
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { Typography } from "@mui/material";

const Calendar = ({ events, setEvents }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [InputDiet, setInputDiet] = useState("");

  const handleAddDiet = () => {
    if (InputDiet === "") {
      alert("空文字列は受理できない！");
    } else {
      console.log(date);
      const trcdate = date.startOf("date");

      const newEvent = [
        ...events,
        {
          title: InputDiet + "kg",
          diet: Number(InputDiet),
          start: trcdate.toISOString(),
          end: trcdate.toISOString(),
        },
      ];

      newEvent.sort((a, b) =>
        a.start === b.start ? 0 : a.start > b.start ? 1 : -1
      );
      setEvents(newEvent);
    }
    setInputDiet("");
  };

  const [date, setDate] = React.useState(dayjs(new Date().toISOString()));

  const handleChange = (newDate) => {
    setDate(newDate);
  };
  // const handleDateClick = (arg) => {
  //   // bind with an arrow function
  //   onClick = { handleClickOpen };
  // };
  console.log(events);
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={(eventInfo) => eventInfo.event.title}
        dateClick={handleClickOpen}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>体重の入力</DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              value={date}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <DialogContentText>その日の体重を入力してください</DialogContentText>
          <TextField
            autoFocus
            //margin="dense"
            fullWidth
            variant="standard"
            value={InputDiet}
            onChange={(e) => {
              setInputDiet(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>戻る</Button>
          <Button onClick={handleAddDiet}>追加</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Calendar;

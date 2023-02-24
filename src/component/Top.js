import Style from "../App.css";
import logo from "./logo.svg";
import Header from "./Header";
import { Stack, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import PickDayCalendar from "./Calender";

const Top = () => {
  return (
    <div className={Style.App}>
      <Header />
      <Stack>
        <Box sx={{ width: 500, height: 500 }}>
          <Typography>
            <PickDayCalendar />
          </Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default Top;

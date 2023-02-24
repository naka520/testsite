import Style from "../App.css";
import logo from "./logo.svg";
import Header from "./Header";
import { List, Stack, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import PickDayCalendar from "./Calender";
import Okame from "./Okame";

const Top = () => {
  return (
    <div className={Style.App}>
      <Header />
      <Stack>
        <Box sx={{ width: 500, height: 500, padding: 10 }}>
          <Typography>
            <PickDayCalendar />
          </Typography>
        </Box>
      </Stack>
      <List>
        <Stack>
          <Okame />
        </Stack>
        <Stack></Stack>
      </List>
    </div>
  );
};

export default Top;

import Style from "../App.css";
import logo from "./logo.svg";
import Header from "./Header";
import { Stack, Typography } from "@mui/material";
import { Box, width } from "@mui/system";

const Top = () => {
  return (
    <div className={Style.App}>
      <Header />
      <Stack>
        <Box sx={{ width: 200, height: 200 }}>
          <Typography>カレンダー</Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default Top;

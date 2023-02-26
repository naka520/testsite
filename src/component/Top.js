import Style from "../App.css";
import logo from "./logo.svg";
import Header from "./Header";
import { List, Stack, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import FullCalendar from "./Calender";
import Okame from "./Okame";
import Mokuhyoutaizyuu from "./mokuhyoutaizyuu";

const Top = () => {
  return (
    <div>
      <Header />
      <Stack>
        <ul className="yoko">
          <li className="hiduke">
            <FullCalendar />
          </li>
          <ul className="side">
            <li className="okame">
              <Okame />
            </li>
            <li className="mokuhyou">
              <Mokuhyoutaizyuu />
            </li>
          </ul>
        </ul>
      </Stack>
    </div>
  );
};

export default Top;

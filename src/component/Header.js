import Style from "../App.css";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="bg-gray-300">
          <Typography variant="h6">
            <Box textAlign="left">OkameCalender</Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

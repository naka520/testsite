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
        <Toolbar className="bg-gray-200">
          <Typography variant="h6">
            <Box textAlign="left">
              <p className="text-slate-700">OkameCalender</p>
            </Box>
            <Box textAlign="left">
              <a href="/.auth/login/">Login</a>
            </Box>

            <Box textAlign="left">
              <a href="/.auth/logout">Logout</a>
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

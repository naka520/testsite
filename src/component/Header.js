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
import { Padding } from "@mui/icons-material";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="bg-gray-200">
          <Typography variant="h6">
            <ul style={{ display: "flex" }}>
              <Box textAlign="left">
                <p className="text-slate-700">OkameDiet</p>
              </Box>
              <Box
                textAlign="left"
                sx={{ marginLeft: 1, p: 1, border: "2px dashed grey" }}
              >
                <a href="/.auth/login/github" className="text-slate-500">
                  Login
                </a>
              </Box>

              <Box
                textAlign="left"
                sx={{ marginLeft: 1, p: 1, border: "2px dashed grey" }}
              >
                <a href="/.auth/logout" className="text-slate-500">
                  Logout
                </a>
              </Box>
            </ul>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

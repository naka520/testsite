import { Box, Typography } from "@mui/material";
import Style from "../App.css";

const Mokuhyoutaizyuu = () => {
  return (
    <Box
      sx={{ width: 200, p: 2, border: "2px dashed grey" }}
      className="bg-gray-100"
    >
      <Typography>
        目標体重<p>kg</p>
      </Typography>
    </Box>
  );
};
export default Mokuhyoutaizyuu;

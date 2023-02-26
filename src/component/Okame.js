import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import okame2 from "./okame2.png";

const Okame = () => {
  return (
    <Box sx={{ p: 2, border: "2px dashed grey" }}>
      <img
        src={okame2}
        sx={{
          width: "60%",
          margin: "auto",
          display: "block",
          border: "2px dashed grey",
        }}
      />
    </Box>
  );
};

export default Okame;

import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import okame2 from "./okame2.png";
import okame1 from "./okame1.png";
import okame3 from "./okame3.png";
const Okame = ({ targetdiet, events }) => {
  let okame = okame3;
  console.log(targetdiet);
  console.log(events, events[events.length - 1]);
  const todaydiet = events[events.length - 1].diet;
  if (todaydiet - targetdiet > 5) {
    okame = okame1;
  } else if (todaydiet - targetdiet > 2) {
    okame = okame2;
  }

  return (
    <Box sx={{ p: 2, border: "2px dashed grey" }}>
      <img
        src={okame} //条件処理を書く部分
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

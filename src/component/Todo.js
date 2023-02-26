import { Button, Stack, Typography, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Todo = ({ content, index, todos, setTodos }) => {
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Typography variant="h6">{content}</Typography>
        <IconButton className="">
          <CheckCircleIcon sx={{ color: "#55ff55" }} />
        </IconButton>
      </Stack>
    </div>
  );
};
export default Todo;
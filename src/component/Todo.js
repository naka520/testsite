import { Button, Stack, Typography, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Todo = ({ content, index, todos, setTodos }) => {
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Typography variant="h8">{content}kg</Typography>
      </Stack>
    </div>
  );
};
export default Todo;

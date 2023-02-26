import {
  Box,
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import Style from "../App.css";
import Todo from "./Todo";
import { useState, useEffect } from "react";

const Mokuhyoutaizyuu = () => {
  var data = "";
  const [InputText, setInputText] = useState("");
  const [todos, setTodos] = useState(data);

  const handleAddTodo = () => {
    if (InputText === "") {
      alert("空文字列は受理できない！");
    } else {
      setTodos([
        ...todos,
        {
          content: InputText,
        },
      ]);
    }
    setInputText("");
  };
  return (
    <Box
      sx={{ width: 200, p: 2, border: "2px dashed grey" }}
      className="bg-gray-100"
    >
      <Typography>
        目標体重の入力
        <TextField
          type="tText"
          value={InputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <Button
          className="bg-gradient-to-b from-orange-400 to-orange-500"
          onClick={handleAddTodo}
          variant="outlined"
        >
          追加
        </Button>
        <List
          sx={{ overflow: "auto", maxHeight: "150px" }}
          style={{ listStyle: "none" }}
        >
          {todos.map((item, index) => {
            return (
              <ListItem key={index}>
                <Todo content={item.content} />
              </ListItem>
            );
          })}
        </List>
        <p>kg</p>
      </Typography>
    </Box>
  );
};
export default Mokuhyoutaizyuu;

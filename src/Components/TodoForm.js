import React from "react";
import TextField from "@material-ui/core/TextField";
import useTodoFormState from "../StateComponents/TodoFormState";
const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useTodoFormState("");
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;

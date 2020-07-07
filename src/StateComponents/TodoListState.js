import { useState } from "react";
export default initialValue => {
  const [todos, setTodos] = useState([]);
  const saveTodo = todoText => {
    if (todoText.length > 0) {
      setTodos([...todos, todoText]);
    }
  };
  const deleteTodo = indexToDelete => {
    const newTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(newTodos);
  };
  return {
    todos,
    saveTodo,
    deleteTodo
  };
};

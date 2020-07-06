import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const saveTodo = todoText => {
    const trimmedText = todoText.trim();
    if (trimmedText.length > 0) {
      setTodos([...todos, trimmedText]);
    }
  };
  return (
    <div>
      <h2>Todos</h2>
      <TodoForm saveTodo={saveTodo} />
      <Todo todos={todos} />
    </div>
  );
};
export default TodoContainer;

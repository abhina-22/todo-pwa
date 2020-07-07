import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import useTodoState from "../StateComponents/TodoListState";

const TodoPage = () => {
  const { todos, saveTodo, deleteTodo } = useTodoState([]);
  return (
    <div>
      <h2>Todos</h2>
      <TodoForm saveTodo={saveTodo} />
      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};
export default TodoPage;

import React, { useState } from "react";
import "./App.css";
import Todo from "./todo";
import ListTodo from "./listTodo";

function App() {
  const [todo, setTodo] = useState(DATA_TODO);
  const addItem = (e) => {
    setTodo([...todo, e]);
  };
  const deleteItem = () => {};
  return (
    <div className="App">
      <div className="alert alert-primary">My first Todo App</div>
      <Todo addTodo={addItem} />
      <ListTodo list={todo} deleteTodo={deleteItem} />
    </div>
  );
}

export default App;

const DATA_TODO = ["Test app", "Order pizza", "Go to gym"];

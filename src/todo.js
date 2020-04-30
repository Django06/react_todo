import React, { useState } from "react";

export default function Todo(props) {
  const [todoInput, setTodoInput] = useState("");
  const onAddTodo = () => {
    if (todoInput !== "") {
      props.addTodo(todoInput);
      setTodoInput("");
    }
    else{
      alert("3emer asahby dik Input ! Malk akha dayer B7al haka !");
    }
  };
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <input
        type="text"
        style={{ width: "35vw" }}
        value={todoInput}
        onChange={(event) => setTodoInput(event.target.value)}
        placeholder="add todo"
        className="form-control"
      ></input>
      <button
        type="submit"
        className="btn btn-primary ml-2"
        onClick={onAddTodo}
      >
        Add new
      </button>
    </div>
  );
}

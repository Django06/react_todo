import React from "react";

export default function ListTodo(props) {
  const listTodo = props.list;
  const listItems = listTodo.map((e, i) => (
    <li
      className="list-group-item"
      style={{ display: "flex", justifyContent: "space-between" }}
      key={i}
    >
      {e}{" "}
      <button type="button" className="btn btn-danger btn-sm">
        delete
      </button>
    </li>
  ));
  return (
    <ul
      className="list-group mt-3 mb-3"
      style={{ width: "50vw", margin: "auto", overflow: "auto" }}
    >
      {listItems}{" "}
    </ul>
  );
}

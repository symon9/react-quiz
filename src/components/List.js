import React from "react";
import ListItem from "./ListItem";

function List({ initialTodos, onCompleted, onDelete }) {
  return (
    <ul>
      {initialTodos.map((todo) => (
        <ListItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          isCompleted={todo.isCompleted}
          onCompleted={onCompleted}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default List;

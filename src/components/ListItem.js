import React from "react";

function ListItem({ id, text, isCompleted, onCompleted, onDelete }) {
  return (
    <>
      <li>
        <div className={isCompleted ? `completed text` : "text"}>
          <input
            className="checkbox"
            type="checkbox"
            value={isCompleted}
            checked={isCompleted}
            onChange={() => onCompleted(id)}
          />
          {text}
        </div>
        <div className="delete" title="delete" onClick={() => onDelete(id)} >
          ❌
        </div>
      </li>
    </>
  );
}

export default ListItem;

import React from "react";

function Stats({ allCompletedTodos, allTodos }) {
  return (
    <footer className="stats">
      {allCompletedTodos === allTodos ? <p>Hurray!!!🎉✨ It is all completed. </p> : <p>
        You have {allTodos} todo's on your list. You have completed{" "}
        {allCompletedTodos} todo.
      </p>}
    </footer>
  );
}

export default Stats;

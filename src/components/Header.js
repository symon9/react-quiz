import React from "react";

function Header({ setSortBy }) {
  return (
    <>
      <header className="App-header">
        <h1 className="hd">Todo List</h1>
        <span className="sort-by">
          <button onClick={() => setSortBy("input")}>Sort by Input</button>
          <button onClick={() => setSortBy("completed")}>Sort by Completed</button>
        </span>
      </header>
    </>
  );
}

export default Header;

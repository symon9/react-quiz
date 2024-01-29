import React from "react";

function AddForm({ newTodo, setNewTodo, onAddTodo }) {
  return (
    <div className="add-form">
      <form onSubmit={onAddTodo}>
        <input
          className="newtodo"
          type="text"
          placeholder="Enter new todo"
          required
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddForm;

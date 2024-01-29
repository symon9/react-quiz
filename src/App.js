import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Stats from "./components/Stats";
import AddForm from "./components/AddForm";

const initialTodosAll = [
  { id: 1, text: "Learn React Basics", isCompleted: false },
  { id: 2, text: "Build a Todo App", isCompleted: false },
  { id: 3, text: "Explore React Hooks", isCompleted: false },
  { id: 4, text: "Understand React State Management", isCompleted: false },
  { id: 5, text: "Practice with React Router", isCompleted: false },
];

function App() {
  const [initialTodos, setInitialTodos] = useState(initialTodosAll);
  const [newTodo, setNewTodo] = useState("");
  const [sortBy, setSortBy] = useState("input");

  const allTodos = initialTodos.length;
  const allCompletedTodos = initialTodos.filter(
    (todo) => todo.isCompleted === true
  ).length;

  function handleAddTodo(e) {
    e.preventDefault();
    const newId = initialTodos.length + 1
    const addNewTodo = {
      id: newId,
      text: newTodo,
      isCompleted: false,
    }
    setInitialTodos([...initialTodos, addNewTodo])
    setNewTodo('')
  }

  function handleCompleted(id) {
    const newCompleted = initialTodos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setInitialTodos(() => newCompleted);
  }

  function handleDelete(id) {
    const deleted = initialTodos.filter((todo) => id !== todo.id);
    setInitialTodos(deleted);
  }

  let sortedTodos;
  if (sortBy === "input") sortedTodos = initialTodos;
  if (sortBy === "completed") {
    sortedTodos = initialTodos
      .slice()
      .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
  }

  return (
    <div className="App">
      <Header 
        setSortBy={setSortBy} 
        sortBy={sortBy} 
      />
      <List
        initialTodos={sortedTodos}
        onCompleted={handleCompleted}
        onDelete={handleDelete}
      />
      <AddForm 
        newTodo={newTodo} 
        setNewTodo={setNewTodo}
        onAddTodo ={handleAddTodo}
      />
      <Stats 
        allCompletedTodos={allCompletedTodos} allTodos={allTodos} 
      />
    </div>
  );
}

export default App;

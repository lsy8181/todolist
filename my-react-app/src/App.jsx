import React, { useState } from 'react';
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, content) => {
    const newTodo = { id: Date.now(), title, content, isDone: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleIsDone = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
  };

  return (
    <div className="App">
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleIsDone={toggleIsDone} />
    </div>
  );
}

export default App;

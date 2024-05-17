import React from 'react';
import TodoItem from './TodoItem';


function TodoContainer({ title, todos, deleteTodo, toggleIsDone }) {
  return (
    <div className={`todoListContainer ${todos.length === 0 ? 'emptyContainer' : ''}`}>
      <h3>{title}</h3>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleIsDone={toggleIsDone}
        />
      ))}
    </div>
  );
}

export default TodoContainer;

import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, toggleIsDone }) {
  const ongoingTodos = todos.filter(todo => !todo.isDone);
  const completedTodos = todos.filter(todo => todo.isDone);

  return (
    <>
      {/* 진행중인 할 일 컨테이너 */}
      <div className="todoListContainer ongoingContainer">
        <h2>진행중📌</h2>
        {ongoingTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleIsDone={toggleIsDone}
          />
        ))}
      </div>
      
      {/* 완료된 할 일 컨테이너 */}
      <div className="todoListContainer completedContainer">
        <h2>완료🎉</h2>
        {completedTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleIsDone={toggleIsDone}
          />
        ))}
      </div>
    </>
  );
}

export default TodoList;

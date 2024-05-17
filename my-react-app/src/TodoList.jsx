import React from 'react';
import TodoContainer from './TodoContainer.jsx';

function TodoList({ todos, deleteTodo, toggleIsDone }) {
  const ongoingTodos = todos.filter(todo => !todo.isDone);
  const completedTodos = todos.filter(todo => todo.isDone);

  return (
    <>
      {/* 진행중인 할 일 컨테이너 */}
      <TodoContainer 
        title="진행중📌"
        todos={ongoingTodos}
        deleteTodo={deleteTodo}
        toggleIsDone={toggleIsDone}
      />
      
      {/* 완료된 할 일 컨테이너 */}
      <TodoContainer 
        title="완료🎉"
        todos={completedTodos}
        deleteTodo={deleteTodo}
        toggleIsDone={toggleIsDone}
      />
    </>
  );
}

export default TodoList;

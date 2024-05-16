import React from 'react';

function TodoItem({ todo, deleteTodo, toggleIsDone }) {
  
  return (
    
    <div >
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <button onClick={() => toggleIsDone(todo.id)}>{todo.isDone ? '취소' : '완료'}</button>
      <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
    </div>
  );
}

export default TodoItem;

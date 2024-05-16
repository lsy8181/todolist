import React, { useState } from 'react';


function TodoInput({ addTodo }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    addTodo(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="todoInputForm">
      <h2>제목</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="todoInput"
      />
      <h2>내용</h2>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="todoInput"
      />
      <button type="submit" className="submitButton">추가하기</button>
    </form>
  );
}

export default TodoInput;

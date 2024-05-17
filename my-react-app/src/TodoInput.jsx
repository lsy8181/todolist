import React, { useState } from 'react';
import AlertModal from './AlertModal.jsx'; // AlertModal 컴포넌트를 임포트합니다.

function TodoInput({ addTodo }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태를 관리하기 위한 상태

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setIsModalOpen(true); // 제목과 내용이 모두 입력되지 않은 경우 모달을 엽니다.
      return;
    }
    addTodo(title, content);
    setTitle('');
    setContent('');
  };

  // 모달을 닫는 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
      {/* AlertModal 컴포넌트를 조건부 렌더링으로 추가합니다. */}
      <AlertModal
        isOpen={isModalOpen}
        message="제목과 내용을 입력해주세요."
        onConfirm={closeModal} // 'Yes' 버튼 클릭 시 모달을 닫습니다.
      />
    </>
  );
}

export default TodoInput;

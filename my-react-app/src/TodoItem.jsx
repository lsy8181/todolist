import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal.jsx'; // 만든 ConfirmModal 컴포넌트를 임포트

function TodoItem({ todo, deleteTodo, toggleIsDone }) {
  // 모달의 노출 여부를 관리하기 위한 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 삭제 확인
  const handleDelete = () => {
    setIsModalOpen(false);
    deleteTodo(todo.id);
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <button onClick={() => toggleIsDone(todo.id)}>{todo.isDone ? '취소' : '완료'}</button>
      <button onClick={() => setIsModalOpen(true)}>삭제하기</button>
      {/* ConfirmModal 컴포넌트 사용 */}
      <ConfirmModal 
        isOpen={isModalOpen}
        message="정말로 삭제하시겠습니까?"
        onConfirm={handleDelete}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default TodoItem;

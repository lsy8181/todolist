import React from 'react';

function AlertModal({ isOpen, message, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      zIndex: 1000,
      borderRadius: '10px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      border: '2px solid red',
    }}>
      <p>{message}</p>
      <button onClick={onConfirm} style={{
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
      }}>Yes</button>
    </div>
  );
}

export default AlertModal;

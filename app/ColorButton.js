import React from 'react';

const ColorButton = ({ color, onClick }) => {
  return (
    <button
      className={`color-button ${color}`}
      onClick={() => onClick(color)}
    >
      {color}
    </button>
  );
};

export default ColorButton;


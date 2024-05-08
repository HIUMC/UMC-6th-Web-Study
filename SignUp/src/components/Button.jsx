// Button 컴포넌트
import React from 'react';

const Button = ({ onClick, color, text }) => {
  return (
    <button onClick={onClick} style={{ color }}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'red',
};



// Modal 컴포넌
export default Button;
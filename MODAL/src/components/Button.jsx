import React from 'react';

const Button = ({ onClick, color, text }) => {
  return (
    <button class="a" onClick={onClick} style={{ color }}>
      {text}
    </button>
  );
};
Button.defaultProps = {
  color: 'black',
};

export default Button;
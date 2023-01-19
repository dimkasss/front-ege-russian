import React from 'react';
import './Button.css';

interface IButton {
  value: string;
  color: string;
  onClick: () => void;
}

function Button({value, color="purple", onClick}: IButton) {
  const jsxStyle = {
    background: 'var(--' + color + ')'
  }
  return (
    <div className="Button" style={jsxStyle} onClick={() => onClick()}>
        {value}
    </div>
  );
}

export default Button;
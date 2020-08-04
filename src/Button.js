import React from 'react';
import './Button.css';

const Button = ({color="Silver", message="click here",onClick=()=>console.log("Click!")}) => {
const handleClick = () => onClick(color);
  return(
  <button style={{backgroundColor:color}} onClick={handleClick}>
    {message}
  </button>
);
}

export default Button;

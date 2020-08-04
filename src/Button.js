import React from 'react';
import './Button.css';

const handleClick = () => onClick(color);
const Button = ({color="Silver", value="click here",onClick=()=>console.log("Click!")}) => {
  return(
  <button style={{backgroundColor:color}} onClick={handleClick}>
    {value}
  </button>
);
}

export default Button;

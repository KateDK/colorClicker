import React from 'react';
import './Button.css';

const Button = ({color="Silver", value="click here",onClick=()=>console.log("Click!")}) => {
const handleClick = () => onClick(value);
  return(
  <button style={{backgroundColor:color}} onClick={handleClick}>
    {value}
  </button>
);
}

export default Button;

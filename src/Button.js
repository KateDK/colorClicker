import React from 'react';
import './Button.css';

const Button = ({color="Silver", message="click here",onClick=()=>console.log("Click!")}) => {
  // const {onClick,color}=props;
  return(
  <button style={{backgroundColor:color}} onClick={onClick}>
    {message}
  </button>
);
}

export default Button;

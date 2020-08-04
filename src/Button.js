import React from 'react';
import './Button.css';

const Button = ({color="Silver", message="click here",onClick=()=>console.log("Click!")}) => {

  return(
  <button style={{backgroundColor:color}} onClick={()=>onClick(color)}>
    {message}
  </button>
);
}

export default Button;

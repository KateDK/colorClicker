import React from 'react';
import Button from './Button';

class ColorWrapper extends React.Component {
  state={
    backgroundColor: "white",
  }

  onClick = (color)=> {
    this.setState({backgroundColor:color});
  }
  render(){
    const {backgroundColor} =this.state;
    const divStyle = {
      backgroundColor: backgroundColor,
      width: "99%",
      height: 600,
      lineHeight: 20,
      padding: 5,
      border:"2px solid black",
      margin:"auto",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
    };

    return (
      <div className="ColorWrapper" style={divStyle}>
        Im a div!
        <Button color="red" message="Red" onClick={()=>console.log("REEEEEED")}/>
      </div>
    );
  }
}

export default ColorWrapper;

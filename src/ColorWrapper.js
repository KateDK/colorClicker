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

        <Button color="PaleVioletRed" message="PaleVioletRed" onClick={this.onClick}/>
        <Button color="PaleGreen" message="PaleGreen	" onClick={this.onClick}/>
        <Button color="Plum" message="Plum" onClick={this.onClick}/>
        <Button color="LightSkyBlue" message="LightSkyBlue" onClick={this.onClick}/>
      </div>
    );
  }
}

export default ColorWrapper;

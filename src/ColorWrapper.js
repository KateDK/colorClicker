import React from 'react';

class ColorWrapper extends React.Component {
  state={
    backgroundColor: "white",
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
    };

    return (
      <div className="ColorWrapper" style={divStyle}>
        Im a div!
      </div>
    );
  }
}

export default ColorWrapper;

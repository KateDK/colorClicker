import React from 'react';
import Button from './Button';

class ColorWrapper extends React.Component {
  state={
    backgroundColor: "white",
  }
static defaultProps = {
  colors: ["PaleVioletRed","PaleGreen","Plum","LightSkyBlue"]
}

  onClick = (color)=> {
    this.setState({backgroundColor:color});
  }
  render(){
    const {backgroundColor} =this.state;
    const {colors} = this.props;
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
        {colors.map(color => (<Button color={color} message={color} onClick={this.onClick} key={color}/>))}
      </div>
    );
  }
}

export default ColorWrapper;

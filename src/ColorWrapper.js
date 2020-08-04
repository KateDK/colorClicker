import React from 'react';

class ColorWrapper extends React.Component {
  state={
    backgroundColor: "white",
  }
  render(){
    return (
      <div className="ColorWrapper">
        Im a div!
      </div>
    );
  }
}

export default ColorWrapper;

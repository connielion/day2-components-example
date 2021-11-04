import React from "react";

class Button2 extends React.Component {

  render() {
    return (
      <button className="btn2" onClick={()=>alert('clicked Button2')}>
        class component
      </button>
    );
  }
}

export default Button2;

import React from "react";

// Function component
const Button1 = () => {

  return <button onClicked={()=>alert('clicked Button1')} className="btn">function component</button>;
};

export default Button1;

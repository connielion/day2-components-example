import React from "react";
import Button2 from "./components/Button2"; // a class component
import Button1 from "./components/Button1"; // a function component
import './App.css'

const App = () => {
    
  return (
    <div>
      <h1>This App.js</h1>
      <Button1/>
      <Button2/>
    </div>
  );
};

export default App;

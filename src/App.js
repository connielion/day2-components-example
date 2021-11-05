import React from "react";
import Button2 from "./components/Button2"; // a class component
import Button1 from "./components/Button1"; // a function component
import "./App.css";
import List from "./components/List"; // class component with "state"

// Arrow function way
const App = () => {
  return (
    <div className="app">
      <h1>Inside App's render</h1>
      <Button1 />
      <Button2 />
      <List/>
    </div>
  );
};

export default App;

// Above is the same thing as:

/* ES5 function way

export default function App() {
    return (
    <div>
      <h1>This App</h1>
      <Button1/>
      <Button2/>
    </div>
  );
}

or 

function App(){
  // returns the same content as above
}

export default App;

*/

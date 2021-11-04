import React from "react";
import Button2 from "./components/Button2"; // a class component
import Button1 from "./components/Button1"; // a function component
import './App.css'

// Arrow function way
const App = () => {

  return (
    <div>
      <h1>This is App</h1>
      <Button1/>
      <Button2/>
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

*/


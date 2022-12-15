import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Themes from "./components/Themes";

function App() {
  return (
    <div className="App">
      <p></p>
      <p>
        <Counter></Counter>
      </p>
      <p>
        <Themes></Themes>
      </p>
    </div>
  );
}

export default App;

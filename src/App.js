import React from "react";
import "./App.css";
import Nasa from "./components/Nasa";


function App() {
  return (
    <div className="App">
      <h3>
        NASA Image of the day!
      </h3>
      <Nasa />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Nasa from "./components/Nasa";
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <h3>
        NASA Image of the day!
      </h3>
      <Nasa />
    </div>
  );
}

export default App;

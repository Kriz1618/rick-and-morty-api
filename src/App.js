import React, { Fragment } from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import "./main.sass";
import "./components/Header.css";
import "./components/Characters.css";

function App() {
  return (
    <div className="app">
      <Header title={"Rick and Morty"} />
      <Characters />
    </div>
  );
}

export default App;

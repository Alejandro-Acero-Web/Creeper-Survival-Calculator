// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import DamageApplier from "./components/DamageApplier/DamageApplier";

function App() {

  const [SelectedDamage, setDamage] = useState(43.5)

  function DamageChangeHandler(ChosenDamage){
    if(ChosenDamage === "Easy"){
      setDamage(22)
    }
    else if (ChosenDamage === "Normal"){
      setDamage(43)
    }
    else if (ChosenDamage === "Hard"){
      setDamage(64)
    }
  }


  return (
    <div className="">
      <DamageApplier onDifficultySelection={DamageChangeHandler}></DamageApplier>
      
    </div>
  );
}

export default App;


/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" */

// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import DamageApplier from "./components/DamageApplier/DamageApplier";
import DamageReducer from "./components/DamageReducer/DamageReducer";
import SurvivalCalculator from "./components/SurvivalCalculator/SurvivalCalculator";


let protectionConditions ={
  'head':['none', 'none', 'I'],
  'chest':['none', 'none', 'I'],
  'leggings':['none', 'none', 'I'],
  'boots':['none', 'none', 'I']
}

function App() {

  

  const [SelectedDamage, setDamage] = useState(43.5)
  const [SelectedProtections, setProtection] = useState(protectionConditions)

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

  

  function ProtectionChangeHandler(protection){
    protectionConditions = protection
  }

  function ProtectionRequest(){
    setProtection(protectionConditions)
  }



  


  return (
    <div className="main">
      <div className="reducerApplier">
      <DamageReducer onProtectionChange={ProtectionChangeHandler}></DamageReducer>
      <DamageApplier onDifficultySelection={DamageChangeHandler}></DamageApplier>
      </div>
      <SurvivalCalculator protectionParameters={SelectedProtections} damageParameters={SelectedDamage} onCalculate={ProtectionRequest}></SurvivalCalculator>
      
      
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

import React from "react";


function SurvivalCalculator(props){

    function CalculateHandler(){
        props.onCalculate()
    }


    <button onClick={CalculateHandler}>Calculate</button>
}

export default SurvivalCalculator
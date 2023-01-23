import React from "react";

function EnchantmentMagnitude(props){

    function dropDownChangeHandler(event){
        props.onChoiceChange(event.target.value)
    }



    return(
        <select value={props.chosen} onChange={dropDownChangeHandler}>
            <option value="I"></option>
            <option value="II"></option>
            <option value="III"></option>
            <option value="IV"></option>
        </select>
    )
}

export default EnchantmentMagnitude
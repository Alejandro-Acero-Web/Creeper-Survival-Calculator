import React from "react";
import "./EnchantmentMagnitude.css"

function EnchantmentMagnitude(props){

    function dropDownChangeHandler(event){
        props.onChoiceChange(event.target.value, props.section)
    }



    return(
        <select className="magSelector" value={props.chosen} onChange={dropDownChangeHandler}>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
        </select>
    )
}

export default EnchantmentMagnitude
import React from "react"



function EnchantmentOptions(props){

    function dropDownChangeHandler(event){
        props.onChoiceChange(event.target.value, props.section)
    }



    return(
        <select value={props.chosen} onChange={dropDownChangeHandler}>
            <option value="None">None</option>
            <option value="Protection">Protection</option>
            <option value="Blast Protection">Blast Protection</option>
        </select>
    )
}


export default EnchantmentOptions
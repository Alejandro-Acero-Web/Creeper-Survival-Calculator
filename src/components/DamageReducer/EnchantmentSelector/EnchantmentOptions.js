import React from "react"



function EnchantmentOptions(props){

    function dropDownChangeHandler(event){
        props.onChoiceChange(event.target.value, props.section)
    }



    return(
        <select value={props.chosen} onChange={dropDownChangeHandler}>
            <option value="None"></option>
            <option value="Protection"></option>
            <option value="Blast Protection"></option>
        </select>
    )
}


export default EnchantmentOptions
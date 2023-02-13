import React from "react"
import MaterialVisualizer from "./MaterialVisualizer"






function MaterialOptions(props) {

    function dropDownChangeHandler(event){
        props.onChoiceChange(event.target.value, props.bodyPart)
    }
    




    return(
        
        <div>
        <select value={props.chosen} onChange={dropDownChangeHandler}>
            <option value="None"></option>
            <option value="Leather"></option>
            <option value="Chainmail"></option>
            <option value="Iron"></option>
            <option value="Gold"></option>
            <option value="Diamond"></option>
            <option value="Netherite"></option>
        </select>
        <MaterialVisualizer bodyPart={props.bodyPart} material={props.chosen}/>
        </div>
    )

}

export default MaterialOptions
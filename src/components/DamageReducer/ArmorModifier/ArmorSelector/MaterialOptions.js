import React from "react"
import MaterialVisualizer from "./MaterialVisualizer"
import './MaterialOptions.css'





function MaterialOptions(props) {

    function dropDownChangeHandler(event){
        props.onChoiceChange(event.target.value, props.bodyPart)
    }
    




    return(
        
        <div className="matSelectWrapper">
        <select className="matSelect" value={props.chosen} onChange={dropDownChangeHandler}>
            <option value="None">None</option>
            <option value="Leather">Leather</option>
            <option value="Chainmail">Chainmail</option>
            <option value="Iron">Iron</option>
            <option value="Gold">Gold</option>
            <option value="Diamond">Diamond</option>
            <option value="Netherite">Netherite</option>
        </select>
        <MaterialVisualizer bodyPart={props.bodyPart} material={props.chosen}/>
        </div>
    )

}

export default MaterialOptions
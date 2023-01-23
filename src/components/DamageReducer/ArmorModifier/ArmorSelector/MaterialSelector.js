
import React, { useState } from "react"
import MaterialOptions from "./MaterialOptions"





function MaterialSelector(props){


    const [FilteredMaterial, setMaterial] = useState('Diamond')
    function MaterialChangeHandler(ChosenMaterial){
        setMaterial(ChosenMaterial)
    }
    return(
        <React.Fragment>
            <div>Armor material</div>
            <MaterialOptions chosen={FilteredMaterial} onChoiceChange={MaterialChangeHandler} bodyPart='head'/>
            <MaterialOptions chosen={FilteredMaterial} onChoiceChange={MaterialChangeHandler} bodyPart='chest'/>
            <MaterialOptions chosen={FilteredMaterial} onChoiceChange={MaterialChangeHandler} bodyPart='leggings'/>
            <MaterialOptions chosen={FilteredMaterial} onChoiceChange={MaterialChangeHandler} bodyPart='boots'/>
            
        </React.Fragment>
       
    )

}


export default MaterialSelector
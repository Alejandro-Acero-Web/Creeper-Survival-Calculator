
import React, { useState } from "react"
import MaterialOptions from "./MaterialOptions"





function MaterialSelector(props){


    const [FilteredMaterial, setMaterial] = useState('Diamond')


    let materialSelections ={
        'head':'none',
        'chest':'none',
        'leggings':'none',
        'boots':'none'
    }

    function MaterialChangeHandler(ChosenMaterial, bodyPart){
        setMaterial(ChosenMaterial)
        if (bodyPart === 'head'){
            materialSelections['head']=ChosenMaterial
        }
        else if (bodyPart === 'chest'){
            materialSelections['chest']=ChosenMaterial
        }
        else if (bodyPart === 'leggings'){
            materialSelections['leggings']=ChosenMaterial
        }
        else if (bodyPart === 'boots'){
            materialSelections['boots']=ChosenMaterial
        }
        
    }

    function MaterialSender(){
        props.materialInfoFetcher(materialSelections)
    }


    return(
        <div onChange={MaterialSender}>
            <div>Armor material</div>
            <MaterialOptions chosen={FilteredMaterial} onChoiceChange={MaterialChangeHandler} bodyPart='head'/>
            <MaterialOptions chosen={FilteredMaterial} onChoiceChange={MaterialChangeHandler} bodyPart='chest'/>
            <MaterialOptions chosen={FilteredMaterial} onChoiceChange={MaterialChangeHandler} bodyPart='leggings'/>
            <MaterialOptions chosen={FilteredMaterial} onChoiceChange={MaterialChangeHandler} bodyPart='boots'/>
            
        </div>
       
    )

}


export default MaterialSelector
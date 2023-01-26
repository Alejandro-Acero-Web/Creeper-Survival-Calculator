import { useState } from "react"
import DifficultySelector from "./DifficultySelector/DifficultySelector"





function DamageApplier(props){

    const [FilteredDifficulty, setDifficulty] = useState("Easy")


    function DifficultyChangeHandler(DisplayedDifficulty){
        setDifficulty(DisplayedDifficulty)
        //missing stuff here. Just display for now
        props.onDifficultySelection(DisplayedDifficulty)
    }

    return(
        <div>
            <DifficultySelector selected={FilteredDifficulty} onChangeDifficulty={DifficultyChangeHandler}></DifficultySelector>

        </div>
    )

}

export default DamageApplier
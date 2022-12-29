import { useState } from "react"
import DifficultySelector from "./DifficultySelector/DifficultySelector"





function NonArmorModifier(props){

    const [FilteredDifficulty, setDifficulty] = useState('Easy')
    function DifficultyChangeHandler(DisplayedDifficulty){
        setDifficulty(DisplayedDifficulty)
        //missing stuff here. Just display for now
    }

    return(
        <div>
            <DifficultySelector selected={FilteredDifficulty} onChangeDifficulty={DifficultyChangeHandler}></DifficultySelector>

        </div>
    )

}

export default NonArmorModifier
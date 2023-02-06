import React from "react";
import Heart from "./Heart";


function HealthBar(props){
    let totalHealth = (props.health)/2
    return(
        <div>
            <Heart filler={totalHealth}/>
            <Heart filler={totalHealth-1}/>
            <Heart filler={totalHealth-2}/>
            <Heart filler={totalHealth-3}/>
            <Heart filler={totalHealth-4}/>
            <Heart filler={totalHealth-5}/>
            <Heart filler={totalHealth-6}/>
            <Heart filler={totalHealth-7}/>
            <Heart filler={totalHealth-8}/>
            <Heart filler={totalHealth-9}/>
        </div>

    )




}



export default HealthBar


import React from "react";
import EmptyHeart from './EmptyHeart.png'
import HalfHeart from './HalfHeart.png'
import FullHeart from './FullHeart.png'
import './Heart.css'

function Heart(props){
 
          
    let source = ''
    if (props.filler <= 0){
        source = EmptyHeart
    }
    else if (props.filler === 0.5){
        source = HalfHeart
    }
    else if (props.filler >= 1){
        source = FullHeart
    }

    return(
        <div className="heartImgWrapper">
        <img className='heartImg' src={source} alt='heart'/>
        </div>
    )

}

export default Heart
import React from "react";
import EmptyHeart from './EmptyHeart.png'
import HalfHeart from './HalfHeart.png'
import FullHeart from './FullHeart.png'

function Heart(props){
    /* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" */
          
    let source = ''
    if (props.filler===0){
        source = EmptyHeart
    }
    else if (props.filler === 0.5){
        source = HalfHeart
    }
    else if (props.filler === 1){
        source = FullHeart
    }

    return(
        <img src={source} alt='heart'/>
    )

}

export default Heart







function MaterialVisualizer(props){
    let src = ''
    if (props.bodyPart === 'head'){
        src = 'head'
    }
    else if(props.bodyPart === 'chest'){
        src= 'chest'
    }
    else if(props.bodyPart === 'leggings'){
        src= 'leggings'
    }
    else if(props.bodyPart === 'boots'){
        src= 'boots'
    }
    return(
        <img src={src}></img>
    )
}


export default MaterialVisualizer
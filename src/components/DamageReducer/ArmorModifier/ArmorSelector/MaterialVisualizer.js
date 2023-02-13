import React from 'react'
import leatherBoots from './ASSETS/Leather/LeatherBoots.png'
import leatherChestplate from './ASSETS/Leather/leatherChestplate.png'
import leatherHelmet from './ASSETS/Leather/leatherHelmet.png'
import leatherLeggings from './ASSETS/Leather/LeatherLeggings.png'
import chainmailHelmet from './ASSETS/Chainmail/chainmailHelmet.png'
import chainmailChestplate from './ASSETS/Chainmail/chainmailChestplate.png'
import chainmailLeggings from './ASSETS/Chainmail/chainmailLeggings.png'
import chainmailBoots from './ASSETS/Chainmail/chainmailBoots.png'
import goldenHelmet from './ASSETS/Gold/goldenHelmet.png'
import goldenChestplate from './ASSETS/Gold/goldenChestplate.png'
import goldenLeggings from './ASSETS/Gold/goldenLeggings.png'
import goldenBoots from './ASSETS/Gold/goldenBoots.png'
import ironHelmet from './ASSETS/Iron/ironHelmet.png'
import ironChestplate from './ASSETS/Iron/ironChestplate.png'
import ironLeggings from './ASSETS/Iron/ironLeggings.png'
import ironBoots from './ASSETS/Iron/ironBoots.png'
import diamondHelmet from './ASSETS/Diamond/DiamondHelmetTransparent.png'
import diamondChestplate from './ASSETS/Diamond/DiamondchestTransparent.png'
import diamondLeggings from './ASSETS/Diamond/DiamondleggingsTransparent.png'
import diamondBoots from './ASSETS/Diamond/DiamondbootsTransparent.png'
import netheriteHelmet from './ASSETS/Netherite/netheriteHelmet.png'
import netheriteChestplate from './ASSETS/Netherite/netheriteChestplate.png'
import netheriteLeggings from './ASSETS/Netherite/netheriteLeggings.png'
import netheriteBoots from './ASSETS/Netherite/netheriteBoots.png'




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
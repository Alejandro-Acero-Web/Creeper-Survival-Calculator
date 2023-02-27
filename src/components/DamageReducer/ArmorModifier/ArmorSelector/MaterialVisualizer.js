import React from 'react'
import './MaterialVisualizer.css'
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
    let material = props.material
    if (props.bodyPart === 'head'){
        if (material === 'Leather'){
            src = leatherHelmet
        }
        else if (material === 'Chainmail'){
            src = chainmailHelmet
        }
        else if (material === 'Iron'){
            src = ironHelmet
        }
        else if (material === 'Gold'){
            src = goldenHelmet
        }
        else if (material === 'Diamond'){
            src = diamondHelmet
        }
        else if (material === 'Netherite'){
            src = netheriteHelmet
        }
    }
    else if(props.bodyPart === 'chest'){
        if (material === 'Leather'){
            src = leatherChestplate
        }
        else if (material === 'Chainmail'){
            src = chainmailChestplate
        }
        else if (material === 'Iron'){
            src = ironChestplate
        }
        else if (material === 'Gold'){
            src = goldenChestplate
        }
        else if (material === 'Diamond'){
            src = diamondChestplate
        }
        else if (material === 'Netherite'){
            src = netheriteChestplate
        }
    }
    else if(props.bodyPart === 'leggings'){
        if (material === 'Leather'){
            src = leatherLeggings
        }
        else if (material === 'Chainmail'){
            src = chainmailLeggings
        }
        else if (material === 'Iron'){
            src = ironLeggings
        }
        else if (material === 'Gold'){
            src = goldenLeggings
        }
        else if (material === 'Diamond'){
            src = diamondLeggings
        }
        else if (material === 'Netherite'){
            src = netheriteLeggings
        }
    }
    else if(props.bodyPart === 'boots'){
        if (material === 'Leather'){
            src = leatherBoots
        }
        else if (material === 'Chainmail'){
            src = chainmailBoots
        }
        else if (material === 'Iron'){
            src = ironBoots
        }
        else if (material === 'Gold'){
            src = goldenBoots
        }
        else if (material === 'Diamond'){
            src = diamondBoots
        }
        else if (material === 'Netherite'){
            src = netheriteBoots
        }
    }
    return(
        <img className='mats' src={src} alt='Mats'></img>
    )
}


export default MaterialVisualizer
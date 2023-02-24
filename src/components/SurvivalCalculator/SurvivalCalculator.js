import React, { useState } from "react";
import HealthBar from "../HealthBar/HealthBar";


function SurvivalCalculator(props){

    const [CalculatedHealth, setHealth] = useState(20)

    function CalculateHandler(){
        // props.onCalculate()
        let damage = props.damageParameters
        console.log(`Selected damage: ${damage}`)
        let protectObject = props.protectionParameters
        console.log(`Protect: ${JSON.stringify(protectObject)}`)
        let keys = Object.keys(protectObject)
        let defensePoints = 0
        let toughness = 0
        let enchantmentPercentage = 0
        for (let key in keys){
            for(let part in protectObject[`${keys[key]}`]){
                let index = protectObject[`${keys[key]}`][part]
                let magnitude = protectObject[`${keys[key]}`][(parseInt(part, 10)+1)]
                let lowered = index.toLowerCase()
                if (keys[key] === 'head'){
                    if (lowered === 'leather'){
                        defensePoints += 1
                    }
                    else if (lowered === 'chainmail' || lowered === 'gold' || lowered === 'iron'){
                        defensePoints += 2
                    }
                    else if (lowered === 'diamond'){

                        defensePoints += 3
                        toughness += 2
                    }
                    else if (lowered === 'netherite'){
                        defensePoints += 3
                        toughness += 3
                    }
                }
                if (keys[key] === 'chest'){
                    if (lowered === 'leather'){
                        defensePoints += 3
                    }
                    else if (lowered === 'chainmail' || lowered === 'gold'){
                        defensePoints += 5
                    }
                    else if (lowered === 'iron'){
                        defensePoints += 6
                    }
                    else if (lowered === 'diamond'){
                        defensePoints += 8
                        toughness += 2
                    }
                    else if (lowered === 'netherite'){
                        defensePoints += 8
                        toughness += 3
                    }
                }
                if (keys[key] === 'leggings'){
                    if (lowered === 'leather'){
                        defensePoints += 2
                    }
                    else if (lowered === 'gold'){
                        defensePoints += 3
                    }
                    else if (lowered === 'chainmail'){
                        defensePoints += 4
                    }
                    else if (lowered === 'iron'){
                        defensePoints += 5
                    }
                    else if (lowered === 'diamond'){
                        defensePoints += 6
                        toughness += 2
                    }
                    else if (lowered === 'netherite'){
                        defensePoints += 6
                        toughness += 3
                    }
                }
                if (keys[key] === 'boots'){
                    if (lowered === 'leather' || lowered === 'gold' || lowered === 'chainmail'){
                        defensePoints += 1
                    }
                    else if (lowered === 'iron'){
                        defensePoints += 2
                    }
                    else if (lowered === 'diamond'){
                        defensePoints += 3
                        toughness += 2
                    }
                    else if (lowered === 'netherite'){
                        defensePoints += 3
                        toughness += 3
                    }
                }
        
                //time for the enchantments
                
                if (lowered === 'protection'){
                    if (magnitude === 'I'){
                        enchantmentPercentage += 4
                    }
                    else if (magnitude === 'II'){
                        enchantmentPercentage += 8
                    }
                    else if (magnitude === 'III'){
                        enchantmentPercentage += 12
                    }
                    else if (magnitude === 'IV'){
                        enchantmentPercentage += 16
                    }
                    
                }
                if (lowered === 'blast protection'){
                    if (magnitude === 'I'){
                        enchantmentPercentage += 8
                    }
                    else if (magnitude === 'II'){
                        enchantmentPercentage += 16
                    }
                    else if (magnitude === 'III'){
                        enchantmentPercentage += 24
                    }
                    else if (magnitude === 'IV'){
                        enchantmentPercentage += 32
                    }
                    
                }
                
                
                
                
        
            }
            
        }
        console.log(`defensepoints: ${defensePoints}`)
        console.log(`toughness: ${toughness}`)
        if (enchantmentPercentage>80){
            enchantmentPercentage = 80
        }
        console.log(`enchantmentPercentage: ${enchantmentPercentage}`)
        
        let divisionValue = 0
        if((defensePoints/5)>(defensePoints-((damage*4)/(toughness+8))) || ((defensePoints/5)===(defensePoints-((damage*4)/(toughness+8))))) {
            divisionValue = (defensePoints/5)
        }
        else if((defensePoints/5)<(defensePoints-((damage*4)/(toughness+8)))){
            divisionValue = (defensePoints-((damage*4)/(toughness+8)))
        } 
        
        let healthPoints = 20
        
        let totalDamage = damage*(1-((divisionValue)/25))
        console.log(`totaldamage: ${totalDamage}`)
        let finalDamage = totalDamage*(1-(enchantmentPercentage/100))
        console.log(`finaldamage: ${finalDamage}`)
        
        let remainingHealth = healthPoints - finalDamage
        console.log(`remaining non rounded: ${remainingHealth}`)
        let roundedHealth = Math.round(remainingHealth)
        
        if (remainingHealth>0 && remainingHealth<1){
            roundedHealth = 1
        }
        setHealth(roundedHealth)
        console.log(roundedHealth)

        
        

    }

    return(
    <div>
    <button onClick={CalculateHandler}>Calculate</button>
    <HealthBar health={CalculatedHealth}></HealthBar>
    </div>
    )
    
}

export default SurvivalCalculator
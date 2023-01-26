import React, { useState } from "react";
import EnchantmentOptions from "./EnchantmentOptions";
import EnchantmentMagnitude from "./EnchantmentMagnitude";


function EnchantmentApplier(props){



    //I GOTTA ADD THE CONDITIONAL FOR THE MAGNITUDE TO APPEAR ONLY IF AN ENCHANTMENT IS SELECTED!

    const [FilteredEnchantment, setEnchantment] = useState('None')
    const [FilteredMagnitude, setMagnitude] = useState('I')

    function EnchantmentChangeHandler(ChosenEnchantment, section){
        setEnchantment(ChosenEnchantment)
        if (section === '1st'){
            enchantments["1st"].splice(0,1,ChosenEnchantment)
        }
        else if (section === '2nd'){
            enchantments["2nd"].splice(0,1,ChosenEnchantment)
            
        }
        else if (section === '3rd'){
            enchantments["3rd"].splice(0,1,ChosenEnchantment)
            
        }
        else if (section === '4th'){
            enchantments["4th"].splice(0,1,ChosenEnchantment)
            
        }
    }

    function MagnitudeChangeHandler(ChosenMagnitude, section){
        setMagnitude(ChosenMagnitude)
        if (section === '1st'){
            enchantments["1st"].splice(1,1,ChosenMagnitude)
        }
        else if (section === '2nd'){
            enchantments["2nd"].splice(1,1,ChosenMagnitude)
            
        }
        else if (section === '3rd'){
            enchantments["3rd"].splice(1,1,ChosenMagnitude)
            
        }
        else if (section === '4th'){
            enchantments["4th"].splice(1,1,ChosenMagnitude)
            
        }
    }


    let enchantments={
        '1st':['None', 'I'],
        '2nd':['None', 'I'],
        '3rd':['None', 'I'],
        '4th':['None', 'I']

    }

    


    return(
        <React.Fragment>
            <div>Enchantment</div>
            <div>
                <EnchantmentOptions chosen={FilteredEnchantment} onChoiceChange={EnchantmentChangeHandler} section='1st'/>
                <EnchantmentMagnitude chosen={FilteredMagnitude} onChoiceChange={MagnitudeChangeHandler} section='1st'/>
            </div>
            <div>
                <EnchantmentOptions chosen={FilteredEnchantment} onChoiceChange={EnchantmentChangeHandler} section='2nd'/>
                <EnchantmentMagnitude chosen={FilteredMagnitude} onChoiceChange={MagnitudeChangeHandler} section='2nd'/>
            </div>
            <div>
                 <EnchantmentOptions chosen={FilteredEnchantment} onChoiceChange={EnchantmentChangeHandler} section='3rd'/>
                 <EnchantmentMagnitude chosen={FilteredMagnitude} onChoiceChange={MagnitudeChangeHandler} section='3rd'/>
            </div>
            <div>
                <EnchantmentOptions chosen={FilteredEnchantment} onChoiceChange={EnchantmentChangeHandler} section='4th'/>
                <EnchantmentMagnitude chosen={FilteredMagnitude} onChoiceChange={MagnitudeChangeHandler} section='4th'/>
            </div>
                       
                                            
        </React.Fragment>
    )
    
}
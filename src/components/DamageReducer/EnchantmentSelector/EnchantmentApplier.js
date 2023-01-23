import React, { useState } from "react";
import EnchantmentOptions from "./EnchantmentOptions";
import EnchantmentMagnitude from "./EnchantmentMagnitude";


function EnchantmentApplier(props){



    //I GOTTA ADD THE CONDITIONAL FOR THE MAGNITUDE TO APPEAR ONLY IF AN ENCHANTMENT IS SELECTED!

    const [FilteredEnchantment, setEnchantment] = useState('None')
    const [FilteredMagnitude, setMagnitude] = useState('I')

    function EnchantmentChangeHandler(ChosenEnchantment){
        setEnchantment(ChosenEnchantment)
    }


    return(
        <React.Fragment>
            <div>Enchantment</div>
            <div>
                <EnchantmentOptions chosen={FilteredEnchantment} onChoiceChange={EnchantmentChangeHandler} bodyPart='head'/>
                <EnchantmentMagnitude chosen={FilteredMagnitude} onChoiceChange={setMagnitude} section='1st'/>
            </div>
            <div>
                <EnchantmentOptions chosen={FilteredEnchantment} onChoiceChange={EnchantmentChangeHandler} bodyPart='chest'/>
                <EnchantmentMagnitude chosen={FilteredMagnitude} onChoiceChange={setMagnitude} section='2nd'/>
            </div>
            <div>
                 <EnchantmentOptions chosen={FilteredEnchantment} onChoiceChange={EnchantmentChangeHandler} bodyPart='leggings'/>
                 <EnchantmentMagnitude chosen={FilteredMagnitude} onChoiceChange={setMagnitude} section='3rd'/>
            </div>
            <div>
                <EnchantmentOptions chosen={FilteredEnchantment} onChoiceChange={EnchantmentChangeHandler} bodyPart='boots'/>
                <EnchantmentMagnitude chosen={FilteredMagnitude} onChoiceChange={setMagnitude} section='4th'/>
            </div>
                       
                                            
        </React.Fragment>
    )
    
}
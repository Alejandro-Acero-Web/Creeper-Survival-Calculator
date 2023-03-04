import React, { useState } from "react";
import EnchantmentOptions from "./EnchantmentOptions";
import EnchantmentMagnitude from "./EnchantmentMagnitude";
import './EnchantmentApplier.css'


let enchantments={
    '1st':['None', 'I'],
    '2nd':['None', 'I'],
    '3rd':['None', 'I'],
    '4th':['None', 'I']

}

function EnchantmentApplier(props){



    //I GOTTA ADD THE CONDITIONAL FOR THE MAGNITUDE TO APPEAR ONLY IF AN ENCHANTMENT IS SELECTED!
    

    const [FilteredEnchantment, setEnchantment] = useState('None')
    const [FilteredEnchantment2, setEnchantment2] = useState('None')
    const [FilteredEnchantment3, setEnchantment3] = useState('None')
    const [FilteredEnchantment4, setEnchantment4] = useState('None')
    const [FilteredMagnitude, setMagnitude] = useState('I')
    const [FilteredMagnitude2, setMagnitude2] = useState('I')
    const [FilteredMagnitude3, setMagnitude3] = useState('I')
    const [FilteredMagnitude4, setMagnitude4] = useState('I')

    function enchantmentNameEditor(ChosenEnchantment, section){
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
        // console.log(`Enchantments in enchantment Applier: ${JSON.stringify(enchantments)}`)
    }
    function enchantmentMagnitudeEditor(ChosenMagnitude, section){
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
        // console.log(`Enchantment magnitudes in enchnatment Applier: ${JSON.stringify(enchantments)}`)
    }

    function EnchantmentChangeHandler(ChosenEnchantment, section){
        setEnchantment(ChosenEnchantment)
        enchantmentNameEditor(ChosenEnchantment, section)
        
    }
    function MagnitudeChangeHandler(ChosenMagnitude, section){
        setMagnitude(ChosenMagnitude)
        enchantmentMagnitudeEditor(ChosenMagnitude, section)
        
    }

    function EnchantmentChangeHandler2(ChosenEnchantment, section){
        setEnchantment2(ChosenEnchantment)
        enchantmentNameEditor(ChosenEnchantment, section)
        
    }
    function MagnitudeChangeHandler2(ChosenMagnitude, section){
        setMagnitude2(ChosenMagnitude)
        enchantmentMagnitudeEditor(ChosenMagnitude, section)
        
    }

    function EnchantmentChangeHandler3(ChosenEnchantment, section){
        setEnchantment3(ChosenEnchantment)
        enchantmentNameEditor(ChosenEnchantment, section)
        
    }
    function MagnitudeChangeHandler3(ChosenMagnitude, section){
        setMagnitude3(ChosenMagnitude)
        enchantmentMagnitudeEditor(ChosenMagnitude, section)
        
    }

    function EnchantmentChangeHandler4(ChosenEnchantment, section){
        setEnchantment4(ChosenEnchantment)
        enchantmentNameEditor(ChosenEnchantment, section)
        
    }
    function MagnitudeChangeHandler4(ChosenMagnitude, section){
        setMagnitude4(ChosenMagnitude)
        enchantmentMagnitudeEditor(ChosenMagnitude, section)
        
    }








    function EnchantmentSender(){
        props.enchantInfoFetcher(enchantments)
    }

   

    


    return(
        <div className="enchantments" onChange={EnchantmentSender}>
            <h1 id="enchtitle">Enchantment</h1>
            <div className="enchantmentOrganizer">
                <EnchantmentOptions chosen={FilteredEnchantment} onChoiceChange={EnchantmentChangeHandler} section='1st'/>
                <EnchantmentMagnitude chosen={FilteredMagnitude} onChoiceChange={MagnitudeChangeHandler} section='1st'/>
            </div>
            <div className="enchantmentOrganizer">
                <EnchantmentOptions chosen={FilteredEnchantment2} onChoiceChange={EnchantmentChangeHandler2} section='2nd'/>
                <EnchantmentMagnitude chosen={FilteredMagnitude2} onChoiceChange={MagnitudeChangeHandler2} section='2nd'/>
            </div>
            <div className="enchantmentOrganizer">
                 <EnchantmentOptions chosen={FilteredEnchantment3} onChoiceChange={EnchantmentChangeHandler3} section='3rd'/>
                 <EnchantmentMagnitude chosen={FilteredMagnitude3} onChoiceChange={MagnitudeChangeHandler3} section='3rd'/>
            </div>
            <div id="lastEnch" className="enchantmentOrganizer">
                <EnchantmentOptions chosen={FilteredEnchantment4} onChoiceChange={EnchantmentChangeHandler4} section='4th'/>
                <EnchantmentMagnitude chosen={FilteredMagnitude4} onChoiceChange={MagnitudeChangeHandler4} section='4th'/>
            </div>
            
                       
                                            
        </div>
    )
    
}


export default EnchantmentApplier
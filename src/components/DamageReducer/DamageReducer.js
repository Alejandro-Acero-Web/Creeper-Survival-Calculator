import React from "react";
import EnchantmentApplier from "./EnchantmentSelector/EnchantmentApplier";
import MaterialSelector from "./ArmorModifier/ArmorSelector/MaterialSelector";
import './DamageReducer.css'


let protectorObject={
    'head':['none', 'none', 'I'],
    'chest':['none', 'none', 'I'],
    'leggings':['none', 'none', 'I'],
    'boots':['none', 'none', 'I']
}


function DamageReducer(props){



   


    function EnchantFetchHandler(enchantments){
        protectorObject['head'].splice(1,2,...(enchantments['1st']))
        protectorObject['chest'].splice(1,2,...(enchantments['2nd']))
        protectorObject['leggings'].splice(1,2,...(enchantments['3rd']))
        protectorObject['boots'].splice(1,2,...(enchantments['4th']))
        props.onProtectionChange(protectorObject)


    }

    function MaterialFetchHandler(materials){
        protectorObject['head'].splice(0,1,materials['head'])
        protectorObject['chest'].splice(0,1,materials['chest'])
        protectorObject['leggings'].splice(0,1,materials['leggings'])
        protectorObject['boots'].splice(0,1,materials['boots'])
        props.onProtectionChange(protectorObject)
    }

    return(
        <div className="reducer">
            <MaterialSelector materialInfoFetcher={MaterialFetchHandler}/>
            <EnchantmentApplier enchantInfoFetcher={EnchantFetchHandler}/>
        </div>
    )
    

}

export default DamageReducer
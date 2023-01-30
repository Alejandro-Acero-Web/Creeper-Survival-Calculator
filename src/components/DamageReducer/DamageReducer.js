import React from "react";
import MaterialSelector from "./ArmorModifier/ArmorSelector/MaterialSelector";
import EnchantmentApplier from "./EnchantmentSelector/EnchantmentApplier";


function DamageReducer(props){

    function MaterialFetcher(materials){
        return(materials)
    }

    function EnchantmentFetcher(enchantments){
        return(enchantments)
    }
    




    return(
        <div>
            <MaterialSelector matFetch={MaterialFetcher}></MaterialSelector>
            <EnchantmentApplier enchFetch={EnchantmentFetcher}></EnchantmentApplier>
        </div>
    )


}



export default DamageReducer
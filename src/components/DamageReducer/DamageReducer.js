import React from "react";
import EnchantmentApplier from "./EnchantmentSelector/EnchantmentApplier";

function DamageReducer(){


    let enchantmentObject={
        

    }

    let materialsObject={

    }


    function EnchantFetchHandler(enchantments){
        enchantmentObject = enchantments


    }

    function MaterialFetchHandler(materials){
        materialsObject = materials
    }


    <div>
        <EnchantmentApplier enchantInfoFetcher={EnchantFetchHandler}></EnchantmentApplier>
    </div>

}
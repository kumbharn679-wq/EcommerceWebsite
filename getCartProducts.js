import { updateCartValues } from "./updateCartValue.js";

export const getCartProductFormLS =() =>{
    let cartProducts = localStorage.getItem("cartProductLS");
    if(!cartProducts){
        return []; 
    }
    cartProducts = JSON.parse(cartProducts);  
    
    //update the cart button value in the navbar
      
     updateCartValues(cartProducts);
     
    return cartProducts;
    

};
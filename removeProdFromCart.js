import { getCartProductFormLS } from "./getCartProducts.js";
import { showToast } from "./showToast.js";
import { updateCartValues } from "./updateCartValue.js";

export const  removeProdFromCart =(id ) => {
     let cartProducts = getCartProductFormLS();
     cartProducts = cartProducts.filter((curProd) => curProd.id !== id); 
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));
    //update the cart button value in the navbar
    updateCartValues(cartProducts);
    //showCartProduct();
     let removeDiv = document.getElementById(`card${id}`);
     if(removeDiv){
        removeDiv.remove();
        //Show toast when product added to the cart
        showToast("delete",id);

     }
   
      updateCartValues(cartProducts);
     


   }

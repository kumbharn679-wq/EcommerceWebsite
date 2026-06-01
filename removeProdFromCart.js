import { getCartProductFormLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValues } from "./updateCartValue";

export const  removeProdFromCart =(id ) => {
     let cartProducts = getCartProductFormLS();
<<<<<<< HEAD
     cartProducts = cartProducts.filter((curProd) => curProd.id !== id); 
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));
=======
     cartProducts = cartProducts.filter((curProd) => curProd.id !== id);
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts)); 
>>>>>>> 2808469de8c649a25664f26f3e4d48f9b5bc8a50
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
<<<<<<< HEAD
     


=======



>>>>>>> 2808469de8c649a25664f26f3e4d48f9b5bc8a50
   }

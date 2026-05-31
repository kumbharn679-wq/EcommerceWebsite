import { getCartProductFormLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValues } from "./updateCartValue";

export const  removeProdFromCart =(id ) => {
     let cartProducts = getCartProductFormLS();
     cartProducts = cartProducts.filter((curProd) => curProd.id !== id); // this line is used to filter out the product with the specified id from the cartProducts array, which represents the products currently in the cart. The filter method is used to create a new array that includes only the products that do not have a matching id, effectively removing the product with the specified id from the cart products stored in local storage.
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts)); // this line is used to update the cart products stored in local storage after a product has been removed from the cart. The cartProducts array, which has been filtered to exclude the removed product, is converted back into a JSON string using JSON.stringify and then stored in local storage under the key "cartProductLS". This ensures that the local storage reflects the current state of the cart after a product has been removed.
    //update the cart button value in the navbar
    updateCartValues(cartProducts);
    //showCartProduct();
     let removeDiv = document.getElementById(`card${id}`);
     if(removeDiv){
        removeDiv.remove();
        //Show toast when product added to the cart
        showToast("delete",id);

     }
   
      updateCartValues(cartProducts);// this line is used to update the cart button value in the navbar after a product has been removed from the cart. The updateCartValues function is called with the updated cartProducts array, which allows us to recalculate and display the correct number of items in the cart on the navbar, ensuring that the user sees the most up-to-date information about their cart after a product has been removed.
     //window.location.reload(); // this line is used to reload the current webpage after a product has been removed from the cart. This is often done to reflect the changes in the cart on the user interface, such as updating the displayed products in the cart or refreshing the cart total. By reloading the page, we can ensure that the user sees the most up-to-date information about their cart after a product has been removed.



   }
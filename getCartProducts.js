import { updateCartValues } from "./updateCartValue";

export const getCartProductFormLS =() =>{
    let cartProducts = localStorage.getItem("cartProductLS");
    if(!cartProducts){
        return []; // this line is used to return an empty array if there are no cart products stored in local storage, which allows us to handle the case where the user has not added any products to the cart yet and ensures that we always have a valid array to work with when retrieving cart products from local storage.
    }
    cartProducts = JSON.parse(cartProducts); // this line is used to parse the cartProducts string from local storage back into a JavaScript array, which allows us to work with the cart products as an array of objects in our code. This is necessary because local storage can only store data as strings, so we need to convert it back to its original format before we can use it effectively in our application.
    
    //update the cart button value in the navbar
      
     updateCartValues(cartProducts);
     
    return cartProducts;
    

};
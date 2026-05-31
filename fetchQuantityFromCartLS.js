import { getCartProductFormLS } from "./getCartProducts";

export const fetchQuantityFromCartLS = (id ,price) => {
   let cartProducts = getCartProductFormLS();
    let existingProduct = cartProducts.find((curProd) => curProd.id === id); // this line is used to find the product with the specified id in the cartProducts array, which represents the products currently in the cart. The find method is used to search for a product object in the array that has a matching id, and if such an object is found, it is stored in the existingProd variable. This allows us to retrieve the quantity and price information for that specific product from the cart products stored in local storage.
     let quantity = 1;
     if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price;
     }
     return{quantity ,price};
};
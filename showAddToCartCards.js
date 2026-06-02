import products from "./api/products.json"
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js";

import { getCartProductFormLS } from "./getCartProducts.js"
import { incrementDecrement } from "./incrementDecrement.js";
import { removeProdFromCart } from "./removeProdFromCart.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";
import { updateCartValues } from "./updateCartValue.js";

let cartProducts = getCartProductFormLS();

let filterProducts = products.filter((curProd) => {
     return cartProducts.some((curElem) => curElem.id === curProd.id); 
    //console.log(curProd.name); 
});

console.log(filterProducts);
 //**________________ this is used to upadate the addToCart ____________________*/
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

 const showCartProduct = () => { 
    filterProducts.forEach((curProd) => { 
        const {  category, id, image, name, stock, price} = curProd;
       let productClone = document.importNode(templateContainer.content, true);
    let lsActualData  = fetchQuantityFromCartLS(id, price); 
     
       productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
 
   
    productClone.querySelector(".productQuantity").textContent = lsActualData.quantity;
   productClone.querySelector(".productPrice").textContent = lsActualData.price;
    
   // handle increment and decrement button
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProdFromCart(id));

    cartElement.appendChild(productClone);

 });
   

 };

//*?________________ Show the cart products in the cart page_____________
showCartProduct();

//Calculating the card total in our cartProducts page_____________


updateCartProductTotal();

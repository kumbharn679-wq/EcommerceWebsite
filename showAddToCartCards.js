import products from "./api/products.json"
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";

import { getCartProductFormLS } from "./getCartProducts"
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValues } from "./updateCartValue";

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
<<<<<<< HEAD
    filterProducts.forEach((curProd) => { 
=======
    filterProducts.forEach((curProd) => {
>>>>>>> 2808469de8c649a25664f26f3e4d48f9b5bc8a50
        const {  category, id, image, name, stock, price} = curProd;
       let productClone = document.importNode(templateContainer.content, true);
    let lsActualData  = fetchQuantityFromCartLS(id, price); 
     
       productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent = category;
<<<<<<< HEAD
    productClone.querySelector(".productName").textContent = name;
=======
    productClone.querySelector(".productName").textContent = name; 
>>>>>>> 2808469de8c649a25664f26f3e4d48f9b5bc8a50
    productClone.querySelector(".productImage").src = image;
 
   
    productClone.querySelector(".productQuantity").textContent = lsActualData.quantity;
   productClone.querySelector(".productPrice").textContent = lsActualData.price;
    
   productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => 
        removeProdFromCart(id)); 

      

   
 // handle increment and decrement button in the cart 
 productClone.querySelector(".stockElement").addEventListener("click",(event) => {
   incrementDecrement(event,stock,id,price);
 });
   cartElement.appendChild(productClone);

 })
   

 };

//*?________________ Show the cart products in the cart page_____________
showCartProduct();

//Calculating the card total in our cartProducts page_____________


updateCartProductTotal();

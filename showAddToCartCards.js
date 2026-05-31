import products from "./api/products.json"
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";

import { getCartProductFormLS } from "./getCartProducts"
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValues } from "./updateCartValue";

let cartProducts = getCartProductFormLS();

let filterProducts = products.filter((curProd) => {
     return cartProducts.some((curElem) => curElem.id === curProd.id); // this is  used to filter the products array based on the products that are currently in the cart. The filter method is used to iterate through each product in the products array, and for each product, the some method is used to check if there is a matching product in the cartProducts array (which represents the products currently in the cart) based on their id. If a match is found, the product is included in the filterProducts array, which will contain only the products that are currently in the cart. This allows us to easily display or manipulate the products that are relevant to the user's cart.
    //console.log(curProd.name); 
});

console.log(filterProducts);
 //**________________ this is used to upadate the addToCart ____________________*/
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

 const showCartProduct = () => { 
    filterProducts.forEach((curProd) => { // this line is used to iterate through each product in the filterProducts array, which contains the products that are currently in the cart. For each product, the code inside the forEach loop will be executed, allowing us to create and display a product card for each item in the cart on the webpage.
        const {  category, id, image, name, stock, price} = curProd;
       let productClone = document.importNode(templateContainer.content, true);// content is used to access the content of the template element and true is used for deep cloning which means it will clone all the child elements of the template. This allows us to create a new product card for each product in the products array by cloning the template and populating it with the product data. 
    let lsActualData  = fetchQuantityFromCartLS(id, price); // this line is used to fetch the quantity and price data for the current product from the cart products stored in local storage. The fetchQuantityFromCartLS function takes the product id and price as arguments and retrieves the corresponding quantity and price information for that product from the cart products array in local storage. This allows us to display the correct quantity and price for each product in the cart when we create the product card using the template.
     
       productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name; // this line is used to set the text content of the element with the class name "productName" to the value of the variable "name" which is obtained from the current product object in the products array. This allows us to display the name of each product on the webpage.
    productClone.querySelector(".productImage").src = image;
 
   
    productClone.querySelector(".productQuantity").textContent = lsActualData.quantity;
   productClone.querySelector(".productPrice").textContent = lsActualData.price;
    
   productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => 
        removeProdFromCart(id)); // this line is used to add a click event listener to the element with the class name "remove-to-cart-button" within the cloned product card. When the button is clicked, it will call the removeProdFromCart function and pass the product

      

   
 // handle increment and decrement button in the cart 
 productClone.querySelector(".stockElement").addEventListener("click",(event) => {
   incrementDecrement(event,stock,id,price);
 });
   cartElement.appendChild(productClone);// this line is used to append the cloned product card to the product container element in the DOM, which allows us to display all the products on the webpage as cards.

 })
   

 };

//*?________________ Show the cart products in the cart page_____________
showCartProduct();

//Calculating the card total in our cartProducts page_____________


updateCartProductTotal();

// thois file is used to add products to the cart and update the cart contents in local 
// storage when a user clicks the "Add to Cart" button on a product card. It retrieves the
// current cart products from local storage, checks if the product being added already exists 
// in the cart, updates the quantity and price if it does, or adds a new entry if it doesn't.
//  Finally, it updates the cart values in the navbar to reflect the changes.
import { getCartProductFormLS } from "./getCartProducts";

import { showToast } from "./showToast";
import { updateCartValues } from "./updateCartValue";

getCartProductFormLS();
//*    ___________________________________     
//*    __________________________________
export const addToCart = (event, id, stock) => {
let arrLocalStorageProduct = getCartProductFormLS(); // here we are calling the getCartProductFormLS function to retrieve the current contents of the cart from local storage and store it in the arrLocalStorageProduct variable, which allows us to work with the cart products as an array of objects in our code when adding a new product to the cart or updating the cart contents.
const currentProdElem = document.querySelector(`#card${id}`);
    // console.log(currentProdElem);
let quantity = currentProdElem.querySelector(".productQuantity").innerText; //this line is used to get the text content of the element with the class name "productQuantity" within the current product card element, which represents the quantity of the product that the user wants to add to the cart. This value will be used to calculate the total price for that product when adding it to the cart.
let price = currentProdElem.querySelector(".productPrice").innerText ;
console.log(quantity, price);
 price = price.replace ("₹", ""); // this line is used to remove the "₹" symbol from the price string, which allows us to convert the price to a numeric value that can be used for calculations when adding the product to the cart.
 
 
 let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id); // this line is used to 
 //check if the product with the specified id already exists in the arrLocalStorageProduct 
 // array, which represents the current contents of the cart. The find method is used to search
 //for a product object in the array that has a matching id, and if such an object is found,it
 // is stored in the existingProd variable. This allows us to prevent adding duplicate products
 //to the cart and can be used to update the quantity of an existing product instead of adding
 //  a new entry for it.
 console.log( existingProd );
 
 if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity, Number(quantity));//
   price = Number(price * quantity);
   let updatedCart = { id,quantity,price};
  updatedCart = arrLocalStorageProduct.map((curProd) => {
    return (curProd.id === id) ? updatedCart : curProd; //tertiary operator.tell 
   })
  console.log(updatedCart);
  
   localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
   showToast("add",id);


}


 if(existingProd){
     //alert("Bhai duplicate product hai");
   return false;

 }
 price = Number(price * quantity); // this line is used to calculate the total price for the product based on the quantity and the unit price. It multiplies the numeric price value by the quantity to get the total price for that product, which can be useful when displaying the cart contents or calculating the cart total.
 quantity = Number(quantity); // this line is used to convert the quantity string to a numeric value, which allows us to perform calculations and comparisons with the quantity when adding the product to the cart or updating the cart contents.
    // let updateCart = { id, quantity,price};
arrLocalStorageProduct.push({ id, quantity,price});  // push is used to add a new object containing the product id, quantity, and price to the arrLocalStorageProduct array, which represents the current contents of the cart. This allows us to keep track of the products that the user has added to the cart along with their respective quantities and prices.
localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct)); // this line is used to store the updated cart products array in the local storage under the key "cartProductLS". The array is converted to a JSON string using JSON.stringify before being stored, which allows us to easily retrieve and parse it later when we need to display the cart contents or perform other operations related to the cart.
 
//update the cart button value in the navbar
  updateCartValues(arrLocalStorageProduct);
  //Show toast when product added to the cart.
   showToast("add",id);
 


};

import { getCartProductFormLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";
 //basically export i sused to export the function from this file and import it in other file 
 // where i want to use that function.
 //  it is used to make the function available for use in other files of the project, allowing
 //us to organize our code into modular components and reuse functionality across different 
 // parts of the application.
export const incrementDecrement =(event,stock,id,price) =>{  //passing event to know which button is 
// clicked and stock to know the stock of that product and id to identify the product and 
// price to calculate the total price based on quantity.
 const currentCardElement = document.querySelector(`#card${id}`); // used to select the 
 // current product card element in the DOM based on the product id, which allows us to
 //  access and manipulate the elements within that specific product card when handling the 
 // increment and decrement functionality for that product in the cart.
 
 const productQuantity = currentCardElement.querySelector(".productQuantity");  //in this instead of write document we can write currentCardElement because we want to access the productQuantity element within the current card element that corresponds to the product with the specified id. By using currentCardElement.querySelector, we can ensure that we are targeting the correct product card and its associated quantity element when handling the increment and decrement functionality for that specific product in the cart. 
 
 const productPrice = currentCardElement.querySelector(".productPrice");
 let quantity = 1; // this line is used to initialize the quantity variable with a default value of 1, which represents the initial quantity of the product in the cart. This value will be updated based on the user's interactions with the increment and decrement buttons, allowing us to keep track of the current quantity of the product in the cart and calculate the total price accordingly.

 let localStoragePrice  = 0;
 //**_________________ Get  the data from localStorage________________
let localCartProduct = getCartProductFormLS(); 
let existingProd = localCartProduct.find((curProd) => curProd.id === id); // this line is used to check if the product with the specified id already exists in the localCartProduct array, which represents the current contents of the cart retrieved from local storage. The find method is used to search for a product object in the array that has a matching id, and if such an object is found, it is stored in the existingProd variable. This allows us to determine if the product is already in the cart and can be used to update the quantity and price of that product when handling the increment and decrement functionality.
 if(existingProd){
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
 }else{
    localStoragePrice = price;
    price = price; // this line is used to set the price variable to the value of the price 
//parameter passed to the incrementDecrement function, which represents the unit price of the
// product. This allows us to use the original price value for calculations when handling
// the increment and decrement functionality, while localStoragePrice can be updated based on
//  the quantity changes and used for updating the cart products in local storage.


 }
 if(event.target.className === "cartIncrement"){
   if(quantity < stock){
        quantity += 1 ;
 }else if (quantity === stock){
    quantity = stock; //means quantity equal to this then not incement
    localStoragePrice = price * stock ;
    localStoragePrice =Number(localCartPrice.toFixed(2));
 }
 }
  if((event.target.className === "cartDecrement")){ // this line is used to check if the class name of the event target (the element that was clicked) is "cartDecrement", which indicates that the user wants to decrease the quantity of the product.
    if(quantity > 1){
        quantity -= 1; 
    }
 }
 //_______________ finally we will update thh price in localStorage____________
    localStoragePrice = price * quantity;
    let updatedCart = { id,quantity,price:localStoragePrice};
   updatedCart = localCartProduct.map((curProd) => {
    return (curProd.id === id) ? updatedCart : curProd; //tertiary operator.tell 
   })
  localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    //also we need to feflect the changes on thescreen too5

    productQuantity.innerText = quantity; // this line is used to update the text content of the productQuantity element with the current quantity value, which allows us to display the updated quantity on the webpage whenever the user clicks the increment or decrement buttons.
    productPrice.innerText = localStoragePrice; // this line is used to update the text content of the productPrice element with the current price value, which allows us to display the updated price on the webpage whenever the user clicks the increment or decrement buttons and the price changes accordingly based on the quantity.

    //Calculating the card total in our cartProducts page_____________


updateCartProductTotal();
};



export const homeQuantityToggle = (event,id,stock) => {  // here export is used 

const currentCardElement = document.querySelector(`#card${id}`);
// console.log(currentCardElement); //this line is used to show data of product in console.
 const productQuantity = currentCardElement.querySelector(".productQuantity");
 //console.log(productQuantity); // this line is used to show the element with the class name "productQuantity" in the console, which is used to display the quantity of the product that the user wants to add to the cart.
 let quantity =parseInt(productQuantity.getAttribute("data-quantity")) || 1;    // this line is used to get the value of the "data-quantity" attribute of the productQuantity element and parse it as an integer. If the attribute is not set, it defaults to 1. This allows us to keep track of the quantity of the product that the user wants to add to the cart.
 if(event.target.className === "cartIncrement"){
   if(quantity < stock){
        quantity += 1 ;
 }else if (quantity === stock){
    quantity = stock;
 }
 }

 if((event.target.className === "cartDecrement")){ // this line is used to check if the class name of the event target (the element that was clicked) is "cartDecrement", which indicates that the user wants to decrease the quantity of the product.
    if(quantity > 1){
        quantity -= 1; 
    }
 } 
 

 productQuantity.innerText = quantity; // this line is used to update the text content of the productQuantity element with the current quantity value, which allows us to display the updated quantity on the webpage whenever the user clicks the increment or decrement buttons.
 console.log(quantity); // this line is used to show the current quantity value in the console, which can be helpful for debugging purposes to ensure that the quantity is being updated correctly when the user interacts with the increment and decrement buttons.
 productQuantity.setAttribute('data-quantity',quantity); // this line is used to update the "data-quantity" attribute of the productQuantity element with the current quantity value, which allows us to keep track of the quantity in the DOM and use it for further operations, such as adding the product to the cart with the specified quantity.
return quantity ; // this line is used to return the current quantity value from the homeQuantityToggle function, which can be useful if we want to use this value in other parts of our code, such as when adding the product to the cart or updating the cart total.
}

import { getCartProductFormLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement =(event,stock,id,price) =>{  
 const currentCardElement = document.querySelector(`#card${id}`); 
 
 
 const productPrice = currentCardElement.querySelector(".productPrice");
 let quantity = 1; 
 let localStoragePrice  = 0;
 //**_________________ Get  the data from localStorage________________
let localCartProduct = getCartProductFormLS(); 
let existingProd = localCartProduct.find((curProd) => curProd.id === id);  
 if(existingProd){
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
 }else{
    localStoragePrice = price;
    price = price; 


 }
 if(event.target.className === "cartIncrement"){
   if(quantity < stock){
        quantity += 1 ;
 }else if (quantity === stock){
    quantity = stock; 
    localStoragePrice = price * stock ;
    localStoragePrice =Number(localCartPrice.toFixed(2));
 }
 }
  if((event.target.className === "cartDecrement")){ 
    if(quantity > 1){
        quantity -= 1; 
    }
 }
 //_______________ finally we will update thh price in localStorage____________
    localStoragePrice = price * quantity;
    let updatedCart = { id,quantity,price:localStoragePrice};
   updatedCart = localCartProduct.map((curProd) => {
    return (curProd.id === id) ? updatedCart : curProd; 
   })
  localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));


    productQuantity.innerText = quantity; 
    productPrice.innerText = localStoragePrice; 
    //Calculating the card total in our cartProducts page


updateCartProductTotal();
};



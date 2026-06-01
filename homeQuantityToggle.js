export const homeQuantityToggle = (event,id,stock) => {  

const currentCardElement = document.querySelector(`#card${id}`);
// console.log(currentCardElement); 
 const productQuantity = currentCardElement.querySelector(".productQuantity");
<<<<<<< HEAD
 //console.log(productQuantity); 
 let quantity =parseInt(productQuantity.getAttribute("data-quantity")) || 1;    
=======
 //console.log(productQuantity);
 let quantity =parseInt(productQuantity.getAttribute("data-quantity")) || 1;   
>>>>>>> 2808469de8c649a25664f26f3e4d48f9b5bc8a50
 if(event.target.className === "cartIncrement"){
   if(quantity < stock){
        quantity += 1 ;
 }else if (quantity === stock){
    quantity = stock;
 }
 }

<<<<<<< HEAD
 if((event.target.className === "cartDecrement")){  
=======
 if((event.target.className === "cartDecrement")){ 
>>>>>>> 2808469de8c649a25664f26f3e4d48f9b5bc8a50
    if(quantity > 1){
        quantity -= 1; 
    }
 } 
 

 productQuantity.innerText = quantity; 
 console.log(quantity); 
<<<<<<< HEAD
 productQuantity.setAttribute('data-quantity',quantity);
=======
 productQuantity.setAttribute('data-quantity',quantity); 
>>>>>>> 2808469de8c649a25664f26f3e4d48f9b5bc8a50
return quantity ; 
}

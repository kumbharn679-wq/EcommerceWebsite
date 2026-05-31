import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => { 
  if (!products) {
    return false;
  }
   products.forEach((curProd) => {
    const { brand, category, description, id, image, name, price, stock } = curProd;

    //?** here importNode is used for cloning the template content and true is used for deep cloning which means it will clone all the child elements of the template.
    const productClone = document.importNode(productTemplate.content, true);// content is used to access the content of the template element and true is used for deep cloning which means it will clone all the child elements of the template. This allows us to create a new product card for each product in the products array by cloning the template and populating it with the product data. 
     productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name; // this line is used to set the text content of the element with the class name "productName" to the value of the variable "name" which is obtained from the current product object in the products array. This allows us to display the name of each product on the webpage.
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;
     productClone.querySelector(".productPrice").textContent = `₹${price}`;
   
     productClone.querySelector(".productActualPrice").textContent = `₹${  price * 4 }`;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock); 
      });

    productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) =>{ 
      addToCart(event, id, stock);


});

    productContainer.append(productClone);// this line is used to append the cloned product card to the product container element in the DOM, which allows us to display all the products on the webpage as cards.
  });
};
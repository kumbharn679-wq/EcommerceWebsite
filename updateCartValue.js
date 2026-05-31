const cartValue = document.querySelector("#cartValue");

export const updateCartValues = (cartProducts) => {
    return (cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping">
    ${cartProducts.length} </i>`); // this line is used to update the inner HTML of the cartValue element with the current number of products in the cart, which is determined by the length of the cartProducts array. This allows us to display the updated cart count on the webpage whenever a product is added to the cart.


}
// Basic JavaScript functionality for the e-commerce website
let cartItems = [];
let totalPrice = 0;

function addToCart(productId) {
  // Add product to the cartItems array
  cartItems.push(productId);

  // Calculate the total price
  totalPrice += getProductPrice(productId);

  // Update the cart view
  updateCartView();
}

function getProductPrice(productId) {
  // Replace with your own logic to fetch the price of a product based on its ID
    if (productId === 1) {
        return 10.00;
    } else if (productId === 2) {
        return 15.00;
    } else if (productId === 3) {
        return 18.00;
    } else if (productId === 4) {
        return 10.00;
    } else if (productId === 5) {
        return 10.00;
    }
}

function updateCartView() {
  let cartItemsElement = document.getElementById("cartItems");
  let totalPriceElement = document.getElementById("totalPrice");

  // Clear the cart items list
  cartItemsElement.innerHTML = "";

  // Add each cart item to the list
  cartItems.forEach((productId) => {
    let listItem = document.createElement("li");
    listItem.textContent = "Product " + productId;
    cartItemsElement.appendChild(listItem);
  });

  // Update the total price
  totalPriceElement.textContent = "Total Price: $" + totalPrice.toFixed(2);
}

function checkout() {
  // Replace with your own logic to handle the checkout process
  alert("Checkout functionality will be implemented in the future.");
}


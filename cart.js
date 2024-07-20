let CartArray = JSON.parse(localStorage.getItem("CartItems")) || [];

// Function to render cart items
function renderCart() {
    const cartContainer = document.getElementById("cartItems");
    cartContainer.innerHTML = "";

    CartArray.forEach((product, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart_item";

        cartItem.innerHTML = `
            <img class="cart_image" src="${product.image}" alt="${product.title}">
            <div class="cart_name">${product.title}</div>
            <div class="cart_price">$${product.price}</div>
            <button class="remove_button" onclick="removeFromCart(${index})">Remove</button>
        `;

        cartContainer.appendChild(cartItem);
    });

    calculateTotal();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    CartArray.splice(index, 1);
    localStorage.setItem("CartItems", JSON.stringify(CartArray));
    renderCart();
}

// Function to calculate total amount
function calculateTotal() {
    const totalAmount = CartArray.reduce((total, product) => total + product.price, 0);
    document.getElementById("totalAmount").textContent = `Total: $${totalAmount.toFixed(2)}`;
}

// Function to place order
function placeOrder() {
    if (CartArray.length > 0) {
        // Clear cart
        CartArray = [];
        localStorage.setItem("CartItems", JSON.stringify(CartArray));
        renderCart();
        alert("Order placed successfully!");
    } else {
        alert("Your cart is empty!");
    }
}
// cart.js

// Function to redirect to billing.html
function redirectToBilling() {
  // Perform any necessary logic here (e.g., validation)
  // Redirect to billing.html
  window.location.href = "address.html";
}

// Initial render
renderCart();




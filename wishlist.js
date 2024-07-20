


let WishlistArray = JSON.parse(localStorage.getItem("WishlistedItems")) || [];

// Function to render wishlist items
function renderWishlist() {
    const wishlistContainer = document.getElementById("wishlistItems");
    wishlistContainer.innerHTML = "";

    WishlistArray.forEach((product, index) => {
        const wishlistItem = document.createElement("div");
        wishlistItem.className = "wishlist_item";

        wishlistItem.innerHTML = `
            <img class="wishlist_image" src="${product.image}" alt="${product.title}">
            <div class="wishlist_name">${product.title}</div>
            <button class="remove_button" onclick="removeFromWishlist(${index})">Remove</button>
        `;

        wishlistContainer.appendChild(wishlistItem);
    });
}

// Function to remove an item from the wishlist
function removeFromWishlist(index) {
    WishlistArray.splice(index, 1);
    localStorage.setItem("WishlistedItems", JSON.stringify(WishlistArray));
    renderWishlist();
    updateWishlistCount();
}

// Function to update the wishlist count
function updateWishlistCount() {
    const wishlistCount = document.getElementById("wishlist_count");
    if (wishlistCount) {
        wishlistCount.textContent = WishlistArray.length;
    }
}

// Initial render
renderWishlist();
updateWishlistCount();

let products = [];
let WishlistArray = JSON.parse(localStorage.getItem("WishlistedItems")) || [];

function updateWishlistCount() {
  const wishlistCount = document.getElementById("wishlist_count");
  wishlistCount.textContent = WishlistArray.length;
}

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    products = data;
    renderProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Render product cards
function renderProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.className = "product_item";

    productCard.innerHTML = `
            <img class="product_image" src="${product.image}" alt="${
      product.name
    }">
            <p>${product.title.slice(0, 25)}</p>
            <div class="product_price">$${product.price}</div>
            <span class="material-symbols-outlined eye_icon" onclick="showProductDetail(${index})">visibility</span>
            <span class="material-symbols-outlined wishlist_icon" onclick="addToWishlist(${index})">favorite</span>
        `;

    productList.appendChild(productCard);
  });
}

function showProductDetail(index) {
  const product = products[index];
  localStorage.setItem("productDetail", JSON.stringify(product));
  window.location.href = "product_detail.html";
}

// Add product to wishlist
function addToWishlist(index) {
  const product = products[index];
  if (!WishlistArray.some((item) => item.id === product.id)) {
    WishlistArray.push(product);
    localStorage.setItem("WishlistedItems", JSON.stringify(WishlistArray));
    updateWishlistCount();
    renderWishlist();
  }
}

// Update wishlist count in the header
function updateWishlistCount() {
  const myItems = JSON.parse(localStorage.getItem("WishlistedItems"));
  const wishlistCount = document.getElementById("wishlist_count");
  wishlistCount.textContent = myItems.length;
}

function addToCart(index) {
  const product = products[index];
  if (!CartArray.some((item) => item.id === product.id)) {
    CartArray.push(product);
    localStorage.setItem("CartItems", JSON.stringify(CartArray));
    updateCartCount();
    renderCart();
  }
}

// Initial fetch call
fetchProducts();
updateWishlistCount();
console.log(localStorage.getItem("CartItems", JSON.stringify(CartArray)));



document.addEventListener('DOMContentLoaded', () => {
  const wishlist = [];
  const cart = [];
  
  // Add event listeners to "Add to Wishlist" and "Add to Cart" buttons
  document.querySelectorAll('.add_to_wishlist').forEach(button => {
      button.addEventListener('click', event => {
          const product = getProductDetails(event.target);
          wishlist.push(product);
          updateLocalStorage('wishlist', wishlist);
      });
  });
  
  document.querySelectorAll('.add_to_cart').forEach(button => {
      button.addEventListener('click', event => {
          const product = getProductDetails(event.target);
          cart.push(product);
          updateLocalStorage('cart', cart);
      });
  });
  
  function getProductDetails(button) {
      const productItem = button.closest('.product_item');
      return {
          name: productItem.querySelector('.product_name').textContent,
          price: productItem.querySelector('.product_price').textContent,
          image: productItem.querySelector('.product_image').src
      };
  }
  
  function updateLocalStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
  }
});



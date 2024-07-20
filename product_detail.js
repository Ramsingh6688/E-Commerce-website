let WishlistArray = JSON.parse(localStorage.getItem("WishlistedItems")) || [];

function updateWishlistCount() {
  const wishlistCount = document.getElementById("wishlist_count");
  wishlistCount.textContent = WishlistArray.length;
}


window.onload = function() {
  const product = JSON.parse(localStorage.getItem('productDetail'));
  if (product) {
      document.getElementById('product_image').src = product.image;
      document.getElementById('product_name').textContent = product.title;
      document.getElementById('product_price').textContent = `$${product.price}`;
      document.getElementById('product_description').textContent = product.description;
      // Assuming sizes are part of the product object
      if (product.sizes) {
          document.getElementById('product_size').textContent = `Available Sizes: ${product.sizes.join(', ')}`;
      } else {
          document.getElementById('product_size').textContent = `Sizes not available`;
      }
  } else {
      alert('Product details not found!');
  }
  document.querySelector('.add_to_cart').addEventListener('click', function() {
    addToCart(product);
  });

};

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
  
 
function addToCart(product) {
  let cartArray = JSON.parse(localStorage.getItem('CartItems')) || [];
  if (!cartArray.some(item => item.id === product.id)) {
    cartArray.push(product);
    localStorage.setItem('CartItems', JSON.stringify(cartArray));
    alert('Product added to cart!');
    console.log(item)
  } else {
    alert('Product is already in the cart!');
  }
}
function updateCartCount() {
    const myCart = JSON.parse(localStorage.getItem("CartItems"));
    const addCart = document.getElementById("CartItems");
    addCart.textContent = myCart.length;
    console.log(myCart.length)
  }

  function buyNow() {
    const product = JSON.parse(localStorage.getItem('productDetail'));
    if (product) {
        localStorage.setItem('checkoutProduct', JSON.stringify(product));
        window.location.href = 'checkout.html';
    } else {
        alert('Product details not found!');
    }
  }
  

// fetchProducts();
updateWishlistCount();
updateCartCount();


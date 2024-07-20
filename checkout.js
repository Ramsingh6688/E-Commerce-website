window.onload = function() {
  const product = JSON.parse(localStorage.getItem('checkoutProduct'));
  if (product) {
      const productSummary = document.getElementById('productSummary');
      productSummary.innerHTML = `
          <img src="${product.image}" alt="${product.title}" style="width: 100px; height: 100px;">
          <p><strong>${product.title}</strong></p>
          <p>Price: $${product.price}</p>
      `;
  } else {
      alert('No product information found for checkout!');
  }
};

function submitForm() {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const zip = document.getElementById('zip').value;
  const country = document.getElementById('country').value;

  const billingInfo = {
      fullName,
      email,
      address,
      city,
      state,
      zip,
      country
  };

  localStorage.setItem('BillingInfo', JSON.stringify(billingInfo));
  alert('Billing information saved successfully!');
  window.location.href = 'billing.html';
}

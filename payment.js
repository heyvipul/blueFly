function handlePaymentOption() {
    var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    var cardDetailsForm = document.getElementById("cardDetailsForm");
    var shopPayMessage = document.getElementById("shopPayMessage");
    var paypalMessage = document.getElementById("paypalMessage");
    var payNowButton = document.getElementById("payNowButton");

    if (paymentMethod === "creditCard") {
      cardDetailsForm.classList.add("large");
      cardDetailsForm.style.display = "block";
      shopPayMessage.style.display = "none";
      paypalMessage.style.display = "none";
      payNowButton.textContent = "Pay now";
      payNowButton.style.width = "100px";
    } else if (paymentMethod === "shopPay") {
      cardDetailsForm.classList.remove("large");
      cardDetailsForm.style.display = "none";
      shopPayMessage.style.display = "block";
      paypalMessage.style.display = "none";
      payNowButton.textContent = "Complete order";
      adjustButtonWidth(payNowButton);
    } else if (paymentMethod === "paypal") {
      cardDetailsForm.classList.remove("large");
      cardDetailsForm.style.display = "none";
      shopPayMessage.style.display = "none";
      paypalMessage.style.display = "block";
      payNowButton.textContent = "Complete order";
      adjustButtonWidth(payNowButton);
    } else {
      cardDetailsForm.classList.remove("large");
      cardDetailsForm.style.display = "none";
      shopPayMessage.style.display = "none";
      paypalMessage.style.display = "none";
      payNowButton.textContent = "Pay now";
      payNowButton.style.width = "100px";
    }

  }

  function adjustButtonWidth(button) {
   var textLength = button.textContent.length;
  var width = textLength * 10 + 20; 
  button.style.width = width + "px";
}
  function handleBillingAddressOption() {
    var billingAddressOption = document.querySelector('input[name="billingAddressOption"]:checked').value;
    var billingAddressForm = document.getElementById("billingAddressForm");
    
    if (billingAddressOption === "sameAsShipping") {
      billingAddressForm.style.display = "none";
    } else if (billingAddressOption === "differentAddress") {
      billingAddressForm.style.display = "block";
    }
  }
  function showShippingAddress() {
    const billingAddressForm = document.getElementById("billingAddressForm");
    const shippingAddressForm = document.getElementById("shippingAddressForm");
    
    billingAddressForm.style.display = "none";
    shippingAddressForm.style.display = "block";
  }

  var saveInfoCheckbox = document.getElementById('saveInfoCheckbox');
  var checkoutMessage = document.getElementById('checkoutMessage');

saveInfoCheckbox.addEventListener('change', function() {
if (this.checked) {
 checkoutMessage.style.display = 'block';
} else {
 checkoutMessage.style.display = 'none';
}
});

function submitForm() {
    alert("Payment completed successfully!");
  }
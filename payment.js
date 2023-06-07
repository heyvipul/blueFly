message();
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

function showAlert() {
    alert("Payment completed successfully!");
  }

  
function Subtotal() {
  var total = MensData.reduce(function (acc, currEl) {
      var quantity = currEl.quantity || 1; 
      return acc + currEl.price * quantity;
  }, 0);

  var subtotalContainer = document.querySelector("#subtotal");
  subtotalContainer.innerHTML = ""; 

  var p = document.createElement("h6");
  p.textContent = "Subtotal";

  var p1 = document.createElement("p");
  p1.textContent = "$ " + total.toFixed(2); 

  subtotalContainer.append(p, p1);
}

function Total() {
  var total = calculateTotal();

  var finalTotalContainer = document.querySelector("#Finaltotal");
  finalTotalContainer.innerHTML = "";

  var p = document.createElement("h6");
  p.textContent = "Total";

  var p1 = document.createElement("p");
  p1.textContent = "$ " + total.toFixed(2); 

  finalTotalContainer.append(p, p1);
}

function calculateTotal() {
  var total = MensData.reduce(function (acc, currEl) {
      var quantity = currEl.quantity || 1; 
      return acc + currEl.price * quantity;
  }, 0);

  return total;
}

function message(){
  alert("CARD NUMBER:12345, NAME:VISA,EXPIRY:11/2030,SECURITY:123");
}
function PayNow(){
  let cardNumber=document.getElementById("cardNumber").value;
  let nameOnCard=document.getElementById("nameOnCard").value;
  let expirationDate=document.getElementById("expirationDate").value;
  let securityCode=document.getElementById("securityCode").value;
  if(cardNumber=="" || nameOnCard=="" || expirationDate=="" || securityCode==""){
    alert("Please fill all details");
    return;
  }
  if(cardNumber=="12345" && nameOnCard=="VISA" && expirationDate=="11/2030" && securityCode=="123"){
    showAlert();
  }else{
    alert("Please fill correct details");
   
  }
  
}
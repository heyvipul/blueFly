var MensData = JSON.parse(localStorage.getItem("cartData")) || [];

/*if (MensData.length === 0) {
    document.getElementById("cart-container").textContent = "THERE ARE NO PRODUCTS! DO SOME SHOPPING!";
} else {*/
    displayCart();
    Subtotal();
    Total();
//}

function displayCart() {
    var tbody = document.querySelector("tbody");
    tbody.innerHTML = ""; // Clear existing table rows

    MensData.forEach(function (elem, i) {

        var tr = document.createElement("tr");

        var image = document.createElement("img");
        image.setAttribute("src", elem.image);
        image.setAttribute("alt", elem.name);
       
        var td1 = document.createElement("td");
        td1.appendChild(image);

        var td2 = document.createElement("td");
        td2.textContent = elem.name;

        var td3 = document.createElement("td");
        td3.textContent = "$ " + elem.price;

        var td4 = document.createElement("td");
        var input = document.createElement("input");
        input.className = "w-25 pl-1";
        input.value = "1";
        input.type = "number";
        input.addEventListener("input", function () {
            updatePrice(i, this.value, td5);
            Subtotal();
            Total();
        });
        td4.appendChild(input);

        var td5 = document.createElement("td");
        td5.textContent = "$ " + elem.price;

        var td6 = document.createElement("td");
        td6.textContent = "DELETE";
        td6.style.backgroundColor = "red";
        td6.style.color = "white";
        td6.style.fontFamily = "monospace";

        td6.addEventListener("click", function () {
            tr.remove();
            delRow(i);
            Subtotal();
            Total();
        });

        tr.append(td1, td2, td3, td4, td5, td6);
        tbody.append(tr);
    });

    var applyCouponBtn = document.querySelector(".apply_coupon");
    applyCouponBtn.addEventListener("click", applyCoupon);
}

function delRow(startIndex) {
    MensData.splice(startIndex, 1);
    localStorage.setItem("cartData", JSON.stringify(MensData));
}

function updatePrice(index, quantity, priceElement) {
    var product = MensData[index];
    var totalPrice = Number(product.price) * Number(quantity);
    product.quantity = Number(quantity);
    priceElement.textContent = "$ " + totalPrice;
    localStorage.setItem("cartData", JSON.stringify(MensData));
}

function applyCoupon() {
    var couponInput = document.querySelector(".coupon input");
    var couponCode = couponInput.value.trim();

    if (couponCode === "masai") {
        var total = calculateTotal();
        var discountedTotal = total - total * 0.3; // Apply 30% discount

        var finalTotalContainer = document.querySelector("#Finaltotal");
        finalTotalContainer.innerHTML = ""; 

        var p = document.createElement("h6");
        p.textContent = "Total (after discount)";

        var p1 = document.createElement("p");
        p1.textContent = "$ " + discountedTotal.toFixed(2);

        finalTotalContainer.append(p, p1);
    } else {
        Total(); 
    }

    couponInput.value = ""; 
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

    localStorage.setItem("Checkout_payment",JSON.stringify(p1.textContent))
}

function calculateTotal() {
    var total = MensData.reduce(function (acc, currEl) {
        var quantity = currEl.quantity || 1; 
        return acc + currEl.price * quantity;
    }, 0);

    return total;
}
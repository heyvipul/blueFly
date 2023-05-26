
var MensData = JSON.parse(localStorage.getItem("cartlist")) || []

if (MensData.length === 0) {
    document.getElementById("cart-container").textContent = "THERE ARE NO PRODUCTS! DO SOME SHOPPING !";
} else {
    displayCart();
    Subtotal();
    Total();
}

function displayCart() {
    // event.preventDefault();
    MensData.map(function(elem,i) {
        var tr = document.createElement("tr");

        var image = document.createElement("img");
        image.setAttribute("src", elem.image_url);
        image.setAttribute("alt", elem.name);

        var td1 = document.createElement("td");
        td1.appendChild(image);

        var td2 = document.createElement("td");
        td2.textContent = elem.name;

        var td3 = document.createElement("td");
        td3.textContent = "$ " + elem.price;

        var td4 = document.createElement("td");
        td4.textContent = 1;

        var td5 = document.createElement("td");
        td5.textContent = "$ " + elem.price;

        var td6 = document.createElement("td");
        td6.textContent = "DELETE";
        td6.style.backgroundColor = "red";
        td6.style.color = "white"
        td6.style.fontFamily = "monospace";

        td6.addEventListener("click",function(){
            event.target.parentNode.remove();
            delRow(i);
        //    displayCart();
        });

        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append(tr);
    });
}

    function delRow(startIndex){
        var el = MensData.splice(startIndex,1);
        console.log(el);
        console.log(MensData);
        localStorage.setItem("cartlist",JSON.stringify(MensData));
   
    }
    





    function Subtotal(){
        var total = MensData.reduce(function(acc, currEl){
            return Number(acc) + Number(currEl.price);
        },0);

        var p = document.createElement("h6");
        p.textContent = "Subtotal";

        var p1 = document.createElement("p");
        p1.textContent ="$ "+total;

        document.querySelector("#subtotal").append(p,p1);

    }

    function Total(){
        var total = MensData.reduce(function(acc, currEl){
            return Number(acc) + Number(currEl.price);
        },0);

        var p = document.createElement("h6");
        p.textContent = "Total";

        var p1 = document.createElement("p");
        var add = Number(total) + Number(40);
        p1.textContent = "$ " + add;

        document.querySelector("#Finaltotal").append(p,p1);

    }

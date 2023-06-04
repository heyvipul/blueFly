var cartData=JSON.parse(localStorage.getItem("cartData"))||[];
var product=JSON.parse(localStorage.getItem("product-pge-item"));
document.querySelector("#ch1>img").setAttribute("src",product.imgs);
document.querySelector("#ch0>div>img").setAttribute("src",product.imgs);
document.querySelector("#ch0>div>img").addEventListener("click",function(){
  document.querySelector("#ch1>img").remove();
  var img=document.createElement("img");
  img.setAttribute("src",product.imgs);
  document.querySelector("#ch1").append(img);
  popup();
});
document.querySelector("#ch0>div:nth-child(2)>img").setAttribute("src",product.img2);
document.querySelector("#ch0>div:nth-child(2)>img").addEventListener("click",function(){
  document.querySelector("#ch1>img").remove();
  var img=document.createElement("img");
  img.setAttribute("src",product.img2);
  document.querySelector("#ch1").append(img);
  popup();
});
document.querySelector("#ch0>div:nth-child(3)>img").setAttribute("src",product.img3);
document.querySelector("#ch0>div:nth-child(3)>img").addEventListener("click",function(){
  document.querySelector("#ch1>img").remove();
  var img=document.createElement("img");
  img.setAttribute("src",product.img3);
  document.querySelector("#ch1").append(img);
  popup();
});
document.querySelector("#ch2>h2").innerText=product.brand;
document.querySelector("#ch2>h2:nth-child(2)").innerText=product.discription;
document.querySelector("#ch2>div:nth-child(3)>div:nth-child(1)>p").innerText=product.rprice;
//console.log(product.price);
document.querySelector("#ch2>div:nth-child(3)>div:nth-child(2)>p").innerText=product.price;
document.querySelector("#ch2>div:nth-child(3)>div:nth-child(3)>p").innerText=product.saving;
document.querySelector(" #ch2>div:nth-child(10)>img").setAttribute("src",product.imgs);
popup();
function popup(){
  var modal = document.getElementById("myModal");
  var img = document.querySelector("#ch1>img");
var modalImg = document.getElementById("img01");

img.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;

}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
modal.style.display = "none";
}
document.querySelector(" #ch2>button:nth-child(11)").addEventListener("click",function(){
var obj={};
obj["image"]=document.querySelector("#ch1>img").getAttribute("src");
obj["name"]=document.querySelector("#ch2>h2:nth-child(2)").innerText;
var pr=document.querySelector("#ch2>div:nth-child(3)>div:nth-child(2)>p").innerText;

pr=pr.substr(1,pr.length);

obj["price"]=pr;
cartData.push(obj);
localStorage.setItem("cartData",JSON.stringify(cartData));
alert("Added To Cart");
console.log(cartData);
});
}
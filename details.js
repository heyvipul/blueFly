var details=JSON.parse(localStorage.getItem("current_details")) || {};
    var name=details.f_name+" "+details.l_name;
    document.getElementById("name").innerText=name;
    document.querySelector("#mainpage").addEventListener("click",function(){
        window.location.href="index.html";
    });
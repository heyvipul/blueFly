var login_details=JSON.parse(localStorage.getItem("login-details")) || [];
document.querySelector("form").addEventListener("submit",function(){
    event.preventDefault();
    var Fname=document.getElementById("f_name").value;
    var Lname=document.getElementById("l_name").value;
    var email=document.getElementById("mail").value;
    var password=document.getElementById("password").value;
    if(Fname=="" || Lname=="" || email=="" || password==""){
        alert("Fill all the details");
    }
    else{
        var obj={};
    obj["f_name"]=Fname;
    obj["l_name"]=Lname;
    obj["email"]=email;
    obj["password"]=password;
    login_details.push(obj);

    var objj={};
            objj["f_name"]=Fname;
            objj["l_name"]=Lname;
            localStorage.setItem("current_details",JSON.stringify(objj));
         localStorage.setItem("login-details",JSON.stringify(login_details));
    window.location.href="details.html";
    
    }
   
});
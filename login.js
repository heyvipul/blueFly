var alrts=true;
var login_details=JSON.parse(localStorage.getItem("login-details")) || [];
document.querySelector("#login").addEventListener("submit",function(){
    event.preventDefault();
    var email=document.getElementById("mail").value;
    var password=document.getElementById("password").value;
    console.log(login_details);
    if(login_details.length==0){
        if(alrts){
            addAlrt();
            alrts=false;
        }
    }
    if(email=="" || password==""){
            if(alrts){
                addAlrt();
                alrts=false;
            }
        }
     
    login_details.forEach(function(ele){
       if(ele.email==email && password==ele.password){
            removeAlrt();
            var obj={};
            obj["f_name"]=ele.f_name;
            obj["l_name"]=ele.l_name;
            localStorage.setItem("current_details",JSON.stringify(obj));
            window.location.href="details.html";
        }else{
            if(alrts){
                addAlrt();
                alrts=false;
            }
        }
   });
});
document.querySelector("#create_Account").addEventListener("click",function(){
        window.location.href="create_Account.html";
    });
    function addAlrt(){
        var div=document.createElement("div");
        var p=document.createElement("p");
        p.innerText="● Incorrect email or password.";
        p.setAttribute("id","incorrect_password");
        div.append(p);
        document.querySelector("#alrt").append(p);
        document.getElementById("alrt").style.width="90%"
        
        document.getElementById("alrt").style.height="37px"
        document.getElementById("alrt").style.border="1px solid #D02E2E"
        document.querySelector("#alrt>p").style.color="#D02E2E";
        document.querySelector("#alrt>p").style.fontSize="medium";
        document.querySelector("#alrt>p").style.fontFamily="Times New Roman"
        document.querySelector("#alrt>p").style.fontWeigth="300";
        document.querySelector("#alrt>p").style.margin="5px auto auto auto"
        bool=false;
        document.querySelector("footer").style.marginTop="0px";
    }
    function removeAlrt(){
       if(document.querySelector("#alrt>p")!=undefined){
        document.querySelector("#alrt>p").remove();
    document.getElementById("alrt").style.height="";
        document.getElementById("alrt").style.border="";
        document.getElementById("alrt").style.width="";
        document.querySelector("footer").style.marginTop="-90px";
       }
    }
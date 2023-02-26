document.querySelector("form").addEventListener("submit",myfunction)
var data=JSON.parse(localStorage.getItem("allData"))|| [];
function myfunction(){

    event.preventDefault()
    var obj={
        name:document.querySelector("#name").value,
        contact:document.querySelector("#contact").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
    }
    data.push(obj);
    localStorage.setItem("allData",JSON.stringify(data));

    if(document.querySelector("#name").value==""|| document.querySelector("#contact").value==""|| 
    document.querySelector("#email").value==""|| document.querySelector("#password").value=="")
    {
        alert("Enter all details")
    }else{
   
     alert("signup succesfully")
     window.localation.href="login.html";
    }
}
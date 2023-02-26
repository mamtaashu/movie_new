document.querySelector("form").addEventListener("submit",loginfn)

function loginfn(){
    event.preventDefault();
    var enteremail=document.querySelector("#email").value
    var enterpassword=document.querySelector("#password").value
    let store = JSON.parse(localStorage.getItem("login")) || [];
    var loginData=JSON.parse(localStorage.getItem("allData"));
    var flag=false;
    loginData.forEach(value => {
          if(value.email==enteremail && value.password==enterpassword)
          {
                 flag =true;
                 localStorage.setItem("login",JSON.stringify(loginData));
          }
    })
    if(flag)
    {
        alert("login succesful")
        window.location.href="index.html"
    }else{
        alert("incorrect credentials")
    }
}
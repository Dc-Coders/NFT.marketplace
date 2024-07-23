
let btn = document.getElementById("btn");

let username = document.getElementById("username");
let useremail = document.getElementById("useremail");
let password = document.getElementById("userpassword");
let password1 = document.getElementById("userpassword1");

function btnfunction() {
  if (username.value !== "" && userpassword.value !== ""  && useremail.value !== "") {
    if (password.value == password1.value) {
    
      alert("siz ro'yxatdan otdingiz")
      // window.location.pathname = ("/events/src/components/Home/home.html");
      btn.style.display = "none";
     

   }
   else {
     alert("Your password not equal to confirm password 🙃")
     }   
  } else {
    alert("Your input empty 😔");
  }
    
}
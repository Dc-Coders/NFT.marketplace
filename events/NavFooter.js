let navI = document.getElementById("secret");
let nav2 = document.getElementById("uldiv");

function myfunction() {
  nav2.classList.toggle("divul");
}

let sent = document.getElementById("sent");

let sub = document.getElementById("sub");
function Subscribe() {
  if (sub.value !== "") {
    alert("📍 You Succesfully Subscribed 🎉");
  } else {
    alert("Your input empty 😔");
  }
}

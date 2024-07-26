


let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2");
let row3 = document.getElementById("row3");
let btn = document.getElementById("AllBtn")

function filterCreated(){
    row2.style.display = "none";
    row3.style.display = "none";
    row1.style.display = "flex";
    btn.style.display = "block"
}
function filterOwned(){
    row1.style.display = "none";
    row3.style.display = "none";
    row2.style.display = "flex";
    btn.style.display = "block"
}
function filterCollection(){
    row1.style.display = "none";
    row2.style.display = "none";
    row3.style.display = "flex";
    btn.style.display = "block"
}
function filterAll(){
    row3.style.display = "flex";
    row1.style.display = "flex";
    row2.style.display = "flex";
    btn.style.display = "none"
}
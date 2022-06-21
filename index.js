const rightnavi = document.querySelector("#rightNavi");
const ul = document.querySelector("ul");
function showMenu() {
  rightnavi.style.right = "0";
  rightnavi.style.display = "block";
}

function hideMenu() {
  rightnavi.style.right = "-300px";
  rightnavi.style.display = "none";
}

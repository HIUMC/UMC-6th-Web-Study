let elNumber = document.getElementById("number");
let elIncreaseBtn = document.querySelector("#increase");
let elDecreaseBtn = document.querySelector("#decrease");

function increase() {
  console.log("increase가 선택됨");
  elNumber.innerText++;
}
function decrease() {
  console.log("decrese가 선택됨");
  elNumber.innerText--;
}

const number = document.querySelector("#number");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");

function plusNumber() {
  number.innerText = parseInt(number.innerText) + 1;
}

function minusNumber() {
  number.innerText = parseInt(number.innerText) - 1;
}

increaseBtn.addEventListener("click", plusNumber);
decreaseBtn.addEventListener("click", minusNumber);

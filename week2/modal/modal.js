const modal = document.getElementById("modal");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const layer = document.getElementById("layer");

// openButton.addEventListener("click", () => {
//   modal.style.display = "flex";
//   layer.style.display = "flex";
// });
// closeButton.addEventListener("click", () => {
//   modal.style.display = "none";
//   layer.style.display = "none";
// });

openButton.onclick = function () {
  modal.style.display = "flex";
  layer.style.display = "flex";
};
closeButton.onclick = function () {
  modal.style.display = "none";
  layer.style.display = "none";
};

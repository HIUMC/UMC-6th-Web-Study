const openModal = document.querySelector("#open");
const closeModal = document.querySelector("#close");
const modal = document.querySelector(".modal-background");

console.log(modal.style);

openModal.onclick = () => {
  modal.style.display = "";
};

closeModal.onclick = () => {
  modal.style.display = "none";
};

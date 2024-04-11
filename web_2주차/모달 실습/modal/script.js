const openModal = document.querySelector("#open");
const closeModal = document.querySelector("#close");
const modal = document.querySelector(".modal-background");

openModal.onclick = () => {
  modal.style.display = "";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
};

closeModal.onclick = () => {
  modal.style.display = "none";
  document.body.style.backgroundColor = "";
};

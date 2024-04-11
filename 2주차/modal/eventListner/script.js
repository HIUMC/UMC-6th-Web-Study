const openModal = document.querySelector("#open");
const closeModal = document.querySelector("#close");
const modal = document.querySelector(".modal-background");

const HIDDENCLASS = "hidden";
modal.classList.add(HIDDENCLASS);

function clickModalOpen() {
  modal.classList.remove(HIDDENCLASS);
}

function clickModalClose() {
  modal.classList.add(HIDDENCLASS);
}

openModal.addEventListener("click", clickModalOpen);
closeModal.addEventListener("click", clickModalClose);

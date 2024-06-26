const end = document.getElementById("close_btn");
const open = document.getElementById("modal_btn");
const modal = document.getElementById("modal");
//id를 통해 요소를 가져온다...
open.onclick = () => {
    modal.style.display = "flex";
}
end.onclick = () => {
    console.log("버튼 닫아라");
    modal.style.display = "none";
}



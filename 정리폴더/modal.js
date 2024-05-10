const open = document.getElementById("open");
const close = document.getElementById("close");


const openbox = document.getElementById("ifOpen");

console.log(open, close, openbox); //잘 가져옴

open.onclick = () => {
  openbox.style.display = "flex";
  openbox.style.backgroundColor = "red"; //속성값은 문자열로! (여긴 JS니까)
}

close.onclick = () => {
  openbox.style.display = "none";
  openbox.style.backgroundColor = "red";
}


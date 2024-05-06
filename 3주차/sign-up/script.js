const button = document.querySelector("#signupBtn");
const name = document.querySelector("#name input");
const email = document.querySelector("#email input");
const age = document.querySelector("#age input");
const password = document.querySelector("#pw input");
const pwCheck = document.querySelector("#pw-check input");
const modal = document.querySelector("#modal-wrap");
const close = document.querySelector("#close");

function isValidName() {
  const validation = document.querySelector("#name .validation");
  if (name.value === '') {
    validation.innerText = "필수 입력 항목입니다!";
    validation.style.color = "red";
  } else {
    validation.innerText = "멋진 이름이네요!";
    validation.style.color = "green";
    return true;
  }
}

function isValidEmail() {
  const validation = document.querySelector("#email .validation");
  if (email.value === '' || !email.value.includes('@')) {
    validation.innerText = "올바른 이메일 형식이 아닙니다!";
    validation.style.color = "red";
  } else {
    validation.innerText = "올바른 이메일 형식입니다!";
    validation.style.color = "green";
    return true;
  }
}

function isValidAge() {
  const validation = document.querySelector("#age .validation");
  if (age.value === '') {
    validation.innerText = "나이를 입력해주세요!";
    validation.style.color = "red";
  } else if (isNaN(age.value)) {
    validation.innerText = "나이는 숫자 형식이어야 합니다!";
    validation.style.color = "red";
  } else {
    validation.innerText = "올바른 나이 형식입니다!";
    validation.style.color = "green";
    return true;
  }
}

function isValidPassword() {
  const validation = document.querySelector("#pw .validation");
  if (password.value === "" || password.len < 4) {
    validation.innerText = "비밀번호는 최소 4자리 이상이어야 합니다!";
    validation.style.color = "red";
  } else if (password.value > 12) {
    validation.innerText = "비밀번호는 최대 12자리까지 가능합니다!";
    validation.style.color = "red";
  } else {
    validation.innerText = "올바른 비밀번호입니다!";
    validation.style.color = "green";
    return true;
  }
}

function isValidPwCheck() {
  const validation = document.querySelector("#pw-check .validation");
  if (pwCheck.value === "" || pwCheck.value !== password.value) {
    validation.innerText = "비밀번호가 일치하지 않습니다.";
    validation.style.color = "red";
  } else {
    validation.innerText = "비밀번호가 일치합니다.";
    validation.style.color = "green";
    return true;
  }
}

button.onclick = () => {
  const userName = isValidName();
  const userEmail = isValidEmail();
  const userAge = isValidAge();
  const userPw = isValidPassword();
  const userPwCheck = isValidPwCheck();
  if (userName &&
    userEmail &&
    userAge &&
    userPw &&
    userPwCheck) {
    modal.style.display = "";
  } else {
    return;
  }
};

close.onclick = () => {
  modal.style.display = "none";
}
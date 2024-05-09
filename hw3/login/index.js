function submit() {
  checkName();
  checkEmail();
  checkAge();
  checkPassword();
  checkPasswordCheck();
}
function checkName() {
  let name = document.getElementById("name");
  let nameComment = document.getElementById("nameComment");
  if (name.value.length === 0) {
    nameComment.innerText = "필수 입력 항목입니다!";
    ColorToRed(nameComment);
  } else {
    nameComment.innerText = "좋은 이름!";
    ColorToGreen(nameComment);
  }
}

function checkEmail() {
  let email = document.getElementById("email");
  let emailComment = document.getElementById("emailComment");
  if (email.value.length === 0 || email.value.includes("@") === false) {
    emailComment.innerText = "올바른 이메일 형식이 아닙니다!";
    ColorToRed(emailComment);
  } else {
    emailComment.innerText = "올바른 이메일 형식입니다!";
    ColorToGreen(emailComment);
  }
}

function checkAge() {
  let age = document.getElementById("age");
  let ageComment = document.getElementById("ageComment");
  if (age.value.length === 0) {
    ageComment.innerText = "나이를 입력해주세요!";
    ColorToRed(ageComment);
  } else if (age.value < 20) {
    ageComment.innerText = "올바른 나이 형식이 아닙니다!";
    ColorToRed(ageComment);
  } else {
    ageComment.innerText = "올바른 나이 형식 입니다!";
    ColorToGreen(ageComment);
  }
}

function checkPassword() {
  let password = document.getElementById("password");
  let passwordComment = document.getElementById("passwordComment");
  if (password.value.length === 0) {
    passwordComment.innerText = "필수 입력 항목입니다!";
    ColorToRed(passwordComment);
  } else if (password.value.length < 4 || password.value.length > 12) {
    passwordComment.innerText = "비밀번호는 최소 4자리, 최대 12자리 입니다";
    ColorToRed(passwordComment);
  } else {
    passwordComment.innerText = "올바른 비밀번호 입니다!";
    ColorToGreen(passwordComment);
  }
}

function checkPasswordCheck() {
  let passwordCheckComment = document.getElementById("passwordCheckComment");
  if (passwordCheck.value.length === 0) {
    passwordCheckComment.innerText = "필수 입력 항목입니다!";
    ColorToRed(passwordCheckComment);
  } else if (passwordCheck.value !== password.value) {
    passwordCheckComment.innerText = "비밀번호가 일치하지 않습니다!";
    ColorToRed(passwordCheckComment);
  } else {
    passwordCheckComment.innerText = "비밀번호가 일치합니다!";
    ColorToGreen(passwordCheckComment);
  }
}

function ColorToRed(object) {
  object.style.color = "red";
}
function ColorToGreen(object) {
  object.style.color = "green";
}

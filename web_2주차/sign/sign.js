function onSubmit() {
  validateName();
  validateEmail();
  validateAge();
  validatePassword1();
  validatePassword2();
}

function validateName() {
  let name = document.getElementById("name");
  let nameComment = document.getElementById("nameComment");

  if (name.value.length === 0) {
    nameComment.innerText = "필수 입력 항목입니다!";
    changeColorToRed(nameComment);
  } else {
    nameComment.innerText = "좋은 이름!";
    changeColorToGreen(nameComment);
  }
}

function validateEmail() {
  let email = document.getElementById("email");
  let emailComment = document.getElementById("emailComment");
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  if (email.value.length === 0) {
    emailComment.innerText = "필수 입력 항목입니다!";
    changeColorToRed(emailComment);
  } else if (!email_regex.test(email.value)) {
    emailComment.innerText = "올바르지 않은 이메일 형식입니다";
    changeColorToRed(emailComment);
  } else {
    emailComment.innerText = "올바른 이메일 형식입니다!";
    changeColorToGreen(emailComment);
  }
}

function validateAge() {
  let age = document.getElementById("age");
  let ageComment = document.getElementById("ageComment");

  if (age.value.length === 0) {
    ageComment.innerText = "필수 입력 항목입니다!";
    changeColorToRed(ageComment);
  } else if (isNaN(age.value)) {
    ageComment.innerText = "올바르지 않은 나이 형식입니다";
    changeColorToRed(ageComment);
  } else {
    ageComment.innerText = "올바른 나이 형식입니다!";
    changeColorToGreen(ageComment);
  }
}

function validatePassword1() {
  let password1 = document.getElementById("password1");
  let password1Comment = document.getElementById("password1Comment");

  if (password1.value.length === 0) {
    password1Comment.innerText = "필수 입력 항목입니다!";
    changeColorToRed(password1Comment);
  } else if (password1.value.length < 4) {
    password1Comment.innerText = "비밀번호는 4자리 이상이어야 합니다";
    changeColorToRed(password1Comment);
  } else {
    password1Comment.innerText = "올바른 비밀번호입니다!";
    changeColorToGreen(password1Comment);
  }
}

function validatePassword2() {
  let password1 = document.getElementById("password1");
  let password2 = document.getElementById("password2");
  let password2Comment = document.getElementById("password2Comment");

  if (password2.value.length < 4 || password2.value !== password1.value) {
    password2Comment.innerText = "비밀번호가 일치하지 않습니다!";
    changeColorToRed(password2Comment);
  } else {
    password2Comment.innerText = "비밀번호가 일치합니다!";
    changeColorToGreen(password2Comment);
  }
}

function changeColorToRed(object) {
  object.style.color = "red";
}

function changeColorToGreen(object) {
  object.style.color = "green";
}

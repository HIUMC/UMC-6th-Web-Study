function humanInput() {
  let name = document.getElementById("name").value;
  let nameMassage = document.getElementById("nameMassage");

  let mail = document.getElementById("mail").value;
  let mailMassage = document.getElementById("mailMassage");

  let age = parseFloat(document.getElementById("age").value);
  let ageMassage = document.getElementById("ageMassage");

  let password = document.getElementById("password").value;
  let passwordMassage = document.getElementById("passwordMassage");

  let check = document.getElementById("check").value;
  let checkMassage = document.getElementById("checkMassage");

  //   이름
  if (name !== "") {
    nameMassage.textContent = "멋진 이름이네요";
    nameMassage.classList.remove("error");
    nameMassage.classList.add("success");
  } else {
    nameMassage.textContent = "필수 입력 항목입니다";
    nameMassage.classList.remove("success");
    nameMassage.classList.add("error");
  }

  //   이메일
  if (mail.includes("@")) {
    mailMassage.textContent = "올바른 이메일 형식입니다";
    mailMassage.classList.remove("error");
    mailMassage.classList.add("success");
  } else {
    mailMassage.textContent = "올바른 이메일 형식이 아닙니다";
    mailMassage.classList.remove("success");
    mailMassage.classList.add("error");
  }

  //   나이
  if (isNaN(age)) {
    ageMassage.textContent = "나이는 숫자 형식이어야 합니다";
    ageMassage.classList.remove("success");
    ageMassage.classList.add("error");
  } else if (age < 0) {
    ageMassage.textContent = "나이는 음수가 될 수 없습니다";
    ageMassage.classList.remove("success");
    ageMassage.classList.add("error");
  } else if (!Number.isInteger(age)) {
    ageMassage.textContent = "나이는 소수가 될 수 없습니다";
    ageMassage.classList.remove("success");
    ageMassage.classList.add("error");
  } else if (age < 19) {
    ageMassage.textContent = "미성년자는 가입할 수 없습니다";
    ageMassage.classList.remove("success");
    ageMassage.classList.add("error");
  } else {
    ageMassage.textContent = "올바른 나이 형식입니다";
    ageMassage.classList.remove("error");
    ageMassage.classList.add("success");
  }

  //   비밀번호
  function passwordValid(password) {
    const pattern =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(password);
  }

  if (password.length < 4) {
    passwordMassage.textContent = "비밀번호는 최소 4자리 이상이어야 합니다";
    passwordMassage.classList.remove("success");
    passwordMassage.classList.add("error");
  } else if (password.length > 12) {
    passwordMassage.textContent = "비밀번호는 최대 12자리까지 가능합니다";
    passwordMassage.classList.remove("success");
    passwordMassage.classList.add("error");
  } else if (!passwordValid(password)) {
    passwordMassage.textContent =
      "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야합니다";
    passwordMassage.classList.remove("success");
    passwordMassage.classList.add("error");
  } else {
    passwordMassage.textContent = "올바른 비밀번호 형식입니다";
    passwordMassage.classList.remove("error");
    passwordMassage.classList.add("success");
  }

  //   비밀번호 확인
  if (password !== check) {
    checkMassage.textContent = "비밀번호가 일치하지 않습니다";
    checkMassage.classList.remove("success");
    checkMassage.classList.add("error");
  } else {
    checkMassage.textContent = "비밀번호가 일치합니다";
    checkMassage.classList.remove("error");
    checkMassage.classList.add("success");
  }

  buttonClick = () => {
    if (
      nameMassage.classList.contains("success") &&
      mailMassage.classList.contains("success") &&
      ageMassage.classList.contains("success") &&
      passwordMassage.classList.contains("success") &&
      checkMassage.classList.contains("success")
    ) {
      document.querySelector(".modal").style.display = "block";
    } else {
      document.querySelector(".modal").style.display = "none";
    }
  };
}

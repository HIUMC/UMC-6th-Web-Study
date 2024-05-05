document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();

    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();

    clearErrors();

    if (
      typeof username !== "string" ||
      username === "" ||
      !isNaN(parseFloat(username))
    ) {
      showError("usernameError", "이름은 문자열이어야 합니다!");
    } else {
      showError("usernameNoError", "멋진 이름이네요!");
    }

    if (typeof email !== "string" || email === "") {
      showError("emailError", "이메일은 문자열이어야 합니다!");
    } else if (!email.includes("@")) {
      showError("emailError", "올바른 이메일 형식을 입력해주세요!");
    } else {
      showError("emailNoError", "올바른 이메일 형식입니다!");
    }

    if (isNaN(age) || age === "") {
      showError("ageError", "나이는 숫자를 입력해야 합니다!");
    } else if (age < 0) {
      showError("ageError", "나이는 음수가 될 수 없습니다!");
    } else if (age % 1 !== 0) {
      showError("ageError", "나이는 소수가 될 수 없습니다!");
    } else if (age < 19) {
      showError(
        "ageError",
        "우리 영화 사이트는 19살 이상만 가입이 가능합니다!"
      );
    } else {
      showError("ageNoError", "올바른 나이 형식입니다!");
    }

    if (password === "") {
      showError("passwordError", "비밀번호는 필수 입력 항목입니다!");
    } else if (password.length < 4) {
      showError("passwordError", "비밀번호는 최소 4자리 이상이어야 합니다!");
    } else if (password.length > 12) {
      showError("passwordError", "비밀번호는 최대 12자리까지 가능합니다!");
    } else if (
      !/\d/.test(password) ||
      !/[a-zA-Z]/.test(password) ||
      !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)
    ) {
      showError(
        "passwordError",
        "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다!"
      );
    } else {
      showError("passwordNoError", "올바른 비밀번호입니다!");
    }

    if (confirmPassword === "") {
      showError(
        "confirmPasswordError",
        "비밀번호 확인은 필수 입력 항목입니다!"
      );
    } else if (confirmPassword !== password) {
      showError("confirmPasswordError", "비밀번호가 일치하지 않습니다!");
    } else {
      showError("confirmPasswordNoError", "비밀번호가 일치합니다!");
    }

    if (username && email && age && password && confirmPassword) {
      form.submit();
    }
  });

  function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
  }

  function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function (element) {
      element.textContent = "";
    });
  }
});

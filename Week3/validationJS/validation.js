let elInputName = document.querySelector("#name");
let elNameSuccess = document.querySelector(".name-success");
let elNameFail = document.querySelector(".name-fail");

let elInputEmail = document.querySelector("#email");
let elEmailSuccess = document.querySelector(".email-success");
let elEmailFail = document.querySelector(".email-fail");

let elInputAge = document.querySelector("#age");
let elAgeSuccess = document.querySelector(".age-success");
let elAgeFail = document.querySelector(".age-fail");
let elAgeFailNumber = document.querySelector(".age-fail-number");
let elAgeFailNegative = document.querySelector(".age-fail-negative");
let elAgeFailDecimal = document.querySelector(".age-fail-decimal");
let elAgeFailMinor = document.querySelector(".age-fail-minor");

let elInputPassword = document.querySelector("#password");
let elPasswordSuccess = document.querySelector(".password-success");
let elPasswordFail = document.querySelector(".password-fail");
let elPasswordFailMin4 = document.querySelector(".password-fail-min4");
let elPasswordFailMax12 = document.querySelector(".password-fail-max12");

let elInputCheckPW = document.querySelector("#checkPW");
let elCheckPWSuccess = document.querySelector(".checkPW-success");
let elCheckPWFail = document.querySelector(".checkPW-fail");

let elButton = document.querySelector("#button");

function nameCheck(name) {
  return /^[ㄱ-ㅎ가-힣a-zA-Z]+$/.test(name);
}

elInputName.onkeyup = function () {
  // 값을 입력한 경우
  if (elInputName.value.length !== 0) {
    // 문자열 외의 값을 입력했을 경우
    if (nameCheck(elInputName.value) === false) {
      elNameSuccess.classList.add("hide");
      elNameFail.classList.remove("hide");
    } else {
      elNameSuccess.classList.remove("hide");
      elNameFail.classList.add("hide");
    }
  } else {
    elNameSuccess.classList.add("hide");
    elNameFail.classList.add("hide");
  }
};

function emailCheck(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(email);
}

elInputEmail.onkeyup = function () {
  // 값을 입력한 경우
  if (elInputEmail.value.length !== 0) {
    // 문자열 외의 값을 입력했을 경우
    if (emailCheck(elInputEmail.value) === false) {
      elEmailSuccess.classList.add("hide");
      elEmailFail.classList.remove("hide");
    } else {
      elEmailSuccess.classList.remove("hide");
      elEmailFail.classList.add("hide");
    }
  } else {
    elEmailSuccess.classList.add("hide");
    elEmailFail.classList.add("hide");
  }
};

elInputAge.onkeyup = function () {
  // 값을 입력한 경우
  if (elInputAge.value.length !== 0) {
    // 문자열 외의 값을 입력했을 경우
    if (isNaN(elInputAge.value)) {
      elAgeSuccess.classList.add("hide");
      elAgeFail.classList.add("hide");
      elAgeFailNumber.classList.remove("hide");
      elAgeFailNegative.classList.add("hide");
      elAgeFailDecimal.classList.add("hide");
      elAgeFailMinor.classList.add("hide");
    } else if (elInputAge.value < 0) {
      elAgeSuccess.classList.add("hide");
      elAgeFail.classList.add("hide");
      elAgeFailNumber.classList.add("hide");
      elAgeFailNegative.classList.remove("hide");
      elAgeFailDecimal.classList.add("hide");
      elAgeFailMinor.classList.add("hide");
    } else if (parseFloat(elInputAge.value) % 1 !== 0) {
      elAgeSuccess.classList.add("hide");
      elAgeFail.classList.add("hide");
      elAgeFailNumber.classList.add("hide");
      elAgeFailNegative.classList.add("hide");
      elAgeFailDecimal.classList.remove("hide");
      elAgeFailMinor.classList.add("hide");
    } else if (elInputAge.value < 19) {
      elAgeSuccess.classList.add("hide");
      elAgeFail.classList.add("hide");
      elAgeFailNumber.classList.add("hide");
      elAgeFailNegative.classList.add("hide");
      elAgeFailDecimal.classList.add("hide");
      elAgeFailMinor.classList.remove("hide");
    } else {
      elAgeSuccess.classList.remove("hide");
      elAgeFail.classList.add("hide");
      elAgeFailNumber.classList.add("hide");
      elAgeFailNegative.classList.add("hide");
      elAgeFailDecimal.classList.add("hide");
      elAgeFailMinor.classList.add("hide");
    }
  } else {
    elAgeSuccess.classList.add("hide");
    elAgeFail.classList.remove("hide");
    elAgeFailNumber.classList.add("hide");
    elAgeFailNegative.classList.add("hide");
    elAgeFailDecimal.classList.add("hide");
    elAgeFailMinor.classList.add("hide");
  }
};

function passwordCheck(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/.test(
    password
  );
}

elInputPassword.onkeyup = function () {
  // 값을 입력한 경우
  if (elInputPassword.value.length !== 0) {
    // 문자열 외의 값을 입력했을 경우
    if (elInputPassword.value.length < 4) {
      elPasswordSuccess.classList.add("hide");
      elPasswordFail.classList.add("hide");
      elPasswordFailMin4.classList.remove("hide");
      elPasswordFailMax12.classList.add("hide");
    } else if (elInputPassword.value.length > 12) {
      elPasswordSuccess.classList.add("hide");
      elPasswordFail.classList.add("hide");
      elPasswordFailMin4.classList.add("hide");
      elPasswordFailMax12.classList.remove("hide");
    } else if (passwordCheck(elInputPassword.value) === false) {
      elPasswordSuccess.classList.add("hide");
      elPasswordFail.classList.remove("hide");
      elPasswordFailMin4.classList.add("hide");
      elPasswordFailMax12.classList.add("hide");
    } else {
      elPasswordSuccess.classList.remove("hide");
      elPasswordFail.classList.add("hide");
      elPasswordFailMin4.classList.add("hide");
      elPasswordFailMax12.classList.add("hide");
    }
  } else {
    elPasswordSuccess.classList.add("hide");
    elPasswordFail.classList.add("hide");
    elPasswordFailMin4.classList.add("hide");
    elPasswordFailMax12.classList.add("hide");
  }
};

function isMatch(password1, password2) {
  return password1 === password2;
}

elInputCheckPW.onkeyup = function () {
  if (elInputCheckPW.value.length !== 0) {
    if (isMatch(elInputPassword.value, elInputCheckPW.value)) {
      elCheckPWSuccess.classList.remove("hide");
      elCheckPWFail.classList.add("hide");
    } else {
      elCheckPWSuccess.classList.add("hide");
      elCheckPWFail.classList.remove("hide");
    }
  } else {
    elCheckPWSuccess.classList.add("hide");
    elCheckPWFail.classList.add("hide");
  }
};

import "./App.css";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    passwordCheck: "",
  });

  const [validText, setValidText] = useState({
    nameText: "필수 입력 항목입니다!",
    emailText: "올바른 이메일 형식이 아닙니다!",
    ageText: "나이를 입력해주세요!",
    passwordText: "비밀번호는 최소 4자리 이상이어야합니다.",
    passwordCheckText: "비밀번호가 일치하지 않습니다.",
  });

  const [valid, setValid] = useState({
    name: false,
    email: false,
    age: false,
    password: false,
    passwordCheck: false,
  });

  const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;

  const onChangeName = (e) => {
    if (e.target.value.length > 0) {
      setValidText({ ...validText, nameText: "멋진 이름이네요!" });
      setValid({ ...valid, name: true });
    }
    if (e.target.value.length == 0) {
      setValidText({ ...validText, nameText: "필수 입력 항목입니다!" });
      setValid({ ...valid, name: false });
    }
    setForm({ ...form, name: e.target.value });
  };

  const onChangeEmail = (e) => {
    if (EmailRegex.test(e.target.value)) {
      setValidText({ ...validText, emailText: "올바른 이메일 형식입니다!" });
      setValid({ ...valid, email: true });
    } else {
      setValidText({
        ...validText,
        emailText: "올바른 이메일 형식이 아닙니다!",
      });
      setValid({ ...valid, email: false });
    }
    setForm({ ...form, email: e.target.value });
  };

  const onChangeAge = (e) => {
    const age = parseInt(e.target.value);
    if (isNaN(age)) {
      setValidText({ ...validText, ageText: "나이는 숫자 형식이어야합니다!" });
      setValid({ ...valid, age: false });
    } else if (age < 19) {
      setValidText({ ...validText, ageText: "미성년자는 가입할 수 없습니다!" });
      setValid({ ...valid, age: false });
    } else if (age < 0) {
      setValidText({ ...validText, ageText: "나이는 음수가 될 수 없습니다!" });
      setValid({ ...valid, age: false });
    } else if (!Number.isInteger(age)) {
      setValidText({ ...validText, ageText: "나이는 소수가 될 수 없습니다!" });
      setValid({ ...valid, age: false });
    } else {
      setValidText({ ...validText, ageText: "올바른 나이 형식입니다!" });
      setValid({ ...valid, age: true });
    }
    setForm({ ...form, age: e.target.value });
  };

  const onChangePassword = (e) => {
    const password = e.target.value;

    if (password.length < 4) {
      setValidText({
        ...validText,
        passwordText: "비밀번호는 최소 4자리 이상이어야합니다.",
      });
      setValid({ ...valid, password: false });
    } else if (password.length > 12) {
      setValidText({
        ...validText,
        passwordText: "비밀번호는 최대 12자리까지 가능합니다.",
      });
      setValid({ ...valid, password: false });
    } else if (!passwordRegex.test(password)) {
      setValidText({
        ...validText,
        passwordText: "비밀번호는 영어, 숫자, 특수문자 조합이어야합니다.",
      });
      setValid({ ...valid, password: false });
    } else {
      setValidText({
        ...validText,
        passwordText: "올바른 비밀번호입니다!",
      });
      setValid({ ...valid, password: true });
    }
    setForm({ ...form, password: password });
  };

  const onChangePasswordCheck = (e) => {
    if (e.target.value === form.password) {
      setValidText({
        ...validText,
        passwordCheckText: "비밀번호가 일치합니다!",
      });
      setValid({ ...valid, passwordCheck: true });
    } else {
      setValidText({
        ...validText,
        passwordCheckText: "비밀번호가 일치하지 않습니다!",
      });
      setValid({ ...valid, passwordCheck: false });
    }
    setForm({ ...form, passwordCheck: e.target.value });
  };

  const onClickButton = () => {
    if (
      valid.name &&
      valid.email &&
      valid.age &&
      valid.password &&
      valid.passwordCheck
    ) {
      alert("회원가입이 완료되었습니다!");
    } else {
      alert("입력값을 확인해주세요!");
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div id="title">
          <h4>회원가입</h4>
        </div>
        <div className="section">
          <span id="tag">이름</span>
          <input type="text" value={form.name} onChange={onChangeName} />
          <div className={`Valid Valid_${valid.name}`}>
            {validText.nameText}
          </div>
        </div>
        <div className="section">
          <span id="tag">이메일</span>
          <input type="text" value={form.email} onChange={onChangeEmail} />
          <div className={`Valid Valid_${valid.email}`}>
            {validText.emailText}
          </div>
        </div>
        <div className="section">
          <span id="tag">나이</span>
          <input type="text" value={form.age} onChange={onChangeAge} />
          <div className={`Valid Valid_${valid.age}`}>{validText.ageText}</div>
        </div>
        <div className="section">
          <span id="tag">비밀번호</span>
          <input
            type="password"
            value={form.password}
            onChange={onChangePassword}
          />
          <div className={`Valid Valid_${valid.password}`}>
            {validText.passwordText}
          </div>
        </div>
        <div className="section">
          <span id="tag">비밀번호 확인</span>
          <input
            type="password"
            value={form.passwordCheck}
            onChange={onChangePasswordCheck}
          />
          <div className={`Valid Valid_${valid.passwordCheck}`}>
            {validText.passwordCheckText}
          </div>
        </div>

        <div>
          <button onClick={onClickButton}>가입하기</button>
        </div>
      </div>
    </div>
  );
}

export default App;

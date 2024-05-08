import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessage1, setErrorMessage1] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const [errorMessage3, setErrorMessage3] = useState('');
  const [errorMessage4, setErrorMessage4] = useState('');
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 양식 제출 동작을 방지합니다.
    console.log('Submitted:', { name, email, age, password, passwordCheck });
    // 추가 제출 로직을 여기에 구현할 수 있습니다.
  };

  const onSubmit = () => {
    if( /[0-9]/.test(name) || /[^a-zA-Z0-9]/.test(name)){
      setErrorMessage("이름에는 문자만 포함되어야 합니다.");
    }
    else{
      setErrorMessage("");
    }
    if (!email.includes('@')) {
      setErrorMessage1("이메일 양식에 맞지 않습니다");
      inputRef.current.focus(); // 이메일 입력란에 포커스
    } else {
      setErrorMessage1(""); // 에러 메시지 초기화
    }

    if (isNaN(age) || age === "") {
      setErrorMessage2("나이는 숫자만 입력해주세요.");
      inputRef.current.focus(); // 입력란에 포커스
    } else if (parseInt(age) < 19) {
      setErrorMessage2("19세 이상만 가입 가능합니다.");
      inputRef.current.focus(); // 입력란에 포커스
    } else {
      setErrorMessage2(""); // 에러 메시지 초기화
    }

    if (password.length < 4) {
      setErrorMessage3("비밀번호는 4글자 이상이어야 합니다.");
    } else if (password.length > 12) {
      setErrorMessage3("비밀번호는 12글자 미만이어야 합니다.");
    } else if (!/[0-9]/.test(password) || !/[a-zA-Z]/.test(password) || !/[^a-zA-Z0-9]/.test(password)) {
      setErrorMessage3("비밀번호는 숫자, 영문자, 특수문자를 모두 포함해야 합니다.");
    } else {
      setErrorMessage3(""); // 에러 메시지 초기화
    }
    if (password!=passwordCheck) {
      setErrorMessage4("비밀번호가 일치하지 않습니다");
    } 
     else {
      setErrorMessage4(""); // 에러 메시지 초기화
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        이름<input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        이메일<input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        {errorMessage1 && <div style={{ color: 'red' }}>{errorMessage1}</div>}
        나이<input type="text" value={age} onChange={e => setAge(e.target.value)} />
        {errorMessage2 && <div style={{ color: 'red' }}>{errorMessage2}</div>}
        비밀번호<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        {errorMessage3 && <div style={{ color: 'red' }}>{errorMessage3}</div>}
        비밀번호 확인<input type="password" value={passwordCheck} onChange={e => setPasswordCheck(e.target.value)} />
        {errorMessage4 && <div style={{ color: 'red' }}>{errorMessage4}</div>}
        <button onClick={onSubmit} type="submit">가입하기</button>
      </form>
    
    </div>
  );
};

export default App;
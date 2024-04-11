import React, { useState } from 'react';
import './App.css'; // 스타일시트를 위한 CSS 파일입니다.

const App = () => {
  // 상태를 사용하여 양식의 입력값을 관리합니다.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [pasword, setPasword] = useState('');
  const [paswordchk, setPaswordchk] = useState('');

  // 양식을 제출할 때 호출되는 함수입니다.
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 양식 제출 동작을 방지합니다.
    console.log('Submitted:', { name, email, message,message});
    // 제출 로직을 여기에 추가합니다.
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        이름<input type="text" value={name} onChange={e => setName(e.target.value)} />
        이메일<input type="email"  value={email} onChange={e => setEmail(e.target.value)} />
        나이<textarea  value={age} onChange={e => setAge(e.target.value)} />
        비밀번호<textarea  value={pasword} onChange={e => setPasword(e.target.value)} />
        비밀번호 확인<textarea  value={paswordchk} onChange={e => setPaswordchk(e.target.value)} />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

export default App;
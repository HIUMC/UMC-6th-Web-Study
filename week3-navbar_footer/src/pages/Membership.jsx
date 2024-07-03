import "./Membership.css";

const Membership = () => {
  return (
    <div className="Membership">
      <h1>회원가입 페이지</h1>
      <div className="membership-input">
        <input type="text" placeholder="이름을 입력해주세요" />
        <input type="text" placeholder="아이디를 입력해주세요" />
        <input type="email" placeholder="이메일을 입력해주세요" />
        <input type="age" placeholder="나이를 입력해주세요" />
        <input type="password" placeholder="비밀번호를 입력해주세요" />
        <input type="password" placeholder="비밀번호 확인" />
        <button>제출하기</button>
      </div>
      <p>이미 아이디가 있으신가요?</p>
      <p>로그인 페이지로 이동하기</p>
    </div>
  );
};

export default Membership;

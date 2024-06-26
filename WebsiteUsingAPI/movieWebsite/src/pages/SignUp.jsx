import Header from "../components/Header";
import styled from "styled-components";
import Button from "../components/Button";

const SignUp = () => {
  return (
    <div className="SignUp">
      <Header />
      <StyledSignUpPage>
        <div className="box">
          <h2>회원가입</h2>
          <fieldset className="form_section">
            <section id="name">
              <label>이름</label>
              <input type="text" />
            </section>
            <section id="email">
              <label>이메일</label>
              <input type="text" />
            </section>
            <section id="age">
              <label>나이</label>
              <input type="text" />
            </section>
            <section id="pw">
              <label>비밀번호</label>
              <input type="text" />
            </section>
            <section id="pwCheck">
              <label>비밀번호 확인</label>
              <input type="text" />
            </section>
          </fieldset>
          <StyledButton type="button">
            <b>가입하기</b>
          </StyledButton>
        </div>

        <div className="signIn">
          이미 아이디가 있으신가요? <a href="/sdf">로그인</a>
        </div>
      </StyledSignUpPage>
    </div>
  );
};

const StyledSignUpPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;

  & > input,
  label {
    display: flex;
    align-items: center;
    margin: 5px;
  }

  & > div > fieldset > section > input {
    border: 2px solid white;
    border-radius: 20px;
    outline: none;
    width: 100%;
  }

  & .box {
    display: block;
    background-color: darkslategray;
    algin-items: center;
    text-align: center;
    padding: 3% 10%;
    border-radius: 5px;
    margin-top: 40px;
  }
  & .form_section {
    border: none;
  }

  & .signIn {
    margin-top: 20px;
  }
  & .signIn > a {
    color: green;
  }
`;

const StyledButton = styled.button`
  border-radius: 5px;
  border: none;
  background-color: darkgrey;
  padding: 5px;
  margin-top: 20px;
  cursor: pointer;
`;
export default SignUp;

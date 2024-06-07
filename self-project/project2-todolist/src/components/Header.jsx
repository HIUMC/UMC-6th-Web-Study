import styled from "styled-components";

const Date_h1 = styled.h1`
  color: #6262b2;
`;

const Header = () => {
  return (
    <div>
      <h3>오늘은 📆</h3>
      <Date_h1>{new Date().toDateString()}</Date_h1>
    </div>
  );
};

export default Header;

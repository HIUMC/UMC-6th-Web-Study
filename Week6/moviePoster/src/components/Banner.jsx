import styled from "styled-components";

export const Banner_wrapper = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 600;
  background-color: black;

  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Banner() {
  return <Banner_wrapper>환영합니다</Banner_wrapper>;
}

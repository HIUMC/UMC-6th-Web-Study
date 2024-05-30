import styled from "styled-components";

const Footer_wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 20px 10px;
`;

export const Dev = styled.div`
  color: white;
  font-size: 20px;
`;

export default function Footer() {
  return (
    <Footer_wrapper>
      <Dev>letthem</Dev>
    </Footer_wrapper>
  );
}

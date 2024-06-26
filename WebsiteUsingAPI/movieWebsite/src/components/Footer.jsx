import styled from "styled-components";

const Footer = () => {
  return <div className="Footer">Footer</div>;
};

const StyledFooter = styled.div`
  &.Footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default Footer;

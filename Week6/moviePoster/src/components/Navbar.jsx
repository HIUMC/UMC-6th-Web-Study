import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar_wrapper = styled.div`
  padding: 10px 20px 0px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h3`
  margin: 0;
  font-size: 20px;
`;
export const Ul = styled.ul`
  list-style: none;
  display: flex;
`;
export const Li = styled.li`
  margin: 0px 10px;
  font-size: 18px;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    font-size: 19px;
    font-weight: 600;
    cursor: pointer;
  }
`;
export const TitleLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    font-size: 21px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default function Navbar() {
  return (
    <Navbar_wrapper>
      <Title>
        <TitleLink to="/">UMC MOVIE</TitleLink>
      </Title>
      <Ul>
        <Li>
          <NavLink to="/">회원가입</NavLink>
        </Li>
        <Li>
          <NavLink to="/popular">Popular</NavLink>
        </Li>
        <Li>
          <NavLink to="/now">Now Playing</NavLink>
        </Li>
        <Li>
          <NavLink to="/top">Top Rated</NavLink>
        </Li>
        <Li>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </Li>
      </Ul>
    </Navbar_wrapper>
  );
}

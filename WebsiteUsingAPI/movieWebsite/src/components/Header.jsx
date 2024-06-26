import styled from "styled-components";
//import "./Header.css";
import Button from "./Button";
import { useNavigate, useMatch, useLocation } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const curPath = useLocation().pathname;
  return (
    <StyledHeader className="Header">
      <section className="title">
        <h4>UMC MOVIE</h4>
      </section>
      <section className="buttons">
        <Button
          text={"회원가입"}
          onClick={() => {
            nav("/signUp");
          }}
        />
        <Button
          className={`${curPath === "/popular" ? "active" : ""}`}
          text={"Popular"}
          onClick={() => {
            nav("/popular");
          }}
        />
        <Button
          className={`${curPath === "/nowPlaying" ? "active" : ""}`}
          text={"Now Playing"}
          onClick={() => {
            nav("/nowPlaying");
          }}
        />
        <Button
          className={`${curPath === "/topRated" ? "active" : ""}`}
          text={"Top Rated"}
          onClick={() => {
            nav("/topRated");
          }}
        />
        <Button
          className={`${curPath === "/upComing" ? "active" : ""}`}
          text={"UpComing"}
          onClick={() => {
            nav("/upComing");
          }}
        />
      </section>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(30, 40, 70);
  color: white;

  & > section {
    margin: 0px 30px;
  }

  & .buttons {
    display: flex;
    text-align: center;
  }
`;

export default Header;

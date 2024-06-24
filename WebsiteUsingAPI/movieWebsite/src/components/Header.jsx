import "./Header.css";
import Button from "./Button";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  return (
    <div className="Header">
      <section className="title">
        <h4>UMC MOVIE</h4>
      </section>
      <section className="buttons">
        <Button
          text={"회원가입"}
          onClick={() => {
            nav("/");
          }}
        />
        <Button
          text={"Popular"}
          onClick={() => {
            nav("/popular");
          }}
        />
        <Button
          text={"Now Playing"}
          onClick={() => {
            nav("/nowPlaying");
          }}
        />
        <Button
          text={"Top Rated"}
          onClick={() => {
            nav("/topRated");
          }}
        />
        <Button
          text={"UpComing"}
          onClick={() => {
            nav("/upComing");
          }}
        />
      </section>
    </div>
  );
};

export default Header;

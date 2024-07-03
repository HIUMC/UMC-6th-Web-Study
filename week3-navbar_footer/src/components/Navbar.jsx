import "./Navbar.css";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const activeStyle = {
    color: "gold",
  };
  const nav = useNavigate();
  const [nowLogin, setNowLogin] = useState("로그인");

  const onClickLogin = () => {
    if (nowLogin === "로그인") {
      setNowLogin("로그아웃");
    } else {
      setNowLogin("로그인");
    }
  };

  return (
    <div className="Navbar">
      <button onClick={() => nav("/")}>UMC MOVIE</button>
      <div className="right">
        <button
          className="login"
          onClick={() => {
            onClickLogin();
          }}
        >
          {nowLogin}
        </button>
        <NavLink
          className={"navlink"}
          to="/popularpage"
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          Popular
        </NavLink>
        <NavLink
          className={"navlink"}
          to="/nowplayingpage"
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          Now Playing
        </NavLink>
        <NavLink
          className={"navlink"}
          to="/topratedpage"
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          Top Rated
        </NavLink>
        <NavLink
          className={"navlink"}
          to="/upcomingpage"
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          Upcoming
        </NavLink>
      </div>
      <div className="Navbar-side">
        <button
          onClick={() => {
            nav("/sidebar");
          }}
        >
          🔍
        </button>
      </div>
    </div>
  );
};
export default Navbar;

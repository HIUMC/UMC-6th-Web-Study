import "./SideBar.css";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const nav = useNavigate();

  return (
    <div className="SideBar">
      <button onClick={() => nav("/membership")}>회원가입</button>
      <button onClick={() => nav("/popularpage")}>Popular</button>
      <button onClick={() => nav("/nowplayingpage")}>Now Playing</button>
      <button onClick={() => nav("/topratedpage")}>Top Rated</button>
      <button onClick={() => nav("/upcomingpage")}>Upcoming</button>
    </div>
  );
};

export default SideBar;

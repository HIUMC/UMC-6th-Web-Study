import { useNavigate } from "react-router-dom";
import "./Notfound.css";

const Notfound = () => {
  const nav = useNavigate();

  return (
    <div className="Notfound">
      <div className="Notfound-content">
        <h1>Oops!</h1>
        <h2>예상치 못한 에러가 발생했습니다...</h2>
        <h3>NOT FOUND</h3>
        <button
          onClick={() => {
            nav("/");
          }}
        >
          메인으로 이동하기
        </button>
      </div>
    </div>
  );
};

export default Notfound;

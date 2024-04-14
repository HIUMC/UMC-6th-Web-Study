import "./Modul.css";

import { useState } from "react";

function setClick() {}

const Modul = () => {
  const [click, setClick] = useState(false);
  return (
    <div>
      <div className="box">
        {click === true ? (
          <h1 style={{ display: "none" }}>OFF</h1>
        ) : (
          <div style={{ display: "flex" }}>
            <h1>안녕하세요</h1>
            <p>어쩌구쩌저구</p>
            <button
              onClick={() => {
                setClick(!click);
                console.log(click);
              }}
            >
              끄기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modul;

import "./App.css";
import "./components/Modul";
import Modul from "./components/Modul";
import { useState } from "react";

function App() {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="main">
        <h1>{"안녕하세요!"}</h1>
        <p>{"내용내용내용"}</p>
        <button
          onClick={() => {
            setClick(false);
            console.log(click);
          }}
        >
          켜기
        </button>
        <div className="box">
          {click === true ? (
            <h1 style={{ display: "none" }}>OFF</h1>
          ) : (
            <div style={{ display: "flex" }}>
              <h1>안녕하세요</h1>
              <p>어쩌구쩌저구</p>
              <button
                onClick={() => {
                  setClick(true);
                  console.log(click);
                }}
              >
                끄기
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

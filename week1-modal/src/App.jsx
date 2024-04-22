import "./App.css";
import Header from "./components/Header";
import Popup from "./components/Popup";
import { useState } from "react";

function App() {
  const [onoff, setOnoff] = useState(false);

  const onClickButton = () => {
    setOnoff(!onoff);
    console.log(onoff);
  };

  return (
    <div className={onoff ? "App-true" : "App-false"}>
      <section className="Header">
        <Header onoff={onoff} />
        <button
          onClick={() => {
            setOnoff(true);
          }}
        >
          버튼 열기
        </button>
      </section>
      <section className="Popup">
        <Popup onClickButton={onClickButton} onoff={onoff} />
      </section>
    </div>
  );
}

export default App;

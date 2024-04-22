import "../App.css";

const Popup = ({ onClickButton, onoff }) => {
  return (
    <div className={onoff ? "popup-true" : "popup-false"}>
      {console.log(onoff)}
      <h3>안녕하세요</h3>
      <p>모달 내용은 어쩌고 저쩌고..</p>
      <button className="closebutton" onClick={onClickButton}>
        닫기
      </button>
    </div>
  );
};

export default Popup;

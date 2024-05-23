import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="MainPage">
      <h3 className="title">환영합니다</h3>
      <div className="search_bar">
        <h3>🎬 Find your movies!</h3>

        <input type="text" />
        <button>❓</button>
      </div>
    </div>
  );
};

export default MainPage;

import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

import { useState, useRef, createContext, useEffect } from "react";
const mockData = [
  {
    id: 1,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

export const FunctionContext = createContext();
export const DataContext = createContext();

function App() {
  const [data, setData] = useState(mockData);
  const idRef = useRef(4);

  //데이터 불러오기
  useEffect(() => {
    const oldData = localStorage.getItem("todolist");
    if (!oldData) {
      return;
    }
    const parsedData = JSON.parse(oldData);

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });
    idRef.current = maxId + 1;

    setData(parsedData);
    console.log(parsedData);
    console.log(data);
  }, []);

  //데이터 저장
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(data));
  }, [data]);

  //추가
  const onCreate = (content) => {
    const newData = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setData([newData, ...data]);
  };

  //삭제
  const onDelete = (id) => {
    setData(data.filter((todo) => todo.id != id));
  };

  //isDone 수정
  const onUpdate = (id) => {
    setData(
      data.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <FunctionContext.Provider value={{ onCreate, onDelete, onUpdate }}>
      <DataContext.Provider value={data}>
        <div className="App">
          <Header />
          <Editor />
          <List />
        </div>
      </DataContext.Provider>
    </FunctionContext.Provider>
  );
}

export default App;

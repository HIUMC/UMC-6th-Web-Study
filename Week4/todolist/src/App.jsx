import "./App.css";
import { Header } from "./components/Header";
import { Editor } from "./components/Editor";
import { List } from "./components/List";
import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;

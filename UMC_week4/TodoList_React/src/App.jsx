import { useState, useRef } from "react";

function App() {
  const [todo, setTodo] = useState(mockTodo);

  const idRef = useRef(3);

  const onDelete = (targetId) => { 
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  const onUpdate = (targetId) => { 
    setTodo(
      todo.map((it) => { 
        if (it.id === targetId) {
          return {
            ...it,
            isDone: !it.isDone,
          };
        } else {
          return it;
        }
      })
    );
  };

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current, 
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1; 
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}
export default App;
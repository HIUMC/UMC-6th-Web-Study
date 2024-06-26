import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import './App.css'
import { useState, useRef} from 'react';//useState 훅 불러오기

const lieData = [
  {
    id : 0, //각각 todoitem 구분
    isDone: false, // 체크박스를 위한 프로퍼티
    content : "React 공부하기", // todo content를 위한 프로퍼티
    date : new Date().getTime(), // todo item이 언제 생성되었는지.
    // new Date로 새로운 객체를 생성해서 getTime 메서드로 현재 시간에 해당하는 타임 스탬프 넣어줌

  },//각각의 todoitem을 객체 형태로 넣어주기

  {
    id : 1,
    isDone: false, 
    content : "청소하기",
    date : new Date().getTime(),
  },

  {
    id : 2,
    isDone: false, 
    content : "노래 연습하기",
    date : new Date().getTime(),
  },
]

function App() {
  const [todos, setTodos]=useState(lieData);//새로운 스테이트를 만들어줌, 여러 개의 todo 데이터를 보관할 것.
  //todos라는 state에 하나하나의 todoitem ((ex)React 공부하기!)들이 어떤 형태로 보관될 것인지... 미리 정하기 위해서
  // 나중에 추가나 삭제 및 수정 같은 기능을 구현할 때 사용할 수 있는 데이터를 미리 만들어놓기

  const idRef = useRef(3);
  // 레퍼런스 객체
  // 초기 값으로는 lieData의 id 값들과 겹치지 않기 위해 3으로 설정

  const onCreate = (content) => {
    // content라는 매개변수로 editor 컴포넌트에 입력된 새로운 투두를 가지고 와서 새롭게 리스트에 추가 시키기
    // 받아온 새로운 todo는 위의 lieDate처럼 객체 형태로 만들어줘야 함.
    const newTodo = {
      id: idRef.current ++,
      isDone: false,
      content: content,
      date : new Date().getTime,
    }
    // 이렇게 만들어진 새로운 객체는 todos state에 저장해 줘야 한다.
    // todos와 같은 state의 값은 반드시 setTodo와 같은 상태 변화 함수를 호출을 통해 수정할 수 있기에 todos.push(newTodo); 이런 건 안 됨
    setTodos([newTodo,...todos]);
    // spread 연산자를 사용해 배열에 todos 배열의 값들을 펼쳐주면 이 배열은 기존의 lieData를 저장하고 있던 todos state (배열)와 동일해짐. 앞에 콤마로 추가할 데이터 구분
  }

  const onUpdate = (targetId) => {// 매개변수로 현재 업데이트 하고자 하는 TodoItem의 요소를 받아와서 todos state 값(객체)들 중에서 targetId와 일치하는 ID를 갖는 TodoItem의 isDone 프로퍼티를 변경하는 기능 구현
    setTodos(todos.map((todo)=>{
        // 모든 todoItem들을 순회하면서 Todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열을 인수로 전달한다.

        if(todo.id === targetId)// 현재 순회 중인 Todo의 Id === 수정 대상의 targetId라면?
        {
        return{
          ...todo, // 기존의 tooitem 값을 다 펼쳐준다.
          isDone: !todo.isDone // 기존 todo의 isDone에서 토글!!
        }
        }
        return todo
      
    }))
  }
  const onDelete = (targetId) => {// 매개변수 targetId에 삭제할 TodoItem의 id를 받아와서 해당 투두를 todos state에서 삭제해준다.
    setTodos(todos.filter( (todo)=> todo.id !== targetId ));
    // 인수로는 todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 todos 배열을 전달. 
    // 삭제해야 하는 요소의 id를 가지지 않은 객체들만 모아서 필터링. 새로 렌더링.

  };
  
  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App

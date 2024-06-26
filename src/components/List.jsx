import "./List.css"
import TodoItem from "./TodoItem";
import { useState } from "react";//리액트 훅 불러오기

const List = ({todos , onUpdate, onDelete}) => {
    // 구조 분해 할당으로 App에서 props로 넘겨준 todos state를 받아오기

    const [search, setSearch] = useState("");
    // 새로운 state 생성

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if(search===""){
            return todos;// 검색어가 없으니 기존 화면에서 바뀔 게 없어
        }
        // filter 메서드를 호출해 필터링 된, todos 배열을 렌더링!!
            return todos.filer((todo)=>todo.content.toLowerCase().includes(search.toLowerCase()));
    } 
    const filteredTodos = getFilteredData(); // 이 함수는 List 컴포넌트가 리렌더링 될 때마다 실행...?
    return (
    <div className="List">
        <h4>Todo List ✅</h4>
        <input value = {search} onChange={onChangeSearch} placeholder="검색어를 입력하세요"/>
        <div className="todowrap">
        {filteredTodos.map((todo)=>{
            return <TodoItem 
            key={todo.id}
            {...todo} 
            onUpdate={onUpdate}
            onDelete={onDelete}/>;
            // todo 매개변수 즉, 객체의 모든 요소가 props로 전달 됨!!
        })} 
        </div>
    </div>
    )
}

export default List;
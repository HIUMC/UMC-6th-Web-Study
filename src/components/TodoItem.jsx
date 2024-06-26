import "./TodoItem.css";

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
    const onChangeCheckbox = () => {//이벤트 핸들러
        //체크박스가 클릭이 되면 이 함수가 실행될 것.
        onUpdate(id);
    };
    const onClickDelete = () =>{
        onDelete(id);
    }

    return <div className="TodoItem">
        <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox"/>
        <div className="contents">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickDelete}>삭제</button>
    </div>
}

export default TodoItem;
//내보내서 이걸 바꿔가며 렌더링 시킬 곳은... List 컴포넌트
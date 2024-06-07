import styled from "styled-components";
import { useContext } from "react";
import { FunctionContext } from "../App";

const TodoItem_div = styled.div`
  display: flex;
  gap: 10px;
  border: none;
  border-bottom: 1px solid rgb(236, 236, 236);
  align-items: center;
  padding-bottom: 10px;
`;

const Main_p = styled.p`
  flex: 1;
`;

const Date_p = styled.p`
  color: gray;
  font-size: 14px;
`;

const Delete_button = styled.button`
  font-size: 14px;
  color: gray;
  background-color: rgb(236, 236, 236);
  border: none;
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
`;

const TodoItem = ({ id, isDone, content, date }) => {
  const { onDelete, onUpdate } = useContext(FunctionContext);

  const onClickDelete = () => {
    onDelete(id);
  };

  const onChangeUpdate = () => {
    onUpdate(id);
  };

  return (
    <TodoItem_div>
      <input type="checkbox" checked={isDone} onChange={onChangeUpdate} />
      <Main_p>{content}</Main_p>
      <Date_p>{new Date(date).toLocaleDateString()}</Date_p>
      <Delete_button onClick={onClickDelete}>삭제</Delete_button>
    </TodoItem_div>
  );
};

export default TodoItem;

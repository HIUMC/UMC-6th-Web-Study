import TodoItem from "./TodoItem";
import { useContext, useState } from "react";
import { DataContext } from "../App";
import styled from "styled-components";

const List_input = styled.input`
  border: none;
  border-bottom: 1px solid rgb(236, 236, 236);
  padding: 10px;
  margin: 10px 0;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 1px solid skyblue;
  }
`;

const List = () => {
  const [search, setSearch] = useState("");
  const data = useContext(DataContext);

  const onChangeFind = (e) => {
    setSearch(e.target.value);
  };

  const onFind = () => {
    if (search === "") {
      return data;
    }
    return data.filter((todo) =>
      todo.content.toUpperCase().includes(search.toUpperCase())
    );
  };

  const findData = onFind();

  return (
    <div>
      <h3>Todo List 🎀</h3>
      <div>
        <List_input
          type="text"
          placeholder="검색어를 입력하세요"
          onChange={onChangeFind}
        />
        {findData.map((data) => (
          <TodoItem key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default List;

import styled from "styled-components";
import { useContext, useState, useRef } from "react";
import { FunctionContext } from "../App";

const Editor_div = styled.div`
  display: flex;
  gap: 10px;
`;

const Editor_input = styled.input`
  padding: 15px;
  border: rgb(236, 236, 236) 1px solid;
  flex: 1;
`;

const Editor_button = styled.button`
  background-color: #6262b2;
  color: white;
  width: 80px;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const Editor = () => {
  const [newData, setNewData] = useState("");
  const newDataRef = useRef();
  const { onCreate } = useContext(FunctionContext);

  const onChangeData = (e) => {
    setNewData(e.target.value);
  };

  const onClickData = () => {
    if (newData === "") {
      newDataRef.current.focus();
      return;
    }
    onCreate(newData);
    setNewData("");
  };

  const onKeyDownData = (e) => {
    if (e.key === "Enter") onClickData();
  };

  return (
    <Editor_div>
      <Editor_input
        type="text"
        ref={newDataRef}
        value={newData}
        onChange={onChangeData}
        onKeyDown={onKeyDownData}
        placeholder="새로운 Todo..."
      />
      <Editor_button onClick={onClickData}>추가</Editor_button>
    </Editor_div>
  );
};

export default Editor;

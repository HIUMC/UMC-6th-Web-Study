//input과 "추가" 라는 버튼이 있는 Editor 섹션
import "./Editor.css"
import { useState, useRef } from "react";
// input 태그의 값을 별도로 State에 보관하고 있지 않기 때문에 새로운 state를 만들어서 보관해 주기

const Editor = ({onCreate}) => {
    // 구조 분해 할당으로 onCreate props를 받는다.
    // 이 onCreate 함수를 추가 button이 눌렸을 때 호출해 주면 됨.

    const contentRef = useRef();// 새로운 레퍼런스 객체

    const [content, setContent] = useState("");
    // 새로운 state 생성
    // 새로운 todo로 리스트에 추가될 todo content가 content state에 보관될 것.

    const onChangeContent = (e) => {// 이벤트 핸들러 함수
        setContent(e.target.value);
    };

    const onKeydown =(e) => {// 어떤 키를 눌렀는지는 이 이벤트 객체의 KeyCOde라는 프로퍼티에 저장 됨
        if(e.keyCode===13){
            onSubmit();
        }
    }
    const onSubmit = () =>{
        if(content===""){
            contentRef.current.focus();
            // 빈 입력이 들어오면 focus
            return;
        }
        onCreate(content);
        setContent("");
    }
    return <div className="Editor">
        <input onKeyDown={onKeydown}
        // 이 이벤트는 사용자가 키보드를 누를 때 발생하는 이벤트임
        ref={contentRef}// input에서 레퍼런스 객체에 접근
        value = {content} onChange={onChangeContent} placeholder="새로운 Todo..."/>
        <button onClick={onSubmit}>
            추가
        </button>
    </div>;
}

export default Editor;
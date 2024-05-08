import { useEffect } from "react";

const Even = ()=> {
    useEffect(()=>{
        // 클린업
        console.log("unmount");
        return ()=>{};
    },[]);
    return <div>짝수</div>;
}

 export default Even;
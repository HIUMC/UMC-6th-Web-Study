import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"; // 브라우저의 현재 주소를 저장하고 감지하는 역할을 함.
// App 컴퍼넌트를 감쌌기 때문에 React App의 모든 컴퍼넌트들이 현재 브라우저의 주소를 불러와서 쓸 수도 있고, 주소의 변화를 감지할 수 있음.


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)


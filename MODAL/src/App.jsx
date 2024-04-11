
// App 컴포넌트
import { useState } from 'react';
// App 컴포넌트
import Button from './components/Button';
import Modal from './components/main';
const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalContent = "모달 내용.";

  return (
    <div>
      <h1>안녕하세여</h1>
      <Button onClick={() => setModalIsOpen(true)} color="black" text="모달 열기" />
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} content={modalContent} />
    </div>
  );
};

export default App;
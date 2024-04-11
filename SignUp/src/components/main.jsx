import './main.css';
import Button from './Button.jsx';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Button onClick={onClose} color="black" text="닫기" />
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Modal;
import { useState } from "react";
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import '../css/Navbar.css';

const LoginFormModal = () => {
  const [modal, setModal] = useState(false)

  return(
    <div>
      <button
        onClick={() => setModal(true)}
        className="nav-items nav-buttons"
      >
        Login
      </button>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <LoginForm showModal={setModal} />
        </Modal>
      )}
    </div>
  )
}

export default LoginFormModal;

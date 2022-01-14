import { useState } from "react";
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';

const SignupFormModal = () => {
  const [modal, setModal] = useState(false)

  return(
    <div>
      <button
        onClick={() => setModal(true)}
      >
        Sign Up
      </button>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <SignUpForm showModal={setModal} />
        </Modal>
      )}
    </div>
  )
}

export default SignupFormModal;

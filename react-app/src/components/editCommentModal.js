import { useState } from "react";
import { Modal } from "./../context/Modal";
import EditCommentButton from "./EditCommentButton";


const EditCommentModal = ({ user, signedInUser, comment, rating }) => {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <button onClick={() => setModal(true)}>
                edit
            </button>
            {modal && (
                <Modal onClose={() => setModal(false)}>
                    <EditCommentButton showModal={setModal} user={user} signedInUser={signedInUser} comment={comment} rating={rating} />
                </Modal>
            )}
        </div>
    )
}

export default EditCommentModal
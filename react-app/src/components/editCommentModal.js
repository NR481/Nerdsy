import { useState } from "react";
import { Modal } from "./../context/Modal";
import EditCommentButton from "./EditCommentButton";
import './css/Comments.css'


const EditCommentModal = ({ user, signedInUser, comment, rating }) => {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <button onClick={() => setModal(true)} className="edit-comment-button">
                Edit Comment
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

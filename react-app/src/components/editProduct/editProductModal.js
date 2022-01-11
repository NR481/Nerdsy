import { useState } from "react";
import { Modal } from "../../context/Modal";
import EditProduct from "./editProduct";

const EditProductModal = ({id, editName, editPrice, editDescription, editImageUrl, editRating, editCategory, editFranchise}) => {
    const [modal, setModal] = useState(false)

    return(
        <div>
            <button onClick={() => setModal(true)}>
                edit
            </button>
            {modal && (
                <Modal onClose={() => setModal(false)}>
                    <EditProduct id={id} showModal={setModal} editName={editName} editPrice={editPrice} editDescription={editDescription} editImageUrl={editImageUrl} editRating={editRating} editCategory={editCategory} editFranchise={editFranchise} />
                </Modal>
            )}
        </div>
    )
}

export default EditProductModal
import { useState } from "react";
import { Modal } from "../../context/Modal";
import EditProduct from "./editProduct";
import '../css/ProductDetail.css'

const EditProductModal = ({id, editName, editPrice, editDescription, editImageUrl, editRating, editCategory, editFranchise}) => {
    const [modal, setModal] = useState(false)

    return(
        <>
            <button onClick={() => setModal(true)} className="product-edit">
                Edit Listing
            </button>
            {modal && (
                <Modal onClose={() => setModal(false)}>
                    <EditProduct id={id} showModal={setModal} editName={editName} editPrice={editPrice} editDescription={editDescription} editImageUrl={editImageUrl} editRating={editRating} editCategory={editCategory} editFranchise={editFranchise} />
                </Modal>
            )}
        </>
    )
}

export default EditProductModal

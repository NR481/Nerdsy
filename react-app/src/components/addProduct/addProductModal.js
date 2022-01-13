import { useState } from "react";
import { Modal } from "../../context/Modal";
import AddProduct from "./addProduct";
import '../css/SubNavBar.css'

const AddProductModal = () => {
    const [modal, setModal] = useState(false)

    return(
        <div>
            <button
                onClick={() => setModal(true)}
                className="subnav-button"
            >
                Add a Product
            </button>
            {modal && (
                <Modal onClose={() => setModal(false)}>
                    <AddProduct showModal={setModal}/>
                </Modal>
            )}
        </div>
    )
}

export default AddProductModal

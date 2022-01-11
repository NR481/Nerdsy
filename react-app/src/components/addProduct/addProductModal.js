import { useState } from "react";
import { Modal } from "../../context/Modal";
import AddProduct from "./addProduct";

const AddProductModal = () => {
    const [modal, setModal] = useState(false)

    return(
        <div>
            <button onClick={() => setModal(true)}>
                add product
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
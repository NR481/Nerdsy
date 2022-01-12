import { useState } from "react";
import { Modal } from "../context/Modal";
import ShoppingCart from "./ShoppingCart";

const ShoppingCartModal = () => {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <button onClick={() => setModal(true)}>
                <i class="fas fa-shopping-cart"></i>
            </button>
            {modal && (
                <div>
                    <Modal onClose={() => setModal(false)}>
                        <ShoppingCart />
                    </Modal>
                </div>
            )}
        </div>
    )
}

export default ShoppingCartModal
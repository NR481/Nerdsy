import { useState } from "react";
import { Modal } from "../context/Modal";
import ShoppingCart from "./ShoppingCart";
import './css/Navbar.css'

const ShoppingCartModal = () => {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <button
                onClick={() => setModal(true)}
                className="nav-items nav-buttons cart-button"
                id="shopping-cart-modal-btn"
            >
            <i class="fas fa-shopping-cart"></i>
            </button>
            {modal && (
                <div>
                    <Modal onClose={() => setModal(false)}>
                        <ShoppingCart setModal={setModal} />
                    </Modal>
                </div>
            )}
        </div>
    )
}

export default ShoppingCartModal

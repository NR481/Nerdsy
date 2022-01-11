import { useDispatch } from "react-redux";
import { useState } from "react";
import { editProduct } from "../../store/products";

const EditProduct = ({id, showModal, editName, editPrice, editDescription, editImageUrl, editRating, editCategory, editFranchise}) => {
    const dispatch = useDispatch()

    const [name, setName] = useState(editName)
    const [price, setPrice] = useState(editPrice)
    const [description, setDescription] = useState(editDescription)
    const [imageUrl, setImageUrl] = useState(editImageUrl)
    const [rating, setRating] = useState(editRating)
    const [category, setCategory] = useState(editCategory)
    const [franchise, setFranchise] = useState(editFranchise)

    const onSubmit = async(e) => {
        e.preventDefault()

        const product = {
            id,
            name,
            price,
            description,
            imageUrl,
            rating,
            category,
            franchise
        }
        dispatch(editProduct(product, id))
        showModal(false)
    }

    return (
    <div>
        <form onSubmit={onSubmit}>
            <input 
             className="text"
             type="text"
             value={name}
             onChange={e => setName(e.target.value)}
             required
            />

            <input 
             className="text"
             type="text"
             value={price}
             onChange={e => setPrice(e.target.value)}
             required
            />

            <textarea 
             className="text"
             type="text"
             value={description}
             onChange={e => setDescription(e.target.value)}
             
            />

            <input 
             className="text"
             type="text"
             value={imageUrl}
             onChange={e => setImageUrl(e.target.value)}
             required
            />

            <input 
             className="text"
             type="text"
             value={rating}
             onChange={e => setRating(e.target.value)}
             
            />

            <input 
             className="text"
             type="text"
             value={category}
             onChange={e => setCategory(e.target.value)}
             
            />

            <input 
             className="text"
             type="text"
             value={franchise}
             onChange={e => setFranchise(e.target.value)}
             
            />
            <button>
                submit
            </button>
        </form>
    </div>
    )
}

export default EditProduct
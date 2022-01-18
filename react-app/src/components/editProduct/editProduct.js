import { useDispatch } from "react-redux";
import { useState } from "react";
import { editProduct } from "../../store/products";
import DeleteProduct from "../DeleteProductButton";
import '../css/EditProduct.css'

const EditProduct = ({ id, showModal, editName, editPrice, editDescription, editImageUrl, editRating, editCategory, editFranchise }) => {
    const dispatch = useDispatch()

    const [name, setName] = useState(editName)
    const [price, setPrice] = useState(editPrice)
    const [description, setDescription] = useState(editDescription)
    const [imageUrl, setImageUrl] = useState(editImageUrl)
    const [rating, setRating] = useState(editRating)
    const [category, setCategory] = useState(editCategory)
    const [franchise, setFranchise] = useState(editFranchise)
    const [errors, setErrors] = useState([])

    const onSubmit = async (e) => {
        e.preventDefault()

        const validationErrors = []
        const regex = /^[0-9]+(\.[0-9][0-9])?$/
        const imgRegex = /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/;
        if (name.length < 5) validationErrors.push('Please enter a name for your product of at least 5 characters')
        if (!regex.test(price)) validationErrors.push('Please enter a numeric dollar amount')
        if (!imgRegex.test(imageUrl)) validationErrors.push('Please enter a valid image URL for your product')
        setErrors(validationErrors)

        if (validationErrors.length === 0) {

            const product = {
                id,
                name,
                price,
                description,
                imageUrl,
                // rating,
                category,
                franchise
            }
            await dispatch(editProduct(product, id))
            showModal(false)
        }
    }

    return (
        <div >
            <ul className="edit-prod-errors">
                {errors.length > 0 &&
                    errors.map(error => (
                        <li key={error}>{error}</li>
                    ))
                }
            </ul>
            <form onSubmit={onSubmit} className="edit-form-container">
                <p>Name</p>
                <input
                    className="text"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <p>Price</p>
                <input
                    className="text"
                    type="text"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    required
                />
                <p>Description</p>
                <textarea
                    className="text"
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}

                />
                <p>Image URL</p>
                <input
                    className="text"
                    type="text"
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                    required
                />
                <p>Category</p>
                <input
                    className="text"
                    type="text"
                    value={category}
                    onChange={e => setCategory(e.target.value)}

                />
                <p>Franchise</p>
                <input
                    className="text"
                    type="text"
                    value={franchise}
                    onChange={e => setFranchise(e.target.value)}

                />
                <button className="prod-edit-button">
                    Submit
                </button>
                <DeleteProduct id={id} />
            </form>
        </div>
    )
}

export default EditProduct

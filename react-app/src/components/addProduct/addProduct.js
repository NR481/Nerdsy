import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addProduct } from "../../store/products";
import '../css/AddProduct.css'


const AddProduct = ({ showModal }) => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [rating, setRating] = useState('')
    const [category, setCategory] = useState('')
    const [franchise, setFranchise] = useState('')
    const [errors, setErrors] = useState([])

    const onSubmit = async (e) => {
        e.preventDefault()

        const validationErrors = []
        const regex = /^[0-9]+(\.[0-9][0-9])?$/;
        const imgRegex = /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/;
        if (name.length < 5) validationErrors.push('Please enter a name for your product of at least 5 characters')
        if (!regex.test(price)) validationErrors.push('Please enter a numeric dollar amount')
        if (!imgRegex.test(imageUrl)) validationErrors.push('Please enter a valid image URL for your product')
        setErrors(validationErrors)

        if (validationErrors.length === 0) {
            const newProduct = {
                name,
                price,
                description,
                imageUrl,
                // rating,
                category,
                franchise,
                userId: userId.id
            }
            await dispatch(addProduct(newProduct))
            showModal(false)
        }
    }

    return (
        <div className="modal-container">
            <ul className="add-prod-errors">
                {errors.length > 0 &&
                    errors.map(error => (
                        <li key={error}>{error}</li>
                    ))
                }
            </ul>
            <form
                onSubmit={onSubmit}
                className="prod-form-container"
            >
                <div className="prod-field">
                    <label>Product Name</label>
                    <input
                        className="text"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="prod-field">
                    <label>Price</label>
                    <input
                        className="text"
                        type="text"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="prod-field">
                    <label>Description</label>
                    <textarea
                        className="text"
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}

                    />
                </div>
                <div className="prod-field">
                    <label>Image URL</label>
                    <input
                        className="text"
                        type="text"
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        required
                    />
                </div>
                <div className="prod-field">
                    <label>Category</label>
                    <input
                        type="text"
                        className="text"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    />
                </div>
                <div className="prod-field">
                    <label>Franchise</label>
                    <input
                        className="text"
                        type="text"
                        value={franchise}
                        onChange={e => setFranchise(e.target.value)}
                    />
                </div>
                <button className="prod-button">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddProduct

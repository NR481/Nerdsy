import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addProduct } from "../../store/products";

const AddProduct = ({showModal}) => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [rating, setRating] = useState('')
    const [category, setCategory] = useState('')
    const [franchise, setFranchise] = useState('')

    const onSubmit = async(e) => {
        e.preventDefault()

        const newProduct = {
            name,
            price,
            description,
            imageUrl,
            rating,
            category,
            franchise,
            userId: userId.id
        }
        // console.log(newProduct)

        await dispatch(addProduct(newProduct))
        showModal(false)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                 placeholder="name"
                 className="text"
                 type="text"
                 value={name}
                 onChange={e => setName(e.target.value)}
                 required
                />

                <input 
                 placeholder="price"
                 className="text"
                 type="text"
                 value={price}
                 onChange={e => setPrice(e.target.value)}
                 required
                />

                <textarea 
                 placeholder="description"
                 className="text"
                 type="text"
                 value={description}
                 onChange={e => setDescription(e.target.value)}
                 
                />

                <input 
                 placeholder="image url"
                 className="text"
                 type="text"
                 value={imageUrl}
                 onChange={e => setImageUrl(e.target.value)}
                 required
                />

                <input 
                 placeholder="rating"
                 className="text"
                 type="text"
                 value={rating}
                 onChange={e => setRating(e.target.value)}
                 
                />

                <input 
                 placeholder="category"
                 className="text"
                 type="text"
                 value={category}
                 onChange={e => setCategory(e.target.value)}
                 
                />

                <input 
                 placeholder="franchise"
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

export default AddProduct
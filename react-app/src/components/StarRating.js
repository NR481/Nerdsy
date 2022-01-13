import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { commentEdit } from "../store/comments";


const StarRating = ({rating}) => {
    const [newRating, setNewRating] = useState(null)
    const [hover, setHover] = useState(null)

    return (
        <div>
            Rating:{[...Array(5)].map((star, i) => {
                const ratingValue = i + 1

                return (
                    <label>
                        <input
                        type='radio'
                        name='rating'
                        className='radio'
                        value={ratingValue}
                        onClick={() => setNewRating(ratingValue)}
                        />
                        <FaStar
                        className="star"
                        color={ratingValue <= (hover || newRating) ? "#ffc107": "#000000"}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )
            })}
        </div>
    )
}

export default StarRating

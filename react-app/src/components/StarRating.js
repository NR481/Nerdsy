import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'


const StarRating = () => {
    const [rating, setRating] = useState(null)
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
                        onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                        className="star"
                        color={ratingValue <= (hover || rating) ? "#ffc107": "#000000"}
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

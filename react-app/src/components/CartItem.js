import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { updateShoppingCart } from "../store/shoppingCart"

const CartItem = ({ item, cart, product }) => {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateShoppingCart(item?.id, quantity, cart?.id))
  })

  return (
    <div>
      <h2>{product?.name}</h2>
      <img src={product?.imageUrl}/>
      <button
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
      <p>Quantity: {item?.quantity}</p>
      <button
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 0}
      >
        -
      </button>
      <p>{product?.price * item?.quantity}</p>
    </div>
  )
}

export default CartItem;

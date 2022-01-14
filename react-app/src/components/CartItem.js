import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { updateShoppingCart } from "../store/shoppingCart"

const CartItem = ({ item, cart, product, handleDelete }) => {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("!!!!QUANTITY!!!!", quantity)
    dispatch(updateShoppingCart(item?.id, quantity, cart?.id))
  }, [dispatch, quantity])

  return (
    <span className="item-span" key={item?.id}>
      <div className="item-image-div">
        <img id="item-image" src={product?.imageUrl} />
      </div>
      <div className="item-content">
        <div className="item-details">
          <h2>{product?.name}</h2>
          <p className="item-p">{product?.franchise}</p>
          <p className="item-p">{product?.category}</p>
          <p className="item-p">{product?.description}</p>
        </div>
        <div className="item-changes">
          <div className="remove-btn-div">
            <button
              className="remove-button"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                const confirmed = window.confirm(`remove ${product.name} from your cart?`)
                if(confirmed) handleDelete(product);
              }}
            >
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
          <div className="item-price">
            <div className="price-element">
              <p className="item-p">$ {product?.price}</p>
            </div>
            <div className="price-element">
              <p className="item-p">x</p>
            </div>
            <div className="price-element">
              <p className="item-p">Quantity:</p>
            </div>
            <div className="quantity-modifier">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  setQuantity(quantity + 1);
                }}
              >
                <i className="fas fa-angle-up"></i>
              </button>
              <p className="item-p">{item?.quantity}</p>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  setQuantity(quantity - 1);
                  if (quantity <= 1) setQuantity(1);
                }}
              >
                <i className="fas fa-angle-down"></i>
              </button>
            </div>
            <div className="price-element">
              <p className="item-p">$ {product?.price * item?.quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default CartItem;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShoppingCart, removeFromCart } from "../store/shoppingCart";
import { allProducts } from "../store/products";
import { updateShoppingCart } from "../store/shoppingCart";
import "./css/ShoppingCart.css";

const ShoppingCart = () => {
  const user = useSelector(state => state.session.user)
  const cart = useSelector(state => state.shoppingCart.cart)
  const productObj = useSelector((state) => state.products);
  const cartItems = useSelector(state => state.shoppingCart.cartItems)
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(allProducts());
    dispatch(getShoppingCart(user?.id))
    console.log(cart)
  }, [dispatch])


  const handleDelete = (product) => {
    return dispatch(removeFromCart(product, cart?.id))
  }

  const updateQuantity = (item, quantity=1) => {
    return dispatch(updateShoppingCart(item?.id, quantity, cart?.id))
  }

  return (
    <div className="innerModal">
      <h1>Shopping Cart</h1>
      {cartItems?.map(item => {
        const id = item.productId
        const product = productObj[id]
        return (
          <span key={item?.id}>
            <h2>{product?.name}</h2>
            <img src={product?.imageUrl} />
            <button
              class="fas fa-trash-alt"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleDelete(product);
              }}
            >
            </button>
            <div>
              <button onClick={(e) => {
                setQuantity(quantity + 1)
                updateQuantity(item, quantity);
              }}>+</button>
              <h3>Quantity: {item?.quantity}</h3>
              <button onClick={(e) => {
                setQuantity(quantity - 1)
                updateQuantity(item, quantity);
              }}>-</button>
            </div>
            <h3>{product?.price * item?.quantity}</h3>
          </span>
        );
      })}
      <h2>{cart?.total}</h2>
    </div>
  )
};

export default ShoppingCart;

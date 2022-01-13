import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShoppingCart, removeFromCart } from "../store/shoppingCart";
import { allProducts } from "../store/products";
import { updateShoppingCart } from "../store/shoppingCart";
import "./css/ShoppingCart.css";
import CartItem from "./CartItem";

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

  }, [dispatch])


  const handleDelete = (product) => {
    return dispatch(removeFromCart(product, cart?.id))
  }

  return (
    <div className="innerModal">
      <div className="shopping-cart-title">
      <h1 id="shopping-cart-title">Shopping Cart</h1>
      </div>
      <div>
        <h3>ITEMS ({ cartItems?.length })</h3>
      </div>
      {cartItems?.map(item => {
        const id = item.productId
        const product = productObj[id]
        return (
          <CartItem item={item} cart={cart} product={product}/>
          // <span key={item?.id}>
          //   <h2>{product?.name}</h2>
          //   <img src={product?.imageUrl} />
            // <button
            //   type="button"
            //   onClick={(e) => {
            //     e.preventDefault();
            //     handleDelete(product);
            //   }}
            // >
            //   Remove From Cart
            // </button>
          //   <div>
          //     <button onClick={(e) => {
          //       setQuantity(quantity + 1)
          //       updateQuantity(item, quantity);
          //     }}>+</button>
          //     <h3>Quantity: {item?.quantity}</h3>
          //     <button onClick={(e) => {
          //       setQuantity(quantity - 1)
          //       updateQuantity(item, quantity);
          //       }}
          //       disabled={item.quantity === 0}
          //       >-</button>
          //   </div>
          //   <h3>{product?.price * item?.quantity}</h3>
          // </span>
        );
      })}
      <div className="cart-total">
      <h2>{cart?.total}</h2>
      </div>
    </div>
  )
};

export default ShoppingCart;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getShoppingCart, removeFromCart } from "../store/shoppingCart";
import { allProducts } from "../store/products";
import { emptyCart } from "../store/shoppingCart";
import CartItem from "./CartItem";
import "./css/ShoppingCart.css";

const ShoppingCart = ({ setModal }) => {
  const user = useSelector(state => state.session.user)
  const cart = useSelector(state => state.shoppingCart.cart)
  const productObj = useSelector((state) => state.products);
  const cartItems = useSelector(state => state.shoppingCart.cartItems);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(allProducts());
    dispatch(getShoppingCart(user?.id))

  }, [dispatch])

  const handlePurchase = (cart) => {
    return dispatch(emptyCart(cart.id))
  } 

  const handleDelete = (product) => {
    return dispatch(removeFromCart(product, cart?.id))
  }

  return (
    <div className="innerModal">
      <div className="shopping-cart-title">
        <h1 id="shopping-cart-title">Shopping Cart</h1>
      </div>
      <div className="items-amount">
        <h3>ITEMS ({cartItems?.length})</h3>
      </div>
      {cartItems?.map((item) => {
        const id = item.productId;
        const product = productObj[id];
        return (
          <CartItem
            item={item}
            cart={cart}
            product={product}
            handleDelete={handleDelete}
          />
        );
      })}
      <div className="checkout">
        <div className="cart-total">
          <h2>Total:</h2>
          <h2> $ {cart?.total}</h2>
        </div>
        <div className="checkout-buttons">
          <button
            id="checkout-button"
            type="button"
            onClick={(e) => {
              e.preventDefault()
              setModal(false)
            }}
          >Continue Shopping</button>
          <button
            id="checkout-button"
            type="button"
            onClick={(e) => {
              alert("You bought your items!")
              history.push('/')
              setModal(false)
              handlePurchase(cart)
            }}
          >Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

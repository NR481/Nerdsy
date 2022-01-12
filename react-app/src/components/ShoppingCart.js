import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShoppingCart, removeFromCart } from "../store/shoppingCart";
import { allProducts } from "../store/products";

const ShoppingCart = () => {
  const user = useSelector(state => state.session.user)
  const cart = useSelector(state => state.shoppingCart.cart)
  const productObj = useSelector((state) => state.products);
  const cartItems = useSelector(state => state.shoppingCart.cartItems)
  const dispatch = useDispatch()

  console.log("CART ITEMS", cartItems)
  
  useEffect(() => {
    dispatch(allProducts());
    dispatch(getShoppingCart(user.id))
  }, [dispatch])

  const handleDelete = (product) => {
    return dispatch(removeFromCart(product, cart.id))
  }
  
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems?.map(item => {
        console.log("ITEM", item)
        const id = item.productId 
        console.log("ID", id)
        console.log("PRODUCTOBJ", productObj)
        const product = productObj[id]
        console.log("PRODUCT", product)
        return <span key={item.id}>
          <h2>{product?.name}</h2>
          <img src={product?.imageUrl} />
          <button type='button'
            onClick={(e) => {
              e.preventDefault()
              handleDelete(product)
            }}
          >Remove From Cart</button>
          <h3>{product?.price * item?.quantity}</h3>
        </span>
      })}
      <h2>{cart?.total}</h2>
    </div>
  )
};

export default ShoppingCart;

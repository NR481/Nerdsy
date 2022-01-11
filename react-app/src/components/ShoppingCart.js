import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShoppingCart } from "../store/shoppingCart";
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
        return <div key={item.id}>
          <h2>{product?.name}</h2>
          <img src={product?.imageUrl}/>
          <h3>{product?.price * item?.quantity}</h3>
        </div>
      })}
      <h2>{cart?.total}</h2>
    </div>
  )
};

export default ShoppingCart;

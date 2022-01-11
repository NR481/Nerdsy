import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShoppingCart } from "../store/products";

const ShoppingCart = () => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getShoppingCart(user.id))
  }, [dispatch])

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        
      </ul>
    </div>
  )
};

export default ShoppingCart;

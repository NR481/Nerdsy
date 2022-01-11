import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allProducts } from "../store/products";
import AddProductModal from "./addProduct/addProductModal";
import { addToCart } from "../store/shoppingCart";

const MainPage = () => {
  const productObj = useSelector(state => state.products)
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts())
  }, [dispatch])

  const handleAddToCart = productId => {
    return dispatch(addToCart(productId, user.id))
  }

  const products = Object.values(productObj);


  return (
    <div>
      <img
        src="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2014/11/bhsftd485724.jpg"
        alt="city skyline"
      />
      <h1>Nerdsy</h1>
      <AddProductModal />
      <h2>Featured Items</h2>
      {products?.length > 0 &&
        products.map((product) => (
          <span>
            <img src={product?.imageUrl} />
            <button
              type="button"
              value={product}
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart(product.id);
              }}
            >add to cart</button>
          </span>
        ))}
    </div>
  );
}

export default MainPage

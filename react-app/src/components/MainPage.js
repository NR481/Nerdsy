import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allProducts } from "../store/products";

const MainPage = () => {
  const productObj = useSelector(state => state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts())
  }, [dispatch])

  const products = Object.values(productObj);


  return (
    <div>
      <img src='https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2014/11/bhsftd485724.jpg' alt='city skyline'/>
      <h1>Nerdsy</h1>
      <h2>Featured Items</h2>
      {products?.length > 0 &&
        products.map(product => (
          <img src={product?.imageUrl}/>
        ))
      }
    </div>
  )
}

export default MainPage

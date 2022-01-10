import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { allProducts } from "../store/products";

const ProductDetail = () => {
  const productObj = useSelector(state => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts())
  });

  const product = productObj[id];

  return (
    <>
      <h1>{product?.name}</h1>
      <img src={product?.imageUrl}/>
      <p>{product?.description}</p>
      <p>{`$${product?.price}`}</p>
      <button>Add to Cart</button>
    </>
  )
}

export default ProductDetail;

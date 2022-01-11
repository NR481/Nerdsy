import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { allProducts } from "../store/products";
import AddProductModal from "./addProduct/addProductModal";
import DeleteProduct from "./DeleteProductButton";
import EditProductModal from "./editProduct/editProductModal";


const MainPage = () => {
  const productObj = useSelector(state => state.products)
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user)

  useEffect(() => {
    dispatch(allProducts())
  }, [dispatch])

  const products = Object.values(productObj);


  return (
    <div>
      <img src='https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2014/11/bhsftd485724.jpg' alt='city skyline'/>
      <h1>Nerdsy</h1>
      <AddProductModal />
      <h2>Featured Items</h2>
      {products?.length > 0 &&
        products.map(product => (
          <div>

            <div> {product.name} </div>
            <Link to={`/products/${product.id}`}>
              <img src={product?.imageUrl}/>
            </Link>
            <div> ${product.price} </div>
            {sessionUser?.id === product?.userId && (
              <div>
                <EditProductModal id={product.id} editName={product.name} editPrice={product.price} editDescription={product.description} editImageUrl={product.imageUrl} editRating={product.rating} editCategory={product.category} editFranchise={product.franchise} />
                <DeleteProduct id={product?.id}/>
              </div>
            )}
            

            

          </div>
        ))
      }
    </div>
  )
}

export default MainPage

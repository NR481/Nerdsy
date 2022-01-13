import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { allProducts } from "../store/products";
import AddProductModal from "./addProduct/addProductModal";
import DeleteProduct from "./DeleteProductButton";
import EditProductModal from "./editProduct/editProductModal";
import '../components/MainPage.css'


const MainPage = () => {
  const productObj = useSelector(state => state.products)
  const history = useHistory()
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user)

  useEffect(() => {
    dispatch(allProducts())
  }, [dispatch])


  const products = Object.values(productObj);


  return (
    <div className="page-container">
      <img
        className="splash-image"
        src="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2014/11/bhsftd485724.jpg"
        alt="city skyline"
      />
      <div>
        <div className="productsContainer">
          {products?.length > 0 &&
            products.map((product) => (
              <div key={product.id}>
                <div> {product.name} </div>
                <Link to={`/products/${product.id}`}>
                  <img src={product?.imageUrl} className="img" />
                </Link>
                {sessionUser?.id === product?.userId && (
                  <div>
                    {/* <EditProductModal id={product.id} editName={product.name} editPrice={product.price} editDescription={product.description} editImageUrl={product.imageUrl} editRating={product.rating} editCategory={product.category} editFranchise={product.franchise} /> */}
                    {/* <DeleteProduct id={product?.id} /> */}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage

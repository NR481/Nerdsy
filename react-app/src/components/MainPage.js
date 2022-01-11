import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { allProducts } from "../store/products";
import AddProductModal from "./addProduct/addProductModal";
import { addToCart } from "../store/shoppingCart";
import DeleteProduct from "./DeleteProductButton";
import EditProductModal from "./editProduct/editProductModal";


const MainPage = () => {
  const productObj = useSelector(state => state.products)
  const history = useHistory()
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user)

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
          <div key={product.id}>
            <div> {product.name} </div>
            <Link to={`/products/${product.id}`}>
              <img src={product?.imageUrl} />
            </Link>
            <div>{product.price}</div>
            <button
              type="button"
              value={product}
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart(product.id);
                const confirmed = window.confirm(
                  `Added ${product.name} to your cart!
                  Would you like to go to your cart now?`
                )
                if (confirmed) {
                  return history.push(`/shopping_cart/${user.id}`)
                }
              }}
            >
              add to cart
            </button>
            {sessionUser?.id === product?.userId && (
              <div>
                <EditProductModal id={product.id} editName={product.name} editPrice={product.price} editDescription={product.description} editImageUrl={product.imageUrl} editRating={product.rating} editCategory={product.category} editFranchise={product.franchise} />
                <DeleteProduct id={product?.id} />
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default MainPage

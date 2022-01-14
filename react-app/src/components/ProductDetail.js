import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { allProducts } from "../store/products";
import { addToCart } from "../store/shoppingCart";
import Comments from "./Comments";
import EditProductModal from "./editProduct/editProductModal";
import './css/ProductDetail.css'
import ShoppingCartModal from "./ShoppingCartModal";

const ProductDetail = () => {
  const history = useHistory()
  const productObj = useSelector(state => state.products);
  const user = useSelector(state => state.session.user);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts())
  }, [dispatch]);

  const handleAddToCart = (productId) => {
    return dispatch(addToCart(productId, user?.id, quantity));
  };

  const product = productObj[id];

  return (
    <div>
      <div className="detail-container">
        <h1 className="product-name">{product?.name}</h1>
        <img src={product?.imageUrl} alt='product image' className="product-img"/>
        <p className="description">{product?.description}</p>
        <p className="product-price">{`$${product?.price.toFixed(2)}`}</p>
        {user?.id === product?.userId &&
          <EditProductModal id={product?.id} editName={product?.name} editPrice={product?.price} editDescription={product?.description} editImageUrl={product?.imageUrl} editRating={product?.rating} editCategory={product?.category} editFranchise={product?.franchise} />
        }
        <button
          className="add-cart"
          type="button"
          value={product}
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart(product.id);
            const confirmed = window.confirm(
              `Added ${product.name} to your cart!
                  Would you like to go to your cart now?`
            );
            if (confirmed) {
              document.getElementById("shopping-cart-modal-btn").click();
            }
          }}
        >
          Add to Cart
        </button>
        <label className="product-quantity">
          Quantity
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
      </div>
      <Comments product={product} />
    </div>
  );
}

export default ProductDetail;

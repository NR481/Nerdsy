import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { allProducts } from "../store/products";
import { addToCart } from "../store/shoppingCart";
import Comments from "./Comments";
import EditProductModal from "./editProduct/editProductModal";

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
    return dispatch(addToCart(productId, user.id, quantity));
  };

  const product = productObj[id];

  return (
    <>
      <h1>{product?.name}</h1>
      <img src={product?.imageUrl} />
      <p>{product?.description}</p>
      <p>{`$${product?.price}`}</p>
      <EditProductModal id={product?.id} editName={product?.name} editPrice={product?.price} editDescription={product?.description} editImageUrl={product?.imageUrl} editRating={product?.rating} editCategory={product?.category} editFranchise={product?.franchise} />
      <button
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
            return history.push(`/shopping_cart/${user.id}`);
          }
        }}
      >
        add to cart
      </button>
      <label>
        Quantity
        <input
          type="text"
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <Comments product={product} />
    </>
  );
}

export default ProductDetail;

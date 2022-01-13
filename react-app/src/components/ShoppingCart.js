import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShoppingCart, removeFromCart } from "../store/shoppingCart";
import { allProducts } from "../store/products";
import { updateShoppingCart } from "../store/shoppingCart";
import "./css/ShoppingCart.css";

const ShoppingCart = () => {
  const user = useSelector(state => state.session.user)
  const cart = useSelector(state => state.shoppingCart.cart)
  const productObj = useSelector((state) => state.products);
  const cartItems = useSelector(state => state.shoppingCart.cartItems)
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(allProducts());
    dispatch(getShoppingCart(user?.id))
    console.log(cart)
  }, [dispatch])


  const handleDelete = (product) => {
    return dispatch(removeFromCart(product, cart?.id))
  }

  const updateQuantity = (item, quantity) => {
    return dispatch(updateShoppingCart(item?.id, quantity, cart?.id))
  }
  
  return (
    <div className="innerModal">
      <div className="shopping-cart-title">
      <h1 id="shopping-cart-title">Shopping Cart</h1>
      </div>
      <div>
        <h3>ITEMS ({ cartItems?.length })</h3>
      </div>
      {cartItems?.map(item => {
        const id = item.productId 
        const product = productObj[id]
        return (
          <span className="item-span" key={item?.id}>
            <div className="item-image-div">
              <img id="item-image" src={product?.imageUrl} />
            </div>
            <div className="item-content">
              <div className="item-details">
                <h2>{product?.name}</h2>
                <p className="item-p">{product?.franchise}</p>
                <p className="item-p">{product?.category}</p>
                <p className="item-p">{product?.description}</p>
              </div>
              <div className="item-changes">
                <div className="remove-btn-div">
                  <button
                    className="remove-button"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(product);
                    }}
                  >
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
                <div className="item-price">
                  <div className="price-element">
                    <p className="item-p">$ {product?.price}</p>
                  </div>
                  <div className="price-element">
                    <p className="item-p">x</p>
                  </div>
                  <div className="price-element">
                    <p className="item-p">Quantity:</p>
                  </div>
                  <div className="quantity-modifier">
                    <i
                      className="fas fa-angle-up"
                      onClick={(e) => {
                        setQuantity(quantity + 1);
                        updateQuantity(item, quantity);
                      }}
                    ></i>
                    <p className="item-p">{item?.quantity}</p>
                    <i
                      className="fas fa-angle-down"
                      onClick={(e) => {
                        setQuantity(quantity - 1);
                        if(quantity < 0) setQuantity(0)
                        updateQuantity(item, quantity);
                      }}
                    ></i>
                  </div>
                  <div className="price-element">
                    <p className="item-p">$ {product?.price * item?.quantity}</p>
                  </div>
                </div>
              </div>
            </div>
          </span>
        );
      })}
      <div className="cart-total">
      <h2>{cart?.total}</h2>
      </div>
    </div>
  )
};

export default ShoppingCart;

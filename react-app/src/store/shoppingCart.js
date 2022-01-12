const UPDATE_CART = "shoppingCart/GET_CART";

const updateCart = (cartData) => ({
  type: UPDATE_CART,
  cartData,
});


export const getShoppingCart = (userId) => async (dispatch) => {
  const response = await fetch(`/api/shopping_cart/${userId}`);
  const cartData = await response.json();
  dispatch(updateCart(cartData));
};

export const addToCart = (productId, userId, quantity) => async (dispatch) => {
  const response = await fetch(`/api/shopping_cart/${userId}/${productId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      userId,
      productId,
      quantity
    }),
  });

  const data = await response.json()
  dispatch(updateCart(data))
};

export const updateShoppingCart = (itemId, quantity, cartId) => async (dispatch) => {
  const response = await fetch(`/api/shopping_cart/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      itemId,
      quantity,
      cartId
    })
  })

  const data = await response.json()
  dispatch(updateCart(data))
}

export const removeFromCart = (product, cartId) => async (dispatch) => {
  const response = await fetch(`/api/shopping_cart/${product.id}/${cartId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  })
  
  const newCartData = await response.json()
  dispatch(updateCart(newCartData))
}

const shoppingCartReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_CART:
      newState = { ...state };
      newState["cart"] = action.cartData.cart;
      newState['cartItems'] = action.cartData.cartItems;
      return newState;
    
    default:
      return state;
  }
};

export default shoppingCartReducer;

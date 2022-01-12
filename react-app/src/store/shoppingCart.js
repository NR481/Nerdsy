const GET_CART = "shoppingCart/GET_CART";
const ADD_ITEM = "shoppingCart/ADD_CART";
const REMOVE_ITEM = "shoppingCart/REMOVE_ITEM";

const getCart = (cartData) => ({
  type: GET_CART,
  cartData,
});

const removecart = (cartData) => ({
  type: REMOVE_ITEM,
  cartData,
})

const addCart = (cartData) => ({
  type: ADD_ITEM,
  cartData
})

export const getShoppingCart = (userId) => async (dispatch) => {
  const response = await fetch(`/api/shopping_cart/${userId}`);
  const cartData = await response.json();
  dispatch(getCart(cartData));
};

export const addToCart = (productId, userId) => async (dispatch) => {
  const response = await fetch(`/api/shopping_cart/${userId}/${productId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      userId,
      productId
    }),
  });

  const data = await response.json()
  dispatch(addCart(data))
};

export const removeFromCart = (product, cartId) => async (dispatch) => {
  const response = await fetch(`/api/shopping_cart/${product.id}/${cartId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  })
  
  const newCartItems = await response.json()
  dispatch(removecart(newCartItems))
}

const shoppingCartReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_CART:
      newState = { ...state };
      newState["cart"] = action.cartData.cart;
      newState['cartItems'] = action.cartData.cartItems;
      return newState;

    case ADD_ITEM:
      newState = { ...state };
      newState["cartItems"] = action.cartData.cartItems
      newState['cart'] = action.cartData.cart
      return newState
    
    case REMOVE_ITEM:
      newState = { ...state };
      newState["cartItems"] = action.cartData.cartItems
      return newState
    
    default:
      return state;
  }
};

export default shoppingCartReducer;

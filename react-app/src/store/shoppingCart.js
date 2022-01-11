const GET_CART = "shoppingCart/GET_CART";
const ADD_ITEM = "shoppingCart/ADD_CART";

const getCart = (cartData) => ({
  type: GET_CART,
  cartData,
});

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
    default:
      return state;
  }
};

export default shoppingCartReducer;

const GET_CART = "shoppingCart/GET_CART";
const ADD_ITEM = "shoppingCart/ADD_CART";

const getCart = (cart) => ({
  type: GET_CART,
  cart,
});

const addCart = (cartItems) => ({
  type: ADD_ITEM,
  cartItems
})

export const getShoppingCart = (userId) => async (dispatch) => {
  const response = await fetch(`/api/shopping_cart/${userId}`);
  const cart = await response.json();
  dispatch(getCart(cart));
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
      newState["cart"] = action.cart;
      return newState;

    case ADD_ITEM:
      newState = { ...state };
      newState["cartItems"] = action.cartItems
      return newState
    default:
      return state;
  }
};

export default shoppingCartReducer;

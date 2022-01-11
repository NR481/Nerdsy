const GET_CART = "shoppingCart/GET_CART";
const ADD_ITEM = "shoppingCart/ADD_CART";

const getCart = (cart) => ({
  type: GET_CART,
  cart,
});

const addCart = (cart, cartItem) => ({
  type: ADD_ITEM,
  cart,
  cartItem
})

export const getShoppingCart = (userId) => async (dispatch) => {
  const response = await fetch(`/api/shopping_cart/${userId}`);
  const cart = await response.json();
  dispatch(getCart(cart));
};

export const addToCart = (productId, userId) => async (dispatch) => {
  const response = await fetch(`/api/shopping_cart/${userId}/${productId}`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json"
    },
  });

  const data = await response.json()
  const cart = data.cart
  const cartItem = data.cartItem
  dispatch(addCart(cart, cartItem))
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
    default:
      return state;
  }
};

export default shoppingCartReducer;

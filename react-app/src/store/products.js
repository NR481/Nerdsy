const GET_PRODUCTS = "products/GET_PRODUCTS";
const GET_CART = "products/GET_PRODUCTS";

const getAllProducts = (products) => ({
  type: GET_PRODUCTS,
  products,
});

const getCart = (cart) => ({
  type: GET_CART,
  cart,
});

export const allProducts = () => async (dispatch) => {
  const response = await fetch("/api/products");
  const data = await response.json();
  dispatch(getAllProducts(data));
  return data;
};

export const getShoppingCart = (userID) => async (dispatch) => {
  const response = await fetch(`/api/shopping_cart/${userID}`);
  const cart = await response.json();
  dispatch(getCart(cart));
};

export const productsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_PRODUCTS:
      newState = { ...state };
      action.products.products.forEach((product) => {
        newState[product.id] = product;
      });
      return newState;
    
    case GET_CART:
      newState = { ...state }
      newState["cart"] = action.cart
      return newState
    default:
      return state;
  }
};

export default productsReducer;

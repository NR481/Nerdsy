const GET_PRODUCTS = 'products/GET_PRODUCTS';

const getAllProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products
});

export const allProducts = () => async (dispatch) => {
  const response = await fetch('/api/products');
  const data = await response.json();
  dispatch(getAllProducts(data));
  return data;
};

const productsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_PRODUCTS:
      newState = { ...state };
      newState.products = action.payload.products;
      return newState;
    default:
      return state;
  }
};

export default productsReducer;

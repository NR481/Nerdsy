const GET_PRODUCTS = 'products/GET_PRODUCTS';
const ADD_PRODUCT = 'products/ADD_PRODUCT'

const getAllProducts = (products) => ({
  type: GET_PRODUCTS,
  products
});

const addAProduct = (product) =>({
  type: ADD_PRODUCT,
  product
})


export const allProducts = () => async (dispatch) => {
  const response = await fetch('/api/products');
  const data = await response.json();
  dispatch(getAllProducts(data));
  return data;
};

export const addProduct = (product) => async(dispatch) => {
  const response = await fetch('/api/products', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(product)
  })
  const data = await response.json()
  console.log(response, "!!!!!!!!!!!!!!!!!!!")
  dispatch(addAProduct(data))
  return data
}

const productsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_PRODUCTS:
      newState = { ...state };
      action.products.products.forEach(product => {
        newState[product.id] = product
      })
      return newState;
    case ADD_PRODUCT:
      return {...state, [action.product.id]: action.product}
    default:
      return state;
  }
};

export default productsReducer;

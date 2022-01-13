const GET_PRODUCTS = "products/GET_PRODUCTS";
const ADD_PRODUCT = 'products/ADD_PRODUCT'
const DELETE_PRODUCT = 'products/DELETE_PRODUCT'
const EDIT_PRODUCT = 'products/EDIT_PRODUCT'

const getAllProducts = (products) => ({
  type: GET_PRODUCTS,
  products,
});


const addAProduct = (product) =>({
  type: ADD_PRODUCT,
  product
})

const deleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  product
})

const editAProduct = (product) => ({
  type: EDIT_PRODUCT,
  product
})


export const allProducts = () => async (dispatch) => {
  const response = await fetch("/api/products/");
  const data = await response.json();
  dispatch(getAllProducts(data));
  return data;
};


export const addProduct = (product) => async (dispatch) => {
  const response = await fetch('/api/products/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  })
  const data = await response.json()
  dispatch(addAProduct(data))
  return data
}


export const deleteAProduct = (id) => async(dispatch) => {
  const response = await fetch(`/api/products/${id}/`, {
    method: 'DELETE'
  })
  if(response.ok) {
    dispatch(deleteProduct(id))
  }
}

export const editProduct = (product, id) => async(dispatch) => {
  const response = await fetch(`/api/products/${id}/`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(product)
  })
  if(response.ok) {
    const product = await response.json()
    dispatch(editAProduct(product))
  }
}





const productsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_PRODUCTS:
      newState = { ...state };
      action.products.products.forEach((product) => {
        newState[product.id] = product;
      });
      return newState;

    case ADD_PRODUCT:
      return { ...state, [action.product.id]: action.product }


    case DELETE_PRODUCT:
      newState = {...state}
      console.log(newState[action.product])
      delete newState[action.product]
      return newState

    case EDIT_PRODUCT:
      newState = {...state}
      newState[action.product.id] = action.product
      return newState

    default:
      return state;
  }
};

export default productsReducer;

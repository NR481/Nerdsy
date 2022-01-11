const GET_PRODUCTS = "products/GET_PRODUCTS";
const GET_CART = "products/GET_PRODUCTS";
const ADD_PRODUCT = 'products/ADD_PRODUCT'
const DELETE_PRODUCT = 'products/DELETE_PRODUCT'

const getAllProducts = (products) => ({
  type: GET_PRODUCTS,
  products,
});

const getCart = (cart) => ({
  type: GET_CART,
  cart,
});

const addAProduct = (product) =>({
  type: ADD_PRODUCT,
  product
})

const deleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  product
})


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
  const response = await fetch(`/api/products/${id}`, {
    method: 'DELETE'
  })
  if(response.ok) {
    dispatch(deleteProduct(id))
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

    case GET_CART:
      newState = { ...state }
      newState["cart"] = action.cart
      return newState

    case ADD_PRODUCT:
      return { ...state, [action.product.id]: action.product }


    case DELETE_PRODUCT:
      newState = {...state}
      console.log(newState[action.product])
      delete newState[action.product]
      return newState

    default:
      return state;
  }
};

export default productsReducer;

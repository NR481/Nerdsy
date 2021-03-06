import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import productsReducer from './products';
import commentsReducer from './comments';

import searchReducer from './search';

import shoppingCartReducer from './shoppingCart';


const rootReducer = combineReducers({
  session,
  products: productsReducer,
  comments: commentsReducer,
  search: searchReducer,
  shoppingCart: shoppingCartReducer

});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;

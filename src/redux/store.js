import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import charactersReducer from './reducers/characters';

const middlewares = [thunk];

const reducer = combineReducers({
  charactersReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
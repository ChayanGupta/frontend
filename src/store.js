import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import persistReducer from './Reducers/index'

const composeEnhancers = composeWithDevTools({});
const store = createStore(persistReducer,composeEnhancers(applyMiddleware(thunk)))

export default store;
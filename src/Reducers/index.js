import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from './productReducer'
import userReducer from './userReducer'
import productsReducer from './productsReducer'
import brandsReducer from './brandsReducer'

const persistConfig = {
    key:"root",
    storage,
    whitelist:["productReducer","userReducer","productsReducer","brandsReducer"]
}

const rootReducer = combineReducers({productReducer, userReducer,productsReducer, brandsReducer });

export default persistReducer(persistConfig, rootReducer);
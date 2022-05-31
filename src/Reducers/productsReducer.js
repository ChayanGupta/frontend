import * as productsActionType from '../Action-Type/ProductsActionType'

const initialState = {
    productsDetail: {}
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case productsActionType.PRODUCTS_DETAILS:
            return { ...state, productsDetail: action.payload }
        default:
            return state;
    }
}

export default productsReducer;
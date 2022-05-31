import * as productActionType from '../Action-Type/ProductActionType'

const initialState = {
    productDetail: {}
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case productActionType.PRODUCT_DETAILS:
            return { ...state, productDetail: action.payload }
        default:
            return state;
    }
}

export default productReducer;
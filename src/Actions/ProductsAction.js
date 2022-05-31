import * as productsActionType from '../Action-Type/ProductsActionType'

export const setProductsDetail = (productsDetail) =>{
    return (dispatch) =>{
        dispatch({
            type:productsActionType.PRODUCTS_DETAILS,
            payload:productsDetail
        })
    }
}
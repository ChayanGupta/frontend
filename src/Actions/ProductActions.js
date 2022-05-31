import * as productActionType from '../Action-Type/ProductActionType'

export const setProductDetail = (productDetail) =>{
    return (dispatch) =>{
        dispatch({
            type:productActionType.PRODUCT_DETAILS,
            payload:productDetail
        })
    }
}
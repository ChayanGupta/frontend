import * as brandsActionType from '../Action-Type/BrandsActionType'

export const setBrandsDetail = (brandsDetail) =>{
    return (dispatch) =>{
        dispatch({
            type:brandsActionType.BRANDS_DETAILS,
            payload:brandsDetail
        })
    }
}
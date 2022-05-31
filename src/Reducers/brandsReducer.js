import * as brandsActionType from '../Action-Type/BrandsActionType'

const initialState = {
    brandsDetail: {}
}

const brandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case brandsActionType.BRANDS_DETAILS:
            return { ...state, brandsDetail: action.payload }
        default:
            return state;
    }
}

export default brandsReducer;
import * as userActionType from '../Action-Type/UserActionType'

export const setIsAuthenticate = (authStatus) => {
    return (dispatch) => {
        dispatch({
            type: userActionType.SET_IS_AUTHENTICATE,
            payload: { isAuthenticate: authStatus }
        })
    }
};

export const setUserInfo = (user) => {
    return (dispatch) => {
        dispatch({
            type: userActionType.SET_USER_INFO,
            payload: user
        })
    }
};
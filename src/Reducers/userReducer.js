import * as userActionType from "../Action-Type/UserActionType";

const initialState = {
  isAuthenticate: false,
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionType.SET_IS_AUTHENTICATE:
      return { ...state, isAuthenticate: action.payload.isAuthenticate };
    case userActionType.SET_USER_INFO:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
import { AUTHENTICATE, SWITCH_MODE, LOGIN_SUCCESS } from '../actions/auth';
const initialState = {
    token: null,
    userId: null,
    loginMode: true,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }
        case SWITCH_MODE:
            return {
                ...state,
                loginMode: !state.loginMode
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }
        default:
            return state;

    }
    return state;
}


export default authReducer;
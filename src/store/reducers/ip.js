import { UPDATE_IP, CHANGE_MODE } from '../actions/ip';
const initialState = {
    ip: "http://b73eb19360a1.ngrok.io",
    changeMode: 'changable',
    newIP: false,

};

const ipReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_IP:
            return {
                ...state,
                ip: `http://${action.ip}:3000`
            }
        case CHANGE_MODE:
            return {
                ...state,
                newIP: !state.newIP
            }

        default:
            return state;

    }
    return state;
}


export default ipReducer;
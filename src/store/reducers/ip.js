import { UPDATE_IP, CHANGE_MODE } from '../actions/ip';
export const initialState = {
    ip: "http://c82a9267f9c9.ngrok.io",
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
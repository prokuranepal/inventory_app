// import { AsyncStorage } from 'react-native';
export const AUTHENTICATION = 'AUTHENTICATION';
export const SWITCH_MODE = 'SWITCH_MODE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


// import { ip } from '../../server/iplocation'
import { Alert } from 'react-native';

export const authenticate = (userId, token, expiryTime) => {
    return dispatch => {
        dispatch({ type: AUTHENTICATION, userId: userId, token: token })
    }
}

export const signUp = (email, password) => {
    // console.log("authentication", email, password)
    return async dispatch => {
        const data = {

            username: email,
            password: password

        }
        try {
            const ip = getState().ip.ip;
            const response = await fetch(
                ip + '/users/signup',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }
            )
            let respData = await response.json();
            if (respData.success) {
                Alert.alert("Success",
                    "Registration Complete")
                dispatch(switchMode())


            } else if (respData.err) {
                Alert.alert(respData["err"].name, respData["err"].message)
            }
            else {
                Alert.alert("Error",
                    "Something went wrong")
            }
        }
        catch (err) {

            Alert.alert("Error",
                "Something went wrong")
        }

    }
}


export const login = (email, password) => {
    return async (dispatch, getState) => {
        const data = {

            username: email,
            password: password

        }
        try {
            // console.log("login action", getState().ip.ip)
            const ip = getState().ip.ip;
            const response = await fetch(
                ip + '/users/login',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }
            )
            let respData = await response.json();
            // console.log("login response", respData)
            if (!respData.success) {
                Alert.alert(respData["err"].name, respData["err"].message)
                return;
            }
            dispatch({
                type: LOGIN_SUCCESS,
                userId: email,
                token: respData.token
            })
        }
        catch (err) {

            Alert.alert("Error",
                err.toString())
        }

    }
}


export const switchMode = () => {
    return { type: SWITCH_MODE }
}

export const UPDATE_IP = 'UPDATE_IP';
export const CHANGE_MODE = 'CHANGE_MODE';


export const updateIP = ip => {
    return {
        type: UPDATE_IP,
        ip: ip
    }

}

export const changeMode = () => {
    return {
        type: CHANGE_MODE,
    }

}
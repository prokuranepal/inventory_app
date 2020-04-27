export const ADD_ITEMS = 'ADD_ITEMS';
export const UPDATE_ITEMS = 'UPDATE_ITEMS';


export const addItems = (title, company, quantity, description, price) => {
    return {
        type: ADD_ITEMS,
        productData: {
            title,
            company,
            quantity,
            description,
            price
        }
    }
}
export const updateItem = (id, title, company, quantity, description, price) => {
    return {
        type: UPDATE_ITEMS,
        iid: id,
        productData: {
            title,
            company,
            quantity,
            description,
            price
        }
    }
}
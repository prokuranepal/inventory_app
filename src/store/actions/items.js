export const ADD_ITEMS = 'ADD_ITEMS';

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
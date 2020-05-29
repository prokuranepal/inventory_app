export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
// export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const addToCart = (item, quantity) => {
    return { type: ADD_TO_CART, item: item, quantity: quantity };
};

export const removeFromCart = itemId => {
    return { type: REMOVE_FROM_CART, item_id: itemId };
};

// export const addCartItem = (item, type, quantity) => {
//     return { type: ADD_TO_CART, item: item, type: type, quantity: quantity };
// };
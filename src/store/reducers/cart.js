import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';
// import { ADD_ORDER } from '../actions/order';
import CartItem from '../../models/cart-items';
import { DELETE_ITEM } from '../actions/items';

const initialState = {
    items: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedItem = action.item;
            const itemPrice = addedItem.price
            const itemTitle = addedItem.name;

            let updatedOrNewCartItem;

            if (state.items[addedItem._id]) {
                // already have the item in the cart
                updatedOrNewCartItem = new CartItem(
                    state.items[addedItem._id].quantity + action.quantity,
                    itemPrice,
                    itemTitle,
                );
            } else {
                updatedOrNewCartItem = new CartItem(action.quantity, itemPrice, itemTitle);
            }
            return {
                ...state,
                items: { ...state.items, [addedItem._id]: updatedOrNewCartItem },

            };

        case REMOVE_FROM_CART:
            const selectedCartItem = state.items[action.item_id];
            const currentQty = selectedCartItem.quantity;
            let updatedCartItems;
            if (currentQty > 1) {
                // need to reduce it, not erase it
                const updatedCartItem = new CartItem(
                    selectedCartItem.quantity - 1,
                    selectedCartItem.itemPrice,
                    selectedCartItem.itemTitle,

                );
                updatedCartItems = { ...state.items, [action.item_id]: updatedCartItem };
            } else {
                updatedCartItems = { ...state.items };
                delete updatedCartItems[action.item_id];
            }
            return {
                ...state,
                items: updatedCartItems,

            };
        // case ADD_ORDER:
        //     return initialState;
        case DELETE_ITEM:
            if (!state.items[action.item_id]) {
                return state;
            }
            const updatedItems = { ...state.items };
            const itemTotal = state.items[action.item_id].sum;
            delete updatedItems[action.item_id];
            return {
                ...state,
                items: updatedItems,
            };
    }

    return state;
};

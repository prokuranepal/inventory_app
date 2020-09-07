import { ADD_ORDER, SET_ORDERS } from '../actions/orders';
import Order from '../../models/order';

const initialState = {
    orders: [],
    requestedOrders:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS:
            return {
                orders: action.orders
            };
        case ADD_ORDER:
            const newOrder = new Order(
                action.orderData.id,
                action.orderData.items,
                action.orderData.date
            );
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            };
    }

    return state;
};

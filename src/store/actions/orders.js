// import Order from '../../models/order';

export const ADD_ORDER = 'ADD_ORDER';
export const SET_ORDERS = 'SET_ORDERS';

// export const fetchOrders = () => {
// return async (dispatch, getState) => {
//     const userId = getState().auth.userId;
//     try {
//         const response = await fetch(
//             ip + `${userId}`
//         );

//         if (!response.ok) {
//             throw new Error('Something went wrong!');
//         }

//         const resData = await response.json();
//         const loadedOrders = [];

//         for (const key in resData) {
//             loadedOrders.push(
//                 new Order(
//                     key,
//                     resData[key].cartItems,
//                     resData[key].totalAmount,
//                     new Date(resData[key].date)
//                 )
//             );
//         }
//         dispatch({ type: SET_ORDERS, orders: loadedOrders });
//     } catch (err) {
//         throw err;
//     }
// };
//     return ({
//         type: SET_ORDERS,
//         orders: loadedOrders
//     });
// };

export const addOrder = (cartItems) => {
    // return async (dispatch, getState) => {
    //     const token = getState().auth.token;
    //     const userId = getState().auth.userId;
    //     const date = new Date();
    //     const response = await fetch(
    //         ip + '/orders',
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 cartItems,
    //                 totalAmount,
    //                 date: date.toISOString()
    //             })
    //         }
    //     );

    //     if (!response.ok) {
    //         throw new Error('Something went wrong!');
    //     }

    //     const resData = await response.json();

    //     dispatch({
    //         type: ADD_ORDER,
    //         orderData: {
    //             id: resData.name,
    //             items: cartItems,
    //             amount: totalAmount,
    //             date: date
    //         }
    //     });
    // };
   
    return async (dispatch, getState) => {
        let orderItemValue= cartItems.map((order)=>{
            return{
                medicine:order.itemId,
                quantity:order.quantity
            }

        })
        console.log("cartItems", orderItemValue)
        let data={
            order_id:new Date(),
            OrderItem:cartItems,
            orderDate:new Date(),
            Origin:"Nangi",
            created_user: getState().items.user_added,
            deliveryDate:new Date(2020,9,30),
            orderItem:orderItemValue,
            name:"Order"+ (new Date()).toString()+ getState().items.user_added
        }
        try {
            const ip = getState().ip.ip;
            const response = await fetch(ip + "/orders"
                , {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + getState().auth.token,

                    },
                    body: JSON.stringify(data)
                })

            // console.log("response from backend")
            // const response = await fetch("http://192.168.10.17:3000/medicines"
            //     , {
            //         method: 'GET',
            //     })
            let resdata = await response.json();
            console.log("response from backend order", JSON.stringify(resdata))
            const itemId = resdata._id;
            createdAt=resdata.createdAt;
            updatedAt=resdata.updatedAt;
            user_added= resdata.user_added            
            dispatch({
                        type: ADD_ORDER,
                        orderData: {
                            // id: i,
                            id: data.order_id,
                            items: cartItems,
                            // amount: totalAmount,
                            date: data.date_order
                        }
                    });
                }
        
        catch (err) {
            console.log(err);
        }
    }
};

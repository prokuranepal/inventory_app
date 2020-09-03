export const ADD_ITEMS = 'ADD_ITEMS';
export const UPDATE_ITEMS = 'UPDATE_ITEMS';
export const SET_ITEMS = 'SET_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';
// import { ip } from '../../server/iplocation'
import Item from '../../models/item'
import { ITEMS } from '../../data/dummy-data'

export const addItems = (name, company, quantity, description, price, type) => {
    const data = {
        "name": name,
        "quantity": quantity,
        "company": company,
        "createdAt": "2019/12/20",
        "updatedAt":"2019/12/20",
        "exp_date": "2019/12/16",
        "image": "https://cdn2.iconfinder.com/data/icons/medicine-84/1000/Medicine-color-04-512.png",
        "price": price,
        "description": description,
        "type": type,
        "healthFacilities": "5f2baf308010215de418daa9",
        "dosage": "100mg",
        "user_added": ""
    }
    const exp_date = data.exp_date;
    const createdAt = data.createdAt;
    const image= data.image;
    const healthFacilities=data.healthFacilities;
    const dosage = data.dosage;
    const user_added= data.user_added;
    const updatedAt = data.updatedAt;

    // return async (dispatch, getState) => {
    //     try {
    //         const ip = getState().ip.ip;
    //         const response = await fetch(ip + "/medicines"
    //             , {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': 'Bearer ' + getState().auth.token,

    //                 },
    //                 body: JSON.stringify(data)
    //             })

    //         // console.log("response from backend")
    //         // const response = await fetch("http://192.168.10.17:3000/medicines"
    //         //     , {
    //         //         method: 'GET',
    //         //     })
    //         let resdata = await response.json();
    //         console.log("response from backend", resdata)
    //         const itemId = resdata._id;
      
    //         dispatch({
    //             type: ADD_ITEMS,
    //             iid: itemId,
    //             itemData: {
    //                 name,
    //                 company,
    //                 quantity,
    //                 description,
    //                 price,
    //                 type,
    //                 exp_date,
    //                 image,
    //                 healthFacilities,
    //                 dosage,
    //                 user_added,
    //                 updatedAt,
    //                 createdAt
                    
    //             }
    //         });
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }

    // }

    return ({
        type: ADD_ITEMS,
        iid: new Date().toLocaleString(),
        itemData: {
            name,
            company,
            quantity,
            description,
            price,
            type,
            exp_date,
            image,
            healthFacilities,
            dosage,
            user_added,
            updatedAt,
            createdAt
        }
    });

}

export const updateItem = (id, name, company, quantity, description, price, image, type) => {
    console.log("id of data", id);
            const data2 = {
            "name": name,
            "quantity": quantity,
            "company": company,
            "createdAt": "2019/12/20",
            "updatedAt":"2019/12/20",
            "exp_date": "2019/12/16",
            "image": image,
            "price": price,
            "description": description,
            "type": type,
            "healthFacilities": "5f2baf308010215de418daa9",
            "dosage": "100mg",
            "user_added": "5ebd77a15af0612e10497f60"
        }
        const exp_date = data2.exp_date;
        const healthFacilities=data2.healthFacilities;
        const dosage = data2.dosage;
        const user_added= data2.user_added;
        const updatedAt = data2.updatedAt;
        const createdAt = data2.createdAt
    // return async (dispatch, getState) => {


    //     try {
    //         const ip = getState().ip.ip;
    //         const response = await fetch(`${ip}/medicines/${id}`
    //             , {
    //                 method: 'PUT',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': 'Bearer ' + getState().auth.token
    //                 },
    //                 body: JSON.stringify(data2)
    //             })
    //         console.log("axios to backend", response)
    //         dispatch({
    //             type: UPDATE_ITEMS,
    //             iid: id,
    //             itemData: {
    //                 name,
    //                 company,
    //                 quantity,
    //                 description,
    //                 image,
    //                 price,
    //                 type,
    //                 exp_date,
    //                 healthFacilities,
    //                 dosage,
    //                 user_added,
    //                 updatedAt,
    //                 createdAt
    //             }
    //         })
    //     }
    //     catch (err) {
    //         console.log("error at updateitem action",err)
    //     }
    // }

    return ({
        type: UPDATE_ITEMS,
        iid: id,
        itemData: {
            name,
            company,
            quantity,
            description,
            image,
            price,
            type,
            exp_date,
            healthFacilities,
            dosage,
            user_added,
            updatedAt,
            createdAt
        }
    })
}


export const setItems = () => {
    let data = []

    // return async (dispatch, getState) => {
    //     try {

    //         // console.log("response from backend")
    //         const ip = getState().ip.ip;
    //         console.log("token: in items action", getState().auth.token)

    //         const response = await fetch(ip + "/medicines"
    //             , {
    //                 method: 'GET',
    //                 headers: { 'Authorization': 'Bearer ' + getState().auth.token },

    //             })
    //         let resdata = await response.json();
    //         console.log("response from backend", resdata,"token: ", getState().auth.token)
    //         const loadedItems = [];
    //         for (const key in resdata) {
    //             loadedItems.push(new Item(
    //                 resdata[key]._id,
    //                 resdata[key].name,
    //                 resdata[key].price,
    //                 resdata[key].company,
    //                 resdata[key].image,
    //                 resdata[key].quantity,
    //                 resdata[key].description,
    //                 resdata[key].type,
    //                 resdata[key].updatedAt,
    //                 resdata[key].user_added,
    //                 resdata[key].createdAt,
    //                 resdata[key].dosage,
    //                 resdata[key].exp_date,
    //                 resdata[key].healthFacilities

    //             ))
    //         }
    //         dispatch({
    //             type: SET_ITEMS,
    //             items: loadedItems
    //         })
    //     }
    //     catch (err) {
    //         console.log("backend",cerr);
    //         console.log("token: ", getState().auth.token)

    //     }

    // }

    return ({
        type: SET_ITEMS,
        items: ITEMS
    })

}



export const deleteItem = itemId => {
    // return async (dispatch, getState) => {
    //     try {
    //         const ip = getState().ip.ip;
    //         const response = await fetch(`${ip}/medicines/${itemId}`
    //             ,
    //             { method: 'DELETE' });
    //         let resdata = await response.json();
    //         // console.log("response from backend", resdata)


    //         dispatch({ type: DELETE_ITEM, iid: itemId })
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }
    return ({ type: DELETE_ITEM, iid: itemId })

}
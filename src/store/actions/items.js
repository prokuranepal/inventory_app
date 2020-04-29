export const ADD_ITEMS = 'ADD_ITEMS';
export const UPDATE_ITEMS = 'UPDATE_ITEMS';
export const SET_ITEMS = 'SET_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';

import { ip } from '../../server/iplocation'
import Item from '../../models/item'


export const addItems = (title, company, quantity, description, price) => {
    const data = {
        "title": title,
        "quantity": quantity,
        "company": company,
        "man_date": "2019/12/20",
        "exp_date": "2019/12/16",
        "image": "https://cdn2.iconfinder.com/data/icons/medicine-84/1000/Medicine-color-04-512.png",
        "price": price,
        "description": description
    }

    // const data1 = {
    //     title: 'Sinex',
    //     quantity: 15,
    //     company: 'Nepal Gov',
    //     man_date: "2019/12/20",
    //     exp_date: "2019/12/16",
    //     image: 'https://cdn2.iconfinder.com/data/icons/medicine-84/1000/Medicine-color-04-512.png',
    //     price: 35,
    //     description: 'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
    // }
    return async dispatch => {
        try {
            const response = await fetch(ip + "/medicines"
                , {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })

            // console.log("response from backend")
            // const response = await fetch("http://192.168.10.17:3000/medicines"
            //     , {
            //         method: 'GET',
            //     })
            let resdata = await response.json();
            console.log("response from backend", resdata)
            const itemId = resdata._id;
            dispatch({
                type: ADD_ITEMS,
                iid: itemId,
                itemData: {
                    title,
                    company,
                    quantity,
                    description,
                    price
                }
            });
        }
        catch (err) {
            console.log(err);
        }

    }

}

export const updateItem = (id, title, company, quantity, description, price, image) => {
    console.log("id of data", id);
    return async dispatch => {
        const data2 = {
            "title": title,
            "quantity": quantity,
            "company": company,
            "man_date": "2019/12/20",
            "exp_date": "2019/12/16",
            "image": image,
            "price": price,
            "description": description
        }
        try {
            const response = await fetch(`${ip}/medicines/${id}`
                , {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data2)
                })
            dispatch({
                type: UPDATE_ITEMS,
                iid: id,
                itemData: {
                    title,
                    company,
                    quantity,
                    description,
                    image,
                    price
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}


export const setItems = () => {
    let data = []

    return async dispatch => {
        try {

            console.log("response from backend")
            const response = await fetch(ip + "/medicines"
                , {
                    method: 'GET',
                })
            let resdata = await response.json();
            console.log("response from backend", resdata)
            const loadedItems = [];
            for (const key in resdata) {
                loadedItems.push(new Item(
                    resdata[key]._id,
                    resdata[key].title,
                    resdata[key].price,
                    resdata[key].company,
                    resdata[key].image,
                    resdata[key].quantity,
                    resdata[key].description
                ))
            }
            dispatch({
                type: SET_ITEMS,
                items: loadedItems
            })
        }
        catch (err) {
            console.log(err);
        }

    }

}



export const deleteItem = itemId => {
    return async dispatch => {
        try {
            const response = await fetch(`${ip}/medicines/${id}`
                ,
                { method: 'DELETE' });
            let resdata = await response.json();
            console.log("response from backend", resdata)


            dispatch({ type: DELETE_ITEM, iid: itemId })
        }
        catch (err) {
            console.log(err)
        }
    }
}
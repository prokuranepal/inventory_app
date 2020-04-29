export const ADD_ITEMS = 'ADD_ITEMS';
export const UPDATE_ITEMS = 'UPDATE_ITEMS';
export const SET_ITEMS = 'SET_ITEMS';
import { ip } from '../../server/iplocation'


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
            // let resdata = await response.json();
            // console.log("response from backend", resdata)
            dispatch({
                type: ADD_ITEMS,
                productData: {
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
            dispatch({
                type: SET_ITEMS,
                items: resdata
            })
        }
        catch (err) {
            console.log(err);
        }

    }

}
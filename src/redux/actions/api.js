import { pizzaRef, orderRef } from '../../firebase';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_ORDERS = 'FETCH_ORDERS';

export const fetchData = () => async dispatch => {
    pizzaRef.on('value', snapshot => {
        dispatch({
            type: FETCH_DATA,
            payload: snapshot.val()
        });
    });
}

export const fetchOrders = () => async dispatch => {
    orderRef.on('value', snapshot => {
        dispatch({
            type: FETCH_ORDERS,
            payload: snapshot.val()
        });
    });
}

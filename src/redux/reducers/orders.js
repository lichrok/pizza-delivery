import { FETCH_ORDERS } from '../actions/api';

const initState = {
    orders: [],
    isFetching: false
}

const ordersReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        default:
            return state
    }
}

export default ordersReducer

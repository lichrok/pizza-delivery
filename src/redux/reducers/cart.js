import { CHANGE_QUANTITY, CLEAR_CART } from '../actions/cart';

const initState = {}

const cart = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_QUANTITY:
            if (action.amount < 1) {
                const newState = { ...state }
                delete newState[action.id]

                return newState
            } else {
                const newState = {
                    ...state
                }
                newState[action.id] = action.amount
                return newState
            }
        case CLEAR_CART:
            return state = action.payload
        default:
            return state
    }
}

export default cart

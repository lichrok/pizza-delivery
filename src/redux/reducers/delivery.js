import { CHECK_DELIVERY } from '../actions/delivery';


const initState = false;

const delivery = (state = initState, action) => {
    switch (action.type) {
        case CHECK_DELIVERY:
            return action.payload
        default:
            return state
    }
}

export default delivery

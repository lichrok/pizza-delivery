import { CHANGE_CURRENCY } from '../actions/currency';


const initialState = 'dollar'

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENCY:
            return action.payload
        default:
            return state
    }
}

export default currencyReducer

import { orderRef } from '../../firebase'

export const createOrder = order => async dispatch => {
    orderRef.push().set(order)
}

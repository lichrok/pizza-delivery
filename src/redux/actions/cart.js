export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';


export const changeQuantity = (id, amount) => {
    return {
        type: CHANGE_QUANTITY,
        id,
        amount
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,
        payload: {}
    }
}

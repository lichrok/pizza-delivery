export const CHECK_DELIVERY = 'CHECK_DELIVERY';


export const checkDelivery = (isDeliveryChecked) => {
    return {
        type: CHECK_DELIVERY,
        payload: isDeliveryChecked
    }
}

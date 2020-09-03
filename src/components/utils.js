import { DELIVERY_DOLLAR, DELIVERY_EURO } from './constants';


export const formatCurrency = currency => `${currency === 'dollar' ? '$' : '€'}`;

export const formatProductPrice = (product, currency) =>
    `${formatCurrency(currency)} ${currency === 'dollar' ? product.priceDollar : product.priceEuro}`;

export const formatDeliveryTip = currency =>
    `${currency === 'dollar' ? `$ ${DELIVERY_DOLLAR}` : `€ ${DELIVERY_EURO}`}`;

export const isCartEmpty = totalPrice => parseFloat(totalPrice) === 0.00;

import { DELIVERY_DOLLAR, DELIVERY_EURO } from '../../components/constants'
import { createSelector } from 'reselect'
import { formatProductPrice } from '../../components/utils'

export const getGoods = state => state.goods.items

export const getCart = state => state.cart

export const getCurrency = state => state.currency

export const getDelivery = state => state.delivery

export const getOrders = state => state.orders.orders

export const getGoodsInCart = createSelector(
    getGoods, getCart, getCurrency,
    (goods = [], cart = {}, currency = 'dollar') => {
        return Object.keys(cart).map(cartItemId => {
            const item = goods.find(goodsItem => goodsItem.id === Number(cartItemId))
            return item ? {
                ...item,
                amount: cart[cartItemId],
                price: formatProductPrice(item, currency)
            } : null
        }).filter(item => item)
    }
);

export const getGoodsWithAmount = createSelector(
    getGoods, getCart, getCurrency,
    (goods = [], cart = {}, currency = 'dollar') => goods.map(goodsItem => ({
        ...goodsItem,
        amount: cart[goodsItem.id] || 0,
        price: formatProductPrice(goodsItem, currency)
    }))
);

export const getGoodsInOrders = createSelector(
    getOrders, getCurrency,
    (goods = [], currency = 'dollar') => goods
);

export const calculateTotal = createSelector(
    getGoodsInCart,
    getCurrency,
    getDelivery,
    (goods = [], currency = 'dollar', delivery = false) => {
        const deliveryCost = delivery ? currency === 'dollar' ? DELIVERY_DOLLAR : DELIVERY_EURO : 0;
        let totalPrice = 0;

        goods.map(item => {
            switch (currency) {
                case 'euro':
                    return totalPrice += item.priceEuro * item.amount
                case 'dollar':
                default:
                    return totalPrice += item.priceDollar * item.amount
            }
        });
        totalPrice += deliveryCost;

        return totalPrice.toFixed(2);
    }
);

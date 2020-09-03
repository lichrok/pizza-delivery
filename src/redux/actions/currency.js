export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';

export const changeCurrency = (currency = 'dollar') => ({
  type: CHANGE_CURRENCY,
  payload: currency
})

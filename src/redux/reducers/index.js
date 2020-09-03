import { combineReducers } from 'redux';
import cart from './cart';
import delivery from './delivery';
import goodsReducer from './goods';
import currencyReducer from './currency';
import ordersReducer from './orders';


export const rootReducer = combineReducers({
    goods: goodsReducer,
    currency: currencyReducer,
    orders: ordersReducer,
    cart,
    delivery
});

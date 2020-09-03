import React, { useState } from 'react';
import { connect } from 'react-redux';
import { calculateTotal } from '../../redux/reselect';
import { formatCurrency, formatDeliveryTip, isCartEmpty } from '../utils';
import { checkDelivery } from '../../redux/actions/delivery';
import OrderForm from './OrderForm';


const Recipe = ({ currency, totalPrice, delivery, onChangeTotal }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const totalString = `${formatCurrency(currency)} ${totalPrice}`;

    return (
        <div className="mb-4">
            <div className="collection">
                <div className="form-group form-check">
                    <input
                        id="deliveryCheck"
                        type="checkbox"
                        className="form-check-input"
                        checked={delivery}
                        disabled={isCartEmpty(totalPrice)}
                        onChange={() => onChangeTotal(!delivery)}
                    />
                    <label htmlFor="deliveryCheck">
                        Delivery (+ {formatDeliveryTip(currency)})
                    </label>
                </div>
                <p><b>Total: {totalString}</b></p>
            </div>
            <div className="checkout">
                <button
                    className="btn btn-primary"
                    disabled={isCartEmpty(totalPrice)}
                    onClick={handleShow}
                >
                    Checkout
                </button>
            </div>
            <OrderForm
                total={totalString}
                delivery={delivery}
                show={show}
                handleClose={handleClose}
            />
        </div>
    );
};

const mapStateToProps = (store) => ({
    currency: store.currency,
    totalPrice: calculateTotal(store),
    delivery: store.delivery
});

const mapDispatchToProps = (dispatch) => ({
    onChangeTotal: (isChecked) => {
        dispatch(checkDelivery(isChecked))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)

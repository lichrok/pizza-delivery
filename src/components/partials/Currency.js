import React from 'react'
import { connect } from 'react-redux'

import {changeCurrency} from '../../redux/actions/currency';

const Currency = ({ currency, changeCurrency }) => {
    const handleChange = e => {
        const currency = e.currentTarget.value
        changeCurrency(currency);
    }

    return (
        <div className="currency-wrap">
            <div className="currency">
                <input
                    id="currencyDollar"
                    type="radio"
                    name="currency"
                    value="dollar"
                    checked={currency === 'dollar'}
                    onChange={handleChange}
                />
                <label htmlFor="currencyDollar">$</label>
            </div>
            <div className="currency">
                <input
                    id="currencyEuro"
                    type="radio"
                    name="currency"
                    value="euro"
                    checked={currency === 'euro'}
                    onChange={handleChange}
                />
                <label htmlFor="currencyEuro">€</label>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => ({
    currency: store.currency
});

const mapDispatchToProps = (dispatch) => ({
    changeCurrency: (currency) => {
        dispatch(changeCurrency(currency))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import Recipe from '../partials/Recipe';
import Chevron from '../../assets/svg/chevron-up.svg';
import Plus from "../../assets/svg/plus.svg";
import { changeQuantity } from '../../redux/actions/cart';
import { getGoodsInCart } from '../../redux/reselect';


const imageContext = require.context('../../assets/images', true);

class Cart extends Component {
    handleRemove = (id) => {
        this.props.onChangeQuantity(id, 0);
    }

    handleAddQuantity = (item) => {
        this.props.onChangeQuantity(item.id, item.amount + 1);
    }

    handleSubtractQuantity = (item) => {
        this.props.onChangeQuantity(item.id, item.amount - 1);
    }

    render() {
        const { items } = this.props;
        let addedItems = items.length ?
            (
                items.map(item => {
                    return (
                        <li className="list-group-item" key={item.id}>
                            <div className="list-group-img__container mr-4">
                                <img
                                    className="list-group-img"
                                    src={imageContext(`./${item.img}`)}
                                    alt={`${item.title} pizza`}
                                />
                            </div>
                            <div className="list-group-info">
                                <h5 className="list-group-title">{item.title}</h5>
                                <p>
                                    {item.price}
                                </p>
                                <p>
                                    <b>Quantity: {item.amount}</b>
                                </p>
                                <div className="btn-group">
                                    <Link
                                        className="btn btn-warning"
                                        onClick={() => {
                                            this.handleAddQuantity(item)
                                        }}
                                        to="/cart"
                                    >
                                        <ReactSVG
                                            src={Chevron}
                                            beforeInjection={svg => svg.classList.add('chevron-icon')}
                                        />
                                    </Link>
                                    <Link
                                        className="btn btn-warning"
                                        onClick={() => {
                                            this.handleSubtractQuantity(item)
                                        }}
                                        to="/cart"
                                    >
                                        <ReactSVG
                                            src={Chevron}
                                            beforeInjection={svg => svg.classList.add('chevron-icon', 'is-reversed')}
                                        />
                                    </Link>
                                </div>
                                <button
                                    className="btn btn-danger ml-2"
                                    onClick={() => {
                                        this.handleRemove(item.id)
                                    }}
                                >
                                    <ReactSVG
                                        src={Plus}
                                        beforeInjection={svg => svg.classList.add('card-remove-icon')}
                                    />
                                </button>
                            </div>

                        </li>

                    )
                })
            ) :

            (
                <p>Nothing.</p>
            )

        return (
            <div className="content">
                <div className="container">
                    <div className="cart mb-4">
                        <h3>You have ordered:</h3>
                        <ul className="list-group list-group-flush">
                            {addedItems}
                        </ul>
                    </div>
                    <Recipe/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (store) => ({
    items: getGoodsInCart(store)
});

const mapDispatchToProps = (dispatch) => ({
    onChangeQuantity: (id, amount) => {
        dispatch(changeQuantity(id, amount))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

Cart.propTypes = {
    items: PropTypes.array.isRequired
}

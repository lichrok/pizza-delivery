import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import Currency from './Currency';
import Logo from '../../assets/svg/logo.svg';
import Cart from '../../assets/svg/cart.svg';
import {getGoodsInCart} from '../../redux/reselect';

const Navbar = ({ items }) => (
    <header
        className="navbar navbar-expand flex-column flex-md-row fixed-top"
    >
        <div className="container">
            <Link to="/" className="navbar-brand mr-0 mr-md-2">
                <ReactSVG src={Logo} beforeInjection={svg => svg.classList.add('navbar-brand')}/>
            </Link>

            <ul className="navbar-nav ml-md-auto">
                <li>
                    <Link className="navbar-nav__link" to="/orders">
                        Orders
                    </Link>
                </li>
                <li>
                    <Currency/>
                </li>
                <li>
                    <Link className="navbar-nav__link navbar-nav__cart" to="/cart">
                        <ReactSVG src={Cart} beforeInjection={svg => svg.classList.add('cart-icon')}/>
                        <span className="navbar-nav__items">
                            {items.length}
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
);

const mapStateToProps = (store) => ({
    items: getGoodsInCart(store),
});

export default connect(mapStateToProps)(Navbar);

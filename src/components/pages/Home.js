import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import { fetchData } from '../../redux/actions/api';
import Plus from '../../assets/svg/plus.svg';
import { changeQuantity } from '../../redux/actions/cart';
import { getGoodsWithAmount } from '../../redux/reselect';

const imageContext = require.context('../../assets/images', true);

class Home extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    handleClick = item => {
        this.props.onChangeQuantity(item.id, item.amount + 1);
    }

    renderItemList = goods => {
        return goods.map(item => {
            return (
                <div className="col-sm-4 mb-4" key={item.id}>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-image">
                                <img
                                    className="card-img"
                                    src={imageContext(`./${item.img}`)}
                                    alt={`${item.title} pizza`}
                                />
                                <span
                                    to="/"
                                    className="card-add-btn"
                                    onClick={() => {
                                        this.handleClick(item)
                                    }}
                                >
                                    <ReactSVG
                                        src={Plus}
                                        beforeInjection={svg => svg.classList.add('card-add-icon')}
                                    />
                                </span>
                            </div>

                            <div className="card-content">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.desc}</p>
                                <p className="card-price">{item.price}</p>
                            </div>
                        </div>
                    </div>
                </div>

            )
        });
    }

    render() {
        const { goods } = this.props;

        return (
            <section className="content">
                <div className="container">
                    <h3 className="text-center">Menu</h3>
                    <div className="row">
                        {goods.length ? this.renderItemList(goods) : <p>Loading...</p>}
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (store) => ({
    goods: getGoodsWithAmount(store)
});

const mapDispatchToProps = (dispatch) => ({
    onChangeQuantity: (id, amount) => {
        dispatch(changeQuantity(id, amount))
    },
    fetchData: () => {
        dispatch(fetchData())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)

Home.propTypes = {
    goods: PropTypes.array.isRequired
}

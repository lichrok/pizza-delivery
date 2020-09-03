import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { forOwn } from 'lodash';
import { getGoodsInOrders } from "../../redux/reselect";
import { fetchOrders } from "../../redux/actions/api";


class Orders extends PureComponent {
    componentDidMount() {
        this.props.onFetchOrders()
    }

    renderGoods = (goods) => {
        return goods.map(item => {
            return <div key={`order-item-${item.id}`}>
                <p>
                    <b>Title:</b> {item.title} <br/>
                    <b>Quantity:</b> {item.amount} <br/>
                    <b>Price:</b> {item.price}
                </p>
            </div>
        });
    }

    renderOrders = (items) => {
        return items.map((order, index) => {
            return <li className="list-group-item" key={`order-${index}`}>
                <div className="list-group-info">
                    <p><b>Name:</b> {order.name}</p>
                    {this.renderGoods(order.items)}
                    <p><b>Total price:</b> {order.total} {order.delivery ? 'with delivery' : null}</p>
                </div>
            </li>
        });
    }

    render() {
        const { items } = this.props;
        let itemsArray = [];

        forOwn(items, (v) => {
            itemsArray.push(v);
        });

        return (
            <div className="content">
                <div className="container">
                    <ul className="list-group list-group-flush">
                        {itemsArray.length ? this.renderOrders(itemsArray) : 'You have no orders yet'}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    items: getGoodsInOrders(store)
});

const mapDispatchToProps = (dispatch) => ({
    onFetchOrders: () => {
        dispatch(fetchOrders())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders)

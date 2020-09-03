import React, { useRef, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getGoodsInCart } from '../../redux/reselect';
import { clearCart } from '../../redux/actions/cart';
import { createOrder } from '../../redux/actions/orders';


const OrderForm = ({ show, handleClose, items, total, delivery, onSubmit }) => {
    const [validated, setValidated] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const getNameRef = useRef();
    const getEmailRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
        setIsSuccess(true);

        const formedOrder = {
            name: getNameRef.current.value,
            email: getEmailRef.current.value,
            total,
            items,
            delivery
        }

        onSubmit(formedOrder);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            {isSuccess ?
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header> :
                <Form validated={validated} onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please, fill form fields</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                ref={getEmailRef}
                                required
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                ref={getNameRef}
                                required
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" onClick={handleClose}>
                            Close
                        </button>
                        <button className="btn btn-success" type="submit">
                            Buy
                        </button>
                    </Modal.Footer>
                </Form>
            }
        </Modal>
    )
}
const mapStateToProps = (store) => ({
    items: getGoodsInCart(store)
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (order) => {
        dispatch(createOrder(order))
        dispatch(clearCart())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)

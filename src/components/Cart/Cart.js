import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(props.children)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity
    }
    const tax = (total * 0.1).toFixed(2);
    const grandToral = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : $ {total}</p>
            <p>Total Shipping Cost : $ {shipping}</p>
            <p>Tax : $ {tax}</p>
            <h5>Grand Total : $ {grandToral.toFixed(2)}</h5>
            {props.children}
        </div>
    );
};

export default Cart;
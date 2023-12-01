import React from 'react';
import './BuyCart.css'
const BuyCart = ({ cart }) => {
    let price = 0;
    let shiping = 0;
    let quantity = 0;
    for (const Tshart of cart) {
        quantity =quantity +Tshart.quantity
        price = price + Tshart.price *Tshart.quantity
       shiping= shiping + Tshart.shiping 
    } 
    const tax = price * 0.1
    const Total = price + shiping + tax;
    return (
        <div className='buy-cart'>
            <h1>Total item :{quantity}</h1>
            <p>price : {price}</p>
            <p>shiping {shiping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <p>Total price : {Total}</p>
        </div>
    );
};

export default BuyCart;
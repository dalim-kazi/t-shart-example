import React from 'react';
import './Cart.css'
const Cart = ({ product,handlerCart }) => {
    const {name,picture,price,shiping}=product
    return (
        <div className='shart-details-container'>
              <img src={picture} alt="" />
            <div className='tshart-info'>
                <p style={{fontSize:'20px'}}>{name}</p>
                <p>Price : {price}</p>
                <p>shiping : {shiping}</p>
            </div>
            <div>
                <button onClick={()=>handlerCart(product)} className='btn'>
                    <p>Add to Cart</p>
                 </button>
            </div>
        </div>
    );
};

export default Cart;
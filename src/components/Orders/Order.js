import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import BuyCart from '../buy-Cart/BuyCart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeTodb } from '../Utility/Fakebd';

const Order = () => {
    const { products, saveCart } = useLoaderData()
    const [cart, setCart] = useState(saveCart)
    const handlerReviewItem = (id) => {
        const remaingItem = cart.filter(product => product._id !== id)
        setCart(remaingItem)
        removeTodb(id)
    }
    return (
        <div className='container'>
        <div className='review-item'>
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handlerReviewItem={handlerReviewItem}
                    ></ReviewItem>)
                }
                {
                    cart.length===0 && <h2 className='text-2xl text-center m-10 text-green-800'>No review item pleace add to more item <Link className='underline md:underline-offset-4 text-4xl text-red-600' to="/">shop</Link></h2>
                }
        </div>
        <div className='buy-cart-container'>
            <h2 style={{textAlign:'center'}}>Order summary</h2>
            <BuyCart
            cart={cart}
            ></BuyCart>
        </div>
    </div>
    );
};

export default Order;
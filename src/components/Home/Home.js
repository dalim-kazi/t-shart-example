import React, { useEffect, useState } from 'react';
import './Home.css'
import {useLoaderData} from "react-router-dom";
import Cart from '../Cart/Cart';
import BuyCart from '../buy-Cart/BuyCart';
import { AddToLocalStorage, getStorageCart } from '../Utility/Fakebd';
const Home = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storageBD = getStorageCart()
        let saveCart =[]
        for (const id in storageBD) {
            const addedCart = products.find(product => product._id === id)
            if (addedCart) {
                const quantity = storageBD[id]
                addedCart.quantity = quantity
                saveCart.push(addedCart)
             }
        }
        setCart(saveCart)
    },[products])
    const handlerCart = (selectProduct) => {
        let newCart =[]
        const exsits = cart.find(product => product._id === selectProduct._id)
        if (!exsits) {
            selectProduct.quantity = 1;
            newCart = [...cart, selectProduct]
         }
        else {
            const rest = cart.filter(product => product._id !== selectProduct._id)
            exsits.quantity = exsits.quantity + 1
            newCart = [...rest,exsits]
         }
        setCart(newCart)
        AddToLocalStorage(selectProduct._id)
    }
    return (
        <div className='container'>
            <div className='t-shart-container'>
                {
                    products.map(product => <Cart
                        key={product._id}
                        product={product}
                        handlerCart={handlerCart}
                    ></Cart>)
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

export default Home;
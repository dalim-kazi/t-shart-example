import React from 'react';
import {TrashIcon } from '@heroicons/react/24/solid'
import './ReviewItem.css'
const ReviewItem = ({ product,handlerReviewItem }) => {
    const {_id, name, picture,shiping,price}=product
    return (
        <div className='review-container'>
            <img src={picture} alt="" />
            <div className='review-details'>
                <div className='review-info'>
                <p>{name}</p>
                <p>Shiping : {shiping}</p>
                <p>Price : {price}</p>
               </div>
                <div>
                    <button onClick={()=>handlerReviewItem(_id)} className='btn-review'>
                    <TrashIcon className="h-6 w-6 text-orange-500" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
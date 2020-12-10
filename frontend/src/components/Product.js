import React from 'react';
import {Link } from "react-router-dom";
import Rating from './Rating'
export default function Product (props){
    const { product } = props
    return (
        <ul className="products">
        <li key={product._id}>
        <div className='product'>
        <Link to={`/product/`+product._id}>
        <img className="products-image" src={product.image} alt='product'/>
        </Link>
        
            <div className='product-name'>
                <Link to={`/product/`+ product._id}>{product.name}</Link>
            </div>
            <div className='product-brand'>{product.brand}</div>
            <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
            <div className='product-price'>${product.price}</div>
            
        </div>
    </li>
    </ul>
    )
}
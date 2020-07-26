import React, { useEffect } from 'react';
import { addToCart } from '../action/cartAction';
import { useDispatch } from 'react-redux';

function CartScreen(props) {
    const productId = props.match.params.id;
    const qty =  props.location.search ? Number(props.location.search.split('=')[1]):1;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(addToCart(productId,qty))
    })
    return<div>  hello shivam </div>
}

export default CartScreen;
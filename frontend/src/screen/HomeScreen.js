import React, {useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../action/productAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
function HomeScreen () {
    const productList = useSelector(state => state.productList);
    const {products,loading,error } = productList;
    const dispatch = useDispatch()
    useEffect (()=>{
        dispatch(listProducts())
        return() =>{
            //
        };

    }, [])
        return( loading ? <LoadingBox></LoadingBox>:
        error?   <MessageBox variant="danger">{error}</MessageBox>:
        <div className="row center">
             {products.map((product) => (
                <Product key={product._id} product={product}></Product>
             )
             )
             }
        </div>
        )

}


export default HomeScreen;
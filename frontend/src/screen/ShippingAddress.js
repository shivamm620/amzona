import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../action/cartAction';
import CheckoutSteps from '../components/Checkoutstep';

export default function ShippingAddress (props){
  const userSignin = useSelector((state) => state.userSignin)
  const {userInfo} = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart
  if(!userInfo){
    props.history.push('/signin')
  }
  const [fullname, setFullName] = useState(shippingAddress.fullname);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalcode, setPostalCode] = useState(shippingAddress.postalcode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({fullname,address,city,postalcode,country})
    );
    props.history.push('/payment')
  }
    return(
      <div> 
      <CheckoutSteps step1 step2 ></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
      <ul className="form-container">
      <li>
        <h1>
         Shipping Address
        </h1>
      </li>
     {/*  FullName */}
      <li>
        <label htmlFor='fullname'>
        Full Name
        </label>
        <input type='text' id='fullname'placeholder='Full Name' value={fullname} onChange={(e)=> setFullName(e.target.value)} required ></input>
      </li>
      {  /* Address */ }
      <li>
        <label htmlFor='address'>
        Address
        </label>
        <input type='text' id='address' placeholder='Address' value={address} onChange={(e)=> setAddress(e.target.value)} required ></input>
      </li>
      {/* City */}
      <li>
        <label htmlFor='city'>
        City
        </label>
        <input type='text' id='city' value={city} placeholder='City' onChange={(e)=> setCity(e.target.value)} required ></input>
      </li>
    {/*   postalcode */}
    <li>
        <label htmlFor='postalcode'>
        Postal Code
        </label>
        <input type='text' id='postalcode' placeholder='Postal Code' value={postalcode} onChange={(e)=> setPostalCode(e.target.value)} required ></input>
      </li>
     {/*  country */}
     <li>
        <label htmlFor='country'>
        Country
        </label>
        <input type='text' id='country' placeholder=' Country' value={country} onChange={(e)=> setCountry(e.target.value)} required></input>
      </li>
      <li>
        <button className='button primary' type='submit'>Continue</button>
      </li>
      </ul>
      </form>
    </div>
    
    )
}


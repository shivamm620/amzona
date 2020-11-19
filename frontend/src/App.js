import React from 'react';
import './App.css';

import { BrowserRouter, Route,Link } from "react-router-dom";
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen';
import SigninScreen from './screen/SigninScreen';
import CreateProduct from './screen/ProductsScreen';
import { useSelector ,useDispatch} from 'react-redux';
import RegisterScreen from './screen/RegisterScreen';
import { signout } from './action/userActions';
import ShippingAddress from './screen/ShippingAddress';
function App() {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const openMenu =()=>{
        document.querySelector('.sidebar').classList.add('open');
    }
    const closeMenu =() =>{
        document.querySelector('.sidebar').classList.remove('open');
    }
    const signoutHandler = () => {
        dispatch(signout());
      };
  return (
      <BrowserRouter>
    <div className='gird-container'>
      <header className='header'>
      <div className='brand'>
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to='/'>Amazona</Link>
            </div>
            <div className='header-links'>
                <Link to="/cart">Cart
                {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
                </Link>
                {
              userInfo ?
              <div className='dropdown'>
               <Link to="/profile">{userInfo.name}  <i className="fa fa-caret-down"></i>{' '} </Link> 
               <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
               </div>
               :
                <Link to="/signin">Sign In</Link>
            }
            </div>
            </header>
            <aside className='sidebar'>
            <h3>Shopping Categories</h3>
            <button className='sidebar-close-button' onClick={closeMenu}>
                X
            </button>
            <ul>
                <li>
                    <a href='index.html'>Pant </a>
                </li>
                <li>
                    <a href='index.html'>Shirt </a>
                </li>
            </ul>
        </aside>           
      <main className='main'>
                   <div className='content'>
                   <Route path='/product/:name'  component={ProductScreen} />
                   <Route path='/product/create' component={CreateProduct}/>
                   <Route path="/shipping" component={ShippingAddress}></Route>
                   <Route path="/signin" component={SigninScreen} />
                   <Route path="/register" component={RegisterScreen} />
                   <Route path="/cart/:id?" component={CartScreen} />
                   <Route path='/' exact={true} component={HomeScreen} />
                   </div>
    </main>
    <footer className='footer'>
            All rigth reserved
        </footer>
</div>
</BrowserRouter>
  );
}

export default App;

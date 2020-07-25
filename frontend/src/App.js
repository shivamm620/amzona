import React from 'react';
import './App.css';

import { BrowserRouter, Route,Link } from "react-router-dom";
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen';
function App() {
    const openMenu =()=>{
        document.querySelector('.sidebar').classList.add('open');
    }
    const closeMenu =() =>{
        document.querySelector('.sidebar').classList.remove('open');
    }
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
                <a href='cart.html'>Cart</a>
                <a href='singnin.html'>Sing In</a>
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
                   <Route path='/product/:id'  component={ProductScreen} />
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

import antiox from '../images/antiox.png';
import {Link } from 'react-router-dom';
import Cart from './cart';

function Navbar() {
  return (
    <>
    <header className="header">
      <div className="logo">
        <img src={antiox} alt="Antixor Logo"/>
      </div>
       <div className="search-box">
        <input type="text" placeholder="Search for products, brands and more..."/>
        <button>🔍</button>
    </div>
    <div className="icons">
        <Link className='icons'>♙</Link>
        <Link className='icons'>♡</Link>
        <Link className='icons' to='/cart'>🛒</Link>
    </div>
      </header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/women">Women</Link>
      <Link to="/men">Men</Link>
      <Link to="/kids">Kids</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
    </nav>

    </>
  );
   
}

export default Navbar;
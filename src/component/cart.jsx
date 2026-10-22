
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import Payment from './Payment';


function Cart() {
    
  const location = useLocation();

  const [cartItems, setCartItems] = useState(
    location.state?.cartItems || []
  );
 
   const total = cartItems.reduce((sum, item) => {
  const price = Number(
    String(item.price).replace(/[₦,]/g, '')
  );

  return sum + price;
}, 0);
console.log(cartItems);
console.log(cartItems.map(item => item.price));

 const handleRemoveFromCart = (item) => {
   setCartItems((prev) => prev.filter((cartItems) => cartItems.id !== item.id));
  };
 
  return (
    <main>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Link to="/shop">Continue Shopping</Link>
        </>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={`${item.id}-${index}`}>
              <img src={item.image} alt={item.title} width="120px" />
              <h3>{item.title}</h3>
              <p>
                ₦{item.price}
              </p>

                <button
                type="button"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove 🗑️
              </button>
            </div>
          ))}

          <h2>
            Total: {new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
                }).format(total)}
          </h2>

          <Link to="/shop">Continue Shopping</Link><br />

          
            <Payment total={total} />
            
        </>
      )}
    </main>
  );
}

export default Cart;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import glance from '../images/glance.jpg';
import mode from '../images/mode.jpg';
import child from '../images/child.jpg';
import carry from '../images/carry.jpg';

function Shop() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
 

  const categories = [
    {
      id: 1,
      image: glance,
      title: 'Men',
      price: 50000,
      path: '/cart',
    },
    {
      id: 2,
      image: mode,
      title: 'Women',
      price: 30000,
      path: '/cart',
    },
    {
      id: 3,
      image: child,
      title: 'Children',
      price: 30000,
      path: '/cart',
    },
    {
      id: 4,
      image: carry,
      title: 'Accessories',
      price: 30000,
      path: '/cart',
    },
  ];

   const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
   };
    const handleProceedToCart = () => {
     navigate('/cart', {
    state: { cartItems: cart },
  });
};

 
  return (
    <main>
      <div className="shop-container">
        <h1>Shop by Category</h1>

        <button onClick={() => handleProceedToCart}>
          View Cart ({cart.length})
        </button>
        <button className="category-button">
          View all categories
        </button>
      </div>

      <p>Welcome to the shop page!</p>

      <div className="shop-item">
        {categories.map((item) => (
          <div className="shop-item1" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="shop-item-details">
              <h3>{item.title}</h3>
              <p>Category: {item.title}</p>
               <p>
                Price: ₦{item.price}
              </p>
              <p>Location: Abuja</p>

                <button
                  type="button"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to cart 🛒
                </button>
              
            </div>
          </div>
        ))}
      </div>

      <p>
        Cart items: <strong>{cart.length}</strong>
      </p>
       <button type="button" onClick={handleProceedToCart}>
        Proceed to Cart
      </button>
    </main>
  );
}

export default Shop;

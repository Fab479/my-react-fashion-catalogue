import glance from '../images/glance.jpg'; 
import mode from '../images/mode.jpg';
import child from '../images/child.jpg';
import carry from '../images/carry.jpg'; 
import { Link } from 'react-router-dom';

function Shop() {
  return (
    <main>    
    <div className="shop-container">
      <h1> Shop by Category</h1>
      <button className="category-button">View all categories</button>
     
    </div>
     <p>Welcome to the shop page!</p>
     
      <div className="shop-item"> 
        {/* Item 1 */} <
          div className="shop-item1"> 
          <img src={glance} alt="Item 1" /> 
        <div className="shop-item-details">
           <h3>Item 1</h3> 
        <p>Men</p> 
        <p>Price: ₦50,000</p> 
        <p>Location: Abuja</p> 
        <Link to="/men">➡️</Link>
        </div> 
        </div> 
        {/* Item 2 */} 
        <div className="shop-item1"> 
          <img src={mode} alt="Item 2" /> 
          <div className="shop-item-details"> 
            <h3>Item 2</h3> 
            <p>Women</p> 
            <p>Price: ₦30,000</p> 
            <p>Location: Abuja</p> 
            <Link to="/women">➡️</Link>
            </div> 
            </div> 
            
            {/* Item 3 */}
            <div className='Shop-item2'>
              <img src={child} alt='Item 3' />
              <div className='shop-item-details'>
              <h3>Item 3</h3>
              <p>Children</p>
              <p>Price: ₦30,000 </p>
              <p>Location: Abuja</p>
              <Link to="/kids">➡️</Link>
            </div>
            </div>
            {/* Item 4 */}
            <div className='Shop-item2'>
              <img src={carry} alt='Item 3'/>
              <div className='shop-item-details'>
                <h3>Item 4</h3>
                <p>Accessories</p>
                <p>Price: ₦30,000</p>
                <p>Location: Abuja</p>
                <Link to="/accessories">➡️</Link>
              </div>
            </div>
            </div>
    
    </main>
  );
}

export default Shop;
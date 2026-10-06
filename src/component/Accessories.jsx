 import casual from '../images/casual.jpg';
 
 function Accessories() {
  
  return (
    <main>
  <h1>Accessories works!</h1>
   <div className="women1">
      <div className="bill">
         <img src={casual} alt='casual' />
        <div className='shop-item-detail'>
        <h2>Style for Every <br />Generation</h2>
        <p>From everyday basics to standout pieces,
        we have something for everyone</p>
        </div>
      </div>
      <div className='accessories'>
       
      <h3>Up to</h3>
      <h1>50%  OFF</h1>
      <p>On Selected Items</p>
      </div>
    </div>
</main>
  );
}

export default Accessories
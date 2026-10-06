import face from '../images/face.jpg';

function Men() {
  
  return (
    <main>
    <div className="men">
      <h1>Men's Fashion</h1>
      <p>Discover our latest collection of men's clothing and accessories.</p>
    </div>
     <div className="women1">
          <div className="bill">
            <img src={face} alt='men' />
            <div className='shop-item-detail'>
            <h2>Style for Every <br />Generation</h2>
            <p>From everyday basics to standout pieces,
            we have something for everyone</p>
            </div>
          </div>
          {/*<div className='man'>
          <img src={match} alt='match' /> 
          <h3>Up to</h3>
          <h1>50%  OFF</h1>
          <p>On Selected Items</p>
          </div> */}
        </div>
    </main>
  );
}

export default Men;
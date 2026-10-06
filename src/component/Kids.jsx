import boy from '../images/boy.jpg';

function Kids() {
  return (
    <main>
    <div>
      <h1>Kids</h1>
      <p>Discover our latest collection for kids.</p>
    </div>
     <div className="women1">
      <div className="bill">
        <img src={boy} alt='women' />
        <div className='shop-item-detail'>
        <h2>Style for Every <br />Generation</h2>
        <p>From everyday basics to standout pieces,
        we have something for everyone</p>
        </div>
      </div>
      <div className='kids'>
      {/*<img src={match} alt='match' /> */}
      <h3>Up to</h3>
      <h1>50%  OFF</h1>
      <p>On Selected Items</p>
      </div>
    </div>
    </main>
  );
}

export default Kids;
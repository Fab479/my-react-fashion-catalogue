import women from '../images/women.jpg';
import match from '../images/match.jpg';

function Women() {
  return (
    <main>    
      <div className="women">
      <h1>Women's Fashion</h1>
      <p>Discover our latest collection of women's clothing and accessories.</p>
    </div>
    <div className="women1">
      <div className="bill">
        <img src={women} alt='women' />
        <div className='shop-item-detail'>
        <h2>Style for Every <br />Generation</h2>
        <p>From everyday basics to standout pieces,
        we have something for everyone</p>
        </div>
      </div>
      {/*<div className='woman'>
      <img src={match} alt='match' /> 
      <h3>Up to</h3>
      <h1>50%  OFF</h1>
      <p>On Selected Items</p>
      </div> */}
    </div>
    </main>
  );
}

export default Women;
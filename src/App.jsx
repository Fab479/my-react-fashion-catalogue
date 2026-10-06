
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
import Home from './component/Home.jsx';
import Shop from './component/Shop.jsx';
import Women from './component/Women.jsx';
import Men from './component/Men.jsx';
import Kids from './component/Kids.jsx';
import Accessories from './component/Accessories.jsx';
import About from './component/About.jsx';
import Contact from './component/Contact.jsx';

 
function App() {
  return (
 <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
 </>

  );
}
export default App

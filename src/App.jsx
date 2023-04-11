import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Delivery from './pages/Delivery';
import Wholesale from './pages/Wholesale';
import Product from './pages/Product';

export default function App() {

  return (
    <div className="App">
       <Layout>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/delivery" element={<Delivery/>} />
          <Route path="/wholesale" element={<Wholesale/>}/>
          <Route path="/product" element={<Product/>}/>
    
        </Routes>
       </Layout>
      

</div>
  );
}



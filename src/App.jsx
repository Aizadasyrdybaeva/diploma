import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';


export default function App() {

  return (
    <div className="App">
       <Layout>
       <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/contact" element={<h2>Contact</h2>} />
          <Route path="/delivery" element={<h2>Delivery</h2>} />
    
        </Routes>
       </Layout>
      

</div>
  );
}



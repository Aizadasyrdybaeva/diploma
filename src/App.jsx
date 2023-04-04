
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>This is my diploma</p>

    {/* создаем навигацию */}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        
      </nav>

     {/* //создаем путь */}
      <main>
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/contact" element={<h2>Contact</h2>} />
    
        </Routes>
      </main>


    </div>
  );
}

export default App

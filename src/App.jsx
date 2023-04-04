
import { NavLink } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>This is my diploma</p>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
      </nav>


    </div>
  );
}

export default App

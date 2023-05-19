import "./Logo.css";
import logo from "../../assets/u3.png";
import { NavLink } from "react-router-dom";

   
export default function Logo() {
  return (
    <div className="Logo">  
      <NavLink to="/">
        <img src={logo} alt="logo"></img> 
      </NavLink>
      
      <p>Big gift in a small box!</p>

      </div>
   
  );
}
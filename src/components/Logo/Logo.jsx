import "./Logo.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

   
export default function Logo() {
  return (
    <div className="Logo">  
      <NavLink to="/">
        <img src="../../img/F.png"></img> <span className="Logo1">For you</span>
      </NavLink>
      
    </div>
   
  );
}
